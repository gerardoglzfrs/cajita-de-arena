<template>
    <div>
        <Navbar/>
        <div class="mx-5 mt-5">
            <b-row>
                <b-col cols="12" sm="12" md="12" lg="5">
                    <b-row>
                        <b-col class="mb-4" cols="6">
                            <b-button variant="bg_red" :to="{ name:'especialidades' }" class="bg_red btn_options border-0 py-5 btn-block text-uppercase">PACIENTES</b-button>
                        </b-col>
                        <b-col class="mb-4" cols="6">
                            <b-button variant="bg_red" class="bg_red btn_options border-0 py-5 btn-block text-uppercase">MÓDULO 1</b-button>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="mb-4" cols="6">
                            <b-button variant="bg_red" class="bg_red btn_options border-0 py-5 btn-block text-uppercase">MÓDULO 2</b-button>
                        </b-col>
                        <b-col class="mb-4" cols="6">
                             <b-button variant="bg_red" class="bg_red btn_options border-0 py-5 btn-block text-uppercase">MÓDULO 3</b-button>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col class="mb-4" cols="6">
                            <b-button variant="bg_red" class="bg_red btn_options border-0 py-5 btn-block text-uppercase">MÓDULO 4</b-button>
                        </b-col>
                        <b-col class="mb-4" cols="6">
                            <b-button variant="bg_red" class="bg_red btn_options border-0 py-5 btn-block text-uppercase">MÓDULO 5</b-button>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="6">
                            <b-button variant="bg_red" class="bg_red btn_options border-0 py-5 btn-block text-uppercase">MÓDULO 6</b-button>
                        </b-col>
                        <b-col cols="6">
                             <b-button variant="bg_red" class="bg_red btn_options border-0 py-5 btn-block text-uppercase">MÓDULO 7</b-button>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col class="p-auto m-auto d-none d-lg-block" cols="12" sm="12" md="12" lg="7">
                    <div class="pl-5 pb-5" style="width: auto; margin: 0 auto 0 auto;">
                        <b-img src="../assets/img/hospitalizacion.png" style="max-height: 100%; max-width: 100%;"/>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import router from '../router'
export default {
    name: 'Main',
    components: { Navbar },
    // data:()=>{
    //     to:""
    // },
    methods: {
        to(to){
            router.push({ name: to })
        }
    }
}
</script>

<style scoped>
    .btn_options {
        border-radius: 10px;
        color: white;
        outline: none !important;
        box-shadow: none !important;
    }
    
    .btn_options:hover {
        background-color: #af4c5d;
    }

</style>