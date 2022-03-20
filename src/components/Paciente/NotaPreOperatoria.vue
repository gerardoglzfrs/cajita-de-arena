<template>
    <b-container>
        <b-row class="justify-content-between">
            <b-col cols="6">
                <h2 class="title_forms txt_red text-uppercase pl-3">Nota pre-operatoria</h2>   
            </b-col>
            <b-col cols="4">
                <div class="float-right my-auto">
                    <Foto/>
                </div>
            </b-col>
        </b-row>

        <b-container class="mt-4">
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style size_th">Nombre</b-th>
                        <b-td class="border_table">
                            <b-form-input list="input-list" v-model="idPacienteSeleccionado" class="border-0" size="sm" placeholder="Ingresa nombre del paciente" />
                            <b-form-datalist id="input-list" :options="nombres"></b-form-datalist>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <b-row>
                <b-col cols="12" sm="12" md="6" lg="6">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style size_th">Fecha</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.fecha" type="date" class="border-0" size="sm"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Hora</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.hora" class="border-0" size="sm"></b-form-input>
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">hora</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
                <b-col cols="12" sm="12" md="6" lg="6">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style">Fecha de cirujía</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.fecha_cirugia" type="date" class="border-0" size="sm"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Habitación</b-th>
                                <b-td class="border_table">
                                    <b-form-input class="border-0" size="sm"/>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12">
                    <p class="txt_blue">Diagnóstico</p>
                    <b-form-textarea v-model="datos.diagnostico" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                </b-col>
                <b-col cols="12">
                    <p class="txt_blue mt-3">Plan quirúrgico</p>
                    <b-form-textarea v-model="datos.plan_quirurgico" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                </b-col>
            </b-row>

            <div>
                <b-table-simple class="table-sm mt-4">
                    <b-tbody>  
                        <b-tr>
                            <b-th class="th_style th_size_intervencion">Tipo de intervención quirúrgica</b-th>
                            <b-td class="border_table">
                               <b-form-select v-model="datos.tipo_intervencion_id" :options="tipo_intervencion_quirurgica" class="border-0" size="sm"></b-form-select>
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Riesgo quirúrgico</b-th>
                            <b-td class="border_table">
                               <b-form-select v-model="datos.riesgo_quirurgico_id" :options="riesgo_quirurgico" class="border-0" size="sm"></b-form-select>
                            </b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </div>
            <div style="margin-top: -16px;">
                <small class="txt_gray">* Incluidos tabaquismo, alcoholismo o adicciones</small>
            </div>

            <b-row class="mt-4">
                <b-col cols="12">
                    <p class="txt_blue">Cuidados y plan terapéutico preoperatorio</p>
                    <b-form-textarea v-model="datos.cuidados_plan_terapeotico" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                </b-col>
            </b-row>
             
            <b-table-simple class="table-sm mt-4">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_size_intervencion th_style">Pronóstico</b-th>
                        <b-td class="border_table">
                             <b-form-select v-model="datos.pronostico_id" :options="pronosticos" class="border-0" size="sm"></b-form-select>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <ul class="mt-3">
                <li>Se requiere nombre y firma del médico</li>
            </ul>
            <div class="d-flex justify-content-end mb-4">
                <b-col cols="5" sm="12" md="5" lg="5">
                    <button class="btn_formluario border-0 btn-block py-2 txt_white" @click="getExpediente">GUARDAR</button>
                </b-col>
            </div>
        </b-container>
    </b-container>
</template>

<script>
import { url } from "../../../settings";
import Foto from "@/components/Paciente/Foto.vue"
const urlp = `${url}/api/pacientes`
const link = `${url}/api/datos_medicos/datos/`;
export default {
    name: "NotaPreOperatoria",
    components: { Foto },
    data:()=>({
        datos:{
            expediente_id: "",//Obligatorio
            fecha: "",//Obligarorio
            hora: "",//obligatorio
            fecha_cirugia: "",//obligatorio
            diagnostico: "",//Obligatorio
            plan_quirurgico: "",//Obligatorio
            tipo_intervencion_id: null,//Obligatorio (Catálogo de tipo de intervención quirúrgica)
            riesgo_quirurgico_id: null,//Obligatorio (Catálogo de riesgos quirúrgicos) 
            cuidados_plan_terapeotico: "",//Obligatorio
            pronostico_id: null,//Obligatorio (Catálogo de pronósticos)
        },
        tipo_intervencion_quirurgica: [
            {
                value: null,
                text: "Seleccionar"
            },
            {
                value: 1,
                text: "Urgencia"
            },
            {
                value: 2,
                text: "Programada"
            }
        ],
        pacientes: [{}],
        nombres:[],
        idPacienteSeleccionado: "",
        riesgo_quirurgico:[{value:null,text:"seleccionar"}],
        pronosticos:[{value:null,text:"seleccionar"}],
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
        async riesgos_quirurgicos() {
            try {
                const res = await fetch(`${url}/api/catalogos/riesgo_quirurgico`, {
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
                this.riesgo_quirurgico = data.riesgo_quirurgico.map(item => {
                    return {
                        value: item.id,
                        text: item.nombre
                    };
                });
                this.riesgo_quirurgico.unshift( { value: null, text: 'seleccionar' },)
                console.log(this.riesgo_quirurgico)
            } catch (error) {
                console.log("el error es"+error);
            }
        },

         async pronostico() {
            try {
                const res = await fetch(`${url}/api/catalogos/pronostico`, {
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
                this.pronosticos = data.pronostico.map(item => {
                    return {
                        value: item.id,
                        text: item.nombre
                    };
                });
                this.pronosticos.unshift( { value: null, text: 'seleccionar' },)
                console.log(this.pronosticos)
            } catch (error) {
                console.log("el error es"+error);
            }
        },
        async preOperatoria() {

            try {
                const res = await fetch(`${url}/api/notas/pre-operatoria/store`, {
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
                
                var promise = Promise.resolve(data);
                await promise.then(function(val) {
                    console.log(val)
                });
            } catch (error) {
                console.log(error);
            }
       },
        async getExpediente() {
            console.log(this.datos)
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
                this.preOperatoria();
            } catch (error) {
                console.log("el error es"+error);
            }
        },
    },
    mounted(){
        var date = new Date;
        var minutes = date.getMinutes();
        var hour = date.getHours();
        this.datos.hora=""+hour+":"+minutes
        var today = new Date();
        var dd = ("0" + (today.getDate())).slice(-2);
        var mm = ("0" + (today.getMonth() +1)).slice(-2);
        var yyyy = today.getFullYear();
        this.datos.fecha = yyyy + '-' + mm + '-' + dd ;
        this.datos.fecha_cirugia=yyyy + '-' + mm + '-' + dd ;
        this.obtenerPacientes()
        this.riesgos_quirurgicos()
        this.pronostico()
    },
}
</script>

<style scoped>
    @media only screen and (min-width: 960px) {
        .size_th {
            width: 10vw;
        }
    }
    @media only screen and (max-width: 960px) {
        .size_th {
            width: 15vw;
        }
    }

    @media only screen and (min-width: 960px) {
        .th_size_intervencion {
            width: 21vw;
        }
    }

    @media only screen and (max-width: 960px) {
        .th_size_intervencion {
            width: 35vw;
        }
    } 
</style>