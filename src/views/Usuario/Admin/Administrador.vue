<template>
    <div>
        <Navbar/>
        <b-container class="mt-5">
            <b-row v-if="menuPrincipal">
                <b-col class="my-auto" cols="12" sm="12" md="12" lg="6">
                    <b-row>
                        <b-col class="mb-3" cols="12" sm="12" md="6" lg="6">
                            <b-button @click="mostrarUsuarios()" variant="bg_red" class="btn_option py-4 btn-block text-uppercase">Administrador (a)</b-button>
                        </b-col>
                        <b-col class="mb-3" cols="12" sm="12" md="6" lg="6">
                            <b-button @click="mostrarUsuarios()" variant="bg_red" class="btn_option py-4 btn-block text-uppercase">Médico general</b-button>
                        </b-col>
                    </b-row>
                    <b-row >
                        <b-col class="mb-3" cols="12" sm="12" md="6" lg="6">
                            <b-button @click="mostrarUsuarios()" variant="bg_red" class="btn_option py-4 btn-block text-uppercase">Enfermero</b-button>
                        </b-col>
                        <b-col class="mb-3" cols="12" sm="12" md="6" lg="6">
                            <b-button @click="mostrarUsuarios()" variant="bg_red" class="btn_option py-4 btn-block text-uppercase">Especialista</b-button>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col class="p-auto m-auto d-none d-md-block d-lg-block" cols="12" sm="12" md="6" lg="6">
                    <div class="pl-5 pb-5" style="width: auto; margin: 0 auto 0 auto;">
                        <b-img src="../../../assets/img/iconoRegistro.png" style="max-height: 100%; max-width: 100%;"/>
                    </div>
                </b-col>
            </b-row>

            <!-- Menú para ver los diferentes tipos de usuarios -->
            <b-row v-if="verUsuarios">
                <b-col class="mx-auto" cols="11" sm="11" md="11" lg="3">
                    <b-row>
                        <button id="admin" @click="obtenerUsuarios('1')" class="btn_red_full border_red py-4 mb-4 text-center btn_radius btn-block">
                            ADMINISTRADOR (A)
                        </button>
                        <button id="enfermero" @click="obtenerUsuarios('4')" class="border_red py-4 mb-4 text-center btn_radius btn-block">
                            ENFERMERO (A)
                        </button>
                        <button id="medico" @click="obtenerUsuarios('3')" class="border_red py-4 mb-4 text-center btn_radius btn-block">
                            MÉDICO GENERAL
                        </button>
                        <!-- <button id="especialista" @click="obtenerUsuarios('5')" class="border_red py-4 mb-4 text-center btn_radius btn-block">
                            ESPECIALISTA
                        </button> -->
                        <button id="resepcionista" @click="obtenerUsuarios('2')" class="border_red py-4 mb-4 text-center btn_radius btn-block">
                            RESEPCIONISTA
                        </button>
                    </b-row>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="9">
                    <b-container> 
                        <b-skeleton-wrapper class="p-0 m-0" :loading="loading">
                            <template #loading>
                                <b-row>
                                    <b-col v-for="item of skeleton" :key="item.id" class="mb-3" cols="12" sm="12" md="4" lg="4">
                                        <b-skeleton class="size btn-block border-0" type="input"></b-skeleton>
                                    </b-col>
                                </b-row>
                            </template>

                            <b-row>
                                <b-col v-for="item of usuarios" :key="item.nombre" class="mb-3" cols="12" sm="12" md="4" lg="4">
                                    <div class="input-group flex-nowrap cursor" v-bind:tittle="item.nombre">
                                        <span class="input-group-text" id="img" align="center">
                                            <i class="fa fa-user fa-2x"></i>
                                        </span>
                                        <p type="text" class="form-control contenedor" id="contenido">{{item.nombre}}<br>{{item.cedula}}</p>
                                    </div>
                                </b-col>

                            </b-row>
                           <!--  <div class="overflow-auto mt-4" v-if="pacientes.length>12">
                                <div class="mt-3">
                                    <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
                                </div>
                            </div> -->
                        </b-skeleton-wrapper>
                    </b-container>
                </b-col>
            </b-row>
            
            <b-row v-if="crearUsuario">
                <b-col class="mx-auto" cols="11" sm="11" md="11" lg="3">
                    <b-row>
                        <button id="crearUsuario1" @click="agregarCampo('1')" class="btn_red_full border_red py-4 mb-4 text-center btn_radius btn-block">
                            ADMINISTRADOR (A)
                        </button>
                        <button id="crearUsuario4" @click="agregarCampo('4')" class="border_red py-4 mb-4 text-center btn_radius btn-block">
                            ENFERMERO (A)
                        </button>
                        <button id="crearUsuario3" @click="agregarCampo('3')" class="border_red py-4 mb-4 text-center btn_radius btn-block">
                            MÉDICO GENERAL
                        </button>
                        <!-- <button id="crearUsuario5" @click="agregarCampo('5')" class="border_red py-4 mb-4 text-center btn_radius btn-block">
                            ESPECIALISTA
                        </button> -->
                        <button id="crearusuario2" @click="agregarCampo('2')" class="border_red py-4 mb-4 text-center btn_radius btn-block">
                            RESEPCIONISTA
                        </button>
                    </b-row>
                </b-col>

                <b-col class="px-5" cols="12" sm="12" md="12" lg="9">
                    <h3 class="txt_blue text-uppercase mb-3">Registro de usuario</h3>
                    <b-table-simple class="table-sm">
                        <b-tbody>  
                            <b-tr>
                                <b-th class="th_style">Nombre</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datosUsuario.nombre" v-on:keypress="soloLetras($event)" :state="nombre" class="border-0" size="sm" placeholder="ingrese nombre del medico"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Numero de teléfono</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datosUsuario.celular" maxlength="10" v-on:keypress="soloNumeros($event)" :state="celular" class="border-0" size="sm" placeholder="ingrese numero de teléfono celular"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Email</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datosUsuario.email" :state="email" class="border-0" size="sm" placeholder="ingrese correo"/>
                                </b-td>
                            </b-tr>
                            <b-tr>
                                <b-th class="th_style">Perfil de usuario</b-th>
                                <b-td class="border_table">
                                    <b-form-select disabled v-model="datosUsuario.perfil_id" :options="perfiles" @change="change(datosUsuario.perfil_id)" class="border-0 disabled_select" size="sm"/>
                                </b-td>
                            </b-tr>
                            <b-tr v-if="datosUsuario.perfil_id==3 || datosUsuario.perfil_id==4">
                                <b-th class="th_style">Especialidad</b-th>
                                <b-td class="border_table">
                                    <b-form-select v-model="datosUsuario.especialidad_id" :options="especialidades" class="border-0" size="sm"/>
                                </b-td>
                            </b-tr>
                            <b-tr  v-if="datosUsuario.perfil_id==3 || datosUsuario.perfil_id==4" >
                                <b-th class="th_style">Cédula profesional</b-th>
                                <b-td class="border_table">
                                    <b-form-input v-model="datosUsuario.cedula" :state="cedula" class="border-0" size="sm" placeholder="ingrese cedula"/>
                                </b-td>
                            </b-tr>
                        </b-tbody>
                    </b-table-simple>
                    <b-row>
                        <b-col cols="12">
                            <div class="contenedor-de-errores pt-3 pb-1">
                                <ul class="lista-errores px-2">
                                    <li><i class="fa fa-warning px-2" />Hola aqui estoy</li>
                                </ul>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>

            <div v-if="agregarUsuario" class="d-flex justify-content-end mt-5">
                <b-col cols="5" sm="12" md="5" lg="5">
                    <div class="d-flex mb-4">
                        <span class="fa fa-user-plus fa-lg my-auto px-3 icon_blue"></span>
                        <button class="btn_formluario border-0 btn-block py-2 txt_white text-uppercase" @click="btnCrearUsuario()">Crear nuevo usuario</button>
                    </div>
                </b-col>
            </div> 

            <div v-if="btnGuardarUsuario" class="d-flex justify-content-end mt-5">
                <b-col cols="5" sm="12" md="5" lg="5">
                    <div class="d-flex mb-4">
                        <span class="fa fa-save fa-lg my-auto px-3 icon_blue"></span>
                        <button class="btn_formluario border-0 btn-block py-2 txt_white text-uppercase" @click="addUser()" >Guardar</button>
                    </div>
                </b-col>
            </div> 
            <div v-if="btnVerUsuarios" class="d-flex justify-content-end mt-2">
                <b-col cols="5" sm="12" md="5" lg="5">
                    <div class="d-flex mb-4">
                        <span class="fa fa-users fa-lg my-auto px-3 icon_blue"></span>
                        <button @click="regresarVerUsuarios()" class="btn_formluario border-0 btn-block py-2 txt_white text-uppercase" >Ver usuarios</button>
                    </div>
                </b-col>
            </div> 
        </b-container>
        <b-button @click="btnFlotante()" v-if="botonFlotante" variant="btn_red" class="float-btn-back pt-1">
            <span class="fa fa-arrow-left my-float-btn"></span>
        </b-button>
        <Success :abrir="openSuccess"/>
        <Error :abrir="openError"/>
    </div>    
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import { url } from "../../../../settings";
import Success from "@/components/Modals/Success.vue";
import Error from "@/components/Modals/Error.vue";
import { EventBus } from '../../../EventBus';

