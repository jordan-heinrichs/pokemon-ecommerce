export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_LIBRARY = 'ADD_TO_LIBRARY';

export const addToCart = (card) => {
  return {
    type: ADD_TO_CART,
    payload: card,
  };
};

export const addToLibrary = (card) => {
  return {
    type: ADD_TO_LIBRARY,
    payload: card,
  };
};
