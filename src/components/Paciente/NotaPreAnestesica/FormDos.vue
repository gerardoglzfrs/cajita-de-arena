<template>
    <b-container>
        <b-row>
            <b-col cols="12" sm="12" md="12" lg="12">
                <h2 class="font-size-vw txt_red text-uppercase pl-3">Hoja de valoración pre-anestésica</h2>
            </b-col>
        </b-row> 

        <b-container>
            <b-row class="margen">
                <b-col class="p-0" cols="12" sm="12" md="12" lg="3">
                    <div class="container">
                        <section class="step-indicator">
                            <div class="step step1">
                                <button id="step1" @click="formNotaPreA('NotaPreAnestesicaUno')" class="step-icon" />
                            </div>
                            <div class="indicator-line"></div>
                            <div class="step step2 active">
                                <button id="step2" @click="formNotaPreA('NotaPreAnestesicaDos')" class="step-icon" />
                            </div>
                        </section>
                    </div>
                </b-col> 
            </b-row>

            <b-row class="mt-3">
                <b-col cols="12" sm="12" md="5" lg="5">
                    <b-table-simple class="table-sm">
                            <b-tbody>  
                                <b-tr>
                                    <b-th class="th_style size_th">Peso</b-th>
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
                                <b-th class="th_style">Superficie corporal</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.superficie_corporal" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
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
                                <b-th class="th_style">Presión arterial</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.presion_alta" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray pr-4">
                                            <small class="txt_gray">/</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>
            <b-row class="mt-3">
                <b-col cols="12" sm="12" md="5" lg="5">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style">Horas de ayuno</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.horas_ayuno" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">horas</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Estado de hidratación</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.estado_hidratacion" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
                <b-col cols="12" sm="12" md="7" lg="7">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style">Escala de Glasgow</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.escala_glasgow" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Estado psiquiátrico</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.estado_psiquiatrico" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Color de egumentos</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.color_egumentos" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>
            
            <b-table-simple class="table-sm mt-3">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style">Cabeza</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.cabeza" class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Cuello</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.cuello" class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Cavidad oral</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.cavidad_oral" class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Tórax</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.torax" class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Área cardiaca</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.area_cardiaca" class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Abdomen</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.abdomen" class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Otros hallazgos</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.otros_hayazgos" class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
            
            <b-row>
                <b-col cols="12" sm="12" md="6" lg="6">
                    <b-table-simple class="table-sm mt-3">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style">V.C.S.</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.vcs" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Hb</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.hb" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Hto</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.hto" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">TT</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.tt" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">TP</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.tp" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">TPT</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.tpt" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Na</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.na" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">K</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.k" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Cl</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.ci" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Mg</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.mg" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
                <b-col cols="12" sm="12" md="6" lg="6">
                    <b-table-simple class="table-sm mt-3">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style">Grupo Rh</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.grupo_rh" :options="normalidad" class="border-0" size="sm" placeholder="seleccionar"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Tele de tórax</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="datos.tele_torax_id" :options="normalidad" class="border-0" size="sm" placeholder="seleccionar"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">E.G.O.</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="datos.ego_id" :options="normalidad"  class="border-0" size="sm" placeholder="seleccionar"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">E.C.G.</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="datos.ecg_id" :options="normalidad" class="border-0" size="sm" placeholder="seleccionar"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">VIH</b-th>
                                <b-td class="border_table">
                                    <label class="switch">
                                        <input v-model="datos.vih" type="checkbox">
                                    <span class="slider round"></span>
                            </label>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">ASA</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="datos.asa_id" :options="numeros_romanos" class="border-0" size="sm" placeholder="seleccionar"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">NYHA</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="datos.nyha_id" :options="numeros_romanos" class="border-0" size="sm" placeholder="seleccionar"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">GOLMAN</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="datos.golman_id" :options="numeros_romanos" class="border-0" size="sm" placeholder="seleccionar"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Gasometría</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="datos.gasometria_id" :options="normalidad" class="border-0" size="sm" placeholder="seleccionar"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Génito urinario</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="datos.genito_urinario_id" :options="normalidad" class="border-0" size="sm" placeholder="seleccionar"/>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>

            <b-row class="mt-3">
                <b-col cols="12" sm="12" md="5" lg="5">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style">Plaquetas</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.planquetas" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Glucosa</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.glucosa" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Urea</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.urea" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Creat</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.creat" class="border-0" size="sm" />
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
                <b-col cols="12" sm="12" md="7" lg="7">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style">Sangrado permisible</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.sangrado_permisible" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">cm³</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Sangre de reserva</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.sangre_reserva" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">Unidades</small>
                                        </span>
                                    </div>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Hemodilución</b-th>
                                <b-td class="border_table">
                                    <b-row>
                                        <b-col cols="8">
                                            <b-row class="pl-2">
                                                <b-col cols="12" sm="12" md="6" lg="6">
                                                    <div class="d-flex pl-4">
                                                        <span class="px-2 txt_gray rbtn_text">
                                                            Sí
                                                        </span>
                                                        <b-form-radio v-model="datos.hemodilucion" v-bind:value='true' class="rbtn_color" size="md" />
                                                    </div>
                                                </b-col>
                                                <b-col cols="12" sm="12" md="6" lg="6">
                                                    <div class="d-flex pl-2">
                                                        <span class="px-2 txt_gray rbtn_text">
                                                            No
                                                        </span>
                                                        <b-form-radio v-model="datos.hemodilucion" class="rbtn_color" size="md" />
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>

            <b-table-simple class="table-sm mt-3">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style">Otros exámenes</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.otros_examenes" class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <b-row>
                <b-col class="mt-3" cols="12">
                    <p class="txt_blue">Nota preanestésica, vigilancia y riesgo anestésico</p>
                    <b-form-textarea v-model="datos.nota_preanestesica" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                </b-col>
                <b-col cols="12">
                    <p class="txt_blue mt-3">Medicación preanestésica</p>
                    <b-form-textarea v-model="datos.medicacion_preanestésica" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                </b-col>
                <b-col cols="12">
                    <p class="txt_blue mt-3">Plan anestésico</p>
                    <b-form-textarea v-model="datos.plan_anestesico" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                </b-col>
                <b-col cols="12">
                    <p class="txt_blue mt-3">Observaciones</p>
                    <b-form-textarea v-model="datos.observaciones" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                </b-col>
            </b-row>  
            
            <ul class="mt-3">
                <li>Se requiere nombre y firma del médico</li>
            </ul>
            <div class="d-flex justify-content-end mb-4">
                <b-col cols="5" sm="12" md="5" lg="5">
                    <button class="btn_formluario border-0 btn-block py-2 txt_white" @click="guardar()">GUARDAR</button>
                </b-col>
            </div>      
        </b-container>
    </b-container>
