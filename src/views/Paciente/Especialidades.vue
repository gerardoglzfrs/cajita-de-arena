<template>
    <div>
        <Navbar/>
        <b-container class="mt-5">
            <b-row>
                <b-col class="mb-5" cols="12" sm="12" md="12" lg="3">
                    <b-button variant="bg_red " class="btn_red bg_red py-5 btn-block border-0 text-uppercase">PACIENTES</b-button>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="9">
                    <b-skeleton-wrapper class="p-0 m-0" :loading="loading">
                        <template #loading>
                            <b-row class="g-3">
                                <b-col v-for="item in skeleton" :key="item.numero" class="mb-3" cols="12" sm="12" md="4" lg="4">
                                    <b-skeleton class="size btn-block border-0" type="input"></b-skeleton>
                                </b-col>
                            </b-row>
                        </template>
 
                        <b-row class="g-3">
                            <b-col v-for="item in especialidad" :key="item.nombre" class="mb-3" cols="12" sm="12" md="4" lg="4">
                                <b-button :to="{ name:'pacientes', params:{id:item.id} }" variant="bg_blue" class="btn_blue bg_blue border-0 py-5 btn-block text-uppercase text-size"><p class="mx-auto my-auto">{{item.nombre}}</p></b-button>
                            </b-col>
                        </b-row>
                        <div class="overflow-auto mt-4" v-if="especialidades.length>12">
                            <div>
                                <b-pagination v-model="currentPage" :per-page="perPage" :total-rows="rows" align="center"></b-pagination>
                            </div>
                        </div>
                    </b-skeleton-wrapper>
                </b-col>
            </b-row>
        </b-container>
        <b-button variant="btn_red" class="float-btn-back" :to="{ name: 'main' }">
            <span class="fa fa-arrow-left my-float-btn"></span>
        </b-button>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue"
import { url } from "../../../settings";

export default {
    name: 'Especialidades',
    components: { Navbar },
    
    data:() => ({
        skeleton: [1,2,3,4,5,6,7,8,9,10,11,12],
        especialidades: [],
        currentPage: 1,
        perPage:12,
        loading: true
    }),

    computed: {
        especialidad () {
            const items = this.especialidades;
            // Return just page of items needed
            return items.slice(
                (this.currentPage - 1) * this.perPage,
                this.currentPage * this.perPage
            )
        },

        rows() {
            return this.especialidades.length
        },
    },

    methods: {
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

            } catch (error) {
                console.log(error);
            }
        },
    },

    beforeMount() {
        this.obtenerEspecialidades();
    }

}
</script>

<style scoped>
    .bg_blue {
        background-color: #689aaf;
    }

    .btn_red {
        border-radius: 10px;
        color: white;
        cursor: default !important;
        outline: none !important;
        box-shadow: none !important;
    }

    .btn_blue {
        color: white;
        border-radius: 10px;
        outline: none !important;
        box-shadow: none !important;
    }

    .text-size {
        font-size: 0.7rem !important;
    }

    .size {
        height: 104px;
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

</style>