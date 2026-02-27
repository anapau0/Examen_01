// Configura el store global usando Redux.
// Une los reducers y crea el estado central.
import { combineReducers, legacy_createStore } from 'redux';
import ProductReducer from './reducers/ProductReducer';

const ConfigureStore = () => {

  const reducers = combineReducers({
    storeData: ProductReducer
  });

  return legacy_createStore(reducers);
};

export default ConfigureStore;