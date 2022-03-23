<template>
  <div class="page">
    <h1 class="page__title">COUNTER</h1>
    <p class="page__count" :class="{ 'is-minus': isMinus }">{{ count }}</p>
    <div class="page__ui">
      <PrimaryButton @click="handleClickMinus">−</PrimaryButton>
      <PrimaryButton @click="handleClickPlus">＋</PrimaryButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import { appStore } from '~/store'
import PrimaryButton from '~/components/PrimaryButton.vue'

const App = namespace('app')

@Component({
  components: {
    PrimaryButton,
  }
})
export default class extends Vue {
  @App.Getter count!: number

  get isMinus() {
    return this.count < 0
  }

  handleClickPlus() {
    appStore.incrementCount()
  }

  handleClickMinus() {
    appStore.decrementCount()
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px 0;
  width: 100%;
  height: 100%;
}

.page__title {
  font-size: rem(40);
  font-weight: bold;
}

.page__count {
  padding: 30px;
  background-color: #fff;
  font-weight: bold;

  &.is-minus {
    background-color: red;
    color: #fff;
  }
}

.page__ui {
  display: flex;
  gap: 20px;
}
</style>
