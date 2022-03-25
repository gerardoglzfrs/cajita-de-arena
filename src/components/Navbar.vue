<script src="http://benalman.com/code/projects/jquery-throttle-debounce/jquery.ba-throttle-debounce.js"></script>
<style src="vue-advanced-search/dist/AdvancedSearch.css"></style>
<template>
    <div>
        <b-navbar class="bg_red py-2" type="dark" toggleable="lg">
            <b-navbar-brand href="#">
                <b-img class="svg" src="../assets/Healtech_heart.svg" alt=""/>
                <router-link to="/main" tag="span" custom v-slot="{navigate}">
                    <span class="pl-2" @click="navigate" @keypress.enter="navigate"><span class="txt_white  title">HEALTECH</span></span>
                </router-link>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-navbar-nav>
                        <b-nav-item href="#">
                            <router-link to="/main" tag="span" custom v-slot="{navigate}">
                                <span class="option mr-3" @click="navigate" @keypress.enter="navigate"><span class="txt_white">INICIO</span></span>
                            </router-link>
                            <router-link to="/registro" tag="span" custom v-slot="{navigate}">
                                <span class="option mr-3" @click="navigate" @keypress.enter="navigate"><span class="txt_white">REGISTRO</span></span>
                            </router-link>
                        </b-nav-item>
                    </b-navbar-nav>
                    <b-nav-form>

                    <!-- Este es el que jalaba -->
                            <!-- <div class="d-flex content">
                                <b-form-input class="input_navbar" autocomplete="off" list="my-list-id" v-model="query" placeholder="Buscar paciente"></b-form-input>
                                    <datalist id="my-list-id"  v-if="listOpen">
                                    
                                        <option class="click" v-for="user in users" :key="user.id" @click="onClick(user)">{{ user.login }}</option>
                                    
                                </datalist>
                                <a class="float-right py-2 mr-3">
                                    <i class="fa fa-search txt_white"></i>
                                </a>
                            </div> -->


                       <!--  <section>
                            <div class="d-flex searchbox content">
                            <b-form-input class="input_navbar" list="input-list" type="text" v-model="query" placeholder="Search for a Github User"/>
                             <a class="float-right py-2 mr-3">
                                    <i class="fa fa-search txt_white"></i>
                                </a>
                            </div>
                          
                        </section>   
 -->
                <div class="d-flex content pl-2">  
                    <vue-typeahead-bootstrap
                        class="px-1 input_navbar"
                        v-model="query"
                        :data="users"
                        :serializer="item => item.login"
                        highlightClass="special-highlight-class"
                        @hit="onNombreSeleccionado"
                        :minMatchingChars="3"
                        placeholder="Buscar pacientes"
                        inputClass="special-input-class"
                        :disabledValues="(selecteduser ? [selecteduser.login] : [])"
                        @input="lookupUser"
                        />
                        <a class="float-right py-2 px-1 mr-3 " href="">
                            <i class="fa fa-search txt_white"></i>
                        </a>
                </div>
                        
                   <!--  <div class="d-flex content pl-2"> 
                             <advanced-search
                            v-model="query"
                            :options="options"
                            class="my-auto mx-auto py-auto px-auto"
                            placeholder="Buscar pacientes"
                            multiple
                            @select="hola(options)"

                            >
                            </advanced-search>

                            <a class="float-right py-2 px-1 mr-3 " href="">
                                <i class="fa fa-search txt_white"></i>
                            </a>
                        </div> -->


                    </b-nav-form>

                    <b-nav-item-dropdown right>
                        <template #button-content>
                            <i class="fa fa-user fa-lg txt_white"></i>
                        </template>
                        <b-dropdown-item class="dropdown-color" @click="perfil()">
                            <span class="fa fa-user"></span>
                            <span class="pl-2">Perfil</span>
                        </b-dropdown-item>
                        <b-dropdown-item v-if="usuarioLog.perfil === 1" class="dropdown-color" @click="misPacientes()">
                            <span class="fa fa-user-plus"></span>
                            <span class="pl-1">Mis pacientes</span>
                        </b-dropdown-item>
                        <b-dropdown-item @click="logout()">
                            <span class="fa fa-arrow-left"></span>
                            <span class="pl-2">Salir</span>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
            
        
        <Logout :abrir="openLogout"/>
    </div>
