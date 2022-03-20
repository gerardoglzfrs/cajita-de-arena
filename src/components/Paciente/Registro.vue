<template>
    <b-container>
        <b-row>
            <b-col cols="12" sm="12" md="6" lg="6">
                <h2 class="title_forms txt_red text-uppercase pl-3">Registro de paciente</h2>
                <h4 class="txt_red pl-3">Hoja de ingreso</h4>        
            </b-col>
            <b-col cols="12" sm="12" md="6" lg="6">
                <div class="float-right pr-3">
                    <button class="btn_foto">
                        <i class="fa fa-camera fa-lg mx-auto my-auto" />
                    </button>
                </div>
            </b-col>
        </b-row>
        <b-container>
            <p class="txt_blue text-uppercase pt-3"><strong>Datos generales</strong></p>
            <b-table-simple class="table-sm border_table">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style size_th">Nombre</b-th>
                        <b-td class="border_table">
                             <b-form-input v-model="datos.nombre" class="border-0" size="sm" placeholder="Ingresa nombre del paciente" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Fecha de nacimiento</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.fecha_nacimiento" @change="change(datos.fecha_nacimiento)" :maxlength="10" :max="10" class="border-0" type="date" size="sm"></b-form-input>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Edad</b-th>
                        <b-td class="border_table">
                            <b-row>
                                <b-col cols="12" sm="12" md="4" lg="4">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.edad" class="border-0" size="sm" />
                                        <span class="float-right px-1 py-auto">
                                            <small class="txt_gray">años</small>
                                        </span>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Estado civil</b-th>
                        <b-td class="border_table">
                            <b-form-select v-model="selectedecivil" :options="ecivil" class="border-0" size="sm"></b-form-select>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Domicilio</b-th>
                        <b-td class="border_table">
                           <b-form-input v-model="datos.domicilio" class="border-0" size="sm" placeholder="Ingresa calle y número" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Código postal</b-th>
                        <b-td class="border_table">
                             <b-form-input v-model="datos.cp" class="border-0" size="sm" placeholder="Ingresa código postal" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Colonia</b-th>
                        <b-td class="border_table">
                             <b-form-input v-model="datos.colonia" class="border-0" size="sm" placeholder="Ingresa colonia" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Ciudad</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.ciudad" class="border-0" size="sm" placeholder="Ingresa ciudad" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Estado</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.estado" class="border-0" size="sm" placeholder="Ingresa estado" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Teléfono</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datos.telefono" class="border-0" size="sm" placeholder="Ingresa teléfono" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Email</b-th>
                        <b-td class="border_table">
                           <b-form-input v-model="datos.email" class="border-0" size="sm" placeholder="Ingresa correo electrónico" />
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <p class="txt_blue text-uppercase pt-3"><strong>Responsable</strong></p>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style size_th">Responsable</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="responsable.nombre" class="border-0" size="sm" placeholder="Ingresa nombre de responsable del paciente" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Parentesco</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="responsable.parentezco" class="border-0" size="sm" placeholder="Ingresa parentesco con el paciente" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Domicilio</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="responsable.domicilio" class="border-0" size="sm" placeholder="Ingresa calle y número" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Código postal</b-th>
                        <b-td class="border_table">
                           <b-form-input v-model="responsable.cp" class="border-0" size="sm" placeholder="Ingresa código postal" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Colonia</b-th>
                        <b-td class="border_table">
                             <b-form-input v-model="responsable.colonia" class="border-0" size="sm" placeholder="Ingresa colonia" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Ciudad</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="responsable.ciudad" class="border-0" size="sm" placeholder="Ingresa ciudad" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Estado</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="responsable.estado" class="border-0" size="sm" placeholder="Ingresa estado" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Teléfono</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="responsable.telefono" class="border-0" size="sm" placeholder="Ingresa teléfono" />
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <p class="txt_blue text-uppercase pt-3"><strong>Datos médicos</strong></p>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <!-- <b-tr>
                        <b-th class="th_style">Número de expediente</b-th>
                        <b-td class="border_table">
                            <b-form-input class="border-0" size="sm" placeholder="Ingresa numero de expediente" />
                        </b-td>
                    </b-tr> -->
                    <b-tr>
                        <b-th class="th_style size_th">Fecha de ingreso</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="expediente.fecha_ingreso" type="date" class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Hora de ingreso</b-th>
                        <b-td class="border_table">
                            <b-row>
                                <b-col cols="12" sm="12" md="4" lg="4">
                                    <div class="d-flex">
                                        <b-form-input v-model="expediente.hora_ingreso" class="border-0" size="sm" />
                                        <span class="float-right px-1 py-auto">
                                            <small class="txt_gray">horas</small>
                                        </span>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Número de habitación</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="expediente.no_habitacion" class="border-0" size="sm" placeholder="Ingresa número de habitación" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Especialidad</b-th>
                        <b-td class="border_table">
                            <b-form-select v-model="expediente.especialidad_id" :options="especialidades"  class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Diagnóstico</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="expediente.diagnostico" class="border-0" size="sm" placeholder="Ingresa diagnóstico" />
                        </b-td>
                    </b-tr>
                     <b-tr>
                        <b-th class="th_style">Médico tratante</b-th>
                        <b-td class="border_table">
                            <b-form-select v-model="expediente.medico_id" :options="medicos" class="border-0" size="sm" />
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style size_th">Alergias</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="expediente.tiene_alergias" value=false type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
            <b-row v-if="expediente.tiene_alergias">
                <b-col cols="12" sm="12" md="7" lg="7">
                    <div class="d-flex">
                        <span class="px-2 pt-2 txt_blue">
                            ¿Cuál?
                        </span>
                        <b-form-input v-model="expediente.alergias" placeholder="Ingrese las alergias" class="float-right border_bottom" size="sm"></b-form-input>
                    </div>
                </b-col>
            </b-row>
            
            <p class="txt_blue text-uppercase pt-3"><strong>Identificación de barreras</strong></p>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style size_th">Escolaridad</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="expediente.escolaridad" class="border-0" size="sm" placeholder="Ingresa máximo grado escolar" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Ocupación</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="expediente.ocupacion" class="border-0" size="sm" placeholder="Ingresa ocupación laboral" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Religión</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="expediente.religion" class="border-0" size="sm"  placeholder="Ingresa religión" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Idioma</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="expediente.idioma" class="border-0" size="sm" placeholder="Ingresa idioma que usa para comunicarse" />
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style size_th_grupoVulnerable">Grupo vulnerable</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="expediente.grupo_vulnerable" value=false type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Dificultad para hablar</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="expediente.dificultar_hablar" value=false type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Dificultad para oír</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="expediente.dificultad_oir" value=false type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="expediente.dificultad_oir">
                        <b-th class="th_option_color">
                            <b-row>
                                <b-col cols="12" sm="12" md="5"  lg="5">
                                    ¿Porta equipo de audición?
                                </b-col>
                                <b-col cols="12" sm="12" md="4"  lg="4">
                                    <b-row>
                                        <b-col cols="12" sm="12" md="6" lg="6">
                                            <div class="d-flex">
                                                <span class="px-2 txt_blue rbtn_text">
                                                    Sí
                                                </span>
                                                <b-form-radio v-model="expediente.porta_equipo_audicion" v-bind:value="true" class="rbtn_color" size="md" />
                                            </div>
                                        </b-col>
                                        <b-col cols="12" sm="12" md="6" lg="6">
                                            <div class="d-flex float-left">
                                                <span class="px-2 txt_blue rbtn_text">
                                                    No
                                                </span>
                                                <b-form-radio v-model="expediente.porta_equipo_audicion" v-bind:value="false" class="rbtn_color" size="md" />
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row> 
                        </b-th>
                    </b-tr>    
                    <b-tr>
                        <b-th class="th_style">Dificultad para ver</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="expediente.dificultad_ver" value=false type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>  
                    <b-tr v-if="expediente.dificultad_ver">
                        <b-th class="th_option_color">
                            <b-row>
                                <b-col cols="12" sm="12" md="5"  lg="5">
                                    ¿Usa lentes?
                                </b-col>
                                <b-col cols="12" sm="12" md="4"  lg="4">
                                    <b-row>
                                        <b-col cols="12" sm="12" md="6" lg="6">
                                            <div class="d-flex">
                                                <span class="px-2 txt_blue rbtn_text">
                                                    Sí
                                                </span>
                                                <b-form-radio v-model="expediente.usa_lentes" v-bind:value="true" class="rbtn_color" size="md" />
                                            </div>
                                        </b-col>
                                        <b-col cols="12" sm="12" md="6" lg="6">
                                            <div class="d-flex">
                                                <span class="px-2 txt_blue rbtn_text">
                                                    No
                                                </span>
                                                <b-form-radio v-model="expediente.usa_lentes" v-bind:value="false" class="rbtn_color" size="md" />
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row> 
                        </b-th>
                    </b-tr>              
                    <b-tr>
                        <b-th class="th_style">Dificultad para caminar</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input type="checkbox" v-model="expediente.dificultad_caminar" value=false>
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th v-if="expediente.dificultad_caminar" class="th_option_color">
                            <b-row>
                                <b-col cols="12" sm="12" md="5"  lg="5">
                                    ¿Utiliza algún tipo de apoyo?
                                </b-col>
                                <b-col cols="12" sm="12" md="4"  lg="4">
                                    <b-row>
                                        <b-col cols="12" sm="12" md="6" lg="6">
                                            <div class="d-flex">
                                                <span class="px-2 txt_blue rbtn_text">
                                                    Sí
                                                </span>
                                                <b-form-radio v-model="expediente.usa_apoyo" v-bind:value="true" class="rbtn_color" size="md" />
                                            </div>
                                        </b-col>
                                        <b-col cols="12" sm="12" md="6" lg="6">
                                            <div class="d-flex">
                                                <span class="px-2 txt_blue rbtn_text">
                                                    No
                                                </span>
                                                <b-form-radio v-model="expediente.usa_apoyo" v-bind:value="false" class="rbtn_color" size="md" />
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <b-row v-if="expediente.usa_apoyo" class="py-2 pr-3">
                                <b-col cols="12" sm="12" md="12" lg="12">
                                    <div class="d-flex">
                                        <span class="px-2 pt-2 txt_blue">
                                            ¿Cuál?
                                        </span>
                                        <b-form-input v-model="expediente.tipo_apoyo" class="float-right border_bottom" size="sm"></b-form-input>
                                    </div>
                                </b-col>
                            </b-row> 
                        </b-th>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Dificultad para comprender indicaciones</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input type="checkbox" v-model="expediente.dificultar_comprender_indicaciones" value=false>
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Condición psicológica o emocional inestable</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                 <input type="checkbox" v-model="expediente.tiene_condicion_psicologica" value=false>
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="expediente.tiene_condicion_psicologica">
                        <b-th class="th_option_color">
                            <b-row>
                                <b-col cols="12" sm="12" md="5"  lg="5">
                                    ¿Está bajo algún tratamiento?
                                </b-col>
                                <b-col cols="12" sm="12" md="4"  lg="4">
                                    <b-row>
                                        <b-col cols="12" sm="12" md="6" lg="6">
                                            <div class="d-flex">
                                                <span class="px-2 txt_blue rbtn_text">
                                                    Sí
                                                </span>
                                                <b-form-radio v-model="expediente.bajo_tratamiento" v-bind:value="true" class="rbtn_color" size="md" />
                                            </div>
                                        </b-col>
                                        <b-col cols="12" sm="12" md="6" lg="6">
                                            <div class="d-flex">
                                                <span class="px-2 txt_blue rbtn_text">
                                                    No
                                                </span>
                                                <b-form-radio v-model="expediente.bajo_tratamiento" v-bind:value="false" class="rbtn_color" size="md" />
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <b-row v-if="expediente.bajo_tratamiento" class="py-2 pr-3">
                                <b-col cols="12" sm="12" md="12" lg="12">
                                    <div class="d-flex">
                                        <span class="px-2 pt-2 txt_blue">
                                            ¿Cuál?
                                        </span>
                                        <b-form-input v-model="expediente.tratamiento" class="float-right border_bottom" size="sm"></b-form-input>
                                    </div>
                                </b-col>
                            </b-row> 
                        </b-th>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
            <p class="txt_blue pt-3"><strong>NOTAS A CONSIDERAR</strong> (de acuerdo a costumbres, valores y/o necesidades)</p>
            <b-form-textarea v-model="expediente.notas" class="txtArea_border" size="sm" no-resize debounce="500" rows="5" max-rows="5" />
            <ul>
                <li>Se requiere firma del paciente</li>
                <li>Se requiere firma del responsable del paciente</li>
                <li>Se requiere nombre y firma de quien realizó el ingreso</li>
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
                        <button class="btn_formluario border-0 btn-block py-2 txt_white" :disabled="busy" @click="registroPaciente">GUARDAR</button>
                    </b-overlay>
                </b-col>
            </div>
        </b-container>
        <Success :abrir="openSuccess"/> 
        <Error :abrir="openError"/> 
    </b-container> 
