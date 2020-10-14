import axios from 'axios';
import {
  Product_List_Request,
  Product_List_Success,
  Product_List_Fail,
  Product_Details_Request,
  Product_Details_Success,
  Product_Details_Fail,
} from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: Product_List_Request });

    const { data } = await axios.get('/api/products');
    dispatch({ type: Product_List_Success, payload: data });
  } catch (error) {
    dispatch({
      type: Product_List_Fail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: Product_Details_Request });

    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: Product_Details_Success, payload: data });
  } catch (error) {
    dispatch({
      type: Product_Details_Fail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
