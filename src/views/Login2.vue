<template>
    <section class="vh-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 px-0 d-none d-lg-block d-md-block">
                    <b-img src="../assets/img/IconoPrincipal.png" alt="Login image" class="w-100 vh-100" style="object-fit: cover;"/>
                </div>
                <b-col cols="12" sm="12" md="6" lg="6">
                    <div class="container mt-1" >
                        <b-row align-h="end">
                            <b-img class="small_hearth" src="../assets/heart_red.svg"/>
                        </b-row>
                        <div class="row justify-content-center mx-auto">
                            <div class="mx-auto" style="width: auto; margin: auto auto auto auto;">
                                <b-img class="mx-auto" src="../assets/logos/clinica_colosio.png" style="max-height: 300px; max-width: 300px;"/>
                                <h3 class="pl-1 slogan_title">Tecnología en salud</h3>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div v-if="showLogin">
                                <b-form @submit.prevent="formulario">
                                    <b-row class="form_mt">
                                        <b-col cols="12" sm="12" md="12" lg="12">
                                            <h3 class="label-color text-center mb-3">¡Comencemos!</h3>
                                            <label class="label-color ml-4"><strong>Correo electrónico</strong></label>
                                            <div class="d-flex">
                                                <i class="fa fa-user fa-lg my-auto mr-2 icon_blue" />
                                                <b-form-input v-model="user.user" class="form_input-color border-0 mt-1" size="md" placeholder="Ingresa tu correo electónico"></b-form-input>
                                            </div>
                                            <div>
                                                <span class="msjError ml-4">{{msj}}</span>
                                            </div>
                                        </b-col>
                                        <b-col cols="12" sm="12" md="12" lg="12" class="mt-3">
                                            <label class="label-color mb-2 ml-4"><strong>Contraseña</strong></label>
                                            <div class="d-flex">
                                                <i class="icon_blue fa fa-lock fa-lg  my-auto mr-2"></i>
                                                <b-form-input v-model="user.password" class="form_input-color border-0 mt-1 psw" size="md" type="password" placeholder="Ingresa tu contraseña"></b-form-input>
                                            </div>
                                            <span  @click="showPassword()" class="icon_float fa fa-eye fa-lg change_icon"></span>
                                            <div>
                                                <span class="msjError ml-4">{{msj2}}</span>
                                                <span class="msjError" v-if="msjAutorizacion">Usuario y/o contraseña incorrecta</span>
                                            </div>
                                        </b-col>
                                    </b-row>
                                    <b-row align-h="end">
                                        <b-col cols="6" class="text-right pr-3 mt-2">
                                            <b-button variant="link link-forgot-password" @click="restablecerPsw()">¿Olvidaste tu contraseña?</b-button>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col cols="12">
                                            <b-form-checkbox class="ml-4" v-model="user.check">
                                                <span class="checkBox">Recordarme</span>
                                            </b-form-checkbox>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-4">
                                        <b-col class="ml-4" cols="12">
                                            <div>
                                                <b-overlay
                                                :show="busy"
                                                rounded
                                                opacity="0.6"
                                                spinner-small
                                                spinner-variant="primary"
                                                class="d-inline-block"
                                                @hidden="onHidden"
                                                >
                                                    <b-button variant="bg_blue" class="bg_btn_form border-0 py-2 pl-4 pr-4" ref="button" :disabled="busy" type="submit">
                                                        INICIAR SESIÓN
                                                    </b-button>
                                                </b-overlay>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-form>
                            </div>
                            <EnviarCorreo2 id="id_form" v-if="showResetPsw"/>
                        </div>
                    </div>
                </b-col>
            </div>
        </div>
    </section>
</template>

<script>
import { EventBus } from '../EventBus'
import { mapActions } from 'vuex'
import CryptoJS from 'crypto-js'
import EnviarCorreo2 from '@/components/Password/EnviarCorreo2.vue'

export default {
    name: 'Login',
    components: { EnviarCorreo2 },

    data:() => ({
        busy: false,
        timeout: null,
        showLogin: true,
        showResetPsw: false,
        msjAutorizacion: false,
        msj: '',
        msj2: '',
        user: {
            user: '',
            password: '',
            check: false
        }
    }),

    beforeDestroy() {
        this.timeout = null;
    },
 
    methods: {
        onHidden() {
            this.$refs.button.focus()
        },

        showPassword() {
            const psw = document.querySelector('.psw');
            const icon = document.querySelector('.change_icon');

            if (psw.type === "text") {
                psw.type = "password";
                icon.classList.remove("fa-eye-slash");
            } else {
                psw.type = "text";
                icon.classList.toggle("fa-eye-slash");
            }
        },
        
        restablecerPsw() {
            this.showLogin = false;
            this.showResetPsw = true;
        },

        ...mapActions(["login"]),
        ...mapActions(["logout"]),

        formulario: function (e) {
            const v_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            
             if(!this.user.user) {
                this.msj = 'El correo es obligatorio';
                this.busy = false;
            } 
             else if(!v_email.test(this.user.user)){
                this.msj = 'Correo invalido'
                this.busy = false;
            }
            if (!this.user.password) {
                this.msj2 = 'La contraseña es obligatoria'
                this.busy = false;
            }
            if (this.user.user && this.user.password) {
                this.login(this.user)
                this.busy = true;
            }
            e.preventDefault();  
        },

        getCookie() {
            if (document.cookie.length > 0) {
                var arr = document.cookie.split('; ');
                for (var i = 0; i < arr.length; i++) { 
                    var arr2 = arr[i].split('=');
                    
                    if (arr2[0] == 'email') {
                        this.user.user = arr2[1];
                    } else if (arr2[0] == 'password') {
                        //Get the encrypted password arr2[1] and decrypt it
                        var bytes = CryptoJS.AES.decrypt(arr2[1].toString(), 'secret key heal4701tech');
                        var plaintext = bytes.toString(CryptoJS.enc.Utf8); //Get the decrypted password (the password entered when logging in)
                        this.user.password = plaintext;
                    } else if(arr2[0]){
                        this.user.check=arr2[1];
                    }else{
                        this.user.check=false;
                    }
                }
            }
        },
    },

    mounted() { 
        this.getCookie(),
        EventBus.$on("cerrarModal", ()=> {
            this.abrirModal = false;
        });
        
        EventBus.$on("accesoDenegado", ()=> {
            this.busy = false;
            this.msj = '';
            this.msj2 = '';
            this.msjAutorizacion = true;
        });

        EventBus.$on('backLogin2', ()=>{
            this.showLogin = true;
            this.showResetPsw = false;
        });
    }
}
</script>

<style scoped>
    .slogan_title {
        font-size: 2.2em;
        color: #b6bb4d;
        font-weight: 500;
    }

    .form_mt {
        margin-top: 25px;
    }

    .link-forgot-password {
        text-decoration: none;
        background: none;
        color: #2496c7;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: none;
        box-shadow: none;
    }

    .checkBox {
        color: #666666;
    }
</style>