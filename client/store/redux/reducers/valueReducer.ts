import {
  ValueAction,
  ValueActionTypes,
  ValueState,
} from "../../types/value";

const initialState: ValueState = {
  values: null,
  loading: false,
  error: null,
};

export const valueReducer = (state = initialState, action: ValueAction) => {
  switch (action.type) {
    case ValueActionTypes.FETCH_VALUES:
      return { ...state, loading: true };
    case ValueActionTypes.FETCH_VALUES_SUCCESS:
      return { ...state, loading: false, error: null, values: action.payload };
    case ValueActionTypes.FETCH_VALUES_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
