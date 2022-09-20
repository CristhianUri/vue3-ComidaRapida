<template>
  
      
        <div class="card text-center" style="width: 18rem;">
          <img :src="url" class="card-img-top center" alt="...">
          <div class="card-body">
            <h5>{{nombre}}</h5>
            <p class="card-text">{{texto}}</p>
            <h5 class="text-center">{{precio}}</h5>
            <a href="#" class="btn btn-primary align-center">¡Ordena ya!</a>
          </div>
        </div>
      
   

</template>

<style scoped>
  img{
    width: 18rem;
    height: 9rem;
    display: inline-block;
  }
</style >

<script>


export default {
  props: {
    url: {
      String,
    },
    nombre: {
      String,
    },
    texto:{
      String,
    },
    precio:{
        String,
    },
   
  },
  
};
</script>
