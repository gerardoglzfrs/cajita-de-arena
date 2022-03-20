<template>
    <b-container>
        <b-row class="justify-content-between">
            <b-col cols="12" sm="12" md="8" lg="8">
                <h2 class="txt_red text-uppercase pl-3 title_forms">Nota post-operatoria</h2>   
            </b-col>
            <b-col class="d-none d-lg-block d-md-block" cols="12" sm="12" md="4" lg="4">
                <div class="float-right my-auto">
                    <Foto/>
                </div>
            </b-col>
        </b-row>

        <b-container class="mt-4">
            <b-row>
                <b-col cols="12">
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style size_th">Nombre</b-th>
                                <b-td colspan="3" class="border_table">
                                    <b-form-input v-model="nombre" list="input-list" class="border-0" size="sm" placeholder="Ingresa nombre del paciente" />
                                    <b-form-datalist id="input-list" :options="nombres"></b-form-datalist>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Fecha</b-th>
                                <b-td colspan="3" class="border_table">
                                    <b-form-input v-model="datos.fecha" class="border-0" size="sm" placeholder="DD/MM/AAAA" />
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Hora</b-th>
                                <b-td class="border_table">
                                    <div class="d-flex">
                                        <b-form-input v-model="datos.hora" class="border-0" size="sm" />
                                        <span class="float-right px-1 txt_gray">
                                            <small class="txt_gray">horas</small>
                                        </span>
                                    </div>
                                </b-td>
                                <b-th class="th_style">Habitación</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datos.habitacion" type="text" class="border-0" size="sm" placeholder="# de habitación" />
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                </b-col>
            </b-row>
            
            <div class="mt-3">
                <b-table-simple class="table-sm">
                    <b-tbody>  
                        <b-tr>
                            <b-th class="th_style size_th_diag">Diagnóstico preoperatorio</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-select v-model="datos.diagnostico_pre_operatorio_id" :options="diagnosticos" class="border-0" size="sm" placeholder="Seleccionar" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Operación planeada</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-select v-model="datos.operacion_planeada_id" :options="operaciones" class="border-0" size="sm" placeholder="Seleccionar" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Operación realizada</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-select v-model="datos.operacion_realizada_id" :options="operaciones" class="border-0" size="sm" placeholder="Seleccionar" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Diagnóstico postoperatorio</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-select v-model="datos.diagnostico_post_operatorio_id" :options="diagnosticos" class="border-0" size="sm" placeholder="Seleccionar" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Cirujano (a)</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-select v-model="datos.cirujano_id" :options="medicos" class="border-0" size="sm" placeholder="Seleccionar" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Ayudantes</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-select v-model="selectAyudantes" :options="medicosIE" class="border-0" size="sm" placeholder="Seleccionar" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Instrumentista</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-select v-model="selectInstrumentista" :options="medicosIE"  class="border-0" size="sm" placeholder="Seleccionar" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Anestesiólogo</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-select v-model="selectAnestesiologo" :options="medicosIE" class="border-0" size="sm" placeholder="Seleccionar" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Circulante</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-select v-model="datos.circulante_id" :options="medicos" class="border-0" size="sm" placeholder="Seleccionar" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Edo. Postqx. inmediato</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-input v-model="datos.edo_postqx_inmediato" class="border-0" size="sm" placeholder="Edo. Postqx inmediato" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Pronóstico</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-select v-model="datos.pronostico_id" :options="pronostico" class="border-0" size="sm" placeholder="Seleccionar" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Sangrado aproximado</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-input v-model="datos.sangrado_apoximado" class="border-0" size="sm" placeholder="" />
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_style">Tecnica quirurgica</b-th>
                            <b-td colspan="3" class="border_table">
                                <b-form-input v-model="datos.tecnica_quirurgica" class="border-0" size="sm" placeholder="" />
                            </b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </div>

            <b-row>
                <b-col class="mt-3" cols="12">
                    <p class="txt_blue">Complicaciones</p>
                    <b-form-textarea v-model="datos.complicaciones" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                </b-col>
            </b-row>

            <b-table-simple class="table-sm mt-4">
                <b-tbody>  
                    <b-tr>
                        <b-th class="th_style size_th_textil">Cuenta material textil</b-th>
                        <b-td class="border-0">
                            <label class="switch">
                                <input v-model="datos.material_textil" type="checkbox">
                                <span class="slider round"></span>
                            </label>
                        </b-td>
                    </b-tr>
                    <b-tr v-if="datos.material_textil">
                        <b-th class="th_option_color">
                            <b-form-select v-model="datos.enfermera_id" :options="medicos" class="border-0" size="sm" placeholder="Seleccionar" />
                        </b-th>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
    
            <b-row>
                <b-col class="mt-3" cols="12">
                    <p class="txt_blue">Envío de piezas o biopsias a patología</p>
                    <b-form-textarea v-model="datos.envio_piezas_biopsias" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                </b-col>
                <b-col class="mt-3" cols="12">
                    <p class="txt_blue">Otros hallazgos importantes</p>
                    <b-form-textarea v-model="datos.otros_hallazgos" class="txtArea_border" size="sm" no-resize debounce="500" rows="3" max-rows="3" />
                </b-col>
                <b-col class="mt-3" cols="12">
                    <p class="txt_blue">Descripción de técnica quirúrgica</p>
                    <b-form-textarea v-model="datos.Descripción" class="txtArea_border" size="sm" debounce="500" rows="8" max-rows="8" />
                </b-col>
            </b-row>

            <ul class="mt-3">
                <li>Se requiere nombre y firma del responsable de cirugía</li>
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
import { url } from "../../../settings";
const urlp = `${url}/api/pacientes`
import Success from "@/components/Modals/Success.vue";
import Error from "@/components/Modals/Error.vue";
import { EventBus } from "../../EventBus";
import Foto from "@/components/Paciente/Foto.vue"
const link = `${url}/api/datos_medicos/datos/`;