export default {
    name: 'Administrador',
    components: { Navbar, Success, Error },

    data:() => ({
        especialidades:[],
        perfiles:[],
        usuarios:[],
        p1:[],
        p2:[],
        p3:[],
        p4:[],
        p5:[],
        menuPrincipal: true,
        btnVerUsuarios: false,
        verUsuarios: false,
        crearUsuario: false,
        botonFlotante: false,
        openSuccess:false,
        openError:false,
        
        agregarUsuario: false,
        btnGuardarUsuario: false,

        agregarEspecialidad: false,

        loading: true,
        skeleton: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],

        datosUsuario: {
            nombre:"",
            email:"",
            celular:"",
            perfil_id:1,
            especialidad_id:null,
            cedula:"",
        },

        errors: []
    }),

    computed: {
        nombre() {
            return this.datosUsuario.nombre != 0
        },

        celular() {
            return this.datosUsuario.celular.length === 10 ? true : false
        },

        email() {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(this.datosUsuario.email)
        },

        cedula() {
            return this.datosUsuario.cedula != 0
        }
    },

    methods: {
        soloNumeros(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
            } else {
                return true;
            }
        },

        soloLetras(evt) {
            let char = String.fromCharCode(evt.keyCode);
            if(/^[A-Za-z]+$/.test(char)) {
                return true;
            } else {
                evt.preventDefault();
            }
        },

        change(){
                this.datosUsuario.especialidad_id=null
                this.datosUsuario.cedula=""
        },
        mostrarUsuarios() {
            this.menuPrincipal = false;
            this.agregarUsuario = false;
            this.verUsuarios = true;
            this.agregarUsuario = true;
            this.botonFlotante = true;
        },

        obtenerUsuarios(value) {
            const u1 = document.getElementById('admin');
            const u4 = document.getElementById('enfermero');
            const u3 = document.getElementById('medico');
            // const u5 = document.getElementById('especialista');
            const u2 = document.getElementById('resepcionista');

            switch (value) {
                case '1':
                    u1.classList.add('btn_red_full');
                    u4.classList.remove('btn_red_full');
                    u3.classList.remove('btn_red_full');
                    // u5.classList.remove('btn_red_full');
                    u2.classList.remove('btn_red_full');
                    this.usuarios=this.p1
                    break;

                case '2':
                    u4.classList.remove('btn_red_full');
                    u2.classList.add('btn_red_full');
                    u3.classList.remove('btn_red_full');
                    // u5.classList.remove('btn_red_full');
                    u1.classList.remove('btn_red_full');
                    this.usuarios=this.p2
                    break;
                
                case '3':
                    u1.classList.remove('btn_red_full');
                    u4.classList.remove('btn_red_full');
                    u3.classList.add('btn_red_full');
                    // u5.classList.remove('btn_red_full');
                    u2.classList.remove('btn_red_full');
                    this.usuarios=this.p3
                    break;
                
                case '4':
                    u1.classList.remove('btn_red_full');
                    u2.classList.remove('btn_red_full');
                    u3.classList.remove('btn_red_full');
                    u4.classList.add('btn_red_full');
                    // u5.classList.remove('btn_red_full');
                    this.usuarios=this.p4
                    break;

                case '5':
                    u1.classList.remove('btn_red_full');
                    u2.classList.remove('btn_red_full');
                    u3.classList.remove('btn_red_full');
                    // u5.classList.add('btn_red_full');
                    u4.classList.remove('btn_red_full');
                    this.usuarios=this.p5
                    break;
            
                default:
                    break;
            }
        },

        btnFlotante() {
            this.verUsuarios = false;
            this.agregarUsuario = false;
            this.botonFlotante = false;
            this.menuPrincipal = true;
        },

        regresarVerUsuarios() {
            this.crearUsuario = false;
            this.btnGuardarUsuario = false;
            this.btnVerUsuarios = false;
            this.agregarUsuario = true;
            this.verUsuarios = true;
            this.botonFlotante = true;
        },

        btnCrearUsuario() {
            this.verUsuarios = false;
            this.agregarUsuario = false;
            this.botonFlotante = false;
            this.btnGuardarUsuario = true;
            this.btnVerUsuarios = true;
            this.crearUsuario = true;
        },

        agregarCampo(value) {
            const u1 = document.getElementById('crearUsuario1');
            const u4 = document.getElementById('crearUsuario4');
            const u3 = document.getElementById('crearUsuario3');
            // const u5 = document.getElementById('crearUsuario5');
            const u2 = document.getElementById('crearusuario2');

            this.datosUsuario.perfil_id=value;
            switch (value) {
                case '1':
                    u1.classList.add('btn_red_full');
                    u4.classList.remove('btn_red_full');
                    u3.classList.remove('btn_red_full');
                    // u5.classList.remove('btn_red_full');
                    u2.classList.remove('btn_red_full');
                    this.agregarEspecialidad = false;
                    this.datosUsuario.especialidad_id=null
                    this.datosUsuario.cedula=""
                    break;

                case '2':
                    u4.classList.remove('btn_red_full');
                    u2.classList.add('btn_red_full');
                    u3.classList.remove('btn_red_full');
                    // u5.classList.remove('btn_red_full');
                    u1.classList.remove('btn_red_full');
                    this.agregarEspecialidad = false;
                    this.datosUsuario.especialidad_id=null
                    this.datosUsuario.cedula=""
                    break;
                
                case '3':
                    u1.classList.remove('btn_red_full');
                    u4.classList.remove('btn_red_full');
                    u3.classList.add('btn_red_full');
                    // u5.classList.remove('btn_red_full');
                    u2.classList.remove('btn_red_full');
                    this.agregarEspecialidad = true;
                    break;
                
                case '4':
                    u1.classList.remove('btn_red_full');
                    u2.classList.remove('btn_red_full');
                    u3.classList.remove('btn_red_full');
                    u4.classList.add('btn_red_full');
                    // u5.classList.remove('btn_red_full');
                    this.agregarEspecialidad = true;
                    break;

                case '5':
                    u1.classList.remove('btn_red_full');
                    u2.classList.remove('btn_red_full');
                    u3.classList.remove('btn_red_full');
                    // u5.classList.add('btn_red_full');
                    u4.classList.remove('btn_red_full');
                    this.agregarEspecialidad = false;
                    this.datosUsuario.especialidad_id=null
                    this.datosUsuario.cedula=""
                    break;
            }
        },

        async obtenerEspecialidades() {
            try {
                const res = await fetch(`${url}/api/especialidades`, {
                    method: 'get',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        "Authorization": "Bearer "+ localStorage.getItem("token")
                    }
                });
                if (!res.ok) {
                    const message = `An error has occured: ${res.status} - ${res.statusText}`;
                    throw new Error(message);
                }

                const data = await res.json();
                this.especialidades = data.especialidades.map(item => {
                    return {
                        value: item.id,
                        text: item.nombre
                    };
                });
                this.especialidades.unshift( { value: null, text: 'Seleccione' },)

            } catch (error) {
                console.log(error);
            }
        },

        async obtenerPerfiles() {
            try {
                const res = await fetch(`${url}/api/perfiles`, {
                    method: 'get',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        "Authorization": "Bearer "+ localStorage.getItem("token")
                    }
                });
                if (!res.ok) {
                    const message = `An error has occured: ${res.status} - ${res.statusText}`;
                    throw new Error(message);
                }

                const data = await res.json();
                this.perfiles = data.perfiles.map(item => {
                    return {
                        value: item.id,
                        text: item.nombre
                    };
                });
                this.perfiles.unshift( { value: null, text: 'Seleccione' },)

            } catch (error) {
                console.log(error);
            }
        },

        async addUser() {
            console.log(this.datosUsuario)
            try {
                const res = await fetch(`${url}/api/usuarios/store`, {
                    method: 'post',
                    headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    'Authorization': "Bearer "+ localStorage.getItem("token"),
                    },
                    body: JSON.stringify(this.datosUsuario),
                });
                const data = res.json();
                var warn=false
                var promise = Promise.resolve(data);
                await promise.then(function(val) {
                    console.log(val.errors);
                    if (val.class=="success") {
                    warn=true
                    }
                });
                    if (warn) {
                    console.log("entre");
                    this.openSuccess=true
                    this.obtenerUsuarios()
                    }

            } catch (error) {
                console.log(error);
            }
        },
        
        async getUsuarios() {
            try {
                const res = await fetch(`${url}/api/usuarios`, {
                    method: 'get',
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        "Authorization": "Bearer "+ localStorage.getItem("token")
                    }
                });
                if (!res.ok) {
                    const message = `An error has occured: ${res.status} - ${res.statusText}`;
                    throw new Error(message);
                }

                const data = await res.json();
                // this.usuarios = data.usuarios
                console.log(data.status);
                for (const val of data.usuarios) 
                {
                    switch (val.perfil.id) {
                        case 1:
                            this.p1.push(val)
                            break;

                        case 2:
                            this.p2.push(val)
                            break;

                        case 3:
                            this.p3.push(val)
                            break;

                        case 4:
                            this.p4.push(val)
                            break;

                        case 5:
                            this.p5.push(val)
                            break;
                    
                        default:
                            break;
                    } 
                }
                this.usuarios=this.p1
                this.loading=false

            } catch (error) {
                console.log(error);
            }
        },

    },

    mounted() {
        
        this.obtenerEspecialidades();
        this.obtenerPerfiles()
        this.getUsuarios()
        EventBus.$on('cerrarModal',()=>{
            this.openSuccess=false
        })
    }
}
</script>

