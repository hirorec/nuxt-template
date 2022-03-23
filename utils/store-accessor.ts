/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import AppStore from '~/store/app'

let appStore: AppStore

function initialiseStores(store: Store<any>): void {
  appStore = getModule(AppStore, store)
}

export { initialiseStores, appStore }
