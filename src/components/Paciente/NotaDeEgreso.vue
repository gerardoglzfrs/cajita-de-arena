<template>
    
    <b-container>
        <b-row class="justify-content-between">
            <b-col cols="12" sm="12" md="8" lg="8">
                <h2 class="txt_red text-uppercase pl-3 title_forms">Nota de egreso</h2>      
            </b-col>
            <b-col class="d-none d-lg-block d-md-block" cols="12" sm="12" md="4" lg="4">
                <div class="float-right my-auto">
                    <Foto/>
                </div>
            </b-col>
        </b-row>

        <b-container class="py-4">
            <b-form @submit.stop.prevent>
            <b-row>
                <b-col cols="12">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                                <b-tr>
                                    <b-th class="th_style">Nombre</b-th>
                                    <b-td colspan="3" class="border_table">
                                        <b-form-input v-on:keypress="soloLetras($event)" list="input-list" v-model="datos.nombre" :state="validation" class="border-0" size="sm" placeholder="Ingresa nombre del paciente" />
                                        <b-form-datalist id="input-list" :options="nombres"></b-form-datalist>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th class="th_style">Fecha</b-th>
                                    <b-td colspan="3" class="border_table">
                                        <b-form-input v-model="datos.fecha" :state="fecha" class="border-0" size="sm" placeholder="DD/MM/AAAA" />
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-th class="th_style">Hora</b-th>
                                    <b-td class="border_table">
                                        <div class="d-flex">
                                            <b-form-input v-on:keypress="soloHoras($event)" v-model="datos.hora" :state="hour" class="border-0" size="sm" />
                                            <span class="float-right px-1 txt_gray">
                                                <small class="txt_gray">horas</small>
                                            </span>
                                        </div>
                                    </b-td>
                                    <b-th class="th_style">Habitación</b-th>
                                    <b-td class="border_table">
                                        <b-form-input v-on:keypress="soloNumeros($event)" v-model="datos.habitacion" :state="habitacion" class="border-0 " size="sm" placeholder="# de habitación" />
                                    </b-td>
                                </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style">Motivo de egreso</b-th>
                                <b-td colspan="3" class="border_table">
                                    <b-form-select v-model="datos.motivo_egreso_id" :options="motivos_egresos"  class="border-0" size="sm" placeholder="seleccionar" />
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>
            
            <b-row class="mb-3">
                <b-col cols="12">
                    <b-form-textarea v-model="datos.dtaEjemplo" :state="example" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12">
                    <div class="contenedor-de-errores pt-3 pb-1">
                        <ul class="lista-errores px-2">
                            <li><i class="fa fa-warning px-1" />| Tipo de sangre es obligatoria</li>
                            <li><i class="fa fa-warning px-1" />| Nombre es obligatorio</li>
                            <li><i class="fa fa-warning px-1" />| Aqui va mas errores</li>
                            <li><i class="fa fa-warning px-1" />| Tipo de sangre es obligatoria</li>
                            <li><i class="fa fa-warning px-1" />| Tipo de sangre es obligatoria</li>
                            <li><i class="fa fa-warning px-1" />| Nombre es obligatorio</li>
                            <li><i class="fa fa-warning px-1" />| Aqui va mas errores de validación</li>
                            <li><i class="fa fa-warning px-1" />| Aqui va mas errores de validación</li>
                        </ul>
                    </div>
                </b-col>
            </b-row>

            <ul class="mt-3">
                <li>Se requiere nombre y firma del médico</li>
            </ul>
            <div class="d-flex justify-content-end mb-4">
                <b-col cols="5" sm="12" md="5" lg="5">
                    <button class="btn_formluario border-0 btn-block py-2 txt_white" @click="getNumber">GUARDAR</button>
                </b-col>
            </div> 
            </b-form>
        </b-container>
    </b-container>    
</template>0

