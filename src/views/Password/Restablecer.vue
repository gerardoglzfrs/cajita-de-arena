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
                            <div v-if="formPsw">
                                <b-form ref="formResetPsw" v-on:submit.prevent>
                                    <b-row class="justify-content-center form_mt">
                                        <b-col cols="12" sm="12" md="11" lg="10">
                                            <h3 class="txt_red text-center mb-3">Restablecer contraseña</h3>
                                            <label class="label-color pl-4"><strong>Nueva contraseña</strong></label>
                                            <div class="d-flex">
                                                <i class="fa fa-user fa-lg my-auto mr-2 icon_blue" />
                                                <b-form-input v-model="data.psw1" class="form_input-color border-0 mt-1" size="md" type="password" placeholder="Ingresa una nueva contraseña"></b-form-input>
                                            </div>
                                            <div>
                                                <span class="msjError ml-4">{{msjError}}</span>
                                            </div>
                                        </b-col>
                                        <b-col cols="12" sm="12" md="11" lg="10" class="mt-4">
                                            <label class="label-color pl-4"><strong>Verificar contraseña</strong></label>
                                            <div class="d-flex">
                                                <i class="icon_blue fa fa-lock fa-lg  my-auto mr-2"></i>
                                                <b-form-input v-model="data.psw2" class="form_input-color border-0 mt-1 psw" size="md" type="password" placeholder="Repetir contraseña"></b-form-input>
                                            </div>
                                            <span  @click="showPassword()" class="icon_float fa fa-eye fa-lg change_icon"></span>
                                        </b-col>
                                    </b-row>
                                    <div class="row justify-content-center">
                                        <b-col cols="12" sm="12" md="11" lg="10">
                                            <span class="msjError pl-4">{{msjError2}}</span>
                                        </b-col>
                                    </div>
                                    <b-row class="justify-content-center mt-4">
                                        <b-col class="ml-5" cols="12" sm="12" md="11" lg="10">
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
                                                    <b-button variant="bg_blue" class="bg_btn_form border-0 py-2 pl-4 pr-4" ref="button" :disabled="busy" type="submit" @click="resetPassword()">
                                                        RESTABLECER CONTRASEÑA
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
                                        <h3 class="txt_red text-center mt-4 mb-3">Contraseña restablecida correctamente</h3>
                                        <p class="text-instrucciones text-center">
                                            Has restablecido tu contraseña exitosamente
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
import { url } from "../../../settings";
const url2 = `${url}/api/usuarios/new_password`;

export default {
    name: 'Restablecer',

    data:() => ({
        busy: false,
        msjError: '',
        msjError2: '',
        data: {
            psw1: '',
            psw2: ''
        },
        formPsw: true,
        msjSuccess: false,
    }),

    methods: {
        onHidden() {
            this.$refs.button.focus()
        },

        async resetPassword() {
            var token = this.$route.params.token;
            const formData = {
                verified_token: token,
                password: this.data.psw1,
                password_confirmation: this.data.psw2
            }
            
            if (!this.data.psw1 || !this.data.psw2) {
                this.msjError = 'La contraseña es obligatoria';
                this.msjError2 = 'La contraseña es obligatoria';
            } else if(this.data.psw2 != this.data.psw1) {
                this.msjError2 = 'Las contraseñas deben de coicidir';
                this.msjError = '';
            } else {
                this.busy = true;
                try {
                    const res = await fetch(url2, {
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
                        this.$refs.formResetPsw.reset();
                        const message = `An error has occured: ${res.status} - ${res.statusText}`;
                        throw new Error(message);
                    }
                    this.busy = false;
                    this.formPsw = false;
                    this.msjSuccess = true; 
                } catch (error) {
                    console.log(error);
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
        }
    },

    mounted() {
        
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

    .form_mt {
        margin-top: 25px;
    }

</style>