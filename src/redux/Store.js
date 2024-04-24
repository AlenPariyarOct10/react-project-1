import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './slices/LoginSlice';
import cartReducer from './CartState';
import allProducts from './slices/AllProducts';
import CarouselData from './slices/CarouselData';
import allUsers from './slices/AllUsers';
import SearchProducts from './slices/SearchProducts';
import FilterProductsSlice from './slices/FilterProductsSlice';


const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authSlice, 
  products: allProducts,
  carousel: CarouselData,
  users: allUsers,
  SearchProducts: SearchProducts,
  FilterProductsSlice: FilterProductsSlice

});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
