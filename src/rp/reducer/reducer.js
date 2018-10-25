const reducer = (state = { idpList: [], showModalReqIdp: false, showLoading: false, insuranceNo: 0, hospital: '' }, action) => {
  switch (action.type) {
    case 'GET_LIST_IDP_SUCCEEDED':
      console.log("GET_LIST_IDP_SUCCEEDED", action.idpList);
      return { ...state, idpList: action.idpList }
    case 'SELECT_IDP_FROM_LIST':
      console.log('action.showModalReqIdp', action.showModalReqIdp)
      return { ...state, objIdpAtSelect: action.objIDP, showModalReqIdp: action.showModalReqIdp, requestId: action.requestId, currentDate: action.currentDate }
    case 'SHOW_LOADIND':
      return { ...state, showLoading: true }
    case 'SUCESS_MODAL_REQUEST_IDP':
      return { ...state, showModalReqIdp: !action.closeModalReqIdp }
    case 'CREATE_REQUEST_SUCCEEDED':
      console.log('dsfsdf')
      return { ...state, showLoading: false }
    case 'GET_CLAIM_INFO':
      console.log(action.insuranceNo, action.hospital)
      return { ...state, insuranceNo: action.insuranceNo, hospital: action.hospital }
    default:
      return state
  }
}

export default reducer;