<script setup></script>

<template>
 <footer class="store-footer">
  <div class="footer-container">
    
    <div class="footer-section">
      <h2>About Us</h2>
      <p>ElectroShop is your trusted store for high-quality electronics and home appliances. We provide top-notch products with excellent customer service.</p>
    </div>

    <div class="footer-section">
      <h2>Contact Us</h2>
      <p>Email: support@electroshop.com</p>
      <p>Phone: +1 234 567 890</p>
      <p>Address: 123 Electro St., Tech City</p>
    </div>

  </div>

  <div class="footer-bottom">
    <p>&copy; 2024 ElectroShop. All Rights Reserved.</p>
  </div>
</footer>

</template>

<style scoped>
/* Footer styling */
.store-footer {
  background-color: #001e30;
  color: white;
  padding: 40px 0;
  margin-top: 50px;
  width: 100%;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  padding: 0 20px;
}

.footer-section h2 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #9ea5a7;
}

.footer-section p {
  font-size: 14px;
  line-height: 1.6;
}

/* Footer bottom */
.footer-bottom {
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #00ccff;
  margin-top: 40px;
}

.footer-bottom p {
  font-size: 14px;
  color: #ffffff;
}

/* Responsive design for footer */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    margin-bottom: 20px;
    text-align: center;
  }

  .footer-section h2 {
    font-size: 16px;
  }
}

</style>
