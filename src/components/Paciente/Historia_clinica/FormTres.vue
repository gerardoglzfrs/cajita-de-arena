<template>
    <b-container>
        <b-row>
            <b-col cols="12" sm="12" md="12" lg="12">
                <h2 class="txt_red text-uppercase pl-3">Historia clínica</h2>
            </b-col>
        </b-row>

        <b-container class="margen">
            <b-row>
                <b-col class="p-0" cols="12" sm="12" md="12" lg="3">
                    <div class="container">
                        <section class="step-indicator">
                            <div class="step step1">
                                <button id="step1" @click="formHC('HCFormUno')" class="step-icon" />
                            </div>
                            <div class="indicator-line"></div>
                            <div class="step step2">
                                <button id="step2" @click="formHC('HCFormDos')" class="step-icon" />
                            </div>
                            <div class="indicator-line"></div>
                            <div class="step step3 active">
                                <button id="step3" @click="formHC('HCFormTres')" class="step-icon" />
                            </div>
                        </section>
                    </div>
                </b-col> 
            </b-row>
            <p class="txt_blue text-uppercase pt-3"><strong>Interrogatorio</strong></p>

            <p class="txt_blue">Padecimiento actual</p>
            <b-form-textarea v-model="interrogatorio.padecimiento_actual" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Aparatos y sistemas</p>
            <b-form-textarea v-model="interrogatorio.aparatos_sistemas" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Síntomas generales</p>
            <b-form-textarea v-model="interrogatorio.sintomas_generales" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Exámenes de laboratorio y gabinete</p>
            <b-form-textarea v-model="interrogatorio.examenes_lab_gabninete" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Estudios auxiliares</p>
            <b-form-textarea v-model="interrogatorio.estudios_auxiliares" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Resultado de estudios auxiliares de diagnóstico previos</p>
            <b-form-textarea v-model="interrogatorio.resultados" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Diagnósticos previos</p>
            <b-form-textarea v-model="interrogatorio.diagnosticos_previos" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Terapéutica previa y resultados obtenidos</p>
            <b-form-textarea v-model="interrogatorio.terapeutica_previa_resultados" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Diagnósticos definitivos</p>
            <b-form-textarea v-model="interrogatorio.diagnosticos_definitivos" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Tratamiento</p>
            <b-form-textarea v-model="interrogatorio.tratamiento" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-3">Exploración física</p>
            <b-row>
                <b-col cols="12" sm="12" md="5" lg="5">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="size_th th_style">Peso</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="exploracion.peso" class="border-0" size="sm" />
                                        <span class="float-right px-2">
                                            <small class="txt_gray">kg</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Talla</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="exploracion.talla" class="border-0" size="sm" />
                                        <span class="float-right px-2">
                                            <small class="txt_gray">cm</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Temperatura</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="exploracion.temperatura" class="border-0" size="sm" />
                                        <span class="float-right px-2">
                                            <small class="txt_gray">°C</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">SPO2</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="exploracion.spo2" class="border-0" size="sm" />
                                        <span class="float-right px-2">
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
                                        <b-form-input v-model="exploracion.frecuencia_cardiaca" class="border-0" size="sm" />
                                        <span class="float-right px-2">
                                            <small class="txt_gray">/min</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Frecuencia respiratoria</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="exploracion.frecuencia_respiratoria" class="border-0" size="sm" />
                                        <span class="float-right px-2">
                                            <small class="txt_gray">/min</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style size_th_precion">Presión arterial</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <div>
                                            <b-form-input v-model="exploracion.presion_arterial" class="text-center border-0" size="sm" placeholder="#"/>
                                        </div>
                                        <div class="txt_gray px-1">/</div>
                                        <div>
                                            <b-form-input v-model="exploracion.presion_arterial" class="text-center border-0" size="sm" placeholder="#"/>
                                        </div>
                                    </div>
                                    <!-- <div class="d-flex">
                                        <b-form-input v-model="exploracion.presion_arterial" class="border-0" size="sm" />
                                        <span class="float-right px-2">
                                            <small class="txt_gray">/</small>
                                        </span>
                                    </div> -->
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>
            
            <p class="txt_blue mt-2">Inspección general</p>
            <b-form-textarea v-model="exploracion.inspeccion_general" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Cabeza</p>
            <b-form-textarea v-model="exploracion.cabeza" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Cuello</p>
            <b-form-textarea v-model="exploracion.cuello" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Tórax</p>
            <b-form-textarea v-model="exploracion.torax" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Abdomen</p>
            <b-form-textarea v-model="exploracion.abdomen" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Columna vertebral</p>
            <b-form-textarea v-model="exploracion.columna_vertebral" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Genitales externos</p>
            <b-form-textarea v-model="exploracion.genitales_externos" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Tacto rectal</p>
            <b-form-textarea v-model="exploracion.tacto_rectal" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Tacto vaginal</p>
            <b-form-textarea v-model="exploracion.tacto_vaginal" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <p class="txt_blue mt-2">Extremidades</p>
            <b-form-textarea v-model="exploracion.extremidades" class="txtArea_border" size="sm" no-resize debounce="500" rows="2" max-rows="2" />

            <ul class="mt-3">
                <li>Se requiere nombre y firma del médico</li>
            </ul>
            <div class="d-flex justify-content-end mb-4">
                <b-col cols="5" sm="12" md="5" lg="5">
                    <button class="btn_formluario border-0 btn-block py-2 txt_white" @click="saveDatosAntecedentes()">GUARDAR</button>
                </b-col>
            </div>
        </b-container>
    </b-container>
