<template>
    <b-container>
        <b-row>
            <b-col cols="12" sm="12" md="8" lg="8">
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
                            <div class="step step2 active">
                                <button id="step2" @click="formHC('HCFormDos')" class="step-icon" />
                            </div>
                            <div class="indicator-line"></div>
                            <div class="step step3">
                                <button id="step3" @click="formHC('HCFormTres')" class="step-icon" />
                            </div>
                        </section>
                    </div>
                </b-col> 
            </b-row>
            <p class="txt_blue text-uppercase mt-3"><strong>Gineco-obstétricos</strong></p>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="size_th th_style">Menarca</b-th>
                        <b-td class="border_table">
                            <div class="d-flex">
                                <b-form-input v-model="gineco_obstetrico.menarca" class="border-0" size="sm" placeholder="Ingrese la edad" />
                                <span class="float-right px-2">
                                    <small class="txt_gray">años</small>
                                </span>
                            </div>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Ritmo menstrual</b-th>
                        <b-td class="border_table">
                            <div class="d-flex">
                                <b-form-input v-model="gineco_obstetrico.ritmo_menstrual" class="border-0" size="sm" placeholder="Ingrese la días" />
                                <span class="float-right px-2">
                                    <small class="txt_gray">días</small>
                                </span>
                            </div>
                        </b-td>
                    </b-tr>
                     <b-tr>
                        <b-th class="th_style">Ultima regla</b-th>
                        <b-td class="border_table">
                            <div class="d-flex">
                                <b-form-input v-model="gineco_obstetrico.ultima_regla" type="date" class="border-0" size="sm" placeholder="Ingrese la días" />
                                <span class="float-right px-2">
                                    <small class="txt_gray">días</small>
                                </span>
                            </div>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Inicio de vida sexual</b-th>
                        <b-td class="border_table">
                            <div class="d-flex">
                                <b-form-input v-model="gineco_obstetrico.inicio_vida_sexual" class="border-0" size="sm" placeholder="Ingrese la edad" />
                                <span class="float-right px-2">
                                    <small class="txt_gray">años</small>
                                </span>
                            </div>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style"><strong>Método anticonceptivo</strong></b-th>
                        <b-td class="border_table">
                            <b-form-select v-model="gineco_obstetrico.metodo_anticonceptivo_id" :options="metodos" class="border-0" size="sm" placeholder="Seleccionar" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Tiempo usando el método</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="gineco_obstetrico.tiempo_metodo_anticonceptivo" class="border-0" size="sm" placeholder="Ingresa el tiempo usando el método" />
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="size_th th_style">Embarazos</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="gineco_obstetrico.embarazos" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="gineco_obstetrico.embarazos">
                        <b-th class="th_option_color">¿Cuántos?</b-th>
                        <b-td class="border-0">
                            <div class="switch color_contador">
                                <div class="d-flex flex-row justify-content-center px-auto">
                                    <button id="desactivarEm" @click="disminuir('embarazo')" class="py-auto px-1 txt_white border-0 btn_contador_menos">
                                        <strong>-</strong>
                                    </button>
                               
                                    <div class="py-auto px-1">
                                        <small class="txt_white"><strong>{{gineco_obstetrico.cantidad_embarazos}}</strong></small>
                                    </div>

                                    <button @click="aumentar('embarazo')" class="py-auto px-1 txt_white border-0 btn_contador_mas">
                                        <strong>+</strong>
                                    </button>
                                </div>
                            </div>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Partos</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="gineco_obstetrico.partos" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="gineco_obstetrico.partos">
                        <b-th class="th_option_color">
                            ¿Cuántos? <br>
                            <b-row class="mt-2">
                                <b-col cols="12" sm="12" md="9" lg="8">
                                    <b-row>
                                        <b-col cols="12" sm="12" md="12" lg="12">
                                            Fecha de último parto
                                        </b-col>
                                        <b-col cols="12" sm="12" md="11" lg="11">
                                            <b-form-input v-model="control_prenatal.fecha_ultimo_parto" type="date" class="border-0" size="sm" placeholder="DD/MM/AAAA" />
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-th>
                        <b-td class="border-0">
                            <div class="switch color_contador">
                                <div class="d-flex flex-row justify-content-center px-auto">
                                    <button id="desactivarPa" @click="disminuir('partos')" class="py-auto px-1 txt_white border-0 btn_contador_menos">
                                        <strong>-</strong>
                                    </button>
                               
                                    <div class="py-auto px-1">
                                        <small class="txt_white"><strong>{{gineco_obstetrico.cantidad_partos}}</strong></small>
                                    </div>

                                    <button @click="aumentar('partos')" class="py-auto px-1 txt_white border-0 btn_contador_mas">
                                        <strong>+</strong>
                                    </button>
                                </div>
                            </div>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Abortos</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="gineco_obstetrico.abortos" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="gineco_obstetrico.abortos">
                        <b-th class="th_option_color">¿Cuántos?</b-th>
                        <b-td class="border-0">
                            <div class="switch color_contador">
                                <div class="d-flex flex-row justify-content-center px-auto">
                                    <button id="desactivarAb" @click="disminuir('abortos')" class="py-auto px-1 txt_white border-0 btn_contador_menos">
                                        <strong>-</strong>
                                    </button>
                               
                                    <div class="py-auto px-1">
                                        <small class="txt_white"><strong>{{gineco_obstetrico.cantidad_abortos}}</strong></small>
                                    </div>

                                    <button @click="aumentar('abortos')" class="py-auto px-1 txt_white border-0 btn_contador_mas">
                                        <strong>+</strong>
                                    </button>
                                </div>
                            </div>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Cesáreas</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="gineco_obstetrico.cesareas" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="gineco_obstetrico.cesareas">
                        <b-th class="th_option_color">¿Cuántos?</b-th>
                        <b-td class="border-0">
                            <div class="switch color_contador">
                                <div class="d-flex flex-row justify-content-center px-auto">
                                    <button id="desactivarCe" @click="disminuir('cesarea')" class="py-auto px-1 txt_white border-0 btn_contador_menos">
                                        <strong>-</strong>
                                    </button>
                               
                                    <div class="py-auto px-1">
                                        <small class="txt_white"><strong>{{gineco_obstetrico.cantidad_cesareas}}</strong></small>
                                    </div>

                                    <button @click="aumentar('cesarea')" class="py-auto px-1 txt_white border-0 btn_contador_mas">
                                        <strong>+</strong>
                                    </button>
                                </div>
                            </div>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Hijos macrosómicos</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="gineco_obstetrico.hijos_macrosomicos" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="gineco_obstetrico.hijos_macrosomicos">
                        <b-th class="th_option_color">¿Cuántos?</b-th>
                        <b-td class="border-0">
                            <div class="switch color_contador">
                                <div class="d-flex flex-row justify-content-center px-auto">
                                    <button id="desactivarMi" @click="disminuir('hijosMacro')" class="py-auto px-1 txt_white border-0 btn_contador_menos">
                                        <strong>-</strong>
                                    </button>
                               
                                    <div class="py-auto px-1">
                                        <small class="txt_white"><strong>{{gineco_obstetrico.cantidad_hijos_macrosomicos}}</strong></small>
                                    </div>

                                    <button @click="aumentar('hijosMacro')" class="py-auto px-1 txt_white border-0 btn_contador_mas">
                                        <strong>+</strong>
                                    </button>
                                </div>
                            </div>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Hijos con bajo peso al nacer</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="gineco_obstetrico.hijos_con_bajo_peso" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="gineco_obstetrico.hijos_con_bajo_peso">
                        <b-th class="th_option_color">¿Cuántos?</b-th>
                        <b-td class="border-0">
                            <div class="switch color_contador">
                                <div class="d-flex flex-row justify-content-center px-auto">
                                    <button id="desactivarBp" @click="disminuir('hijosbajopeso')" class="py-auto px-1 txt_white border-0 btn_contador_menos">
                                        <strong>-</strong>
                                    </button>
                               
                                    <div class="py-auto px-1">
                                        <small class="txt_white"><strong>{{gineco_obstetrico.cantidad_hijos_con_bajo_peso}}</strong></small>
                                    </div>

                                    <button @click="aumentar('hijosbajopeso')"  class="py-auto px-1 txt_white border-0 btn_contador_mas">
                                        <strong>+</strong>
                                    </button>
                                </div>
                            </div>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <p class="txt_blue text-uppercase pt-3"><strong>Control prenatal</strong></p>
            <b-row>
                <b-col cols="12" sm="12" md="6" lg="6">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="size_th_control_parental th_style">F.U.M.</b-th>
                                <b-td class="border_table">
                                    <b-form-input type="date" v-model="control_prenatal.fum" class="border-0" size="sm" placeholder="DD/MM/AAAA" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">F.P.P.</b-th>
                                <b-td class="border_table">
                                    <b-form-input type="date" v-model="control_prenatal.fpp" class="border-0" size="sm" placeholder="DD/MM/AAAA" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">F.C.F.</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="control_prenatal.fcf" class="border-0" size="sm" />
                                        <span class="float-right px-2">
                                            <small class="txt_gray">/min</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">F.U.</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="control_prenatal.fu" class="border-0" size="sm" />
                                        <span class="float-right px-2">
                                            <small class="txt_gray">cm</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">S.D.G.</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="control_prenatal.sdp" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">T.A.</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <div>
                                            <b-form-input v-model="control_prenatal.tension_arterial" class="text-center border-0" size="sm" placeholder="#"/>
                                        </div>
                                        <div class="txt_gray px-1">/</div>
                                        <div>
                                            <b-form-input v-model="control_prenatal.tension_arterial" class="text-center border-0" size="sm" placeholder="#"/>
                                        </div>
                                    </div>
                                    <!-- <b-form-input v-model="control_prenatal.tension_arterial" class="border-0" size="sm" placeholder="/"/> -->
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">En +</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="control_prenatal.en" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Pulso</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="control_prenatal.pulso" class="border-0" size="sm" />
                                        <span class="float-right px-2">
                                            <small class="txt_gray">/min</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Respiración</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="control_prenatal.respiracion" class="border-0" size="sm" />
                                        <span class="float-right px-2">
                                            <small class="txt_gray">/min</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Situación</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="control_prenatal.situacion" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
                <b-col cols="12" sm="12" md="6" lg="6">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="size_th_control_parental th_style">Presentación</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="control_prenatal.presentacion" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Peso</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="control_prenatal.peso" class="border-0" size="sm" />
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
                                        <b-form-input v-model="control_prenatal.talla" class="border-0" size="sm" />
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
                                        <b-form-input v-model="control_prenatal.temperatura" class="border-0" size="sm" />
                                        <span class="float-right px-2">
                                            <small class="txt_gray">°C</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Dorso</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="control_prenatal.dorso" :options="dorso" class="border-0" size="sm" placeholder="seleccionar" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Edema</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="control_prenatal.edema" :options="factorRh" class="border-0" size="sm" placeholder="seleccionar" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Factor Rh</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="control_prenatal.factor_rh" :options="factorRh"  class="border-0" size="sm" placeholder="seleccionar" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th rowspan="2" class="th_style pt-4">Grupo sanguíneo</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="control_prenatal.grupo_sanguineo" :options="grupo_sanguineo" class="border-0" size="sm" placeholder="seleccionar" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-td class="border_table">
                                    <b-row>
                                        <b-col cols="12 py-1">
                                            <div class="d-flex">
                                                <span class="px-2 txt_gray rbtn_text">
                                                    Positivo
                                                </span>
                                                <b-form-radio v-model="grupo_sanguineo_Signo" value="+" class="rbtn_color ml-2" size="sm" />
                                            </div>
                                        </b-col>
                                        <b-col cols="12 py-1">
                                            <div class="d-flex">
                                                <span class="px-2 txt_gray rbtn_text">
                                                    Negativo
                                                </span>
                                                <b-form-radio v-model="grupo_sanguineo_Signo" value="-" class="rbtn_color" size="sm" />
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>
            <div class="d-flex justify-content-end mb-4">
                <b-col cols="5" sm="12" md="5" lg="5">
                    <button @click="switchComponent('HCFormTres')" class="btn_formluario border-0 btn-block py-2 txt_white">SIGUIENTE</button>
                </b-col>
            </div>
        </b-container>
    </b-container>
