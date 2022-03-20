import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { EventBus } from '../EventBus'
import CryptoJS from 'crypto-js'
import { url } from "../../settings";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        auth: null,
        usuarioLog: {
            id: '',
            nombre: '',
            perfil: '',
            especialidad: '',
            cedula: ''
        }
    },

    cookie: {
        email: null,
        password: null,
        check: null
    },

    mutations: {
        setToken(state, payload) { 
            state.token = payload;
            state.auth=true;
        },
        
        doLogout(state) {
            state.auth = false;
            state.token = null;
        },

        setCookie(cookie, user) {
            var text = CryptoJS.AES.encrypt(user.password, 'secret key heal4701tech');//Use CryptoJS method to encrypt
            var saveDays = new Date();
            saveDays.setTime(saveDays.getTime() + 24 * 60 * 60 * 1000 * 7); //Number of days saved
            //String splicing and storing in cookie
            window.document.cookie = "promo_shown=1; Max-Age=2600000; Secure"
            window.document.cookie = "email" + "=" + user.user + ";path=/;sameSite=none;secure;expires=" + saveDays.toGMTString();
            window.document.cookie = "password" + "=" + text + ";path=/;sameSite=none;secure;expires=" + saveDays.toGMTString();
            window.document.cookie = "check" + "=" + user.check + ";path=/;sameSite=none;secure;expires=" + saveDays.toGMTString();
        },
    
        clearCookie() {
            window.document.cookie = "email=;secure"
            window.document.cookie = "password=;secure"
            window.document.cookie = "check=false;secure"
        }
    },

    actions: {
        async login({ commit },user) {
            const loginData = {
                email: user.user,
                password: user.password
            };

            try {
                const res = await fetch(`${url}/api/auth/login`, {
                    method: 'post',
                    headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "x-access-token": "token-value",
                    },
                    body: JSON.stringify(loginData),
                });
                const userDB = await res.json();
                commit('setToken', userDB.access_token);
                localStorage.setItem('token', userDB.access_token);

                // guardar galletas
                if (user.check == true) {
                    commit('setCookie',user)
                } else {
                    commit('clearCookie')
                }

                //obtener datos
                try {
                    const res = await fetch(`${url}/api/usuarios/logged`, {
                        method: 'get',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Requested-With': 'XMLHttpRequest',
                            'Authorization': "Bearer "+ localStorage.getItem("token"),
                        }
                    });
                    if (!res.ok) {
                        EventBus.$emit("accesoDenegado");
                        const message = `An error has occured: ${res.status} - ${res.statusText}`;
                        throw new Error(message);
                    }

                    const data = await res.json();
                    this.state.usuarioLog.id = data.usuario.id;
                    this.state.usuarioLog.nombre = data.usuario.nombre;
                    this.state.usuarioLog.perfil = data.usuario.perfil.id;
                    /* this.state.usuarioLog.especialidad = data.usuario.especialidad.nombre; */
                    this.state.usuarioLog.cedula = data.usuario.cedula;
                    
                    router.push("/main")
                } catch (error) {
                    console.log(error);
                }

            } catch (error) {
                console.log(error);
            }
       },

       getToken({ commit }) {
            if(localStorage.getItem('token')) {
                commit('setToken', localStorage.getItem('token'))
            } else {
                commit('setToken', null)
            }
       },
    }
})