<template>
    <b-container>
        <b-row class="justify-content-between">
            <b-col cols="11">
                <h2 class="font-size-vw txt_red text-uppercase pl-3">Hoja de valoración pre-anestésica</h2>   
            </b-col>
            <b-col class="d-none d-lg-block" cols="1">
                <div class="float-right my-auto">
                    <Foto/>
                </div>
            </b-col>
        </b-row>
        <b-container>
            <b-row>
                <b-col class="p-0 padding_stepper" cols="12" sm="12" md="12" lg="3">
                    <div class="container">
                        <section class="step-indicator">
                            <div class="step step1 active">
                                <button id="step1" @click="formNotaPreA('NotaPreAnestesicaUno')" class="step-icon" />
                            </div>
                            <div class="indicator-line"></div>
                            <div class="step step2">
                                <button id="step2" @click="formNotaPreA('NotaPreAnestesicaDos')" class="step-icon" />
                            </div>
                        </section>
                    </div>
                </b-col> 
            </b-row>
            <b-table-simple class="table-sm mt-3">
                <b-tbody>  
                    <b-tr>
                        <b-th class="size_th th_style">Nombre</b-th>
                        <b-td class="border_table">
                            <b-form-input list="input-list" v-model="datos.nombre" class="border-0" size="sm" placeholder="Ingresa nombre del paciente" />
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
                                <b-th class="size_th th_style">Fecha</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.fecha" class="border-0" size="sm" placeholder="DD/MM/AAAA" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Hora</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.hora" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">hora</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Habitación</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.no_habitacion" class="border-0" size="sm" placeholder="Número de habitación" />
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
                <b-col cols="12" sm="12" md="6" lg="6">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="size_th th_style">Género</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="datos.genero_id" :options="genero" class="border-0" size="sm" placeholder="Seleccionar" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Edad</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">años</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>

            <p class="txt_blue text-uppercase pt-3"><strong>Hábitos</strong></p>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="size_th_habitos th_style">Fuma</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="datos.fuma" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="datos.fuma">
                        <b-th class="th_option_color">¿Cuántos cigarrillos al día?</b-th>
                        <b-td class="border-0">
                            <div class="switch color_contador">
                                <div class="d-flex flex-row justify-content-center px-auto">
                                    <button id="desactivar" @click="disminuir('cigarros')" class="py-auto px-1 txt_white border-0 btn_contador_menos">
                                        <strong>-</strong>
                                    </button>
                               
                                    <div class="py-auto px-1">
                                        <small class="txt_white"><strong>{{datos.cigarros}}</strong></small>
                                    </div>

                                    <button @click="aumentar('cigarros')" class="py-auto px-1 txt_white border-0 btn_contador_mas">
                                        <strong>+</strong>
                                    </button>
                                </div>
                            </div>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Consume bebidas alcohólicas</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="datos.bebe" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="datos.bebe">
                        <b-th class="th_option_color">¿Cuántos copas al día?</b-th>
                        <b-td class="border-0">
                            <div class="switch color_contador">
                                <div class="d-flex flex-row justify-content-center px-auto">
                                    <button id="desactivarbebe" @click="disminuir('copas')" class="py-auto px-1 txt_white border-0 btn_contador_menos">
                                        <strong>-</strong>
                                    </button>
                               
                                    <div class="py-auto px-1">
                                        <small class="txt_white"><strong>{{datos.bebidas_alcoholicas}}</strong></small>
                                    </div>

                                    <button @click="aumentar('copas')" class="py-auto px-1 txt_white border-0 btn_contador_mas">
                                        <strong>+</strong>
                                    </button>
                                </div>
                            </div>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Emplea drogas</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="datos.emplea_drogas" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="datos.emplea_drogas">
                        <b-th class="th_style">
                            ¿De qué tipo?
                            <b-form-input v-model="datos.drogas" class="float-right border_bottom mb-3" size="sm"></b-form-input>
                        </b-th>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="size_th_habitos th_style">Actividad física</b-th>
                        <b-td class="border_table">
                            <b-form-select v-model="datos.actividad_fisica_id" :options="actividadF" class="border-0" size="sm"/>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <p class="txt_blue text-uppercase pt-3"><strong>Cirujías</strong></p>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="size_th_cirujia th_style">Ha tenido complicaciones en anestesias previas</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="datos.complicaciones_anestesias_previas" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="datos.complicaciones_anestesias_previas">
                        <b-th class="th_option_color py-2">
                            <div class="d-flex">
                                <span class="px-2 pt-2 txt_blue">
                                    ¿Cuál?
                                </span>
                                <b-form-input v-model="datos.cuales_complicaciones_anestesias" class="float-right border_bottom" size="sm"></b-form-input>
                            </div>
                        </b-th>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Algún familiar directo ha tenido problemas con anestesia</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="datos.complicaciones_anestesias_previas_familia" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="datos.complicaciones_anestesias_previas_familia">
                        <b-th class="th_option_color py-2">
                            <div class="d-flex">
                                <span class="px-2 pt-2 txt_blue">
                                    ¿Cuál?
                                </span>
                                <b-form-input v-model="datos.cuales_complicaciones_anestesias_familia" class="float-right border_bottom" size="sm"></b-form-input>
                            </div>
                        </b-th>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <p class="txt_blue text-uppercase mt-4"><strong>Padecimientos actuales</strong></p>
            <b-row>
                <b-col cols="12" sm="12" md="4" lg="4">
                    <b-form-checkbox v-model="datos.refriado" size="lg" class="small"><small class="txt_gray">Resfriado</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.garganta_inflamada" size="lg" class="small"><small class="txt_gray">Garganta inflamada</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.bronquitis" size="lg" class="small"><small class="txt_gray">Bronquitis</small></b-form-checkbox>
                </b-col>
                <b-col cols="12" sm="12" md="4" lg="4">
                    <b-form-checkbox v-model="datos.laringuitis" size="lg" class="small"><small class="txt_gray">Laringuitis</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.fiebre" size="lg" class="small"><small class="txt_gray">Fiebre</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.protesis_dentales" size="lg" class="small"><small class="txt_gray">Prótesis dentales</small></b-form-checkbox>
                </b-col>
                <b-col cols="12" sm="12" md="4" lg="4">
                    <b-form-checkbox v-model="datos.dientes_flojos" size="lg" class="small"><small class="txt_gray">Dientes flojos</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.dientes_rotos" size="lg" class="small"><small class="txt_gray">Dientes rotos</small></b-form-checkbox>
                </b-col>
            </b-row>

            <p class="txt_blue text-uppercase mt-4"><strong>Ha padecido</strong></p>
            <b-row>
                <b-col cols="12" sm="12" md="6" lg="y">
                    <b-form-checkbox v-model="datos.paralisis" size="lg" class="small"><small class="txt_gray">Parálisis</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.presion_alta" size="lg" class="small"><small class="txt_gray">Presión alta</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.artritis" size="lg" class="small"><small class="txt_gray">Artritis</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.diabetes" size="lg" class="small"><small class="txt_gray">Diabetes</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.cancer" size="lg" class="small"><small class="txt_gray">Cáncer</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.mareos_movimiento" size="lg" class="small"><small class="txt_gray">Mareos por movimiento</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.problemas_higado" size="lg" class="small"><small class="txt_gray">Problemas de hígado</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.ataques_espilepsia" size="lg" class="small"><small class="txt_gray">Ataques de epilepsia</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.ataque_falla_cardiaca" size="lg" class="small"><small class="txt_gray">Ataque o falla cardiaca</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.asma_enfisema_neumonia" size="lg" class="small"><small class="txt_gray">Asma, enfisema, neumonía</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.tos_espectoracion_cronica" size="lg" class="small"><small class="txt_gray">Tos-espectoración crónica</small></b-form-checkbox>
                </b-col>
                <b-col cols="12" sm="12" md="6" lg="y">
                    <b-form-checkbox v-model="datos.nausea_vomito" size="lg" class="small"><small class="txt_gray">Náusea/vómito postoperatorios</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.vision_borrosa_perdida" size="lg" class="small"><small class="txt_gray">Visión borrosa/pérdida temporal de la vista</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.problemas_rinion_vejiga" size="lg" class="small"><small class="txt_gray">Problemas de riñón y/o vegija</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.sangrado_excesivo" size="lg" class="small"><small class="txt_gray">Sangrado excesivo (incluso en cortadas pequeñas)</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.sangre_orina_excremento" size="lg" class="small"><small class="txt_gray">Sangre en orina o excremento</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.dolor_espalda_cuello" size="lg" class="small"><small class="txt_gray">Dolor de espalda o cuello</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.dolor_pecho_ejercicio" size="lg" class="small"><small class="txt_gray">Dolor de pecho al ejercicio</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.dolor_piernas_ejercicio" size="lg" class="small"><small class="txt_gray">Dolor de piernas por ejercicio al caminar</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.hinchazon_piernas_tobillos" size="lg" class="small"><small class="txt_gray">Hinchazón en piernas y/o tobillos</small></b-form-checkbox>
                    <b-form-checkbox v-model="datos.medicamentos_alternativos" size="lg" class="small"><small class="txt_gray">Toma de medicamentos alternativos</small></b-form-checkbox>
                </b-col>
            </b-row>

            <b-row class="mt-3">
                <b-col cols="12">
                    <p class="txt_blue">Observaciones</p>
                    <b-form-textarea v-model="datos.padecimientos_observaciones" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                </b-col>
            </b-row>
            <div class="d-flex justify-content-end mt-5 mb-4">
                <b-col cols="5" sm="12" md="5" lg="5">
                    <button @click="getNumber()" class="btn_formluario border-0 btn-block py-2 txt_white">SIGUIENTE</button>
                </b-col>
            </div>
        </b-container>
    </b-container>
