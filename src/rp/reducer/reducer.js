const reducer = (state={idpList:[],showModalReqIdp:false,showLoading: false,isSuccess: false},action) => {
    switch(action.type) {
        case 'GET_LIST_IDP_SUCCEEDED':
            return {...state,idpList:action.idpList}
        case 'SELECT_IDP_FROM_LIST':
            return {...state,objIdpAtSelect:action.objIDP,showModalReqIdp:action.showModalReqIdp,requestId:action.requestId, currentDate: action.currentDate}
        case 'SHOW_LOADIND':
            return {...state,showLoading: true}
        case 'SUCESS_MODAL_REQUEST_IDP':
            return {...state,showModalReqIdp:!action.closeModalReqIdp}
        case 'CREATE_REQUEST_SUCCEEDED':
            return {...state,showLoading: false } 
        case 'GET_CLAIM_INFO':
            return { ...state, insuranceNo: action.insuranceNo, hospital: action.hospital, currentDateInClaim: action.currentDateInClaim }
        case 'AS_ACCEPT_SUCCESS':
            return { ...state, isSuccess: true}
        default:
            return state 
    }
}

export default reducer;