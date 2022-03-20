<template>
    <b-container>
        <b-row class="justify-content-between">
            <b-col cols="12" sm="12" md="8" lg="8">
                <h2 class="title_forms txt_red text-uppercase pl-3">Nota de ingreso</h2>      
            </b-col>
            <b-col class="d-none d-lg-block d-md-block" cols="12" sm="12" md="4" lg="4">
                <div class="float-right my-auto">
                    <Foto/>
                </div>
            </b-col>
        </b-row>
        <b-row class="py-4">
            <b-col cols="2">
                <p class="txt_blue text-uppercase pl-3"><strong>Ingreso</strong></p>
            </b-col>
            <b-col cols="5">
                <div class="d-flex">
                    <span class="px-2 txt_gray">
                        Programado
                    </span>
                    <b-form-radio v-model="datos.ingreso_urgencia" v-bind:value="false" class="rbtn_color" size="md" />
                </div>
            </b-col>
            <b-col cols="5">
                <div class="d-flex">
                    <span class="px-2 txt_gray">
                        Por urgencia
                    </span>
                    <b-form-radio v-model="datos.ingreso_urgencia" v-bind:value="true" class="rbtn_color" size="md" />
                </div>
            </b-col>
        </b-row>

        <b-container>
            <div v-if="datos.ingreso_urgencia">
            <p class="txt_blue text-uppercase pt-3"><strong>En caso de accidente</strong></p>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style">¿Corre peligro la vida?</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="datos.corre_peligro_vida" type="checkbox" value=false>
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <p class="txt_blue pt-2"><strong>Clasificación de lesiones</strong></p>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style">¿Tardará más de 15 días en sanar?</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="datos.tardara_mas_quince_dias_sanar" type="checkbox" value=false>
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">¿Quedarán secuelas?</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="datos.quedaran_secuelas" type="checkbox" value=false>
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
            </div>

            <p class="txt_blue text-uppercase pt-3"><strong>Información general</strong></p>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style size_th">Nombre</b-th>
                        <b-td class="border_table">
                            <b-form-input list="input-list" v-model="datos.nombre" class="border-0" size="sm" placeholder="Ingresa nombre del paciente" />
                            <b-form-datalist id="input-list" :options="nombres"></b-form-datalist>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Fecha</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.fecha_ingreso" type="date" class="border-0" size="sm"/>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Hora</b-th>
                        <b-td class="border_table">
                            <b-row>
                                <b-col cols="10" sm="10" md="4" lg="3">
                                    <div class="d-flex">
                                         <b-form-input v-model="datos.hora_ingreso" class="border-0" size="sm"></b-form-input>
                                        <span class="float-right px-2 txt_gray">
                                            <small class="txt_gray">horas</small>
                                        </span>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <b-row>
                <b-col cols="12" sm="12" md="5" lg="5">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="size_th_medidas th_style">Peso</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.peso" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">kg</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Talla</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.talla" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">cm</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Temperatura</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.temperatura" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">°C</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">SPO2</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.saturacion_oxigeno" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">%</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
                <b-col cols="12" sm="12" md="7" lg="7">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style">Frecuencia cardiaca</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.frecuencia_cardiaca" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">/min</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Frecuencia respiratoria</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.frecuencia_respiratoria" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">/min</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style size_th_frecuencias">Tensión arterial</b-th>
                                <b-td class="border_table">                     
                                    <div class="d-flex">
                                        <div class="px-2">
                                            <b-form-input v-model="datos.tension_arterial" class="border-0 text-center" size="sm" placeholder="#"/>
                                        </div>
                                        <div class="txt_gray">/</div>
                                        <div class="px-2">
                                            <b-form-input v-model="datos.tension_arterial" class="border-0 text-center" size="sm" placeholder="#"/>
                                        </div>
                                    </div>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>

            <p class="txt_blue">Resumen de interrogatorio y exploración física</p>
            <b-form-textarea v-model="datos.registro_interrogatorio_exploracion_fisica" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue text-uppercase pt-3"><strong>Estado mental</strong></p>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style">Abertura ocular</b-th>
                        <b-td class="border_table">
                            <b-form-select v-model="datos.ocular_id" :options="escalas_glasgow" @change="onChange(datos.motriz_id)" class="border-0" size="sm" placeholder="Seleccionar" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Respuesta verbal</b-th>
                        <b-td class="border_table">
                            <b-form-select v-model="datos.verbal_id" :options="escalas_glasgow" @change="onChange(datos.motriz_id)" class="border-0" size="sm" placeholder="Seleccionar" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Respuesta motriz</b-th>
                        <b-td class="border_table">
                             <b-form-select v-model="datos.motriz_id" :options="escalas_glasgow" @change="onChange(datos.motriz_id)" class="border-0" size="sm" placeholder="Seleccionar" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Escala Glasgow</b-th>
                        <b-td class="border_table">
                            <!-- <b-form-input v-model="datos.escalas_glasgow"  class="border-0" size="sm" /> -->
                            <span class="pl-2"><small>{{datos.escalas_glasgow}}</small></span>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Trauma</b-th>
                        <b-td class="border_table">
                            <b-form-input class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <p class="txt_blue">Estudios de laboratorio y gabinete</p>
            <b-form-textarea class="txtArea_border" v-model="datos.estudios_laboratorio_gabinete" size="sm" no-resize debounce="500" rows="3" max-rows="3" />

            <p class="txt_blue mt-3">Tratamiento</p>
            <b-form-textarea class="txtArea_border" v-model="datos.tratamiento" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
            
            <b-table-simple class="table-sm mt-4">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style">Pronóstico</b-th>
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
                    <b-overlay
                    :show="busy"
                    rounded
                    opacity="0.6"
                    spinner-small
                    spinner-variant="primary"
                    >
                        <button class="btn_formluario border-0 btn-block py-2 txt_white" :disabled="busy" @click="getNumber">GUARDAR</button>
                    </b-overlay>
                </b-col>
            </div>
            <Success :abrir="openSuccess"/> 
            <Error :abrir="openError"/>
        </b-container>
    </b-container>
