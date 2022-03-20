<template>
    <div>
        <b-modal class="rounded-lg" size="sm" v-model="abrir" no-close-on-esc no-close-on-backdrop hide-header-close hide-footer hide-header centered>
            <div class="d-flex justify-content-center">
                <span class="icono text-center" align="center">
                    <i class="fa fa-close fa-4x icon-color"></i>
                </span>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <span class="title"><strong>¡Error!</strong></span><br>
            </div>
            <div class="d-flex justify-content-center text-center mt-1">
                <p><small>Verifica los datos que has ingresado</small></p>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <button @click="cerrarModal()" class="btn_finalizar border-0 px-3 pb-2 pt-1">Aceptar</button>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { EventBus } from '../../EventBus'

export default {
    name: 'Error',
    props: ['abrir'],
    
    methods: {
        cerrarModal(){
            EventBus.$emit("cerrarModalError");
        },
    }

}
</script>

<style scoped>
    .icon-color {
        color: rgb(169, 11, 11);
    }

    .title {
        color: #a25c68;
    }

    .icono {
        border-radius: 50%;
        background-color: white;
    }

    .btn_finalizar {
        border-radius: 5px;
        background-color: #689aaf;
        color: white;
    }
    
</style>