import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'app',
})
export default class extends VuexModule {
  _count: number = 0

  get count(): number {
    return this._count
  }

  @Mutation
  setCount(value: number) {
    this._count = value
  }

  @Action
  incrementCount(): void {
    this.setCount(this._count + 1)
  }

  @Action
  decrementCount(): void {
    this.setCount(this._count - 1)
  }
}