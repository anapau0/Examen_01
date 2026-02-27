// Contiene las funciones que envían acciones al reducer.
// Cada función retorna un objeto con type y payload.
import {
  SET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  UPDATE_QUANTITY,
  SET_CART
} from './types';

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity }
});

export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart
});