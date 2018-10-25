import { call, takeEvery, put} from 'redux-saga/effects'
import { getData, postRequest } from '../rp/service'

function* getListIdp(){
    try {
        const idpList = yield call(getData)
        yield put({type: "GET_LIST_IDP_SUCCEEDED", idpList});
     } catch (e) {
        yield put({type: "GET_LIST_IDP_FAILED", message: e.message});
     }
  }
  function* sendReqToIdp(action){
    console.log('action.idpDetail.requestId',action.idpDetail.requestId)
    try {
      yield put({type:'SHOW_LOADIND'})
      const req = yield call(postRequest,{                                            
        node_id: 1,
        mode : 1 ,
        namespace : 'citizen_id',
        identifier : 1234567890123,
        request_timeout: 86400,
        idp_id_list: ['idp1'],
        reference_id:action.idpDetail.requestId
      })
      yield put({type: 'CREATE_REQUEST_SUCCEEDED'},req);
     } catch (e) {
      yield put({type: 'CREATE_REQUEST_FAILD',message: e.message});
     }
  }
function* mySaga() {
    yield takeEvery("GET_LIST_IDP_REQUESTED", getListIdp);
    yield takeEvery("REQUEST_TO_IDP", sendReqToIdp);
  }

export default mySaga;