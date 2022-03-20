<template>
    <section class="vh-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-6 px-0 d-none d-lg-block d-md-block">
                    <b-img src="../../assets/img/IconoPrincipal.png" alt="Login image" class="w-100 vh-100" style="object-fit: cover;"/>
                </div>
                <b-col cols="12" sm="12" md="6" lg="6">
                    <div class="container mt-1" >
                        <b-row align-h="end">
                            <b-img class="small_hearth" src="../../assets/heart_red.svg"/>
                        </b-row>
                        <div class="row justify-content-center mx-auto">
                            <div class="mx-auto" style="width: auto; margin: auto auto auto auto;">
                                <b-img class="mx-auto" src="../../assets/logos/lopez_orozco.png" style="max-height: 300px; max-width: 300px;"/>
                                <h3 class="title_slogan">Tecnología en salud</h3>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div v-if="formPassword">
                                <b-form ref="definirPsw" v-on:submit.prevent>
                                    <b-row class="form_mt justify-content-center">
                                        <b-col class="mt-3" cols="12" sm="12" md="12" lg="12">
                                            <h3 class="txt_red text-center mb-3">¡Comencemos!</h3>
                                            <label class="icon_blue mb-1 ml-4"><strong>Crear contraseña</strong></label>
                                            <div class="d-flex">
                                                <i class="fa fa-lock fa-lg my-auto mr-2 icon_blue" />
                                                <b-form-input v-model="data.psw1" class="form_input-color border-0" size="md" type="password" placeholder="Ingresa tu contraseña"></b-form-input>
                                            </div>
                                            <div class="my-0 py-0">
                                                <span class="msjError ml-4" >{{msjError}}</span>
                                            </div>
                                        </b-col>
                                        <b-col class="mt-3" cols="12" sm="12" md="12" lg="12">
                                            <label class="label-color mb-1 ml-4"><strong>Verificar contraseña</strong></label>
                                            <div class="d-flex">
                                                <i class="icon_blue fa fa-lock fa-lg  my-auto mr-2"></i>
                                                <b-form-input v-model="data.psw2" class="form_input-color border-0 psw" size="md" type="password" placeholder="Ingresa tu contraseña"></b-form-input>
                                            </div>
                                            <span  @click="showPassword()" class="icon_float fa fa-eye fa-lg change_icon"></span>
                                        </b-col>
                                    </b-row>
                                    <div class="row justify-content-center">
                                        <b-col cols="12" sm="12" md="12" lg="12">
                                            <span class="msjError pl-4">{{msjError2}}</span>
                                        </b-col>
                                    </div>
                                    <b-row class="justify-content-center">
                                        <b-col class="mt-4 ml-5" cols="12" sm="12" md="12" lg="12">
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
                                                    <b-button variant="bg_blue" class="bg_btn_form border-0 py-2 pl-4 pr-4" ref="button" :disabled="busy" type="submit" @click="confirmar()">
                                                        CONFIRMAR CONTRASEÑA
                                                    </b-button>
                                                </b-overlay>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-form>
                            </div>
                            <div v-if="msjSuccess">
                                <b-row class="justify-content-center mt-5">
                                    <b-col cols="12" sm="12" md="12" lg="8">
                                        <div class="d-flex justify-content-center">
                                            <span class="icon-success text-center p-3" align="center">
                                                <i class="fa fa-check fa-2x"></i>
                                            </span>
                                        </div>
                                        <h3 class="txt_red text-center mt-4 mb-3">Correo confirmado correctamente</h3>
                                        <p class="text-instrucciones text-center">
                                            Felicidades, puede iniciar sesión con su correo y contraseña registrados. 
                                        </p>
                                    </b-col>
                                </b-row>
                                <b-row class="justify-content-center mt-4">
                                    <b-col cols="12" sm="12" md="12" lg="3">
                                        <b-button variant="bg_blue" class="bg_btn_form border-0 py-2 pl-4 pr-4" ref="button" :to="{ name: 'login' }">
                                            ACEPTAR
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </div>
                </b-col>
            </div>
        </div>
    </section>
</template>

<script>
import CryptoJS from 'crypto-js'
import { url } from "../../../settings";

export default {
    name: 'Verificar',

    data:() => ({
        busy: false,
        formPassword: true,
        msjSuccess: false,
        msjError: '',
        msjError2: '',
        msjError3: '',
        data: {
            psw1: '',
            psw2: '',
            /* check: false, */
        }
    }),

    methods: {
        onHidden() {
            this.$refs.button.focus()
        },

        async confirmar() {
            var token = this.$route.params.token;

            const formData = {
                verified_token: token,
                password: this.data.psw1,
                password_confirmation: this.data.psw2
            }   

            if(!this.data.psw1) {
                this.msjError = 'La contraseña es obligatoria';
            } else if(!this.data.psw2) {
                this.msjError = '';
                this.msjError2 = 'La contraseña es obligatoria';
            } else if(this.data.psw2 != this.data.psw1) {
                this.msjError = '';
                this.msjError2 = 'Las contraseñas deben de coicidir';
            } else {
                this.busy = true;
                try {
                    const res = await fetch(`${url}/api/usuarios/verificar_email`, {
                        method: 'post',
                        headers: {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        "x-access-token": "token-value",
                        },
                        body: JSON.stringify(formData)
                    });
                    if (!res.ok) {
                        this.msjError = '';
                        this.msjError2 = 'El Token de verificación no existe o ha expirado'
                        this.busy = false;
                        this.$refs.definirPsw.reset();
                        const message = `An error has occured: ${res.status} - ${res.statusText}`;
                        throw new Error(message);
                    }
                    this.busy = false;
                    this.formPassword = false;
                    this.msjSuccess = true;
                } catch (error) {
                    console.log(error);
                    this.busy = false;
                }
            }
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

        getCookie() {
            if (document.cookie.length > 0) {
                var arr = document.cookie.split('; ');
                for (var i = 0; i < arr.length; i++) { 
                    var arr2 = arr[i].split('=');
                    
                    if (arr2[0] == 'email') {
                        this.data.email = arr2[1];
                    } else if (arr2[0] == 'psw2') {
                        //Get the encrypted password arr2[1] and decrypt it
                        var bytes = CryptoJS.AES.decrypt(arr2[1].toString(), 'secret key heal4701tech');
                        var plaintext = bytes.toString(CryptoJS.enc.Utf8); //Get the decrypted password (the password entered when logging in)
                        this.data.psw2 = plaintext;
                    } else if(arr2[0]){
                        this.data.check=arr2[1];
                    }else{
                        this.data.check=false;
                    }
                }
            }
        },
    },
    
    mounted() {
        this.getCookie();
    }

}
</script>

<style scoped>
    .icon-success {
        border: 3px solid #39b26d;
        border-radius: 50%;
    }

    .fa-check {
        color: #39b26d;
        font-size: 2.5rem;
    }

    .text-instrucciones {
        color: #a1a1a1;
    }

    .checkBox {
        color: #666666;
    }
    .form_mt {
        margin-top: 16px;
    }
</style>