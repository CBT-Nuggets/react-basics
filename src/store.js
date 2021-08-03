import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // For localStorage
// import storageSession from 'redux-persist/lib/storage/session'; // For session storage
// import AsyncStorage from '@react-native-community/async-storage' // For React Native
import { favoritesReducer } from './reducers/favorites';
import { friendsReducer } from './reducers/friends';
import { profileReducer } from './reducers/profile';

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    friends: friendsReducer,
    profile: profileReducer,
});

const persistConfig = {
  key: 'friendsTrackerRoot', // Because we might be developing several different apps on localhost:3000
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer); // Creates a sort of "wrapper" that updates localStorage when our store changes

export const store = createStore(persistedReducer, devToolsEnhancer());
export const persistor = persistStore(store)