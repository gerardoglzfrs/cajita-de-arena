<template>
    <div>
        <Navbar/>
        <b-container class="mt-5">
            <b-row>
                <b-col cols="12" sm="12" md="12" lg="3">
                    <button id="regPaciente" @click="switchComponent('Registro')" class="push_btn_red border_red py-2 mb-4 text-left btn_radius btn-block">
                        <i class="fa fa-user-plus fa-lg px-2" />
                        Registro de paciente
                    </button>
                    <button id="histClinica" @click="switchComponent('HCFormUno')" class="border_red py-2 mb-4 text-left btn_radius btn-block">
                        <i class="fa fa-file fa-lg px-2" />
                        Historia clínica
                    </button>
                    <button id="notasMedicas" @click="switchComponent('notas')" class="border_red py-2 mb-4 text-left btn_radius btn-block">
                        <i class="fa fa-clipboard fa-lg px-2" />
                        Notas médicas
                    </button>
                    <b-row v-if="!show" >
                        <b-col cols="12">
                            <div class="d-flex mb-4">
                                <i class="fa fa-file fa-lg my-auto px-3 icon_blue" />
                                <button id="notaIngreso" @click="switchComponent('NotaDeIngreso')" class="border_blue py-2 text-left btn_radius btn-block">
                                    Nota de ingreso
                                    <span class="float-right px-2">
                                        <i class="fa fa-edit fa-lg" />
                                    </span>
                                </button>
                            </div>
                            <div class="d-flex mb-4">
                                <i class="fa fa-file fa-lg my-auto px-3 icon_blue" />
                                <button id="notaEvolucion" @click="switchComponent('NotaEvolucionMedica')" class="border_blue py-2 text-left btn_radius btn-block">
                                    Nota de evolución
                                    <span class="float-right px-2">
                                        <i class="fa fa-edit fa-lg" />
                                    </span>
                                </button>
                            </div>
                            <div class="d-flex mb-4">
                                <i class="fa fa-file fa-lg my-auto px-3 icon_blue" />
                                <button id="notaPreoperatoria" @click="switchComponent('NotaPreOperatoria')" class="border_blue py-2 text-left btn_radius btn-block">
                                    Nota pre-operatoria
                                    <span class="float-right px-2">
                                        <i class="fa fa-edit fa-lg" />
                                    </span>
                                </button>
                            </div>
                            <div class="d-flex mb-4">
                                <i class="fa fa-file fa-lg my-auto px-3 icon_blue" />
                                <button id="notaPreanestesica" @click="switchComponent('NotaPreAnestesicaUno')" class="border_blue py-2 text-left btn_radius btn-block">
                                    Nota pre-anestésica
                                    <span class="float-right px-2">
                                        <i class="fa fa-edit fa-lg" />
                                    </span>
                                </button>
                            </div>
                            <div class="d-flex mb-4">
                                <i class="fa fa-file fa-lg my-auto px-3 icon_blue" />
                                <button id="notaPostoperatoria" @click="switchComponent('NotaPostOperatoria')" class="border_blue py-2 text-left btn_radius btn-block">
                                    Nota post-operatoria
                                    <span class="float-right px-2">
                                        <i class="fa fa-edit fa-lg" />
                                    </span>
                                </button>
                            </div>
                            <div class="d-flex mb-4">
                                <i class="fa fa-file fa-lg my-auto px-3 icon_blue" />
                                <button id="notaEgreso" @click="switchComponent('NotaDeEgreso')" class="border_blue py-2 text-left btn_radius btn-block">
                                    Nota de egreso
                                    <span class="float-right px-2">
                                        <i class="fa fa-edit fa-lg" />
                                    </span>
                                </button>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>

                <b-col cols="12" sm="12" md="12" lg="9">
                    <keep-alive>
                        <component v-bind:is="current"></component>
                    </keep-alive>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { EventBus } from '../../../EventBus';
import Navbar from "@/components/Navbar.vue";
import Registro from "@/components/Paciente/Registro.vue";

/* Historia clinica */
import HCFormUno from "@/components/Paciente/Historia_clinica/FormUno.vue";
import HCFormDos from "@/components/Paciente/Historia_clinica/FormDos.vue";
import HCFormTres from "@/components/Paciente/Historia_clinica/FormTres.vue";

/* Notas médicas */
import NotaDeIngreso from "@/components/Paciente/NotaDeIngreso.vue";
import NotaEvolucionMedica from "@/components/Paciente/NotaEvolucionMedica.vue";
import NotaPreOperatoria from "@/components/Paciente/NotaPreOperatoria.vue";

/* Notas pre-anestesicas */
import NotaPreAnestesicaUno from "@/components/Paciente/NotaPreAnestesica/FormUno.vue";
import NotaPreAnestesicaDos from "@/components/Paciente/NotaPreAnestesica/FormDos.vue"

import NotaPostOperatoria from "@/components/Paciente/NotaPostOperatoria.vue";
import NotaDeEgreso from "@/components/Paciente/NotaDeEgreso.vue";


