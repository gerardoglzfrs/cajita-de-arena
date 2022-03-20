<template>
     <b-container>
        <b-row class="justify-content-between">
            <b-col cols="12" sm="12" md="8" lg="8">
                <h2 class="title_forms txt_red text-uppercase pl-3 d-none d-sm-block d-lg-none d-md-none">Nota de evolucion y ordenes médicas</h2>
                <h2 class="title_forms txt_red text-uppercase pl-3 d-none d-lg-block d-md-block">Nota de evolucion</h2>   
                <h4 class="txt_red pl-3 d-none d-lg-block d-md-block">y ordenes médicas</h4>   
            </b-col>
            <b-col class="d-none d-lg-block d-md-block" cols="12" sm="12" md="4" lg="4">
                <div class="float-right my-auto">
                    <Foto/>
                </div>
            </b-col>
        </b-row>

        <b-container>
            <b-table-simple class="table-sm border_table mt-3">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style">Nombre</b-th>
                        <b-td class="border_table">
                            <b-form-input list="input-list" @change="onChange(datos.nombre)" v-model="datos.nombre" class="border-0" size="sm" placeholder="Ingresa nombre del paciente" />
                            <b-form-datalist id="input-list" :options="nombres"></b-form-datalist>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Número de habitación</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.no_habitacion" class="border-0" size="sm" placeholder="Número de habitación" />
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <b-row class="justify-content-between mt-4">
                <b-col cols="4">
                    <p class="txt_blue text-uppercase py-2"><strong>Añadir actualización</strong></p>
                </b-col>
                <b-col cols="4">
                    <div class="float-right">
                        <button class="btn_redondo border-0 bg_blue txt_white" @click="nuevo=!nuevo">
                            <i class="fa fa-plus fa-lg mx-auto my-auto" />
                        </button>
                    </div>
                </b-col>
            </b-row>

            <b-table-simple class="table-responsive table-sm mt-3" v-if="nuevo">
                <b-thead>
                    <b-tr>
                        <b-th class="th_style size_th">Actualización</b-th>
                        <b-th class="th_style size_th">T.A.</b-th>
                        <b-th class="th_style size_th">F.C.</b-th>
                        <b-th class="th_style size_th">F.R.</b-th>
                        <b-th class="th_style size_th">T.</b-th>
                        <b-th class="th_style size_th">SPO2</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>  
                    <b-tr>
                        <b-th class="border_table" >
                            <b-form-input v-model="horaFecha" class="border-0" size="sm" placeholder="DD/MM/AAAA HORA" />
                        </b-th>
                        <b-td class="border_table">
                            <div class="d-flex">
                                <div>
                                    <b-form-input v-model="datos.tension_arterial" class="text-center border-0" size="sm" placeholder="#"/>
                                </div>
                                <div class="txt_gray px-1">/</div>
                                <div>
                                    <b-form-input v-model="datos.tension_arterial" class="text-center border-0" size="sm" placeholder="#"/>
                                </div>
                            </div>
                            <!-- <b-form-input v-model="datos.tension_arterial" class="border-0" size="sm"/> -->
                        </b-td>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.frecuencia_cardiaca" class="border-0" size="sm"/>
                        </b-td>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.frecuencia_respiratoria" class="border-0" size="sm"/>
                        </b-td>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.temperatura" class="border-0" size="sm"/>
                        </b-td>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.saturacion_oxigeno" class="border-0" size="sm"/>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
            <b-table-simple class="table-sm mt-3" :items="tabla" v-if="m">
                <b-thead>
                    <b-tr>
                        <b-th class="th_style ">Actualización</b-th>
                        <b-th class="th_style ">T.A.</b-th>
                        <b-th class="th_style ">F.C.</b-th>
                        <b-th class="th_style ">F.R.</b-th>
                        <b-th class="th_style ">T.</b-th>
                        <b-th class="th_style ">SPO2</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>  
                    <b-tr v-for="user in tabla" :key="user.id">
                        <b-th class="border_table border-0 text-center" size="sm">
                            <span><small>{{user.fecha_evolucion + " " + user.hora_evolucion}}</small></span>
                        </b-th>
                        <b-td class="border_table text-center">
                            <span><small>{{user.tension_arterial}}</small></span>
                        </b-td>
                        <b-td class="border_table text-center">
                           <span><small>{{user.frecuencia_cardiaca}}</small></span>
                        </b-td>
                        <b-td class="border_table text-center">
                            <span><small>{{user.frecuencia_respiratoria}}</small></span>
                        </b-td>
                        <b-td class="border_table text-center">
                            <span><small>{{user.temperatura}}</small></span>
                        </b-td>
                        <b-td class="border_table text-center">
                           <span><small>{{user.saturacion_oxigeno}}</small></span>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <b-row>
                <b-col cols="12">
                    <p class="txt_blue">Resumen y actualización del cuadro clínico</p>
                    <b-form-textarea v-model="datos.resumen" value="tablas.resumen" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                    <div class="float-right">
                        <small class="txt_gray" v-if="m">Última actualización {{ultimaVez}} horas</small>
                    </div>
                </b-col>
                <b-col cols="12">
                    <p class="txt_blue mt-3">Estudios de laboratorio y gabinete</p>
                    <b-form-textarea v-model="datos.estudios_lab_gabinete" value="tablas[1].estudios_lab_gabinete" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                    <div class="float-right">
                        <small class="txt_gray" v-if="m">Última actualización {{ultimaVez}} horas</small>
                    </div>
                </b-col>
                <b-col cols="12">
                    <p class="txt_blue mt-3">Tratamiento e indicaciones</p>
                    <b-form-textarea v-model="datos.tratamiento_indicaciones" value="tablas.tratamiento_indicaciones" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                    <div class="float-right">
                        <small class="txt_gray" v-if="m">Última actualización {{ultimaVez}} horas</small>
                    </div>
                </b-col>
            </b-row>

            <div class="d-flex justify-content-end mt-5 mb-4">
                <b-col cols="5" sm="12" md="5" lg="5">
                    <b-overlay
                    :show="busy"
                    rounded
                    opacity="0.6"
                    spinner-small
                    spinner-variant="primary"
                    >
                        <button class="btn_formluario border-0 btn-block py-2 txt_white" :disabled="busy"  @click="getNumber">GUARDAR</button>
                    </b-overlay>
                </b-col>
            </div>
            <Success :abrir="openSuccess"/> 
            <Error :abrir="openError"/> 
        </b-container>
     </b-container>