</template>

<script>
import { url } from "../../../../settings";
import { EventBus } from "../../../EventBus"
const urlp = `${url}/api/pacientes`
import Foto from "@/components/Paciente/Foto.vue"
const link = `${url}/api/datos_medicos/datos/`;

export default {
    name: "FormUno",
    components: { Foto },

    data:() => ({
        numero: 1,
        actividadF:[
            {
                "value": null,
                "text": "seleccionar"
            },
            {
                "value": 1,
                "text": "Activa (sin restricciones)"
            },
        ],
        datos:{
            "no_habitacion": null,
            "expediente_id": null,//Obligatorio
            "fecha": "",//Obligatorio
            "hora": "",//Obligatorio
            "genero_id": null,//Obligatorio (Catálogo de tipo de género)
            "fuma": false,//true o false
            "cigarros": null,//Numérico (Depende si fuma)
            "bebe": false,//true o false
            "bebidas_alcoholicas": null,//Numérico(Depende si bebe)
            "emplea_drogas": false,//true o false
            "drogas": 0,//Numérico(Depende si emplea drogas)
            "actividad_fisica_id": null,//Obligatorio (Catálogo de actividad fisica)
            "complicaciones_anestesias_previas": false,//true o false
            "cuales_complicaciones_anestesias": null,//Abierto
            "complicaciones_anestesias_previas_familia": false,//true o false
            "cuales_complicaciones_anestesias_familia": null,//Abierto
            "escala_glasgow": "",//Requerido y numérico
            "refriado": false,//true o false
            "fiebre": false,//true o false
            "garganta_inflamada": false,//true o false
            "protesis_dentales": false,//true o false
            "bronquitis": false,//true o false
            "dientes_flojos": false,//true o false
            "laringuitis": false,//true o false
            "dientes_rotos": false,//true o false
            "paralisis": false,//true o false
            "nausea_vomito": false,//true o false
            "presion_alta": false,//true o false
            "vision_borrosa_perdida": false,//true o false
            "artritis": false,//true o false
            "problemas_rinion_vejiga": false,//true o false
            "diabetes": false,//true o false
            "sangrado_excesivo": false,//true o false
            "asma_enfisema_neumonia": false,//true o false
            "sangre_orina_excremento": false,//true o false
            "mareos_movimiento": false,//true o false
            "problemas_higado": false,//true o false
            "dolor_espalda_cuello": false,//true o false
            "ataques_espilepsia": false,//true o false
            "dolor_pecho_ejercicio": false,//true o false
            "ataque_falla_cardiaca": false,//true o false
            "dolor_piernas_ejercicio": false,//true o false
            "cancer": false,//true o false
            "hinchazon_piernas_tobillos": false,//true o false
            "medicamentos_alternativos": false,//true o false
            "tos_espectoracion_cronica": false,//true o false
            "padecimientos_observaciones": ""//Abierto
        },
        pacientes: [{}],
        nombres: [],
        idPacienteSeleccionado: "",
        genero: [
            {
                value: null,
                text: "seleccionar"
            },
            {
                "value": 1,
                "text": "Mujer"
            },
            {
                "value": 2,
                "text": "Hombre"
            },
            {
                "value": 3,
                "text": "Otro"
            }
        ]

    }),

    methods: {
        switchComponent(value) {
            EventBus.$emit('nextPATwo', this.datos,value)
            EventBus.$emit('datosPaTwo', this.datos)
        },

        formNotaPreA(value) {
            EventBus.$emit('changeStepperPreAnestesica', value);
        },

        disminuir(caso) {
            switch (caso) {
                case 'cigarros':
                    if (this.datos.cigarros<=1) {
                        document.getElementById('desactivar').disabled = false; 
                    }else{
                        this.datos.cigarros--
                    }
                    break;
                case 'copas':
                    if (this.datos.bebidas_alcoholicas<=1) {
                        document.getElementById('desactivarbebe').disabled = false; 
                    }else{
                        this.datos.cigarros--
                    }
                    break;
                default:
                    break;
            }
            
        },

        aumentar(caso) {

            switch (caso) {
                case 'cigarros':
                    this.datos.cigarros++;
                    break;
                case 'copas':
                    this.datos.bebidas_alcoholicas++;
                    break;
                default:
                    break;
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
                this.switchComponent('NotaPreAnestesicaDos');
            } catch (error) {
                console.log("el error es"+error);
            }
        },

        getNumber() {
            var str = this.datos.nombre;
            var matches = str.match(/(\d+)/);
            this.idPacienteSeleccionado=matches[0]
            this.getExpediente();
            //this.addNota()
        },

    },
    mounted(){
        this.obtenerPacientes();
        var date = new Date;
        var minutes = date.getMinutes();
        var hour = date.getHours();
        this.datos.hora=""+hour+":"+minutes
        var today = new Date();
        var dd = ("0" + (today.getDate())).slice(-2);
        var mm = ("0" + (today.getMonth() +1)).slice(-2);
        var yyyy = today.getFullYear();
        this.datos.fecha = yyyy + '-' + mm + '-' + dd ;
    }
}
</script>

