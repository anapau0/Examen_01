// Maneja el estado global de productos y carrito.
// Contiene la lógica de cómo se actualiza el estado.
import {
  SET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_QUANTITY,
  SET_CART
} from '../actions/types';

const INITIAL_STATE = {
  products: [],
  cart: []
};

const ProductReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {

    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case ADD_TO_CART:
      const existing = state.cart.find(
        item => item.id === action.payload.id
      );

      if (existing) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };

    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case CLEAR_CART:
      return { ...state, cart: [] };

    case SET_CART:
      return { ...state, cart: action.payload };

    default:
      return state;
  }
};

export default ProductReducer;