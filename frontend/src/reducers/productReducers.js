import {
  Product_List_Request,
  Product_List_Success,
  Product_List_Fail,
  Product_Details_Request,
  Product_Details_Success,
  Product_Details_Fail,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from '../constants/productConstants';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case Product_List_Request:
      return { loading: true, products: [] };
    case Product_List_Success:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case Product_List_Fail:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case Product_Details_Request:
      return { loading: true, ...state };
    case Product_Details_Success:
      return { loading: false, product: action.payload };
    case Product_Details_Fail:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true };
    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
