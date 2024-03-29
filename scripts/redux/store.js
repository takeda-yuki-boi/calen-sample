import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducer';

// 永続化の設定
const persistConfig = {
  key: 'sample-client', // Storageに保存されるキー名を指定する
  storage: AsyncStorage, // 保存先としてlocalStorageがここで設定される
  //whitelist: ['todos'] // Stateは`todos`のみStorageに保存する
  // blacklist: ['visibilityFilter'] // `visibilityFilter`は保存しない
};

// 永続化設定されたReducerとして定義
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
export default store;
