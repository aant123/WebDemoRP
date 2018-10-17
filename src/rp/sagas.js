import { call, takeEvery, put} from 'redux-saga/effects'

const idpList = [];
function* fetchAllIdp(){
    try {
        yield put({type: "FETCH_IDP_SUCCEEDED", idpList});
     } catch (e) {
        yield put({type: "FETCH_IDP_FAILED", message: e.message});
     }
  }

function* mySaga() {
    yield takeEvery("FETCH_IDP_REQUESTED", fetchAllIdp);
  }

export default mySaga;