<template>
    <div>
        <button class="btn btn-info" @click.prevent="hola"> hola </button>
        <p>{{info}}</p>
        <router-link class="btn red" :to="{name:'home'}">home</router-link>
        
    </div>
</template>

<script>
export default {
    name:'Boton2',
    props:['info'],
    methods:{
        hola(){
            alert("hola");
        }
    }
}
</script>

<style lang="scss">
.red{
    color: blue;
    background-color: brown;
}
</style>