</template>

<script>
import { EventBus } from "../../../EventBus";

export default {
    name: 'FormDos',

    data:() => ({
        numero: 1,
        datosAntecedentes:null,
        datosPatologicos:null,
        gineco_obstetrico: {
            expediente_id: "",
            menarca: "",
            ritmo_menstrual: "",
            ultima_regla: "",
            inicio_vida_sexual: "",
            embarazos: false,
            cantidad_embarazos: 0,
            partos: false,
            cantidad_partos: 0,
            fecha_ultimo_parto: "",
            abortos: false,
            cantidad_abortos: 0,
            cesareas: false,
            cantidad_cesareas: 0,
            hijos_macrosomicos: false,
            cantidad_hijos_macrosomicos: 0,
            hijos_con_bajo_peso: false,
            cantidad_hijos_con_bajo_peso: 0,
            metodo_anticonceptivo_id: null,
            tiempo_metodo_anticonceptivo: ""
        },
        "metodos": [
        {
            value: null,
            text: "Seleccionar"
        },
        {
            value: 1,
            text: "Natural"
        },
        {
            value: 2,
            text: "Preservativo"
        },
        {
            value: 3,
            text: "DIU"
        },
        {
            value: 4,
            text: "Quirúrgico"
        },
        {
            value: 5,
            text: "Hormonal"
        },
        {
            value: 6,
            text: "Otro"
        }
    ],
        control_prenatal: {
            expediente_id: 1,
            fum: "",
            fpp: "",
            sdp: "",
            fu: "",
            fcf: "",
            en: "",
            tension_arterial: "",
            situacion: "",
            presentacion: "",
            dorso: "",
            pulso: "",
            respiracion: "",
            peso: "",
            talla: "",
            edema: null,
            temperatura: "",
            factor_rh: null,
            grupo_sanguineo: ""
        },
        dorso:[
            {
                value:"",
                text:"seleccionar"
            },
            {
                value:"Izquierdo",
                text:"Izquierdo"
            },
            {
                value:"Derecho",
                text:"Derecho"
            },
        ],
        factorRh:[
            {
                value:null,
                text:'seleccionar'
            },
            {
                value:true,
                text:'Positivo'
            },
            {
                value:false,
                text:'Negativo'
            }
        ],
        grupo_sanguineo:[
            {
                value:"",
                text:"Seleccionar"
            },
            {
                value:"A",
                text:"A"
            },
            {
                value:"B",
                text:"B"
            },
            {
                value:"AB",
                text:"AB"
            },
            {
                value:"O",
                text:"O"
            }
        ],
        grupo_sanguineo_Signo:""

    }),

    methods: {
        formHC(value) {
            EventBus.$emit('changeHC', value);
        },

        switchComponent(value) {
            EventBus.$emit('nextHCThree', value);
            setTimeout(()=>{
            EventBus.$emit('nextHCThreeDatos',this.datosAntecedentes,this.datosPatologicos,this.gineco_obstetrico,this.control_prenatal)
            }, 1000);
        },

        disminuir(value) {
            switch (value) {
                case 'embarazo':
                    if (this.gineco_obstetrico.cantidad_embarazos<=1) {
                        document.getElementById('desactivarEm').disabled = false; 
                    }else{
                        this.gineco_obstetrico.cantidad_embarazos--
                    }
                    break;
                case 'partos':
                    if (this.gineco_obstetrico.cantidad_partos<=1) {
                        document.getElementById('desactivarPa').disabled = false; 
                    }else{
                        this.gineco_obstetrico.cantidad_partos--
                    }
                    break;
                case 'abortos':
                    if (this.gineco_obstetrico.cantidad_abortos<=1) {
                        document.getElementById('desactivarAb').disabled = false; 
                    }else{
                        this.gineco_obstetrico.cantidad_abortos--
                    }
                    break;
                case 'cesarea':
                    if (this.gineco_obstetrico.cantidad_cesareas<=1) {
                        document.getElementById('desactivarCe').disabled = false; 
                    }else{
                        this.gineco_obstetrico.cantidad_cesareas--
                    }
                    break;
                case 'hijosMacro':
                    if (this.gineco_obstetrico.cantidad_hijos_macrosomicos<=1) {
                        document.getElementById('desactivarMi').disabled = false; 
                    }else{
                        this.gineco_obstetrico.cantidad_hijos_macrosomicos--
                    }
                    break;
                case 'hijosbajopeso':
                    if (this.gineco_obstetrico.cantidad_hijos_con_bajo_peso<=1) {
                        document.getElementById('desactivarBp').disabled = false; 
                    }else{
                        this.gineco_obstetrico.cantidad_hijos_con_bajo_peso--
                    }
                    break;
            
                default:
                    break;
            }
        },

        aumentar(value) {
            switch (value) {
                case 'embarazo':
                    this.gineco_obstetrico.cantidad_embarazos++;
                    break;
                case 'partos':
                    this.gineco_obstetrico.cantidad_partos++;
                    break;
                case 'abortos':
                    this.gineco_obstetrico.cantidad_abortos++;
                    break;
                case 'cesarea':
                    this.gineco_obstetrico.cantidad_cesareas++;
                    break;
                case 'hijosbajopeso':
                    this.gineco_obstetrico.cantidad_hijos_con_bajo_peso++;
                    break;
                case 'hijosMacro':
                    this.gineco_obstetrico.cantidad_hijos_macrosomicos++;
                    break;
                default:
                    break;
            }
        }
    },
    mounted(){
        EventBus.$on('nextHCTwoDatos', (datosAntecedentes,datosPatologicos) =>{
            this.control_prenatal.expediente_id=datosPatologicos.expediente_id
            this.gineco_obstetrico.expediente_id=datosAntecedentes.expediente_id
            this.datosAntecedentes=datosAntecedentes;
            this.datosPatologicos=datosPatologicos
        });
    }
}
</script>

<style scoped>
    @media only screen and (min-width: 1200px) {
        .size_th {
            width: 21vw;
        }
    }

    @media only screen and (min-width: 900px) {
        .size_th_control_parental {
            width: 10vw;
        }
    }

    @media only screen and (max-width: 900px) {
        .size_th_control_parental {
            width: 20vw;
        }
    }
</style>