<template>
    <div>
        <b-modal class="rounded-lg" size="sm" v-model="abrir" no-close-on-esc no-close-on-backdrop hide-header-close hide-footer hide-header centered>
            <div class="d-flex justify-content-center">
                <span class="icono text-center p-2" align="center">
                    <i class="fa fa-check fa-2x txt_white"></i>
                </span>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <span><strong>¡Bien hecho!</strong></span><br>
            </div>
            <div class="d-flex justify-content-center text-center mt-1">
                <p><small>Los datos se han guardado correctamente</small></p>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <button @click="cerrarModal()" class="btn_finalizar border-0 px-3 pb-2 pt-1">Finalizar</button>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { EventBus } from '../../EventBus'

export default {
    name: 'Success',
    props: ['abrir'],
    
    methods: {
        cerrarModal(){
            EventBus.$emit("cerrarModal");
        },
    }

}
</script>

<style scoped>
    .icono {
        border: none;
        border-radius: 50%;
        background-color: #15742b;
    }

    .btn_finalizar {
        border-radius: 5px;
        background-color: #689aaf;
        color: white;
    }
    
</style>