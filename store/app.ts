import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { BODY_CLASS } from '~/constants'

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'app',
})
export default class extends VuexModule {
  _vh100: string = '100vh'
  deviceType: string = ''
  isOverflow: boolean = false

  get vh100(): string {
    return this._vh100
  }

  get bodyClass(): string {
    let className = ''

    if (this.isOverflow) {
      className = BODY_CLASS.OVERFLOW_HIDDEN
    }

    return className
  }

  @Mutation
  setDeviceType(value: string) {
    this.deviceType = value
  }

  @Mutation
  setVh100(value: string) {
    this._vh100 = value
  }

  @Mutation
  setOverflow(value: boolean) {
    this.isOverflow = value
  }
}