<script>
import { url } from "../../../settings";
const urlp = `${url}/api/pacientes`
import Foto from "@/components/Paciente/Foto.vue"
const link = `${url}/api/datos_medicos/datos/`;

export default {
    name: "NotaDeEgreso",
    components: { Foto },

    data:()=>({
        datos: {
            expediente_id: null,//Requerido 
            fecha: "",//Requerido formato aaaa/mm/dd
            hora: "",//Requerido formato hh:mm:ss
            motivo_egreso_id: null,//Requerido catálogo de motivo de egreso
            habitacion: "",
            nombre: '',
            dtaEjemplo: ''
        },
        "motivos_egresos": [
            {
                value: null,
                text: "Seleccionar"
            },
            {
                value: 1,
                text: "Mejoría"
            },
            {
                value: 2,
                text: "Defunción"
            },
            {
                value: 3,
                text: "Traslado"
            },
            {
                value: 4,
                text: "Máximo beneficio"
            },
            {
                value: 5,
                text: "Alta voluntaria"
            }
        ],
        pacientes: [{}],
        nombres: [],
        idPacienteSeleccionado: "",
    }),

    computed: {
        hour() {
            return this.datos.hora.length != 0
        },

        fecha() {
            return this.datos.fecha != 0
        },

        validation() {
            return this.datos.nombre.length != 0
        },
        habitacion() {
            return this.datos.habitacion.length != 0
        },
        example() {
            return this.datos.dtaEjemplo.length != 0
        }
    },

    methods:{
        soloNumeros(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
            } else {
                return true;
            }
        },

        soloLetras(evt) {
            let char = String.fromCharCode(evt.keyCode);
            if(/^[A-Za-z]+$/.test(char)) {
                return true;
            } else {
                evt.preventDefault();
            }
        },

        async obtenerPacientes() {
            try {
                const res = await fetch(`${urlp}`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization': "Bearer "+ localStorage.getItem("token"),
                    }
                });
                if (!res.ok) {
                    const message = `An error has occured: ${res.status} - ${res.statusText}`;
                    throw new Error(message);
                }
                const data = await res.json();
                this.pacientes=data.pacientes
                for(let val of data.pacientes){
                    this.nombres.push(val.id+" - "+val.nombre)
                }
            } catch (error) {
                console.log("el error es"+error);
            }
        },
        async getExpediente() {
            try {
                const res = await fetch(`${link}${this.idPacienteSeleccionado}`, {
                    method: 'get',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization': "Bearer "+ localStorage.getItem("token"),
                    }
                });
                if (!res.ok) {
                    const message = `An error has occured: ${res.status} - ${res.statusText}`;
                    throw new Error(message);
                }
                const data = await res.json();
                this.datos.expediente_id=data.expediente.id
                this.egreso()
            } catch (error) {
                console.log("el error es"+error);
            }
        },

        getNumber() {
            var str = this.datos.nombre;
            var matches = str.match(/(\d+)/);
            this.idPacienteSeleccionado=matches[0]
            this.getExpediente();
        },

        async egreso() {
            try {
                const res = await fetch(`${url}/api/notas/egreso/store`, {
                    method: 'post',
                    headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.datos),
                });
                const data = res.json();
                console.log(data)
                
                var promise = Promise.resolve(data);
 
                promise.then(function(val) {
                    console.log(val);
                });
            } catch (error) {
                console.log(error);
            }
       },
    },
    
    mounted(){
        this.obtenerPacientes();
        var date = new Date;
        var minutes = date.getMinutes();
        var hour = date.getHours();
        this.datos.hora=""+hour+":"+minutes+":00"
        var today = new Date();
        var dd = ("0" + (today.getDate())).slice(-2);
        var mm = ("0" + (today.getMonth() +1)).slice(-2);
        var yyyy = today.getFullYear();
        this.datos.fecha = yyyy + '-' + mm + '-' + dd ;
    },
}
</script>

<style scoped>
   
</style>