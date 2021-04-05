<template>
    <div>
        <button class="btn btn-info" @click.prevent="iniciar">Iniciar sesión con Facebook</button>
        <router-link class="btn btn-info" :to="{name:'home'}">home</router-link>
    </div>
</template>

<script>
export default {
    name:'BotonLoginFB',
    methods:{
        iniciar(){
            alert("click en boton");
        }
    }
}
</script>