<template>
  <div class="gallery-item">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String
  }
}
</script>

<style scoped>
.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
