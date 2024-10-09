<script setup></script>

<template>
  <header class="store-header">
<div class="logo">
  <img src="../assets/logoIron.png" alt="">
  <h1>ElectroIronHack</h1>
</div>
      
  
    <nav class="main-nav">
      <ul>
        <li><router-link to="/" class="home">Go to HOME</router-link></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <li><router-link to="/chart">Chart</router-link></li>
      </ul>
    </nav>

    
  </header>
</template>

<style scoped>
/* Basic resets */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
}

/* Header styling */
.logo{
  display: flex;
    max-width: 80px;
    height: auto;
  }
  img{
    max-width: 50px;
  }
.store-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00416a;
  color: white;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
}

.store-header .logo h1 {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin-left: 20px;
}

.main-nav ul {
  display: flex;
  list-style-type: none;
}

.main-nav ul li {
  margin-left: 20px;
}

.main-nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  transition: color 0.3s ease;
}

.main-nav ul li a:hover {
  color: #00ccff;
}

/* Icons section */
.header-icons a {
  margin-left: 20px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .main-nav ul {
    flex-direction: column;
    align-items: center;
  }

  .main-nav ul li {
    margin: 10px 0;
  }
}

</style>
