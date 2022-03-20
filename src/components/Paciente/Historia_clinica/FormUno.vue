<template>
    <b-container>
       <b-row class="justify-content-between">
            <b-col cols="12" sm="12" md="8" lg="8">
                <h2 class="txt_red text-uppercase pl-3">Historia clínica</h2>   
            </b-col>
            <b-col class="d-none d-lg-block" cols="4" sm="4" md="4" lg="4">
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
                                <button id="step1" @click="formHC('HCFormUno')" class="step-icon" />
                            </div>
                            <div class="indicator-line"></div>
                            <div class="step step2">
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
            <b-table-simple class="table-sm mt-3">
                <b-tbody>  
                     <b-tr>
                        <b-th class="th_style">Nombre</b-th>
                        <b-td class="border_table">
                            <b-form-input list="input-list" @change="onChange(datosAntecedentes.nombre)" v-model="datosAntecedentes.nombre" class="border-0" size="sm" placeholder="Ingresa nombre del paciente" />
                            <b-form-datalist id="input-list" :options="nombres"></b-form-datalist>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Fecha de elaboración</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datosAntecedentes.fecha" type="date" class="border-0" size="sm" placeholder="Ingresa nombre del paciente" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Informante</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datosAntecedentes.informante" class="border-0" size="sm" placeholder="Ingresa quién es el informante" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style"><strong>Género</strong></b-th>
                        <b-td class="border_table">
                            <b-form-select v-model="datosAntecedentes.genero_id" :options="genero" class="border-0" size="sm" placeholder="Seleccionar" />
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>

            <p class="txt_blue text-uppercase pt-3"><strong>Antecedentes</strong></p>
            <p class="txt_blue">Hereditarios y familiares</p>
            <b-container>
                <b-row class="mx-auto">
                    <b-col cols="12" sm="12" md="6" lg="6">
                        <b-form-checkbox v-model="datosAntecedentes.diabetes_mellitus" size="lg" class="small"><small class="txt_gray">Diabetes mellitus</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.hipertencion_arterial" size="lg"><small class="txt_gray">Hipertensión arterial</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.tuberculosis_pulmonar" size="lg"><small class="txt_gray">Tuberculosis pulmonar</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.obesidad" size="lg"><small class="txt_gray">Obesidad</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.neoplasias" size="lg"><small class="txt_gray">Neoplasias</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.cardiopatias" size="lg"><small class="txt_gray">Cardiopatías</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.familiares_tabaquismo" size="lg"><small class="txt_gray">Tabaquismo</small></b-form-checkbox>
                    </b-col>
                    <b-col cols="12" sm="12" md="6" lg="6">
                        <b-form-checkbox v-model="datosAntecedentes.familiares_alcoholismo" size="lg"><small class="txt_gray">Alcoholismo</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.familiares_dependencia_drogas_medicamentos" size="lg"><small class="txt_gray">Dependencia a drogas o medicamento</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.familiares_alergias" size="lg"><small class="txt_gray">Alergias</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.malformaciones_congenitas" size="lg"><small class="txt_gray">Malformaciones congénitas</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.disfunciones_familiares" size="lg"><small class="txt_gray">Disfunciones familiares</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.familiares_otros" size="lg"><small class="txt_gray">Otro</small></b-form-checkbox>
                        <div class="d-flex" v-if="datosAntecedentes.familiares_otros">
                            <span class="pl-4 pr-2 pt-2 txt_gray">
                                ¿Cuál?
                            </span>
                            <b-form-input v-model="datosAntecedentes.familiares_cual" class="float-right border_bottom_other" size="sm"></b-form-input>
                        </div>
                    </b-col>
                </b-row>
            </b-container>

            <p class="txt_blue mt-3">Personales patológicos</p>
            <b-container>
                <b-row class="mx-auto">
                    <b-col cols="12" sm="12" md="6" lg="6">
                        <b-form-checkbox v-model="datosAntecedentes.medicos" size="lg" class="small"><small class="txt_gray">Médicos</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.quirurgicos" size="lg" class="small"><small class="txt_gray">Quirúrgicos</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.transfucionales" size="lg" class="small"><small class="txt_gray">Transfuncionales</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.personales_alergias" size="lg" class="small"><small class="txt_gray">Alérgicos</small></b-form-checkbox>
                    </b-col>
                    <b-col cols="12" sm="12" md="6" lg="6">
                        <b-form-checkbox v-model="datosAntecedentes.personales_tabaquismo" size="lg"><small class="txt_gray">Tabaquismo</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.personales_alcoholismo" size="lg"><small class="txt_gray">Alcoholismo</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.personales_dependencia_drogas_medicamentos" size="lg"><small class="txt_gray">Dependencia a drogas o medicamentos</small></b-form-checkbox>
                        <b-form-checkbox v-model="datosAntecedentes.personales_otros" size="lg"><small class="txt_gray">Otro</small></b-form-checkbox>
                        <div class="d-flex" v-if="datosAntecedentes.personales_otros">
                            <span class="pl-4 pr-2 pt-2 txt_gray">
                                ¿Cuál?
                            </span>
                            <b-form-input v-model="datosAntecedentes.personales_cual" class="float-right border_bottom_other" size="sm"></b-form-input>
                        </div>
                    </b-col>
                </b-row>
            </b-container>

            <p class="txt_blue mt-3">Personales no patológicos</p>
            <b-table-simple class="table-sm">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style">Fecha de nacimiento</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datosPatologicos.fecha_nacimiento" type="date" class="border-0" size="sm" placeholder="DD/MM/AAAA" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Lugar de nacimiento</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datosPatologicos.ciudad" class="border-0" size="sm" placeholder="Ingresa lugar de nacimiento" />
                        </b-td>
                    </b-tr>
                    <!-- <b-tr>
                        <b-th class="th_style">Género</b-th>
                        <b-td class="border_table">
                             <b-form-select v-model="datosPatologicos.genero_id" :options="genero" class="border-0" size="sm" placeholder="Seleccionar" />
                        </b-td>
                    </b-tr> -->
                    <b-tr>
                        <b-th class="th_style">Religión</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datosPatologicos.religion" class="border-0" size="sm" placeholder="Ingresa religión" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style"><strong>Escolaridad</strong></b-th>
                        <b-td class="border_table">
                            <b-form-select v-model="datosPatologicos.escolaridad_id" :options="escolaridades" class="border-0" size="sm" placeholder="seleccionar" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Ocupación</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datosPatologicos.ocupacion" class="border-0" size="sm" placeholder="Ingresa actividad específica" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Jornada laboral</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datosPatologicos.tiempo_ocupacion" class="border-0" size="sm" placeholder="Ingresa tiempo en su ubicación" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Actividad de la empresa</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datosPatologicos.actividad_empresa" class="border-0" size="sm" placeholder="Ingresa la actividad de la empresa" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Calidad de alimentación</b-th>
                        <b-td class="border_table">
                            <b-row>
                                <b-col cols="12" sm="12" md="4" lg="4">
                                    <div class="d-flex">
                                        <span class="px-2 txt_gray rbtn_text">
                                            Buena
                                        </span>
                                        <b-form-radio v-model="datosPatologicos.calidad_alimentacion_id" value="1" class="rbtn_color" size="md" />
                                    </div>
                                </b-col>
                                <b-col cols="12" sm="12" md="4" lg="4">
                                    <div class="d-flex">
                                        <span class="px-2 txt_gray rbtn_text">
                                            Mala
                                        </span>
                                        <b-form-radio v-model="datosPatologicos.calidad_alimentacion_id" value="2" class="rbtn_color" size="md" />
                                    </div>
                                </b-col>
                                <b-col cols="12" sm="12" md="4" lg="4">
                                    <div class="d-flex">
                                        <span class="px-2 txt_gray rbtn_text">
                                            Regular
                                        </span>
                                        <b-form-radio v-model="datosPatologicos.calidad_alimentacion_id" value="3" class="rbtn_color" size="md" />
                                    </div>
                                </b-col>
                            </b-row>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Calidad de habitación</b-th>
                        <b-td class="border_table">
                            <b-row>
                                <b-col cols="12" sm="12" md="4" lg="4">
                                    <div class="d-flex">
                                        <span class="px-2 txt_gray rbtn_text">
                                            Buena
                                        </span>
                                        <b-form-radio v-model="datosPatologicos.calidad_habitacion_id" value="1" class="rbtn_color" size="md" />
                                    </div>
                                </b-col>
                                <b-col cols="12" sm="12" md="4" lg="4">
                                    <div class="d-flex">
                                        <span class="px-2 txt_gray rbtn_text">
                                            Mala
                                        </span>
                                        <b-form-radio v-model="datosPatologicos.calidad_habitacion_id" value="2" class="rbtn_color" size="md" />
                                    </div>
                                </b-col>
                                <b-col cols="12" sm="12" md="4" lg="4">
                                    <div class="d-flex">
                                        <span class="px-2 txt_gray rbtn_text">
                                            Regular
                                        </span>
                                        <b-form-radio v-model="datosPatologicos.calidad_habitacion_id" value="3" class="rbtn_color" size="md" />
                                    </div>
                                </b-col>
                            </b-row>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Higiene personal</b-th>
                        <b-td class="border_table">
                            <b-row>
                                <b-col cols="12" sm="12" md="4" lg="4">
                                    <div class="d-flex">
                                        <span class="px-2 txt_gray rbtn_text">
                                            Buena
                                        </span>
                                        <b-form-radio v-model="datosPatologicos.calidad_higiene_id" value="1" class="rbtn_color" size="md" />
                                    </div>
                                </b-col>
                                <b-col cols="12" sm="12" md="4" lg="4">
                                    <div class="d-flex">
                                        <span class="px-2 txt_gray rbtn_text">
                                            Mala
                                        </span>
                                        <b-form-radio v-model="datosPatologicos.calidad_higiene_id" value="2" class="rbtn_color" size="md" />
                                    </div>
                                </b-col>
                                <b-col cols="12" sm="12" md="4" lg="4">
                                    <div class="d-flex">
                                        <span class="px-2 txt_gray rbtn_text">
                                            Regular
                                        </span>
                                        <b-form-radio v-model="datosPatologicos.calidad_higiene_id" value="3" class="rbtn_color" size="md" />
                                    </div>
                                </b-col>
                            </b-row>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Sedentarismo</b-th>
                        <b-td class="border_table">
                            <b-row>
                                <b-col cols="8">
                                    <b-row class="pl-2">
                                        <b-col cols="12" sm="12" md="6" lg="6">
                                            <div class="d-flex pl-4">
                                                <span class="px-2 txt_gray rbtn_text">
                                                    Sí
                                                </span>
                                                <b-form-radio v-model="datosPatologicos.sedentarismo" v-bind:value=true class="rbtn_color" size="md" />
                                            </div>
                                        </b-col>
                                        <b-col cols="12" sm="12" md="6" lg="6">
                                            <div class="d-flex pl-2">
                                                <span class="px-2 txt_gray rbtn_text">
                                                    No
                                                </span>
                                                <b-form-radio v-model="datosPatologicos.sedentarismo" v-bind:value=false class="rbtn_color" size="md" />
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Relaciones sexuales</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datosPatologicos.tipo_relaciones_sexuales" class="border-0" size="sm" placeholder="Ingresa tipo de relaciones sexuales" />
                        </b-td>
                    </b-tr>
                    <b-tr>
                        <b-th class="th_style">Parejas sexuales</b-th>
                        <b-td class="border_table">
                            <b-form-input v-model="datosPatologicos.no_parejas_sexuales" class="border-0" size="sm" placeholder="Ingresa número de parejas sexuales" />
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
            <div class="d-flex justify-content-end mb-4">
                <b-col class="mt-3" cols="5" sm="12" md="5" lg="5">
                    <button @click="switchComponent('HCFormDos')" class="btn_formluario border-0 btn-block py-2 txt_white">SIGUIENTE</button>
                </b-col>
            </div>
        </b-container>
    </b-container>
