import { put, call, takeLatest } from 'redux-saga/effects'

import { ValuesApi } from '../../api/values'
import { ValueActionTypes } from '../../types/value'
import { fetchValueData } from '../reducers/actionCreator'

export function* sagaWorker(): any {
	try {
		const data = yield call(ValuesApi.fetchValues)
		yield put(fetchValueData(data))
	} catch (e) {
		put({
			type: ValueActionTypes.FETCH_VALUES_ERROR,
			payload: 'Произошла ошибка при загрузке пользователей',
		})
	}
}

export function* valueSaga() {
	yield takeLatest(ValueActionTypes.FETCH_VALUES, sagaWorker)
}
