<template>
  <div class="page">
    <h1 class="page__title">PAGE TITLE</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class extends Vue {
  // handleClickEnter() {
  //   this.$router.push('/q/1')
  // }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.page__title {
  font-size: rem(40);
  font-weight: bold;
}
</style>