</template>

<script> 
import { EventBus } from "../../../EventBus";
import Foto from "@/components/Paciente/Foto.vue"
import { url } from "../../../../settings";
const urlp = `${url}/api/pacientes`
const link = `${url}/api/datos_medicos/datos/`;
export default {
    name: 'FormUno',
    components: { Foto },

    data:() => ({
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
        ],
        idPacienteSeleccionado:"",
        pacientes:[{}],
        nombres:[],
        datosAntecedentes: {
            expediente_id: null,
            fecha: "",
            informante: "",
            genero_id: null,
            diabetes_mellitus: false,
            hipertencion_arterial: false,
            tuberculosis_pulmonar: false,
            obesidad: false,
            neoplasias: false,
            cardiopatias: false,
            familiares_tabaquismo: false,
            familiares_alcoholismo: false,
            familiares_dependencia_drogas_medicamentos: false,
            familiares_alergias: false,
            malformaciones_congenitas: false,
            disfunciones_familiares: false,
            familiares_otros: false,
            familiares_cual: "",
            medicos: false,
            quirurgicos: false,
            transfucionales: false,
            personales_alergias: false,
            personales_tabaquismo: false,
            personales_alcoholismo: false,
            personales_dependencia_drogas_medicamentos: false,
            personales_otros: false,
            personales_cual: ""
        },
        datosPatologicos: {
            fecha_nacimiento:"",
            expediente_id: "",
            ciudad: "",
            calidad_alimentacion_id: null,
            calidad_habitacion_id: null,
            calidad_higiene_id: null,
            sedentarismo: null,
            tipo_relaciones_sexuales: "",
            no_parejas_sexuales: null,
            escolaridad_id: null,
            ocupacion: "",
            tiempo_ocupacion: "",
            actividad_empresa: "",
            religion:"",
        },
        "escolaridades": [
        {
            value: null,
            text: "Seleccionar"
        },
        {
            value: 1,
            text: "Nula"
        },
        {
            value: 2,
            text: "Primaria Compeleta"
        },
        {
            value: 3,
            text: "Primaria Incompleta"
        },
        {
            value: 4,
            text: "Secundaria Compeleta"
        },
        {
            value: 5,
            text: "Secundaria Incompleta"
        },
        {
            value: 6,
            text: "Preparatoria Compeleta"
        },
        {
            value: 7,
            text: "Preparatoria Incompleta"
        },
        {
            value: 8,
            text: "Licenciatura Compeleta"
        },
        {
            value: 9,
            text: "Licenciatura Incompleta"
        },
        {
            value: 10,
            text: "Posgrado Compeleto"
        },
        {
            value: 11,
            text: "Posgrado Incompleto"
        }
    ]
    }),

    methods: {
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
        formHC(value) {
            EventBus.$emit('changeHC', value);
        },

        switchComponent(value) {
            EventBus.$emit('nextHCTwo', value)
            setTimeout(() => {
                
            EventBus.$emit('nextHCTwoDatos',this.datosAntecedentes,this.datosPatologicos)
            }, 1000);

        },
        onChange(value){
            var str = value;
            var matches = str.match(/(\d+)/);
            this.idPacienteSeleccionado=matches[0]
            console.log(this.idPacienteSeleccionado)
            for(let val of this.pacientes){
                if (val.id==this.idPacienteSeleccionado) {
                    console.log(val)
                   this.datosPatologicos.fecha_nacimiento=val.fecha_nacimiento
                }
            }
            this.getExpediente();
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
                this.datosAntecedentes.expediente_id=data.expediente.id
                this.datosPatologicos.expediente_id=data.expediente.id
                this.datosPatologicos.religion=data.expediente.religion
                console.log(data)

            } catch (error) {
                console.log("el error es"+error);
            }
        },
    },
    mounted(){
        this.obtenerPacientes()
        var today = new Date();
        var dd = ("0" + (today.getDate())).slice(-2);
        var mm = ("0" + (today.getMonth() +1)).slice(-2);
        var yyyy = today.getFullYear();
        this.datosAntecedentes.fecha = yyyy + '-' + mm + '-' + dd ;
    }

}
</script>

<style scoped>
    @media only screen and (max-width: 992px) {
        .padding_stepper {
            margin-top: 29px;
        }
    }  
</style>