</template>

<script>
import AdvancedSearch from 'vue-advanced-search';

import Logout from '@/components/Modals/Logout.vue'
import router from '../router'
import { EventBus } from '../EventBus';
import { mapState } from "vuex"
import { url } from "../../settings"
/* import axios from "axios"
import _ from 'lodash'; */
 import {debounce} from 'lodash';

export default {
    name: 'Navbar',
    components: { Logout, AdvancedSearch },

    data:() => ({

        query: '',
        users: [],
        selecteduser: null,

        listOpen: true,


        openLogout: false,
        busqueda: "",
        pacientes: [],

		nombreSeleccionado: null,
    }),

    computed: {
        ...mapState(['usuarioLog'])
    },

     // WATCH
    watch: {
        /* query: function() {
        this.search();
        } */
    },
    

    methods: {
         lookupUser: debounce(function(){
      // in practice this action should be debounced
      fetch(`https://api.github.com/search/users?q=${this.query}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.users = data.items;
        })
    }, 500),   


        /* search: _.debounce(
            function() {
                if(this.query.length > 1) {
                    axios
                    .post('http://192.241.134.211/api/usuarios/search/'+this.query,{
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Requested-With': 'XMLHttpRequest',
                            'Authorization': "Bearer "+ localStorage.getItem("token"),
                        }
                    })
                    .then(res => {
                        this.listOpen = true;
                        this.users = res.data.items;
                        this.users.length = 10;
                    });
                } else {
                    this.query = '';
                    this.users = [];
                    this.listOpen = false;
                }
            }, 400), */
    
    onClick(user) {
        console.log("entre"+user);
       /* console.log(user); */
      /* this.query = user.login;
      console.log(user.login);
      this.listOpen = false; */
    },


        async obtenerPacientes() {
            try {
                const res = await fetch(`${url}/api/pacientes`, {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization': "Bearer "+ localStorage.getItem("token"),
                    }
                })
                if (!res.ok) {
                    const message = `An error has occured: ${res.status} - ${res.statusText}`;
                    throw new Error(message);
                }
                const data = await res.json();
                for (const item of data.pacientes) {
                    console.log(item.nombre);
                    this.pacientes.push(item.nombre)
                }
            } catch (error) {
                console.log(error);
            }
        },

        onNombreSeleccionado(nombre) {
			this.nombreSeleccionado = nombre;
            console.log(this.nombreSeleccionado);
		},

        logout() {
            this.openLogout = true;
        },

        misPacientes() {
            router.push("/mis_pacientes")
        },

        perfil() {
            router.push("/perfil")
        }
    },

    mounted() {
        EventBus.$on('cerrarModalLogout',()=>{
            this.openLogout = false;
        })

        this.obtenerPacientes();

        window.addEventListener("keypress", function(event){
            if (event.keyCode == 13){
                event.preventDefault();
            }
        }, false);

    }
}
</script>

<style lang="scss">
/* de */
   .special-input-class{
    background-color: transparent !important;
    border: none !important;
    width: 400px !important;
    color: white !important;
    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none !important;
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
  }
    .special-input-class::placeholder {
        color: white !important;
    }

  .special-highlight-class{
    font-weight: 900;
    color: #585656 !important;
  }

/* end ed */

    .click {
        cursor: pointer;
    }
    /* end example */

    #vue-bts{
        background-color: transparent !important;
    }

    .svg {
        height: 40px;
        width: 40px;
        transform: scale(1.4);
    }

    .content {
        border: solid 1px white;
        border-radius: 1rem;
        margin-right: 10px;
    }


    @media only screen and (max-width: 576px) {
        .input_navbar {
            width: 80vw;
        }
    }

    @media only screen and (max-width: 350px) {
        .input_navbar {
            width: 70vw;
        }
    }


    /* @media only screen and (max-width: 500px) {
        .input_navbar {
            width: 100vw;
        }
    } */

    .form-rounded {
        border: none;
        padding-left: 0;
        margin-left: 0;
    }

    a {
        text-decoration: none;
        color: white;
    }

    .title {
        font-weight: 500;   
    }

    .color  {
        color: white !important;
    }

    .option {
        font-weight: 400;
    }

    .option:hover {
        border-bottom: 2px solid #fff;
    }

    input {
        background-color: blue;
    }

</style>