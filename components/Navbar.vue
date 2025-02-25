<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Makeup</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link to="/services/bride" class="nav-link">Makeup Cô Dâu</nuxt-link>
          </li>
          <!-- <li class="nav-item">
            <nuxt-link to="/party" class="nav-link">Makeup Dự Tiệc</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/concert" class="nav-link">Đi Concert</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/personal" class="nav-link">Dạy Makeup Cá Nhân</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/professional" class="nav-link">Dạy Makeup Chuyên Nghiệp</nuxt-link> -->
          </li>
        </ul>
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