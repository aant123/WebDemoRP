import { call, takeEvery, put} from 'redux-saga/effects'
import { getData } from '../rp/service'

function* getListIdp(){
    try {
        const idpList = yield call(getData)
        yield put({type: "GET_LIST_IDP_SUCCEEDED", idpList});
     } catch (e) {
        yield put({type: "GET_LIST_IDP_FAILED", message: e.message});
     }
  }
  function* sendReqToIdp(){
    try {
      yield put({type:'SHOW_LOADIND'})
      yield put({type: 'REQUEST_TO_IDP_SUCCEEDED'});
     } catch (e) {
     }
  }
function* mySaga() {
    yield takeEvery("GET_LIST_IDP_REQUESTED", getListIdp);
    yield takeEvery("REQUEST_TO_IDP", sendReqToIdp);
  }

export default mySaga;