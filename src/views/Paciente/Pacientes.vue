<template>
    <div>
        <Navbar/>
        <b-container class="mt-5">
            <b-row>
                <b-col class="mb-3" cols="12" sm="12" md="12" lg="3">
                    <div class="bg_red py-3 mb-4 btn_radius text-center txt_white text-uppercase">PACIENTES</div>
                    <div class="table-wrapper-scroll-y my-custom-scrollbar">
                        <b-skeleton-wrapper class="p-0 m-0" :loading="loading">
                            <template #loading>
                                <tbody class="table border-0 mb-0">
                                    <tr v-for="item of skeleton" :key="item.id">
                                        <th class="border-0 size_th_skele" scope="row">
                                            <b-skeleton class="border-0 animacion" type="input"></b-skeleton>
                                        </th>
                                    </tr>
                                </tbody>
                            </template>

                            <table class="table border-0 mb-0">
                                <tbody>
                                    <tr v-for="item of especialidades" :key="item.nombre">
                                        <th class="border-0" scope="row">
                                            <button @click="mostrarPacientes(item.id)" v-bind:id="item.id" class="btn_border py-2 btn_radius text-center text-uppercase btn-block btn_puchado">{{item.nombre}}</button>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </b-skeleton-wrapper>
                    </div>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="9">
                    <b-container> 
                        <b-skeleton-wrapper class="p-0 m-0" :loading="loading2">
                            <template #loading>
                                <b-row>
                                    <b-col v-for="item of skeleton2" :key="item.id" class="mb-3" cols="12" sm="12" md="4" lg="4">
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
                                <b-col v-for="item of pacientes" :key="item.nombre" class="mb-3" cols="12" sm="12" md="4" lg="4">
                                    <div class="input-group flex-nowrap cursor" v-bind:title="item.nombre">
                                        <span class="input-group-text" id="img" align="center">
                                            <i class="fa fa-user fa-2x"></i>
                                        </span>
                                        <p type="text" class="form-control contenedor" id="contenido">{{ item.nombre }}<br>Habitacion 115</p>
                                    </div>
                                </b-col>
                            </b-row>
                            <div class="overflow-auto mt-4" v-if="pacientes.length>12">
                                <div class="mt-3">
                                    <b-pagination v-model="currentPage" :total-rows="rows" align="center"></b-pagination>
                                </div>
                            </div>
                        </b-skeleton-wrapper>
                    </b-container>
                </b-col>
            </b-row>
        </b-container>
        <b-button variant="btn_red" class="float-btn-back" :to="{ name: 'especialidades' }">
            <span class="fa fa-arrow-left my-float-btn"></span>
        </b-button>
    </div>    
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import { url } from "../../../settings";

export default {
    name: 'Pacientes',
    components: { Navbar },

    data:()=>({
        empty: false,
        loading: true,
        skeleton: [1,2,3,4,5,6,7],
        loading2: true,
        skeleton2: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
        currentPage: 1,
        perPage:12,
        pacientes: [],
        especialidades: [{}],
    }),

    computed: {
        allPacientes() {
            const items = this.pacientes;
            // Return just page of items needed
            return items.slice(
                (this.currentPage - 1) * this.perPage,
                this.currentPage * this.perPage
            )
        },

        rows() {
            return this.allPacientes.length
        },
    },

    methods: { 
        pintar() {
            console.log("entre");
            var id = this.$route.params.id
            const ids = document.getElementById(id);
            ids.classList.add('push_btn_blue');

        },

        async mostrarPacientes(id) {
            this.loading2 = true;
            const ids = document.getElementById(id);
            ids.classList.add('push_btn_blue'); 
            for (let i = 0; i < this.especialidades.length; i++) {
                if (this.especialidades[i].id != id) {
                    const ide = document.getElementById(this.especialidades[i].id);
                    ide.classList.remove('push_btn_blue');
                }
            }

            try {
                const res = await fetch(`${url}/pacientes/${id}`, {
                    headers: {
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
                this.pacientes = data.pacientes;

                if (this.pacientes.length === 0) {
                    this.empty = true;
                    this.loading2 = false;
                } else {
                    this.empty = false;
                    this.loading2 = false;
                }
               
            } catch (error) {
                console.log(error);
            }
        },

        async obetenerPacientes() {
            var id = this.$route.params.id;
            
            try {
                const res = await fetch(`${url}/api/especialidades/pacientes/${id}`, {
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
                this.pacientes = data.pacientes;
                
                if (this.pacientes.length === 0) {
                    this.empty = true;
                    this.loading2 = false;
                } else {
                    this.empty = false;
                    this.loading2 = false;
                }

            } catch (error) {
                console.log(error);
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
                this.especialidades = data.especialidades;
                this.loading = false;

                setTimeout(() => {
                    this.pintar();
                }, 100);
                console.log(this.$route.params.id);
                console.log(data.especialidades);
                // for (const val of data.especialidades) {
                //     if (val.id!=this.$route.params.id) {
                //         this.especialidades.push(val)
                //     }else{
                //         console.log("entre al else");
                //         this.especialidades.unshift(val)
                //     }
                    
                // }
                // for (let i = 0; i < data.especialidades.length; i++) {
                //     if (data.especialidades[i].id == this.$route.params.id) {
                //         this.especialidades.unshift(data.especialidades[i])
                //     } else {
                //         this.especialidades.push(data.especialidades[i])
                //     }
                    
                // }
                console.log(this.especialidades);
            } catch (error) {
                console.log(error);
            }
        },
    },

    mounted() {
        this.obetenerPacientes();
        this.obtenerEspecialidades();
    },
}
</script>

<style scoped>
    /* Skeleton de tabla */
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


    /* Tabla de especialidades */
    .my-custom-scrollbar {
        position: relative;
        height: 50vh;
        overflow: auto;
    }

    .table-wrapper-scroll-y {
        display: block;
    }

    p {
        font-size: 0.8rem;
    }

    i {
        color: #ced4da;
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
</style>