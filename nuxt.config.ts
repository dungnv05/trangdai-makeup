// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],
  script: [
    {
      src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
    }
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'autoprefixer': {}
      }
    }
  },
  target: 'static', // Xuất trang tĩnh phù hợp với GitHub Pages
  router: {
    base: '/trangdai-makeup/' // Cập nhật đường dẫn repo của bạn
  }
})
