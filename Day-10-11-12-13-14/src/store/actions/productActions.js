import {
  fetchProductsBegin,
  fetchProductsSuccess,
  fetchProductsError,
} from './index';
import axios from 'axios';

export function getProducts() {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch('/products')
      .then(response => response.json())
      .then(result => {
        dispatch(fetchProductsSuccess(result));
        console.log(result);
        return result;
      })
      .catch(error => dispatch(fetchProductsError(error)));
  };
}

export function postProduct(item) {
  return dispatch => {
    return axios
      .post('/product', item)
      .then(result => {
        dispatch(getProducts());
        console.log(result);
      })
      .catch(error => alert(error));
  };
}

export function deleteProduct(id) {
  return dispatch => {
    return axios
      .delete('/product/' + id)
      .then(result => {
        dispatch(getProducts());
        console.log(result);
      })
      .catch(error => alert(error));
  };
}
