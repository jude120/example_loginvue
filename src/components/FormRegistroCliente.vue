<template>
  <ValidationObserver ref="form_infouser">
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="exampleInputEmail1">correo:</label>
          <ValidationProvider name="correo" rules="required|email">
            <div slot-scope="{ errors }">
              <input
                type="text"
                v-model="correo"
                class="form-control"
                name="correo"
                aria-describedby="emailHelp"
                placeholder="email"
              />
              <p v-if="errors[0]" class="text-danger">
                <font-awesome-icon icon="exclamation-triangle" />{{
                  errors[0].replace("correo", "")
                }}
              </p>
            </div>
          </ValidationProvider>

        </div>
        <div class="form-group col-md-6">
          <label for="exampleInputEmail1">password:</label>
          <ValidationProvider name="pass" rules="required">
            <div slot-scope="{ errors }">
              <input
                type="password"
                v-model="pass"
                class="form-control"
                name="pass"
              />
              <p v-if="errors[0]" class="text-danger">
                <font-awesome-icon icon="exclamation-triangle" />{{
                  errors[0].replace("pass", "")
                }}
              </p>
            </div>
          </ValidationProvider>
          
        </div>
      </div>
      
      
      <div class="form-row">
        <button
          type="submit"
          @click.prevent="actualizar_informacion"
          class="btn btn-block btn-info"
        >
          Iniciar sesión
        </button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import { Config } from "../Config";
//import axios from "axios";
import { ValidationObserver } from "vee-validate";
import { mapActions } from "vuex";
export default {
  name: "FormRegistroCliente",
  components: {
    ValidationObserver,
  },
  data() {
    return {
      url: Config.url,
      correo:null,
      pass:null
    };
  },
  mounted(){

  },
  methods: {
     ...mapActions("auth", ["login"]),
    actualizar_informacion() {
      this.$refs.form_infouser.validate().then(async (success) => {
        if (!success) {
          return;
        }
        //ejemplo de login 
         await this.login({ tipo_login: 3, password:this.pass , email:this.correo});
        //registrar o actualizar la información
        /*axios.post(this.url+"",{correo:this.correo}).then(res=>{
          if(res.status===200){
            console.log(res.data);
          }
        }
        ).catch(err=>{
          console.log(err);
        })*/
      });
    },
    limpiarform() {
      this.$nextTick(() => {
        this.$refs.form_infouser.reset();
      });
    },
    async obtener_info_direccion() {
      
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  text-align: center !important;
  p {
    font-size: 15px;
  }
  label {
    text-align: justify !important;
  }
}
</style>