<style scoped>
    .disabled_select:disabled {
        background-color: white !important;
        color: black !important;
    }

    .border_red {
        background-color: white;
        border: 2px solid #a25c68;
        color: #a25c68;
        font-weight: 700;
    }

    .btn_red_full {
        background-color: #a25c68;
        color: white;
        font-weight: 700;
    }


    .btn_option {
        border: 2px solid #a25c68;
        border-radius: 15px;
        color: #a25c68;
        font-weight: 700;
        outline:none !important;
        outline-width: 0 !important;
        box-shadow: none;
        -moz-box-shadow: none;
        -webkit-box-shadow: none;
    }

    .btn_option:hover {
        color: white;
        background-color: #a25c68;
    }

    /*  */
    .size_th_skele {
        width: 100vh;
    }

    .size {
        height: 60px;
         background: linear-gradient(-45deg, #dddddd, #f0f0f0, #dddddd, #f0f0f0);
        background-size: 400% 400%;
        -webkit-animation: skeletonLoading 2.25s ease infinite;
        -moz-animation: skeletonLoading 2.25s ease infinite;
        animation: skeletonLoading 2.25s ease infinite;
    }

    .animacion {
        height: 30px;
        background: linear-gradient(-45deg, #dddddd, #f0f0f0, #dddddd, #f0f0f0);
        background-size: 400% 400%;
        -webkit-animation: skeletonLoading 2.25s ease infinite;
        -moz-animation: skeletonLoading 2.25s ease infinite;
        animation: skeletonLoading 2.25s ease infinite;
    }

     @-webkit-keyframes skeletonLoading {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @-moz-keyframes skeletonLoading {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @keyframes skeletonLoading {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .contenedor {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .cursor {
        cursor: pointer;
    }

    #contenido {
        border-radius: 15px;
        height: auto;
        margin-left: 35px;
        justify-content: center;
        text-align: center;
        background-color: #dfeff6;
    }

    #img {
        position: absolute;
        border-radius: 50px;
        width: auto;
        height: 3.1rem;
        margin-top: 4px;
        z-index: 1;
        background: white;
        justify-content: center;
        align-items: center;
    }

    .btn_border {
        color: #689aaf;
        background-color: #fff;
        border: 1px solid #689aaf;
    }

    .push_btn_blue {
        color: white;
        background-color: #689aaf;
    }

    p {
        font-size: 0.8rem;
    }

    i {
        color: #ced4da;
    }
</style>