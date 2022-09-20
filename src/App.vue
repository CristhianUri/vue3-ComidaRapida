<template>
  <div class=" container test" >
    <header>
      
          <navegacion>
          </navegacion>
     
    </header>
    
    <div class="titulo">
      <titulo></titulo>
    </div>
    <div class="producto">
          <card url="https://www.saborusa.com/wp-content/uploads/2019/10/Calma-tus-antojos-con-deliciosas-y-rapidas-recetas-Foto-destacada.png" nombre="Hamburguesa" texto="Ven y prueba muestras ricas Hamburguesas" precio="$179.00" />
          <card url="https://ve.all.biz/img/ve/catalog/14501.png" nombre="Papas fritas" texto="nuestras papas fritas que son las mejores de todo el pais" precio="$79.00" />
          <card url="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/11/como-hacer-pizza-hawaiana.jpg" nombre="Pizza hawaiana" texto="No esperes más y ven por tu pizaas" precio="$179.00" />
          <card url="https://www.cocinacaserayfacil.net/wp-content/uploads/2016/02/Alitas-de-pollo-buffalo-wings.jpg" nombre="Alitas de pollo" texto="¿Antojo de unas alitas? Ven y prueba las nuestras" precio="$159.00" />
          <card url="https://images.hola.com/imagenes/cocina/noticiaslibros/20200424166483/dia-mundial-perrito-caliente-hot-dog/0-815-493/hotdogs-m.jpg" nombre="Hot dog" texto="Acercate y prueba nuestros deliciosos hot dogs" precio="$129.00" />
          <card url="https://www.lagula.com.mx/wp-content/uploads/2021/08/vitrinas-para-helados.jpg" nombre="Helados" texto="¿No sabes que hacer con este calor? ven y pruba nuestros helados" precio="$89.00" />
              
     </div>
     
      <footer class="fC">
        <footers></footers>
      </footer>
   
     
  </div>
</template>

<style scoped>
  .test{
    width: 1378px;
    align-items: center;
    position: relative;
    height: 1290px;
  }
  .producto{
    padding-top: 20px;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 400px);
    grid-template-rows: repeat(2,370px);
    height: 500px;
    width: 500px;
    grid-gap: 10px;
    grid-template-areas:
      "a  b"
      "a  b"
      "c  d";
}
.titulo{
  padding-top: 10px;
}
.fC{
  margin-top: 300px;
}

</style>

<script>
  import Navegacion from "./components/Navegacion.vue";
  import Card from "./components/Card.vue";
  import Titulo from "./components/Titulo.vue";
  import Footers from "./components/Footers.vue";
  export default{
    components:{
      Navegacion,
      Card,
      Titulo,
      Footers,
    },
  };
</script>