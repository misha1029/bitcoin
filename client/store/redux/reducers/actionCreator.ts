import {
  FetchValuesAction,
  FetchValuesSuccessAction,
  ValueActionTypes,
} from "../../types/value";

export const fetchValueData = (payload: any[]): FetchValuesSuccessAction => ({
  type: ValueActionTypes.FETCH_VALUES_SUCCESS,
  payload,
});

export const fetchValueLoading = (): FetchValuesAction => ({
  type: ValueActionTypes.FETCH_VALUES,
});