</template>

<script>
import { url } from "../../../settings";
const urlp = `${url}/api/pacientes`
import Foto from "@/components/Paciente/Foto.vue"
const link = `${url}/api/datos_medicos/datos/`;
import Success from "@/components/Modals/Success.vue";
import Error from "@/components/Modals/Error.vue";
import { EventBus } from "../../EventBus";
export default {
    name: "NotaEvolucionMedica",
    components: { Foto, Success, Error },
    data:()=>({
        busy: false,
        openSuccess:false,
        openError:false,
        ultimaVez:"",
        nuevo:false,
        m:false,
        pacientes: [{}],
        nombres: [],
        idPacienteSeleccionado: "",
        datos: {
            expediente_id: null,//Obligatorio
            fecha_evolucion: "",//Obligatorio
            hora_evolucion: "",//Obligatorio
            tension_arterial: "",//Obligatorio
            frecuencia_cardiaca: null,//Obligatorio
            frecuencia_respiratoria: null,//Obligatorio
            temperatura: null,//Obligatorio
            resumen: "",//Obligatorio
            estudios_lab_gabinete: "",//Obigatorio
            tratamiento_indicaciones: "",//Obligatorio
            no_habitacion: "",
            saturacion_oxigeno:""
        },
        horaFecha:"",
        tabla:[{}],
        users: [
                { firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com', role: 'User' },
                { firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com', role: 'Admin' },
                { firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com', role: 'Admin' },
                { firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com', role: 'User' },
                { firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com', role: 'User' }
            ]
    }),
    methods:{
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
        async getExpediente(v) {
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
                this.datos.no_habitacion=data.expediente.no_habitacion
                switch (v) {
                    case "save":
                        this.evolucion()
                        break;
                    case "getData":
                        this.getdata();
                        break;
                    default:
                        break;
                }

            } catch (error) {
                this.openError=true
                this.busy=false
                console.log("el error es"+error);
            }
        },
        async getdata() {
            try {
                const res = await fetch(`${url}/api/nota_evolucion/${this.idPacienteSeleccionado}`, {
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
                console.log(data.listado_evolucion);
                this.tabla=data.listado_evolucion;
                this.datos.resumen=this.tabla[this.tabla.length-1].resumen
                this.datos.estudios_lab_gabinete=this.tabla[this.tabla.length-1].estudios_lab_gabinete
                this.datos.tratamiento_indicaciones=this.tabla[this.tabla.length-1].tratamiento_indicaciones
                this.ultimaVez = this.tabla[this.tabla.length-1].fecha_evolucion+" "+this.tabla[this.tabla.length-1].hora_evolucion
                
                this.m=true
                // this.datos.expediente_id=data.expediente.id

            } catch (error) {
                console.log("el error es"+error);
            }
        },
        async evolucion() {
            console.log(this.datos)
            try {
                const res = await fetch(`${url}/api/nota_evolucion/store`, {
                    method: 'post',
                    headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.datos),
                });
                const data = res.json();
                console.log(data)
                var warn=false
                var promise = Promise.resolve(data);
                await promise.then(function(val) {
                    console.log(val)
                    if (val.class=="success") {
                        warn = true
                    }
                });
                if (warn) {
                    var id=this.idPacienteSeleccionado;
                    var nombre = this.datos.nombre;
                    Object.assign(this.$data, this.$options.data());
                    this.idPacienteSeleccionado=id
                    this.datos.nombre=nombre
                    this.getExpediente("getData")
                    this.busy=false
                    this.setFechaHora()
                    this.nuevo=false
                    this.getdata()
                    this.openSuccess=true
                }else{
                    this.busy=false
                    this.openError=true
                }
                
            } catch (error) {
                this.busy=false
                this.openError=true
                console.log(error);
            }
       },
        getNumber() {
            this.busy=true
            try {
                var str = this.datos.nombre;
                var matches = str.match(/(\d+)/);
                this.idPacienteSeleccionado=matches[0]
            } catch (error) {
                console.log(error);
            }
            this.getExpediente("save");
        },
        onChange(value){
            var str = value;
            var matches = str.match(/(\d+)/);
            this.idPacienteSeleccionado=matches[0]
            this.getExpediente("getData");
        },
        setFechaHora(){
            var date = new Date;
            var minutes = ("0"+date.getMinutes()).slice(-2)
            var hour = ("0"+date.getHours()).slice(-2)
            this.datos.hora_evolucion=""+hour+":"+minutes+""
            var today = new Date();
            var dd = ("0" + (today.getDate())).slice(-2);
            var mm = ("0" + (today.getMonth() +1)).slice(-2);
            var yyyy = today.getFullYear();
            this.datos.fecha_evolucion = yyyy + '-' + mm + '-' + dd ;
            this.horaFecha=this.datos.fecha_evolucion+" "+this.datos.hora_evolucion;
        }
    },
    mounted(){
        this.obtenerPacientes();
        this.setFechaHora();

        EventBus.$on("cerrarModal",()=>{
            this.openSuccess=false
        })
        EventBus.$on("cerrarModalError",()=>{
            this.openError=false
        })
    }
}
</script>

<style scoped>
    @media only screen and (min-width: 768px) {
        .size_th {
            padding-left: auto;
            padding-right: auto;
        }
    }

    @media only screen and (max-width: 768px) {
        .size_th {
            padding-left: 50px;
            padding-right: 50px;
        }
    } 
    
    .btn_redondo {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 20px;
        text-align: center;
        font-size: 0.8rem;
        line-height: 1.42857;
    }
</style>