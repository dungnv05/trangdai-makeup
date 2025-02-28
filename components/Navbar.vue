<template>
  <!-- Navigation Bar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">Trang Dai Makeup & Academy</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink to="#" class="nav-link">Trang Chủ</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="#services" class="nav-link">Dịch Vụ</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="#academy" class="nav-link">Học Viện</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="#gallery" class="nav-link">Bộ Sưu Tập</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink to="#contact" class="nav-link">Liên Hệ</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
/* CSS tùy chỉnh */
</style>