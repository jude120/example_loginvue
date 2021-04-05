import { Config } from "../../Config";
import swal from "sweetalert";
import router from "../../router";
import axios from "axios";

export async function login(context, user) {
  try {
    const tipo_login = user.tipo_login;
    if (tipo_login === 3) {
        //se realiza la peticion para hacer el inicio de sesion
      axios.post(Config.url + "cliente/login", { email: user.email, password: user.password }).then(async (response) => {
        if (response.status === 200) {
          if (response.data.status === 1) {
            await context.commit('setUser', { token: response.data.token, tipo: response.data.tipo });
            router.push({ name: "home" }); //llamar a la ruta que se envia cuando un usuario inicio sesion
          }

        }
      }).catch(err => {
        if (err.response.status === 409) {
          swal("Mensaje", err.response.data.message, "error"); //puedes mostrar mensaje de error al inicio de sesion
          //router.push({ name: "login" }); retornar a la ruta donde se puede iniciar sesion
          context.commit('authError', err);
        } else {
          swal("Mensaje", "Ocurrio un error al iniciar sesión, intentelo de nuevo", "error");
          //router.push({ name: "login" }); retornar a la ruta donde se puede iniciar sesion
        }

      });
    } else {
      context.commit('setUser', { ...user });
    }
  } catch (e) {
    context.commit('authError', e.message)
  } finally {
   //context.commit('setLoading', false, { root: true })
  }
}