import axios from 'axios';
import store from '../store';
import router from '../router';

export var interceptor_axios={

    setup_request:function() {
        axios.interceptors.request.use(function(config) {
            const user = store.state.auth.user; //buscamos donde tenemos guardado el token
            if(user !== null) { //si el usuario esta logeado enviamos el token que se encuentra guardado
                config.headers.Authorization = `Bearer ${user.token}`; 
            }
            return config;
        }, function(err) {
            return Promise.reject(err);
        });
    },
    setup_response:function() {
        axios.interceptors.response.use(function (response) {
            return response;
          }, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            if(error.response.status===401){ //si la API nos regresa un status 401 , significa que el token expiro
                //borrar user de storage y redireccionar a login
                store.commit('auth/logout'); //llamar a funcion para eliminar token y datos de usuario que se encuentra en auth/mutations
                router.push("/"); //ruta donde se inicia sesion
            }
            return Promise.reject(error);
          });
    }
}