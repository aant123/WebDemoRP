import { call, takeEvery, put } from 'redux-saga/effects'
import { getData, postRequest, requestToAs } from '../rp/service'

function* getListIdp() {
  try {
    console.log('!!!!!')
    const idpList = yield call(getData)
    console.log('idpList',idpList)
    yield put({ type: "GET_LIST_IDP_SUCCEEDED", idpList });
  } catch (e) {
    yield put({ type: "GET_LIST_IDP_FAILED", message: e.message });
  }
}

function* sendReqToIdp(action) {
  console.log('action.idpDetail.requestId', action.idpDetail.requestId)
  try {
    yield put({ type: 'SHOW_LOADIND' })
    yield call(postRequest, {
      node_id: '1',
      mode: 1,
      namespace: 'citizen_id',
      min_idp: 1,
      identifier: 1234567890129,
      request_timeout: 86400,
      idp_id_list: ['idp1'],
      reference_id: action.idpDetail.requestId
    })
    yield put({ type: 'CREATE_REQUEST_SUCCEEDED' });
  } catch (e) {
    yield put({ type: 'CREATE_REQUEST_FAILD', message: e.message });
  }
}

function* waitAcceptFromAs() {
  yield call(requestToAs)
  yield put({ type: 'AS_ACCEPT_SUCCESS' })
}

function* mySaga() {
  yield takeEvery("GET_LIST_IDP_REQUESTED", getListIdp);
  yield takeEvery("REQUEST_TO_IDP", sendReqToIdp);
  yield takeEvery("WAIT_ACCEPT_FROM_AS", waitAcceptFromAs);
}

export default mySaga;