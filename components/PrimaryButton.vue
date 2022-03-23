<template>
  <a
    v-if="link"
    class="button"
    :href="link"
    target="_blank"
    :class="{
      'is-disabled': disabled,
    }"
    :style="{
      color: color,
      backgroundColor: backgroundColor,
      borderColor: outlineColor,
    }"
  >
    <span class="button__text">
      <slot />
    </span>
  </a>
  <button
    v-else
    class="button"
    :type="type"
    :class="{
      'is-disabled': disabled,
    }"
    :style="{
      color: color,
      backgroundColor: backgroundColor,
      borderColor: outlineColor,
    }"
    @click="$emit('click')"
  >
    <span class="button__text">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class PrimaryButton extends Vue {
  @Prop({ type: String, required: false, default: '#B64B55' })
  backgroundColor!: string

  @Prop({ type: String, required: false, default: 'transparent' })
  outlineColor!: string

  @Prop({ type: String, required: false, default: '#fff' })
  color!: string

  @Prop({ type: Boolean, required: false, default: false })
  disabled!: boolean

  @Prop({ type: String, required: false, default: 'button' })
  type!: 'button' | 'submit'

  @Prop({ type: String, required: false, default: null })
  link!: string | null
}
</script>

<style lang="scss" scoped>
.button {
  @extend %c-reset-button;
  @extend %c-button-base;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 52px;
  border: solid 2px;
  border-radius: 42px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
  text-decoration: none;
  user-select: none;

  &.is-disabled {
    border-color: transparent !important;
    background-color: #969696 !important;
    pointer-events: none;
  }
}

.button__text {
  white-space: nowrap;

  .button.is-disabled & {
    opacity: 0.5;
  }
}
</style>
