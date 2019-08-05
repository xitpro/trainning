import * as actionType from './actionTypes';

export const fetchProductsBegin = () => ({
  type: actionType.FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = products => ({
  type: actionType.FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const fetchProductsError = error => ({
  type: actionType.FETCH_PRODUCTS_FAILURE,
  payload: { error },
});

export const fetchUsersBegin = () => ({
  type: actionType.FETCH_USERS_BEGIN,
});

export const fetchUsersSuccess = users => ({
  type: actionType.FETCH_USERS_SUCCESS,
  payload: { users },
});

export const fetchUsersError = error => ({
  type: actionType.FETCH_USERS_FAILURE,
  payload: { error },
});