export default {
    name: "NotaPostOperatoria",
    components: { Foto,Success,Error },
        data:()=>({
            busy: false,
            openSuccess:false,
            openError:false,
            nombre:"",
            pacientes:[{}],
            nombres: [],
            idPacienteSeleccionado: "",
            selectAyudantes:null,
            selectAnestesiologo: null,
            selectInstrumentista: null,
            operaciones: [
                {
                    value: null,
                    text: "Seleccionar"
                },
                {
                    value: 1,
                    text: "Apendicectomía"
                },
                {
                    value: 2,
                    text: "Colecistetomía"
                },
                {
                    value: 3,
                    text: "Funduplicatura Nissen"
                },
                {
                    value: 4,
                    text: "Plastia umbilical"
                },
                {
                    value: 5,
                    text: "Plastia inguinal unilateral"
                },
                {
                    value: 6,
                    text: "Plastia inguinal bilateral"
                },
                {
                    value: 7,
                    text: "Cesárea"
                },
                {
                    value: 8,
                    text: "Histerectomía"
                },
                {
                    value: 9,
                    text: "Laparotomía exploratoria"
                },
                {
                    value: 10,
                    text: "Hemorroidectomía"
                },
                {
                    value: 11,
                    text: "Fistulectomía"
                },
                {
                    value: 12,
                    text: "Esfinterotomía lateral interna"
                }
            ],
            datos: {
                expediente_id: null,//Requerido
                fecha: "",//Requerido formato aaaa/mm/dd
                hora: "",//Requerido formato hh:mm:ss
                diagnostico_pre_operatorio_id: null,//Requerido catálogo diagnosticos pre y postoperatorios.
                operacion_planeada_id: null,//Requerido catálogo operaciones planeadas y realizadas.
                operacion_realizada_id: null,//Requerido catálogo operaciones planeadas y realizadas..
                diagnostico_post_operatorio_id: null,//Requerido catálogo diagnosticos pre y postoperatorios.
                cirujano_id: null,//Requerido catálogo de médicos (usuarios).
                circulante_interno: true,//Requerido true o false
                circulante_id: null,//Requerido catálogo de enfermeros(as) (usuarios).
                edo_postqx_inmediato: "",//Requerido campo abierto
                pronostico_id: null,//Requerido catálogo de pronosticos
                sangrado_apoximado: null,//Requerido numerico
                complicaciones: "",//Requerido campo abierto
                material_textil: true,//Requerido true o false
                enfermera_id: null,//Sera requerido sí material_textil es verdadero, catálogo de enfermeros(as) (usuarios).
                envio_piezas_biopsias: "",//Requerido campo abierto
                otros_hallazgos: "",//Requerido campo abierto
                tecnica_quirurgica: "",//Requerido campo abierto
                instrumentista: {//Requerido de tipo objecto
                    esInterno: false,//Requerido true o false
                    medico_interno_id: null, //Sera requerido sí esInterno es verdadero de lo contrario puede ser null, catátalogo de médicos internos y externos
                    medico_externo_id: null //Sera requerido sí esInterno es falso de lo contrario puede ser null, catátalogo de médicos internos y externos
                },
                anestesiologo:{//Requerido de tipo objeto
                    esInterno: true,//Requerido true o false
                    medico_interno_id: null,//Sera requerido sí esInterno es verdadero de lo contrario puede ser null, catátalogo de médicos internos y externos
                    medico_externo_id: null //Sera requerido sí esInterno es falso de lo contrario puede ser null, catátalogo de médicos internos y externos
                },
                ayudantes: [//Requerido de tipo arreglo
                    {
                        esInterno: true,//Requerido true o false
                        medico_interno_id: null,//Sera requerido sí esInterno es verdadero de lo contrario puede ser null, catátalogo de médicos internos y externos
                        medico_externo_id: null//Sera requerido sí esInterno es falso de lo contrario puede ser null, catátalogo de médicos internos y externos
                    }
                ]
            },
            diagnosticos: [
            {
                value: null,
                text: "Seleccionar"
            },
            {
                value: 1,
                text: "Apendicitis aguda"
            },
            {
                value: 2,
                text: "Colecistitis aguda"
            },
            {
                value: 3,
                text: "Enfermedades por reflujo gastroesofágico"
            },
            {
                value: 4,
                text: "Hernia umbilical"
            },
            {
                value: 5,
                text: "Hernia inguinal unilateral"
            },
            {
                value: 6,
                text: "Hernia inguinal bilateral"
            },
            {
                value: 7,
                text: "Embarazo de término"
            },
            {
                value: 8,
                text: "Paridad satisfecha"
            },
            {
                value: 9,
                text: "Fractura de cadera"
            },
            {
                value: 10,
                text: "Fractura de fémur"
            },
            {
                value: 11,
                text: "Fractura de tibia y peroné"
            }
            ],
            "pronostico": [
                {
                    "value": null,
                    "text": "Seleccionar"
                },
                {
                    "value": 1,
                    "text": "Bueno"
                },
                {
                    "value": 2,
                    "text": "Malo"
                }
            ],
            medicos: [{}],
            medicosIE:[{}],

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
                    this.medicos = data.usuarios.map(item => {
                        return {
                            value: item.id,
                            text: item.nombre
                        };
                    });
                    this.medicos.unshift( { value: null, text: 'Seleccione' },)
                    console.log(this.medicos)
                } catch (error) {
                    console.log("el error es"+error);
                }
            },
            async obtenerMedicosIE() {
                try {
                    const res = await fetch(`${url}/api/catalogos/medicos_internos_externos`, {
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
                    let i=0
                    this.medicosIE = data.medicos.map(item => {
                        return {
                            text: item.nombre,
                            esInterno:item.esInterno,
                            medico_interno_id: item.medico_interno_id,
                            medico_externo_id: item.medico_externo_id,
                        };
                    });
                    for (const val of this.medicosIE) {
                        i=i+1
                        val.value=i
                    }
                    console.log("medicosIE")
                    console.log(data)
                    this.medicosIE.unshift( { value: null, text: 'Seleccione' },)
                    console.log(this.medicosIE)
                } catch (error) {
                    console.log("el error es"+error);
                }
            },
            async getExpediente() {
                
                this.busy=true
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
                    this.postOperatoria()
                } catch (error) {
                    this.openError=true
                    this.busy=false
                    console.log("el error es"+error);
                }
            },

            async postOperatoria() {
                console.log(this.selectAyudantes)
                console.log(this.selectAnestesiologo)
                console.log(this.selectInstrumentista);

                for(let val of this.medicosIE){
                    if (val.value==this.selectAyudantes) {
                        if (val.medico_externo_id==null) {
                            val.esInterno=true
                        }else{
                            val.esInterno=false
                        }
                        this.datos.ayudantes=val
                    }
                    if (val.value==this.selectAnestesiologo) {
                        if (val.medico_externo_id==null) {
                            val.esInterno=true
                        }else{
                            val.esInterno=false
                        }
                        this.datos.anestesiologo=val
                    }
                    if (val.value==this.selectInstrumentista) {
                        if (val.medico_externo_id==null) {
                            val.esInterno=true
                        }else{
                            val.esInterno=false
                        }
                        this.datos.instrumentista=val
                    }
                }
                console.log(this.datos)
                try {
                    const res = await fetch(`${url}/api/notas/post-operatoria/store`, {
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
                    var warn = false
                    var promise = Promise.resolve(data);
                    await promise.then(function(val) {
                        if (val.class=="succes") {
                            warn=true
                        }
                    });
                    if (warn) {
                        Object.assign(this.$data, this.$options.data());
                        this.openSuccess=true
                        this.setFechaHora()
                        this.busy=false
                    }
                } catch (error) {
                    this.busy=false
                    console.log(error);
                }
                this.busy=false
            },
            getNumber() {
                this.busy=true
                try {
                    var str = this.nombre;
                    var matches = str.match(/(\d+)/);
                    this.idPacienteSeleccionado=matches[0]
                } catch (error) {
                    console.log(error);
                }
                this.getExpediente();                

            },
            setFechaHora(){
                var date = new Date;
                var minutes = ("0"+date.getMinutes()).slice(-2);
                var hour = ("0"+date.getHours()).slice(-2);
                this.datos.hora=""+hour+":"+minutes+":00"
                var today = new Date();
                var dd = ("0" + (today.getDate())).slice(-2);
                var mm = ("0" + (today.getMonth() +1)).slice(-2);
                var yyyy = today.getFullYear();
                this.datos.fecha = yyyy + '-' + mm + '-' + dd ;
            }
        },

        mounted(){
            // this.obtenerMedicosIE();
            this.obtenerMedicos();
            this.obtenerPacientes();
            this.obtenerMedicosIE();
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
    /* Size th */
    @media only screen and (min-width: 960px) {
        .size_th {
            width: 18vw;
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

    /* Diagnosticos */

    @media only screen and (min-width: 1100px) {
        .size_th_diag {
            width: 18vw;
        }
    }
    @media only screen and (max-width: 1100px) {
        .size_th_diag {
            width: auto;
        }
    }

    /* Material textil */
    @media only screen and (min-width: 1200px) {
        .size_th_textil {
            width: 18vw;
        }
    }

    @media only screen and (max-width: 1200px) {
        .size_th_textil {
            width: 30vw;
        }
    }

    @media only screen and (max-width: 950px) {
        .size_th_textil {
            width: auto;
        }
    }
</style>

