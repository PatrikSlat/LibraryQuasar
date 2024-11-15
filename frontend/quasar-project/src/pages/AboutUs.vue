<template>
    <q-card dark bordered class="main">
      <q-card-section>
        <q-img src="./../assets/about_photo.png">
          <div class="text-h3 text-weight-bolder absolute-bottom text-center">Galaxy Hitchikers</div>
        </q-img>
      </q-card-section>
      <q-card-section class="text-h6 text-justify">
        {{ aboutUs }}
      </q-card-section>
    </q-card>
</template>

<script>
export default {
  data() {
    return {
      aboutUs: 'A library based on the book "The Hitchhikers Guide to the Galaxy"'
    };
  }
};
</script>

<style scoped>
.page {
  padding: 20px;
}

.card {
  background-color: #212121; 
  border: 1px solid #444;   
  border-radius: 8px;        
  overflow: hidden;          
}

.card-section {
  padding: 20px;
}

.image-container {
  position: relative;
  width: 100%;
}

.image {
  width: 100%;
  height: auto;
}

.image-text {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5); 
}

.text {
  font-size: 18px;
  text-align: justify;
  color: #fff;  
}
</style>
