<template>
  <div class="page">
    <div class="card">
      <div class="card-section">
        <div class="image-container">
          <img src="./../assets/about_photo.png" alt="Photo of Galaxy Hitch Hikers" class="image" />
          <div class="image-text">Galaxy Hitchhikers !</div>
        </div>
      </div>
      <div class="card-section text">
        <p>{{ aboutUs }}</p>
      </div>
    </div>
  </div>
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