<style scoped>
    /* Title */
    @media only screen and (min-width: 1100px) {
        .font-size-vw {
            font-size: 1.7vw
        }
    }

    @media only screen and (max-width: 1100px) {
        .font-size-vw {
            font-size: 2vw
        }
    } 
    
     @media only screen and (max-width: 910px) {
        .font-size-vw {
            font-size: 2.2vw
        }
    } 
    
    @media only screen and (max-width: 810px) {
        .font-size-vw {
            font-size: 2.7vw
        }
    } 

    @media only screen and (max-width: 710px) {
        .font-size-vw {
            font-size: 3vw
        }
    }  

    @media only screen and (max-width: 576px) {
        .font-size-vw {
            font-size: 3.8vw
        }
    } 

    /* Padding stepper */
    @media only screen and (max-width: 992px) {
        .padding_stepper {
            margin-top: 29px;
        }
    }

    /* Size th */
    @media only screen and (min-width: 960px) {
        .size_th {
            width: 13vw;
        }
    }
    @media only screen and (max-width: 960px) {
        .size_th {
            width: 15vw;
        }
    }

    @media only screen and (max-width: 576px) {
        .size_th {
            width: auto;
        }
    } 

    /* Table habitos */
    @media only screen and (min-width: 960px) {
        .size_th_habitos {
            width: 21vw;
        }
    }
    @media only screen and (max-width: 960px) {
        .size_th_habitos {
            width: 35vw;
        }
    }

    @media only screen and (max-width: 768px) {
        .size_th_habitos {
            width: auto;
        }
    } 

    /* Actividad cirujias */
    @media only screen and (min-width: 960px) {
        .size_th_cirujia {
            width: 27vw;
        }
    }
    @media only screen and (max-width: 960px) {
        .size_th_cirujia {
            width: 41vw;
        }
    }

    @media only screen and (max-width: 768px) {
        .size_th_cirujia {
            width: auto;
        }
    } 
    
    
</style>