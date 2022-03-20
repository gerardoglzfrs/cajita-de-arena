<template>
    <div>
        <b-form ref="formSendEmail" v-if="showForm" v-on:submit.prevent>
            <b-row class="justify-content-center mt-5">
                <h3 class="txt_red text-center mb-3">¿Olvidaste la contraseña?</h3>
                <b-col cols="11" sm="11" md="10" lg="10">
                    <label class="label-color pl-4"><strong>Ingresa tu correo electrónico</strong></label>
                    <div class="d-flex">
                        <i class="fa fa-user fa-lg my-auto mr-2 icon_blue" />
                        <b-form-input v-model="data.email" class="form_input-color border-0 mt-1" size="md" placeholder="Ingresa tu correo electrónico"></b-form-input>
                    </div>
                    <div>
                        <span class="msjError ml-4" >{{ msjError }}</span>
                    </div>
                </b-col>
            </b-row>
            <b-row class="justify-content-center mt-4">
                <b-col cols="11" sm="11" md="10" lg="10">
                    <div class="pl-4">
                        <b-overlay
                        :show="busy"
                        rounded
                        opacity="0.6"
                        spinner-small
                        spinner-variant="primary"
                        class="d-inline-block"
                        @hidden="onHidden"
                        >
                            <b-button variant="bg_blue" class="bg_btn_form border-0 py-2 pl-4 pr-4" ref="button" :disabled="busy" type="submit" @click="enviarCorreo()">
                                CONTINUAR
                            </b-button>
                        </b-overlay>
                    </div>
                </b-col>
            </b-row>
        </b-form>
        
        <div v-if="showMsj">
            <div class="row justify-content-center mt-3" style="width: auto; margin: 0 auto 0 auto;">
                <b-img src="../../assets/img/Enviado.png" style="max-height: 100px; max-width: 100px;"/>
            </div>
            <b-row class="justify-content-center mt-5">
                <b-col cols="12" sm="12" md="12" lg="8">
                    <h3 class="txt_red text-center mb-3">Correo de restablecimiento de contraseña enviado</h3>
                    <p class="text-instrucciones text-center">Se ha enviado un correo electrónico a <strong>{{this.data.email}}</strong>. Sigue las instrucciones para restablecer la contraseña.</p>
                </b-col>
            </b-row>
            <b-row class="justify-content-center mt-4">
                <b-col cols="3" sm="3" md="3" lg="2">
                     <b-button variant="bg_blue" class="bg_btn_form border-0 py-2 pl-4 pr-4" ref="button" @click="regresar()">
                        ACEPTAR
                    </b-button>
                </b-col>
            </b-row>
        </div>

        <b-button variant="btn_red" class="float-btn-back pt-1" @click="regresar()">
            <span class="fa fa-arrow-left my-float-btn"></span>
        </b-button>
    </div>
</template>

<script>
import { EventBus } from '../../EventBus'
import { url } from "../../../settings";
const v_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
    name: 'EnviarCorreo',

    data:() => ({
        busy: false,
        showForm: true,
        showMsj: false,
        msjError: '',
        data: {
            email: ''
        }

    }),

    methods: {
        onHidden() {
            this.$refs.button.focus()
        },

        regresar() {
            EventBus.$emit('backLogin')
        },

        async enviarCorreo() {
            const formData = {
                email: this.data.email
            }

            if(!this.data.email) {
                this.msjError = 'El correo es obligatorio';
                this.busy = false;
            } 
            else if(!v_email.test(this.data.email)){
                this.msjError = 'Correo invalido'
                this.busy = false;
            } else {
                this.busy = true;
                try {
                    const res = await fetch(`${url}/api/usuarios/forgot_password`, {
                        method: 'post',
                        headers: {
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        "x-access-token": "token-value",
                        },
                        body: JSON.stringify(formData)
                    });
                    if (!res.ok) {
                        this.msjError = 'Los datos proporcionados no son válidos'
                        this.$refs.formSendEmail.reset();
                        this.busy = false;
                        const message = `An error has occured: ${res.status} - ${res.statusText}`;
                        throw new Error(message);
                    }

                    this.busy = false;
                    this.showForm = false;
                    this.showMsj = true;
    
                } catch (error) {
                    console.log(error);
                }
            }
        },
    }
}
</script>

<style scoped>
    .text-instrucciones {
        color: #a1a1a1;
    }

</style>