</template>

<script>
import { EventBus } from "../../../EventBus";
import { url } from "../../../../settings";

export default {
    name: 'FormTres',

    data:() => ({

        interrogatorio:
        {
            expediente_id: null,
            padecimiento_actual: "",
            aparatos_sistemas: "",
            sintomas_generales: "",
            examenes_lab_gabninete: "",
            estudios_auxiliares: "",
            diagnosticos_previos: "",
            terapeutica_previa_resultados: "",
            diagnosticos_definitivos: "",
            tratamiento: ""
        },
        exploracion: {
            expediente_id: null,
            peso: null,
            talla: null,
            frecuencia_cardiaca: null,
            frecuencia_respiratoria: null,
            presion_arterial: "",
            temperatura: null,
            saturacion_oxigeno: null,
            inspeccion_general: "",
            cabeza: "",
            torax: "",
            abdomen: "",
            columna_vertebral: "",
            genitales_externos: "",
            tacto_rectal: "",
            tacto_vaginal: "",
            extremidades: ""
        },
        datosAntecedentes:null,
        datosPatologicos:null,
        gineco_obstetrico:null,
        control_prenatal:null,
    }),

    methods: {
        formHC(value) {
            EventBus.$emit('changeHC', value);
            
        },

        async saveDatosAntecedentes() {

            try {
                const res = await fetch(`${url}/api/historia_clinica/antecedentes/store`, {
                    method: 'post',
                    headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.datosAntecedentes),
                });
                const data = res.json();
                console.log(data)
                
                var promise = Promise.resolve(data);
                await promise.then(function(val) {
                    console.log(val)
                });
                this.saveDatosPatologicos()
            } catch (error) {
                console.log(error);
            }
       },
       async saveDatosPatologicos() {

            try {
                const res = await fetch(`${url}/api/historia_clinica/no_patologicos/store`, {
                    method: 'post',
                    headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.datosPatologicos),
                });
                const data = res.json();
                console.log(data)
                
                var promise = Promise.resolve(data);
                await promise.then(function(val) {
                    console.log(val)
                });
                this.saveGineco_obstetrico()
            } catch (error) {
                console.log(error);
            }
       },
       async saveGineco_obstetrico() {

            try {
                const res = await fetch(`${url}/api/historia_clinica/gineco_obstetricos/store`, {
                    method: 'post',
                    headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.gineco_obstetrico),
                });
                const data = res.json();
                console.log(data)
                
                var promise = Promise.resolve(data);
                await promise.then(function(val) {
                    console.log(val)
                });
                this.saveControl_prenatal()
            } catch (error) {
                console.log(error);
            }
       },
       async saveControl_prenatal() {

            try {
                const res = await fetch(`${url}/api/historia_clinica/control_prenatal/store`, {
                    method: 'post',
                    headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.control_prenatal),
                });
                const data = res.json();
                console.log(data)
                
                var promise = Promise.resolve(data);
                await promise.then(function(val) {
                    console.log(val)
                });
                this.saveInterrogatorio()
            } catch (error) {
                console.log(error);
            }
       },
       async saveInterrogatorio() {

            try {
                const res = await fetch(`${url}/api/historia_clinica/interrogatorio/store`, {
                    method: 'post',
                    headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.interrogatorio),
                });
                const data = res.json();
                console.log(data)
                
                var promise = Promise.resolve(data);
                await promise.then(function(val) {
                    console.log(val)
                });
                this.saveExploracion_fisca()
            } catch (error) {
                console.log(error);
            }
       },
       async saveExploracion_fisca() {
           console.log(JSON.stringify(this.exploracion),)
            try {
                const res = await fetch(`${url}/api/historia_clinica/exploracion_fisica/store`, {
                    method: 'post',
                    headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.exploracion),
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


    },
    mounted(){
        EventBus.$on("nextHCThreeDatos",(datosAntecedentes,datosPatologicos,gineco_obstetrico,control_prenatal)=>{
            this.exploracion.expediente_id=datosAntecedentes.expediente_id
            this.interrogatorio.expediente_id=datosAntecedentes.expediente_id
            this.datosAntecedentes=datosAntecedentes
            this.datosPatologicos=datosPatologicos
            this.gineco_obstetrico=gineco_obstetrico
            this.control_prenatal=control_prenatal
        })
    }
}

</script>

<style scoped>
    @media only screen and (min-width: 1100px) {
        .size_th_precion {
            width: 15vw;
        }
    }

    @media only screen and (max-width: 992px) {
        .size_th_precion {
            width: 20vw;
        }
    }

    @media only screen and (max-width: 768px) {
        .size_th_precion {
            width: 15vw;
        }
    }

     @media only screen and (max-width: 760px) {
        .size_th_precion {
            width: 30vw;
        }
    }

    /*  */

    @media only screen and (min-width: 760px) {
        .size_th {
            width: 8vw;
        }
    }

     @media only screen and (max-width: 760px) {
        .size_th {
            width: 30vw;
        }
    }

    .margen {
        margin-top: 29px;
    }
</style>