</template>

<script>
import {url} from '../../../settings.js'
import Success from "@/components/Modals/Success.vue";
import Error from "@/components/Modals/Error.vue";
import { EventBus } from "../../EventBus";
const urlec = `${url}/api/catalogos/estado_civil`
const urlp = `${url}/api/catalogos/estado_civil/api/pacientes`
export default {
    name: 'Registro',
    components:{Success, Error},
    data:()=>({
        busy: false,
        openSuccess:false,
        openError:false,
        selectedecivil:null,
        ecivil: [{value:null,text:'seleccione una opcion'},{text:'...'}],
        años:"",
        datos:{
            edad:"",
            "nombre": "",
            "fecha_nacimiento": "",
            "estado_civil_id": "",
            "cp": "",
            "domicilio": "",
            "colonia": "",
            "ciudad": "",
            "telefono": "",
            email: ""
        },
        "especialidades": [
            {
                value:null,
                text:"Seleccionar"
            },
        {
            value: 1,
            text: "Anatomía Patológica.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 2,
            text: "Anestesiología.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 3,
            text: "Audiología, Otoneurología y Foniatría.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 4,
            text: "Calidad de la Atención Clínica.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 5,
            text: "Cirugía General.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 6,
            text: "Epidemiología.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 7,
            text: "Genética Médica.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 8,
            text: "Geriatría.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 9,
            text: "Ginecología y Obstetricia.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 10,
            text: "Imagenología, Diagnóstica y Terapéutica.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 11,
            text: "Medicina de la Actividad Física y Deportiva.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 12,
            text: "Medicina de Rehabilitación.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 13,
            text: "Medicina de Urgencias.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 14,
            text: "Medicina del Trabajo y Ambiental.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 15,
            text: "Medicina Familiar.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 16,
            text: "Medicina Interna.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 17,
            text: "Medicina Legal.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 18,
            text: "Medicina Nuclear e Imagenología Molecular.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 19,
            text: "Medicina Preventiva.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 20,
            text: "Neumología.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 21,
            text: "Oftalmología.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 22,
            text: "Otorrinolaringología y Cirugía de Cabeza y Cuello.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 23,
            text: "Patología Clínica.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 24,
            text: "Pediatría.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 25,
            text: "Psiquiatría.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 26,
            text: "Radio Oncología.",
            "can": {
                "update": true,
                "delete": true
            }
        },
        {
            value: 27,
            text: "Traumatología y Ortopedia.",
            "can": {
                "update": true,
                "delete": true
            }
        }
    ],
        responsable:{
            "paciente_id": "",
            "email": "",
            "parentezco": "",
            "nombre": "",
            "cp": "",
            "domicilio": "",
            "colonia": "",
            "ciudad": "",
            "telefono": "",
        },
        expediente:{
            "paciente_id": "",//Obligatorio 
            "fecha_ingreso": "",//Obligatorio
            "hora_ingreso": "",//Obligatorio
            "no_habitacion": "",//Obligatorio - Integer
            "tiene_alergias": false,//Obligatorio - Boolean
            "alergias": "", //Obligatorio si es true tiene_alergias
            "diagnostico": "",//Obligatorio - String
            "especialidad_id": null, //Obligatorio - integer
            "medico_id": null, //Obligatorio - Integer
            "mayor_18_yaers": false, //Obligatorio - Boolean
            "mayor_60_yaers": false, //Obligatorio - Boolean
            "escolaridad": "",//Obligatorio - String
            "religion": "",//Obligatorio - String
            "ocupacion": "", //Obligatorio - String
            "idioma": "", //Obligatorio - String
            "grupo_vulnerable": false,//Obligatorio - Boolean
            "dificultar_hablar": false,//Obligatorio si grupo Vulnerable es True
            "dificultad_oir": false,//Obligatorio si grupo Vulnerable es True
            "porta_equipo_audicion": false,//Obligatorio si dificultad_oir es true
            "dificultad_ver": false,//Obligatorio si grupo Vulnerable es True
            "usa_lentes": false,//Obligatorio si dificultad_ver es true
            "dificultad_caminar": false,//Obligatorio si grupo Vulnerable es True
            "usa_apoyo": false,//Obligatorio si dificultad_caminar es true
            "tipo_apoyo": "",//OBligatorio si usa_apoyo es true
            "dificultar_comprender_indicaciones": false,//Obligatorio si grupo Vulnerable es True
            "tiene_condicion_psicologica": false,//Obligatorio si grupo Vulnerable es True
            "bajo_tratamiento": false,//Obligatorio si tiene_condicion_psicologica es true
            "tratamiento": "",//Obligatorio si bajo_tratamiento es true
            "notas": ""//Obligatorio - String
        },
        medicos:[]
    }),

    methods:{
        async obtenerEstadoCivil() {
            try {
                const res = await fetch(`${urlec}`, {
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


                this.ecivil = data.estado_civil.map(item => {
                    return {
                        value: item.id,
                        text: item.nombre
                    };
                });
                this.ecivil.unshift( { value: null, text: 'seleccione una opcion' },)

                console.log(this.ecivil)

            } catch (error) {
                console.log("el error es"+error);
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
                console.log(data.pacientes)

            } catch (error) {
                console.log("el error es"+error);
            }
        },
        async obtenerMedicos() {
            try {
                const res = await fetch(`${url}/api/usuarios`, {
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
                console.log(data.usuarios)
                for(let val of data.usuarios){
                    if (val.perfil.id===3) {
                        this.medicos.push({value:val.id,text:val.nombre})
                    }
                }
                this.medicos.unshift({value:null,text:"seleccionar"})

            } catch (error) {
                console.log("el error es"+error);
            }
        },
        async registroPaciente() {
            this.busy=true
            this.datos.estado_civil_id=this.selectedecivil
            console.log(this.datos)
            try {
                const res = await fetch(`${url}/api/pacientes/store`, {
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
                var id = ""
                await promise.then(function(val) {
                    id = val.paciente.id 
                });
                this.registroResponsable(id);

            } catch (error) {
                this.openError=true
                this.busy=false
                console.log(error);
            }
        },
        async registroResponsable(id) {
            console.log("entro responsable id"+id)
            this.responsable.paciente_id=id
            try {
                const res = await fetch(`${url}/api/responsables_paciente/store`, {
                    method: 'post',
                    headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.responsable),
                });
                const data = res.json();
                console.log(data)
                
                var promise = Promise.resolve(data);
 
                promise.then(function(val) {
                    console.log(val);
                });
                this.registroExpediente(id)
            } catch (error) {
                this.busy=false
                this.openError=true
            }
        },
        async registroExpediente(id) {
            console.log("entro expediente id"+id)
            this.expediente.paciente_id=id
            console.log(this.expediente)
            try {
                const res = await fetch(`${url}/api/datos_medicos/store`, {
                    method: 'post',
                    headers: {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.expediente),
                });
                const data = res.json();
                console.log(data)
                
                var promise = Promise.resolve(data);
                var warn = false
                await promise.then(function(val) {
                    if (val.class=="success") {
                        warn = true
                    }
                });
                if (warn) {
                    Object.assign(this.$data, this.$options.data());
                    this.openSuccess=true
                    this.setFechaHora()
                    this.busy=false
                    
                }

            } catch (error) {
                this.openSuccess=true
                this.busy=false
                console.log(error);
            }
        },
        change(val){
            var year = new Date(val)
            var today = new Date();
            var yyyy = today.getFullYear();
            this.datos.edad= yyyy-year.getFullYear();
        },
        setFechaHora(){
        var date = new Date;
        var minutes = date.getMinutes();
        var hour = date.getHours();
        this.expediente.hora_ingreso=""+hour+":"+minutes
        var today = new Date();
        var dd = ("0" + (today.getDate())).slice(-2);
        var mm = ("0" + (today.getMonth() +1)).slice(-2);
        var yyyy = today.getFullYear();

        this.expediente.fecha_ingreso = yyyy + '-' + mm + '-' + dd ;
        }
        
    },
    mounted(){
        this.setFechaHora()
        this.obtenerEstadoCivil()
        this.obtenerMedicos()
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
    @media only screen and (max-width: 900px) {
        .size_th {
            width: 30vw;
        }
    }

    @media only screen and (min-width: 900px) {
        .size_th {
            width: 15vw;
        }
    }

    @media only screen and (max-width: 1000px) {
        .size_th_grupoVulnerable {
            width: 100vw;
        }
    }

    @media only screen and (min-width: 1000px) {
        .size_th_grupoVulnerable {
            width: 32vw;
        }
    }

    .btn_foto {
        width: 5rem;
        height: 5rem;
        border-radius: 50px;
        background-color: white;
        color: #4c87a0;
        border: 1px solid #4c87a0;
        text-align: center;
        font-size: 1.5rem;  
    }
</style>