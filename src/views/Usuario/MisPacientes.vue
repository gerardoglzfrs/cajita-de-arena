<template>
    <div>
        <Navbar/>
         <b-container class="mt-5">
            <b-row>
                <b-col cols="12" sm="12" md="12" lg="12">
                    <h3 class="txt_blue text-uppercase mb-3  pl-3">Mis pacientes</h3>
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
                                <b-col v-if="empty" class="d-flex justify-content-center items-center" cols="12" sm="12" md="12" lg="12">
                                    <div class="mx-auto my-auto">
                                        <h2 class="txt_red mb-5">¡No hay pacientes!</h2>
                                        <div class="mx-auto" style="width: auto; margin: auto auto auto auto;">
                                            <b-img class="mx-auto" src="../../assets/img/empty_paciente.png" style="max-height: 320px; max-width: 320px;"/>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col class="mb-3" cols="12" sm="12" md="4" lg="4">
                                    <div class="input-group flex-nowrap cursor">
                                        <span class="input-group-text" id="img" align="center">
                                            <i class="fa fa-user fa-2x"></i>
                                        </span>
                                        <p type="text" class="form-control contenedor" id="contenido">Gerardo Gonzalez flores<br>Habitacion 115</p>
                                    </div>
                                </b-col>
                                <b-col class="mb-3" cols="12" sm="12" md="4" lg="4">
                                    <div class="input-group flex-nowrap cursor">
                                        <span class="input-group-text" id="img" align="center">
                                            <i class="fa fa-user fa-2x"></i>
                                        </span>
                                        <p type="text" class="form-control contenedor" id="contenido">Gerardo Gonzalez flores<br>Habitacion 115</p>
                                    </div>
                                </b-col>
                                <b-col class="mb-3" cols="12" sm="12" md="4" lg="4">
                                    <div class="input-group flex-nowrap cursor">
                                        <span class="input-group-text" id="img" align="center">
                                            <i class="fa fa-user fa-2x"></i>
                                        </span>
                                        <p type="text" class="form-control contenedor" id="contenido">Gerardo Gonzalez flores<br>Habitacion 115</p>
                                    </div>
                                </b-col>
                                <b-col class="mb-3" cols="12" sm="12" md="4" lg="4">
                                    <div class="input-group flex-nowrap cursor">
                                        <span class="input-group-text" id="img" align="center">
                                            <i class="fa fa-user fa-2x"></i>
                                        </span>
                                        <p type="text" class="form-control contenedor" id="contenido">Gerardo Gonzalez flores<br>Habitacion 115</p>
                                    </div>
                                </b-col>
                                <b-col class="mb-3" cols="12" sm="12" md="4" lg="4">
                                    <div class="input-group flex-nowrap cursor">
                                        <span class="input-group-text" id="img" align="center">
                                            <i class="fa fa-user fa-2x"></i>
                                        </span>
                                        <p type="text" class="form-control contenedor" id="contenido">Gerardo Gonzalez flores<br>Habitacion 115</p>
                                    </div>
                                </b-col>
                                <b-col class="mb-3" cols="12" sm="12" md="4" lg="4">
                                    <div class="input-group flex-nowrap cursor">
                                        <span class="input-group-text" id="img" align="center">
                                            <i class="fa fa-user fa-2x"></i>
                                        </span>
                                        <p type="text" class="form-control contenedor" id="contenido">Gerardo Gonzalez flores<br>Habitacion 115</p>
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
         </b-container>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
export default {
    name: 'MisPacientes',
    components: { Navbar },

    data:() =>({
        empty: false,
        loading: false,
        skeleton: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    })
}
</script>

<style scoped>
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