export default {
    name: 'Main',
    components: { 
        Navbar, 
        Registro, 
        HCFormUno, 
        HCFormDos,
        NotaDeIngreso, 
        NotaEvolucionMedica, 
        NotaPreOperatoria, 
        NotaPreAnestesicaUno,
        NotaPreAnestesicaDos,
        NotaPostOperatoria,
        NotaDeEgreso,
        HCFormTres
    },

    data: () => ({
        show: true,
        current: "Registro",

    }),

    methods: {
        switchComponent(value) {
            if (value==='notas') {
                console.log("ns");
            }else{
                this.current = value;
            }
            
            const regPaciente = document.getElementById('regPaciente');
            const histClinica = document.getElementById('histClinica');
            const notasMedicas = document.getElementById('notasMedicas'); 
            const notaIngreso = document.getElementById('notaIngreso');
            const notaEvolucion = document.getElementById('notaEvolucion');
            const notaPreoperatoria = document.getElementById('notaPreoperatoria');
            const notaPreanestesica = document.getElementById('notaPreanestesica');
            const notaPostoperatoria = document.getElementById('notaPostoperatoria');
            const notaEgreso = document.getElementById('notaEgreso');

            switch (value) {
                case 'Registro':
                    regPaciente.classList.add('push_btn_red');
                    histClinica.classList.remove('push_btn_red');
                    notasMedicas.classList.remove('push_btn_red');

                    break;
                
                case 'HCFormUno':
                    histClinica.classList.add('push_btn_red');
                    regPaciente.classList.remove('push_btn_red');
                    notasMedicas.classList.remove('push_btn_red');
                    break;
                
                case 'notas':
                    this.show =! this.show
                    notasMedicas.classList.add('push_btn_red')
                    regPaciente.classList.remove('push_btn_red');
                    histClinica.classList.remove('push_btn_red');
                    break;

                case 'NotaDeIngreso':
                    notaIngreso.classList.add('push_btn_blue');
                    notaEvolucion.classList.remove('push_btn_blue');
                    notaPreoperatoria.classList.remove('push_btn_blue');
                    notaPreanestesica.classList.remove('push_btn_blue');
                    notaPostoperatoria.classList.remove('push_btn_blue');
                    notaEgreso.classList.remove('push_btn_blue');
                    break;

                case 'NotaEvolucionMedica':
                    notaIngreso.classList.remove('push_btn_blue');
                    notaEvolucion.classList.add('push_btn_blue');
                    notaPreoperatoria.classList.remove('push_btn_blue');
                    notaPreanestesica.classList.remove('push_btn_blue');
                    notaPostoperatoria.classList.remove('push_btn_blue');
                    notaEgreso.classList.remove('push_btn_blue'); 
                    break;
                
                case 'NotaPreOperatoria':
                    notaIngreso.classList.remove('push_btn_blue');
                    notaEvolucion.classList.remove('push_btn_blue');
                    notaPreoperatoria.classList.add('push_btn_blue');
                    notaPreanestesica.classList.remove('push_btn_blue');
                    notaPostoperatoria.classList.remove('push_btn_blue');
                    notaEgreso.classList.remove('push_btn_blue');
                    break;
                
                case 'NotaPreAnestesicaUno':
                    notaIngreso.classList.remove('push_btn_blue');
                    notaEvolucion.classList.remove('push_btn_blue');
                    notaPreoperatoria.classList.remove('push_btn_blue');
                    notaPreanestesica.classList.add('push_btn_blue');
                    notaPostoperatoria.classList.remove('push_btn_blue');
                    notaEgreso.classList.remove('push_btn_blue');
                    break;

                case 'NotaPostOperatoria':
                    notaIngreso.classList.remove('push_btn_blue');
                    notaEvolucion.classList.remove('push_btn_blue');
                    notaPreoperatoria.classList.remove('push_btn_blue');
                    notaPreanestesica.classList.remove('push_btn_blue');
                    notaPostoperatoria.classList.add('push_btn_blue');
                    notaEgreso.classList.remove('push_btn_blue');
                    break;

                case 'NotaDeEgreso':
                    notaIngreso.classList.remove('push_btn_blue');
                    notaEvolucion.classList.remove('push_btn_blue');
                    notaPreoperatoria.classList.remove('push_btn_blue');
                    notaPreanestesica.classList.remove('push_btn_blue');
                    notaPostoperatoria.classList.remove('push_btn_blue');
                    notaEgreso.classList.add('push_btn_blue');
                    break;

                default:
                break;
            }
        },

    },

    mounted() {
        /* Historia clinica formulario dos y tres */ 
        EventBus.$on('nextHCTwo', (value) =>{
            this.current = value;
        });
       
        EventBus.$on('nextHCThree', (value) =>{
            this.current = value;
        })

        /* Nota pre-anestesica dos */
        EventBus.$on('nextPATwo', (datos,value) =>{
            this.current = value;
            console.log(datos)
        })

        /* Stepper historia clinica */
        EventBus.$on('changeHC', (value)=>{
            this.current = value;
        })

        EventBus.$on('changeStepperPreAnestesica', (value)=>{
            this.current = value;
        })

    }

    
}
</script>

<style scoped>
    /* Boton menu principal */
    .border_red {
        border: 1px solid #a25c68;
        color: #a25c68;
        background-color: white;
    }

    .border_blue {
        border: 1px solid #689aaf;
        color: #689aaf;
        background-color: white;
    }

    .btn_red {
        background-color: #a25c68;
        color: white;
        
    }

     .btn_blue {
        background-color: #689aaf;
        color: #689aaf;
    }

    /* Btn pulsado color rojo */

    .push_btn_red {
        color: white;
        background-color: #a25c68;
    }

    .push_btn_blue {
        color: white;
        background-color: #689aaf;
    }

    .btn_size_vw {
        width: 40vw;
    }

</style>