const reducer = (state = { idpList: [], showModalReqIdp: false, showLoading: false, isSuccess: false, showLoadingIdpList: false }, action) => {
  switch (action.type) {
    case 'SHOW_LOADING_GET_LIST_IDP':
      return { ...state, showLoadingIdpList: true }
    case 'GET_LIST_IDP_SUCCEEDED':
      return { ...state, idpList: action.idpList, showLoadingIdpList: false }
    case 'SELECT_IDP_FROM_LIST':
      return { ...state, objIdpAtSelect: action.objIDP, showModalReqIdp: action.showModalReqIdp, requestId: action.requestId, currentDate: action.currentDate }
    case 'SHOW_LOADIND':
      return { ...state, showLoading: true }
    case 'SUCESS_MODAL_REQUEST_IDP':
      return { ...state, showModalReqIdp: !action.closeModalReqIdp }
    case 'CREATE_REQUEST_CALLBACK':
      return { ...state, showLoading: false, requestStatus: action.requestStatus }
    case 'GET_CLAIM_INFO':
      return { ...state, insuranceNo: action.insuranceNo, hospital: action.hospital, currentDateInClaim: action.currentDateInClaim }
    case 'GET_CITIZEN_ID':
      return { ...state, citizenId: action.citizenId }
    case 'GET_EMAIL':
      return { ...state, email: action.email }
    case 'IS_REGISTER':
      return { ...state, isRegis: action.isRegis}
    case 'AS_ACCEPT_SUCCESS':
      return { ...state, isSuccess: true }
    case 'MOCK_TEST_GETIDP':
      return { ...state,idpList: action.idpList, showLoadingIdpList: false }
    default:
      return state
  }
}

export default reducer;