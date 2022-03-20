<template>
    <div>
        <b-modal class="rounded-lg" size="sm" v-model="abrir" no-close-on-esc no-close-on-backdrop hide-header-close hide-footer hide-header centered>
            <div class="d-flex justify-content-center">
                <span class="icono text-center p-2" align="center">
                    <i class="fa fa-warning fa-3x"></i>
                </span>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <span><strong>¡Salir!</strong></span><br>
            </div>
            <div class="d-flex justify-content-center text-center mt-1">
                <p><small>¿Estás seguro de querer cerrar sesión?</small></p>
            </div>
            <div class="d-flex justify-content-center mt-2">
                <button @click="logout()" class="btn_finalizar border-0 px-3 pb-2 pt-1">Finalizar</button>
                <button @click="cerrarModal()" class="btn_cancelar px-3 pb-2 pt-1 ml-4">Cancelar</button>
            </div>
        </b-modal>
    </div>    
</template>

<script>
import { EventBus } from '../../EventBus'
import router from '../../router'
import { url } from "../../../settings";

export default {
    name: 'logout',
    props: ['abrir'],
    
    methods: {
        cerrarModal(){
            EventBus.$emit("cerrarModalLogout");
        },

        async logout() {
            try {
                const res = await fetch(`${url}/api/auth/logout`, {
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
                localStorage.removeItem('token');
                router.push('/')
            } catch (error) {
                console.log(error);
            } 
        }
    }
}
</script>

<style scoped>
    .fa-warning {
        color: #d15460;
    }
    
    .btn_finalizar {
        border-radius: 5px;
        background-color: #689aaf;
        color: white;
    }

    .btn_cancelar {
        border-radius: 5px;
        border: 1px solid #c9888e;
        background-color: white;
        color: #c9888e;
    }
</style>