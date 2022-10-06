import { Action } from 'redux'

export interface ValueState {
	values: any
	loading: boolean
	error: null | string
}

export enum ValueActionTypes {
	FETCH_VALUES = 'FETCH_VALUES',
	FETCH_VALUES_SUCCESS = 'FETCH_VALUES_SUCCESS',
	FETCH_VALUES_ERROR = 'FETCH_VALUES_FETCH_VALUES_ERROR',
}

export interface FetchValuesAction extends Action<ValueActionTypes> {
	type: ValueActionTypes.FETCH_VALUES
}
export interface FetchValuesSuccessAction extends Action<ValueActionTypes> {
	type: ValueActionTypes.FETCH_VALUES_SUCCESS
	payload: any[]
}
export interface FetchValuesErrorAction extends Action<ValueActionTypes> {
	type: ValueActionTypes.FETCH_VALUES_ERROR
	payload: string
}

export type ValueAction =
	| FetchValuesAction
	| FetchValuesErrorAction
	| FetchValuesSuccessAction
