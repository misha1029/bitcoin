import { all } from 'redux-saga/effects'

import { valueSaga } from './valueSaga'

export default function* rootSaga() {
	yield all([valueSaga()])
}
