// src/context/AppContext.jsx
import React, { createContext, useContext, useReducer, useState } from 'react';

// Estado inicial
const initialState = {
  cart: [],
  reservations: [],
  selectedService: null,
  isModalOpen: false,
  isConsultationModalOpen: false // ← NUEVO ESTADO
};

// Acciones (AGREGAR LAS NUEVAS)
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  ADD_RESERVATION: 'ADD_RESERVATION',
  OPEN_SERVICE_MODAL: 'OPEN_SERVICE_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  UPDATE_CART_ITEM_QUANTITY: 'UPDATE_CART_ITEM_QUANTITY',
  OPEN_CONSULTATION_MODAL: 'OPEN_CONSULTATION_MODAL', // ← NUEVA ACCIÓN
  CLOSE_CONSULTATION_MODAL: 'CLOSE_CONSULTATION_MODAL' // ← NUEVA ACCIÓN
};

// Reducer (AGREGAR LOS NUEVOS CASOS)
const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: []
      };
    case actionTypes.ADD_RESERVATION:
      return {
        ...state,
        reservations: [...state.reservations, action.payload]
      };
    case actionTypes.OPEN_SERVICE_MODAL:
      return {
        ...state,
        selectedService: action.payload,
        isModalOpen: true
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        selectedService: null,
        isModalOpen: false
      };
    case actionTypes.UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.itemId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    // ← NUEVOS CASOS PARA EL MODAL DE CONSULTA
    case actionTypes.OPEN_CONSULTATION_MODAL:
      return {
        ...state,
        isConsultationModalOpen: true
      };
    case actionTypes.CLOSE_CONSULTATION_MODAL:
      return {
        ...state,
        isConsultationModalOpen: false
      };
    default:
      return state;
  }
};

// Crear contexto
const AppContext = createContext();

// Proveedor del contexto
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addToCart = (product) => {
    const existingItem = state.cart.find(item => item.id === product.id);

    if (existingItem) {
      updateCartItemQuantity(product.id, existingItem.quantity + 1);
    } else {
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: { ...product, quantity: 1 }
      });
    }
  };

  const removeFromCart = (productId) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR_CART });
  };

  const addReservation = (reservation) => {
    dispatch({ type: actionTypes.ADD_RESERVATION, payload: reservation });
  };

  const openServiceModal = (service) => {
    dispatch({ type: actionTypes.OPEN_SERVICE_MODAL, payload: service });
  };

  const closeModal = () => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    dispatch({
      type: actionTypes.UPDATE_CART_ITEM_QUANTITY,
      payload: { itemId, quantity }
    });
  };

  // ← NUEVAS FUNCIONES PARA EL MODAL DE CONSULTA
  const openConsultationModal = () => {
    dispatch({ type: actionTypes.OPEN_CONSULTATION_MODAL });
  };

  const closeConsultationModal = () => {
    dispatch({ type: actionTypes.CLOSE_CONSULTATION_MODAL });
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    clearCart,
    addReservation,
    openServiceModal,
    closeModal,
    updateCartItemQuantity,
    openConsultationModal, // ← INCLUIR EN EL VALUE
    closeConsultationModal // ← INCLUIR EN EL VALUE
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe ser usado dentro de un AppProvider');
  }
  return context;
};