<template>
  <div class="layout" :class="{ 'is-hide': !visible }">
    <div id="vh100" ref="vh100" class="vh100" />
    
    <NuxtLogo class="logo" />

    <div class="contents">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import { BASE_SIZE, BREAK_POINT, DEVICE_TYPE, PC_MIN_WIDTH, PC_MAX_WIDTH } from '~/constants'
import { isSP, isPC, sleep } from '~/utils'
import { appStore } from '~/store'
import NuxtLogo from '~/components/NuxtLogo.vue'

@Component({
  components: {
    NuxtLogo,
  },
})
export default class extends Vue {
  visible: boolean = false
  $vh100: any
  mainVisualVisible: boolean = false
  topVisualVisible: boolean = false

  get vh100() {
    return appStore.vh100
  }

  head() {
    return {
      bodyAttrs: {
        class: appStore.bodyClass,
      },
    }
  }

  mounted() {
    this.$vh100 = this.$refs.vh100
    this.handleWindowResize = this.handleWindowResize.bind(this)
    window.addEventListener('resize', this.handleWindowResize)
    this.updateHtmlFontSize()
    this.updateVh100()
    this.initDeviceType()
    this.show()
  }

  initDeviceType() {
    if (isSP()) {
      appStore.setDeviceType(DEVICE_TYPE.SP)
    } else {
      appStore.setDeviceType(DEVICE_TYPE.PC)
    }
  }

  async show() {
    await sleep(200)
    this.visible = true
  }

  reload() {
    document.location.href = location.href
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  updateHtmlFontSize() {
    let winW = window.innerWidth

    if (isPC() && winW < PC_MIN_WIDTH) {
      winW = PC_MIN_WIDTH
    } else if (isPC() && winW > PC_MAX_WIDTH) {
      winW = PC_MAX_WIDTH
    }

    const baseWidth = matchMedia(`(max-width: ${BREAK_POINT}px)`).matches ? BASE_SIZE.SP : BASE_SIZE.PC
    const fontSize = winW / (baseWidth * 0.01)
    ;(document.documentElement as any).style['font-size'] = `${fontSize}px`
  }

  updateVh100() {
    const height = this.$vh100.clientHeight
    appStore.setVh100(`${height}px`)
    // console.log('updateVh100', height)
  }

  updateDeviceType() {
    const currentDeviceType = appStore.deviceType

    if (isSP()) {
      if (currentDeviceType !== '' && currentDeviceType !== DEVICE_TYPE.SP) {
        this.reload()
      }

      appStore.setDeviceType(DEVICE_TYPE.SP)
    } else {
      if (currentDeviceType !== '' && currentDeviceType !== DEVICE_TYPE.PC) {
        this.reload()
      }

      appStore.setDeviceType(DEVICE_TYPE.PC)
    }
  }

  handleWindowResize() {
    this.updateHtmlFontSize()
    this.updateDeviceType()

    // if (isPC()) {
    this.updateVh100()
    // }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/_index.scss';
</style>

<style lang="scss" scoped>
.layout {
  position: relative;
  width: 100%;
  transition: opacity 1s linear;

  @include pc {
    min-width: #{$min-width-pc}px;
  }

  &.is-hide {
    opacity: 0;
  }
}

.contents {
  position: relative;
  min-height: 100vh;

  @include tb {
    min-height: auto;
    overflow: hidden;
  }
}

.vh100 {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.logo {
  position: fixed;
  top: 20px;
  right: 20px;
  width: rem(50);
  height: auto;
}
</style>