</template>

<script>
import Foto from "@/components/Paciente/Foto.vue"
import { url } from "../../../settings";
const urlp = `${url}/api/pacientes`
// const location = window.location.href
const link = `${url}/api/datos_medicos/datos/`;
import { EventBus } from "../../EventBus";
import Error from "@/components/Modals/Error.vue";
import Success from "@/components/Modals/Success.vue";
export default {
    name: "NotaDeIngreso",
    components: { Foto, Error, Success },
    data:()=>({
        busy: false,
        openSuccess:false,
        openError:false,
        pacientes:[{}],
        idPacienteSeleccionado: "",
        nombres: [],
        datos:{
            expediente_id: "",//Obligatorio
            ingreso_urgencia: false,//Obligatorio - Boolean
            corre_peligro_vida: false,//Obligatorio si ingreso_urgencia es true - boolean
            tardara_mas_quince_dias_sanar: false,//Obligatorio si ingreso_urgencia es true - boolean
            quedaran_secuelas: false,//Obligatorio si ingreso_urgencia es true - boolean
            fecha_ingreso: "",//Obligatorio
            hora_ingreso: "",//Obligatorio
            tension_arterial: "",//Obligatorio
            frecuencia_cardiaca: "",//Obligatorio - integer
            temperatura: "",//obligatorio float
            frecuencia_respiratoria: "",//obligatorio - integer
            saturacion_oxigeno:"",//obligatorio - integer
            peso: "",//Obligatorio - float
            talla: "",//obligatorio - float
            registro_interrogatorio_exploracion_fisica: "",//Obligatorio -String
            ocular_id: null,//Obligatorio - Catalogo de Escala glasgow
            verbal_id: null,//Obligatorio - Catalogo de Escala glasgow
            motriz_id: null,//Obligatorio - Catalogo de Escala glasgow
            estudios_laboratorio_gabinete: "",//Obligatorio - String
            tratamiento: "", //Obligatorio - String
            pronostico_id: null,//Obligatorio - Catalogo Pronosticos
            escalas_glasgow:0
        },
        escalas_glasgow: [
            {
                value: null,
                text: "Seleccionar"
            },
            {
                value: 1,
                text: "I"
            },
            {
                value: 2,
                text: "II"
            },
            {
                value: 3,
                text: "III"
            },
            {
                value: 4,
                text: "IV"
            },
            {
                value: 5,
                text: "V"
            },
            {
                value: 6,
                text: "VI"
            }
        ],
        pronosticos:[{value:null,text:"seleccionar"}],
    }),

    methods:{
        onChange(){
            this.datos.escalas_glasgow=this.datos.ocular_id+this.datos.verbal_id+this.datos.motriz_id
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
        // async escalaG() {
        //     try {
        //         const res = await fetch(`${url}/api/catalogos/escala_glasgow`, {
        //             method: 'get',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'X-Requested-With': 'XMLHttpRequest',
        //                 'Authorization': "Bearer "+ localStorage.getItem("token"),
        //             }
        //         });
        //         if (!res.ok) {
        //             const message = `An error has occured: ${res.status} - ${res.statusText}`;
        //             throw new Error(message);
        //         }
        //         const data = await res.json();
        //         console.log(data.escalas_glasgow)
        //     } catch (error) {
        //         console.log("el error es"+error);
        //     }
        // },

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
                this.notaDeIngreso();
            } catch (error) {
                this.openError=true
                this.busy=false
                console.log("el error es"+error);
            }
        },

        getNumber() {
            this.busy=true
            try {
                var str = this.datos.nombre;
                var matches = str.match(/(\d+)/);
                this.idPacienteSeleccionado=matches[0]
            } catch (er) {
                console.log(er)
            }
            this.getExpediente();
            //this.addNota()
        },
        async pronostico() {
            try {
                const res = await fetch(`${url}/api/catalogos/pronostico`, {
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
                this.pronosticos = data.pronostico.map(item => {
                    return {
                        value: item.id,
                        text: item.nombre
                    };
                });
                this.pronosticos.unshift( { value: null, text: 'seleccionar' },)
            } catch (error) {
                console.log("el error es"+error);
            }
        },
        async notaDeIngreso() {
            this.busy=true;
            try {
                const res = await fetch(`${url}/api/nota_ingreso/store`, {
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
                var warn = false
                var promise = Promise.resolve(data);
                await promise.then(function(val) {
                    if (val.class=="success") {
                        warn = true
                    }
                });
                if (warn) {
                    Object.assign(this.$data, this.$options.data());
                    this.setFechaHora()
                    this.busy=false
                    this.openSuccess=true
                }else{
                    this.openError=true
                    this.busy=false
                }

            } catch (error) {
                this.openError=true
                this.busy=false
                console.log(error);
            }
       },
       setFechaHora(){
           var date = new Date;
            var minutes = date.getMinutes();
            var hour = date.getHours();
            this.datos.hora_ingreso=""+hour+":"+minutes
            var today = new Date();
            var dd = ("0" + (today.getDate())).slice(-2);
            var mm = ("0" + (today.getMonth() +1)).slice(-2);
            var yyyy = today.getFullYear();
            this.datos.fecha_ingreso = yyyy + '-' + mm + '-' + dd ;
       }
    },
    mounted(){
        this.setFechaHora();
        this.obtenerPacientes();
        this.pronostico()
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
    @media only screen and (max-width: 1000px) {
        .size_th {
            width: 30vw;
        }
    }

    @media only screen and (min-width: 1000px) {
        .size_th {
            width: 10vw;
        }
    }

    /* Tabla de tallas y medidas */

    @media only screen and (max-width: 500px) {
        .size_th_medidas {
            width: 30vw;
        }
    }

    @media only screen and (min-width: 500px) {
        .size_th_medidas {
            width: 30vw;
        }
    }

    @media only screen and (min-width: 800px) {
        .size_th_medidas {
            width: 10vw;
        }
    }


    /* Tabla de frecuencias */
    @media only screen and (max-width: 540px) {
        .size_th_frecuencias {
            width: 30vw;
        }
    }

    @media only screen and (min-width: 540px) {
        .size_th_frecuencias {
            width: 30vw;
        }
    }

    @media only screen and (min-width: 960px) {
        .size_th_frecuencias {
            width: 13vw;
        }
    }

</style>