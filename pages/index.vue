<template>
  <div>
    <Navbar />
    <section class="hero">
      <h1>Trang Dai Makeup & Academy</h1>
      <p>Trang điểm cô dâu, đi tiệc, concert, kỷ yếu, dạy trang điểm cá nhân cơ bản và nâng cao.</p>
    </section>
    <section class="services">
      <h2>Dịch vụ của chúng tôi</h2>
      <div class="services-list">
        <ServiceCard title="Trang điểm cô dâu" description="Trang điểm cô dâu theo yêu cầu với các phong cách hiện đại." />
        <ServiceCard title="Trang điểm dự tiệc" description="Trang điểm cho các buổi tiệc, concert, và sự kiện đặc biệt." />
        <ServiceCard title="Trang điểm kỷ yếu" description="Trang điểm cho buổi chụp kỷ yếu, tạo ấn tượng khó quên." />
        <ServiceCard title="Dạy trang điểm cơ bản" description="Học trang điểm với 2 tone sáng và tối." />
        <ServiceCard title="Dạy trang điểm nâng cao" description="Chọn tone makeup mong muốn và học cách thực hiện." />
      </div>
    </section>
    <section class="gallery">
      <h2>Hình ảnh & Thành tích</h2>
      <GalleryImage src="/images/artist1.jpg" alt="Trang điểm cô dâu" />
      <GalleryImage src="/images/artist2.jpg" alt="Trang điểm dự tiệc" />
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import ServiceCard from '~/components/ServiceCard.vue'
import GalleryImage from '~/components/GalleryImage.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navbar,
    ServiceCard,
    GalleryImage,
    Footer
  }
}
</script>

<style scoped>
.hero {
  text-align: center;
  margin-top: 50px;
}

.services-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}

.gallery {
  text-align: center;
  margin-top: 50px;
}
</style>