</template>

<script>
import { EventBus } from "../../../EventBus"
import { url } from "../../../../settings";

export default {
    name:"FormDos",
    data:()=>({
        datosFormUno:{},
        allDatos:{
            no_habitacion: null,
            expediente_id: null,
            fecha: "",//O
            hora: "",//O
            genero_id: null,
            fuma: false,
            cigarros: null,
            bebe: false,
            bebidas_alcoholicas: null,
            emplea_drogas: false,
            drogas: 0,
            actividad_fisica_id: null,
            complicaciones_anestesias_previas: false,
            cuales_complicaciones_anestesias: null,
            complicaciones_anestesias_previas_familia: false,
            cuales_complicaciones_anestesias_familia: null,
            escala_glasgow: "",
            refriado: false,
            fiebre: false,
            garganta_inflamada: false,
            protesis_dentales: false,
            bronquitis: false,
            dientes_flojos: false,
            laringuitis: false,
            dientes_rotos: false,
            paralisis: false,
            nausea_vomito: false,
            presion_alta: false,
            vision_borrosa_perdida: false,
            artritis: false,
            problemas_rinion_vejiga: false,
            diabetes: false,
            sangrado_excesivo: false,
            asma_enfisema_neumonia: false,
            sangre_orina_excremento: false,
            mareos_movimiento: false,
            problemas_higado: false,
            dolor_espalda_cuello: false,
            ataques_espilepsia: false,
            dolor_pecho_ejercicio: false,
            ataque_falla_cardiaca: false,
            dolor_piernas_ejercicio: false,
            cancer: false,
            hinchazon_piernas_tobillos: false,
            medicamentos_alternativos: false,
            tos_espectoracion_cronica: false,
            padecimientos_observaciones: "",
            //form 2
            peso: "",
            talla: "",
            superficie_corporal: "",
            frecuencia_cardiaca: "",
            temperatura: "",
            estado_psiquiatrico: "",
            color_egumentos: "",
            horas_ayuno: "",
            estado_hidratacion: "",
            cabeza: "",
            cuello: "",
            cavidad_oral: "",
            torax: "",
            area_cardiaca: "",
            abdomen: "",
            otros_hayazgos: '',
            vcs: "",
            hb: "",
            hto: "",
            grupo_rh:"",
            tt: "",
            tp: "",
            tpt: "",
            tele_torax_id: "",
            na: "",
            k: "",
            ci: "",
            mg: "",
            ego_id: "",
            ecg_id: "",
            vih: false,
            asa_id: "",
            nyha_id: "",
            golman_id: "",
            gasometria_id: "",
            genito_urinario_id: "",
            sangrado_permisible: "",
            sangre_reserva: "",
            planquetas: "",
            glucosa: "",
            urea: "",
            creat: "",
            hemodilucion: false,
            otros_examenes: '',
            nota_preanestesica: "",
            medicacion_preanestésica: "",
            plan_anestesico: "",
            observaciones: ""
        },
        datos:{
            "peso": "",//Requerido y numérico
            "talla": "",//Requerido y numérico    
            "superficie_corporal": "",//Requerido y numérico//Requerido y numérico
            "frecuencia_cardiaca": "",//Requerido y numérico
            "temperatura": "",//Requerido y numérico
            "estado_psiquiatrico": "",//Requerido y string
            "color_egumentos": "",//Requerido y string
            "horas_ayuno": "",//Requerido y numérico
            "estado_hidratacion": "",//Requerido y string
            "cabeza": "",//Requerido y string
            "cuello": "",//Requerido y string
            "cavidad_oral": "",//Requerido y string
            "torax": "",//Requerido y string
            "area_cardiaca": "",//Requerido y string
            "abdomen": "",//Requerido y string
            "otros_hayazgos": '',//Abierto
            "vcs": "",//Requerido y string
            "hb": "",//Requerido y numérico
            "hto": "",//Requerido y numérico
            "grupo_rh":"",//Requerido y string
            "tt": "",//Requerido y numérico
            "tp": "",//Requerido y numérico
            "tpt": "",//Requerido y numérico
            "tele_torax_id": "",//Obligatorio (Catálogo de normalidad)
            "na": "",//Requerido y numérico
            "k": "",//Requerido y numérico
            "ci": "",//Requerido y numérico
            "mg": "",//Requerido y numérico
            "ego_id": "",//Obligatorio (Catálogo de normalidad)
            "ecg_id": "",//Obligatorio (Catálogo de normalidad)
            "vih": false,//True o False
            "asa_id": "",//Obligatorio (Catálogo de numeros romanos)
            "nyha_id": "",//Obligatorio (Catálogo de numeros romanos)
            "golman_id": "",//Obligatorio (Catálogo de numeros romanos)
            "gasometria_id": "",//Obligatorio (Catálogo de normalidad)
            "genito_urinario_id": "",//Obligatorio (Catálogo de normalidad)
            "sangrado_permisible": "",//Requerido y numérico
            "sangre_reserva": "",//Requerido y numérico
            "planquetas": "",//Requerido y numérico
            "glucosa": "",//Requerido y numérico
            "urea": "",//Requerido y numérico
            "creat": "",//Requerido y numérico
            "hemodilucion": false,//True o False
            "otros_examenes": '',//Abierto
            "nota_preanestesica": "",//Requerido y string
            "medicacion_preanestésica": "",//Requerido y string
            "plan_anestesico": "",//Requerido y string
            "observaciones": 'No hay',//Abierto
            escala_glasgow:"20"
        },
        "normalidad": [
            {
                value: null,
                text: "seleccionar"
            },
            {
                "value": 1,
                "text": "Normal"
            },
            {
                "value": 2,
                "text": "Anormal"
            }
        ],
        "numeros_romanos": [
            {
                value: null,
                text: "seleccionar"
            },
            {
                "value": 1,
                "text": "I"
            },
            {
                "value": 2,
                "text": "II"
            },
            {
                "value": 3,
                "text": "III"
            },
            {
            "value": 4,
            "text": "IV"
            }
        ]
    }),
    methods: {
        formNotaPreA(value) {
            EventBus.$emit('changeStepperPreAnestesica', value);
        },
        guardar(){
        //     var f1= this.datosFormUno
        //     var f2 = this.datos
        //     setTimeout(() => {
        //         const data = {...f1, ...f2};
        //         console.log(data)
                
        //     }, 100);

            this.allDatos.no_habitacion=this.datosFormUno.no_habitacion
            this.allDatos.expediente_id=this.datosFormUno.expediente_id
            this.allDatos.fecha=this.datosFormUno.fecha
            this.allDatos.hora=this.datosFormUno.hora
            this.allDatos.genero_id=this.datosFormUno.genero_id
            this.allDatos.fuma=this.datosFormUno.fuma
            this.allDatos.cigarros=this.datosFormUno.cigarros
            this.allDatos.bebe=this.datosFormUno.bebe
            this.allDatos.bebidas_alcoholicas=this.datosFormUno.bebidas_alcoholicas
            this.allDatos.emplea_drogas=this.datosFormUno.emplea_drogas
            this.allDatos.drogas=this.datosFormUno.drogas
            this.allDatos.actividad_fisica_id=this.datosFormUno.actividad_fisica_id
            this.allDatos.complicaciones_anestesias_previas=this.datosFormUno.complicaciones_anestesias_previas
            this.allDatos.cuales_complicaciones_anestesias=this.datosFormUno.cuales_complicaciones_anestesias
            this.allDatos.complicaciones_anestesias_previas_familia=this.datosFormUno.complicaciones_anestesias_previas_familia
            this.allDatos.cuales_complicaciones_anestesias_familia=this.datosFormUno.cuales_complicaciones_anestesias_familia
            this.allDatos.refriado=this.datosFormUno.refriado
            this.allDatos.fiebre=this.datosFormUno.fiebre
            this.allDatos.garganta_inflamada=this.datosFormUno.garganta_inflamada
            this.allDatos.protesis_dentales=this.datosFormUno.protesis_dentales
            this.allDatos.bronquitis=this.datosFormUno.bronquitis
            this.allDatos.dientes_flojos=this.datosFormUno.dientes_flojos
            this.allDatos.laringuitis=this.datosFormUno.laringuitis
            this.allDatos.dientes_rotos=this.datosFormUno.dientes_rotos
            this.allDatos.paralisis=this.datosFormUno.paralisis
            this.allDatos.nausea_vomito=this.datosFormUno.nausea_vomito
            this.allDatos.presion_alta=this.datosFormUno.presion_alta
            this.allDatos.vision_borrosa_perdida=this.datosFormUno.vision_borrosa_perdida
            this.allDatos.artritis=this.datosFormUno.artritis
            this.allDatos.problemas_rinion_vejiga=this.datosFormUno.problemas_rinion_vejiga
            this.allDatos.diabetes=this.datosFormUno.diabetes
            this.allDatos.sangrado_excesivo=this.datosFormUno.sangrado_excesivo
            this.allDatos.asma_enfisema_neumonia=this.datosFormUno.asma_enfisema_neumonia
            this.allDatos.sangre_orina_excremento=this.datosFormUno.sangre_orina_excremento
            this.allDatos.mareos_movimiento=this.datosFormUno.mareos_movimiento
            this.allDatos.problemas_higado=this.datosFormUno.problemas_higado
            this.allDatos.dolor_espalda_cuello=this.datosFormUno.dolor_espalda_cuello
            this.allDatos.ataques_espilepsia=this.datosFormUno.ataques_espilepsia
            this.allDatos.dolor_pecho_ejercicio=this.datosFormUno.dolor_pecho_ejercicio
            this.allDatos.ataque_falla_cardiaca=this.datosFormUno.ataque_falla_cardiaca
            this.allDatos.dolor_piernas_ejercicio=this.datosFormUno.dolor_piernas_ejercicio
            this.allDatos.cancer=this.datosFormUno.cancer
            this.allDatos.hinchazon_piernas_tobillos=this.datosFormUno.hinchazon_piernas_tobillos
            this.allDatos.medicamentos_alternativos=this.datosFormUno.medicamentos_alternativos
            this.allDatos.tos_espectoracion_cronica=this.datosFormUno.tos_espectoracion_cronica
            this.allDatos.padecimientos_observaciones=this.datosFormUno.padecimientos_observaciones

            //datos form 2

            this.allDatos.escala_glasgow=this.datos.escala_glasgow
            this.allDatos.peso = this.datos.peso;
            this.allDatos.talla = this.datos.talla;
            this.allDatos.superficie_corporal = this.datos.superficie_corporal;
            this.allDatos.frecuencia_cardiaca = this.datos.frecuencia_cardiaca;
            this.allDatos.temperatura = this.datos.temperatura;
            this.allDatos.estado_psiquiatrico = this.datos.estado_psiquiatrico;
            this.allDatos.color_egumentos = this.datos.color_egumentos;
            this.allDatos.horas_ayuno = this.datos.horas_ayuno;
            this.allDatos.estado_hidratacion = this.datos.estado_hidratacion;
            this.allDatos.cabeza = this.datos.cabeza;
            this.allDatos.cuello = this.datos.cuello;
            this.allDatos.cavidad_oral = this.datos.cavidad_oral;
            this.allDatos.torax = this.datos.torax;
            this.allDatos.area_cardiaca = this.datos.area_cardiaca;
            this.allDatos.abdomen = this.datos.abdomen;
            this.allDatos.otros_hayazgos = this.datos.otros_hayazgos;
            this.allDatos.vcs = this.datos.vcs;
            this.allDatos.hb = this.datos.hb;
            this.allDatos.hto = this.datos.hto;
            this.allDatos.grupo_rh = this.datos.grupo_rh;
            this.allDatos.tt = this.datos.tt;
            this.allDatos.tp = this.datos.tp;
            this.allDatos.tpt = this.datos.tpt;
            this.allDatos.tele_torax_id = this.datos.tele_torax_id;
            this.allDatos.na = this.datos.na;
            this.allDatos.k = this.datos.k;
            this.allDatos.ci = this.datos.ci;
            this.allDatos.mg = this.datos.mg;
            this.allDatos.ego_id = this.datos.ego_id;
            this.allDatos.ecg_id = this.datos.ecg_id;
            this.allDatos.vih = this.datos.vih;
            this.allDatos.asa_id = this.datos.asa_id;
            this.allDatos.nyha_id = this.datos.nyha_id;
            this.allDatos.golman_id = this.datos.golman_id;
            this.allDatos.gasometria_id = this.datos.gasometria_id;
            this.allDatos.genito_urinario_id = this.datos.genito_urinario_id;
            this.allDatos.sangrado_permisible = this.datos.sangrado_permisible;
            this.allDatos.sangre_reserva = this.datos.sangre_reserva;
            this.allDatos.planquetas = this.datos.planquetas;
            this.allDatos.glucosa = this.datos.glucosa;
            this.allDatos.urea = this.datos.urea;
            this.allDatos.creat = this.datos.creat;
            this.allDatos.hemodilucion = this.datos.hemodilucion;
            this.allDatos.otros_examenes = this.datos.otros_examenes;
            this.allDatos.nota_preanestesica = this.datos.nota_preanestesica;
            this.allDatos.medicacion_preanestésica = this.datos.medicacion_preanestésica;
            this.allDatos.plan_anestesico = this.datos.plan_anestesico;
            this.allDatos.observaciones = this.datos.observaciones;

            this.preAnestesica();
            
        },
        
        async preAnestesica() {

            try {
                const res = await fetch(`${url}/api/notas/pre-anestesica/store`, {
                    method: 'post',
                    headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.allDatos),
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
    mounted() {
        /* Historia clinica formulario dos y tres */ 
        EventBus.$on('datosPaTwo', (value) =>{
           this.datosFormUno=value
        });
    }
}
</script>

<style scoped>
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

    /* Tables */
    @media only screen and (min-width: 960px) {
        .size_th {
            width: 8vw;
        }
    }
    @media only screen and (max-width: 960px) {
        .size_th {
            width: 13vw;
        }
    }

    @media only screen and (max-width: 768px) {
        .size_th {
            width: 25vw;
        }
    }

    @media only screen and (max-width: 576px) {
        .size_th {
            width: auto;
        }
    } 
</style>