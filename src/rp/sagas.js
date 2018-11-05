import { call, takeEvery, put } from 'redux-saga/effects'
import { getData, postRequest, requestToAs } from '../rp/service'
// import {requestStatus} from './configCondition'

function* getListIdp() {
  try { 
    yield put({ type: "SHOW_LOADING_GET_LIST_IDP"});                                               
    const idpList = yield call(getData)
    yield put({ type: "GET_LIST_IDP_SUCCEEDED", idpList });
  } catch (e) {
    yield put({ type: "GET_LIST_IDP_FAILED", message: e.message });
  }
}

function* sendReqToIdp(action) {
  try {
    console.log('action',action)
    yield put({ type: 'SHOW_LOADIND' })
    const bodyParam = {
      node_id: action.idpDetail.node_id,
      mode: 1,
      namespace: 'citizen_id',
      min_idp: 1,
      identifier: action.citizenId,
      idp_id_list: [action.idpDetail.node_id],
      reference_id: action.idpDetail.requestId
    }
    console.log('bodyParam',bodyParam)
    const requestStatus = yield call(postRequest,bodyParam)
    yield put({ type: 'CREATE_REQUEST_CALLBACK' , requestStatus});
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