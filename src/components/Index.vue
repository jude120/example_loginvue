<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6">
                <h1>hola mundo</h1> <br>
               <FormRegistroCliente></FormRegistroCliente>
            </div>
        </div>
    </div>
</template>

<script>
//import BotonLoginFB from "./BotonLoginFB";
import FormRegistroCliente from "./FormRegistroCliente";

export default {
    name:'index',
    components:{
        //BotonLoginFB
        FormRegistroCliente,

    },
    mounted(){
    
    }
}
</script>