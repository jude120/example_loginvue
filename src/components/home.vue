<template>
    <div class="container mt-5 p-2">
        <div class="row"><div class="col-md-12"><hr></div></div>
        <div class="row"><div class="col-md-12"><h1>Monitor T</h1> <br> <p v-if="isLogged">El usuario tiene una sesion activa</p></div></div>
        <div class="row mt-5">
            <div class="col-md-6 col-sm-6 menuprincipal">
                <i class="fas fa-user"></i>
            </div>
            <div class="col-md-6 col-sm-6 menuprincipal">
                <i class="fas fa-user"></i>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-6 col-sm-6 menuprincipal">
                <i class="fas fa-bell"></i>
            </div>
            <div class="col-md-6 col-sm-6 menuprincipal">
                <i class="fas fa-user"></i>
            </div>
        </div>
        <div class="row">
            <div class="offset-md-6 col-md-2">
                <button class="btn btn-danger" @click.prevent="salir"><i class="fas fa-sign-out-alt iconsalir"></i>
                <label for="iconsalir"> Salir</label></button>
            </div>
        </div>
        <div class="row"><div class="col-md-12"><hr></div></div>
    </div>
</template>

<script>
import { mapMutations , mapState } from "vuex";
export default {
    name:'home',
    computed: {
    ...mapState("auth", ["isLogged"]),
    },
    methods:{
        ...mapMutations("auth", ["logout"]),
        salir(){
            this.logout();
            this.$router.push("/");
        }
    }
}
</script>

<style lang="scss" scoped>
.menuprincipal{
    max-width: 48% !important;
    padding: 5%;
    i{
        font-size: 150px;
        color:rgb(21, 21, 100);
    }
}
.iconsalir{
    color: blue;
    font-size: 20px;
}
</style>