const reducer = (state={idpList:[],showModalReqIdp:false,showLoading: false},action) => {
    switch(action.type) {
        case 'GET_LIST_IDP_SUCCEEDED':
        console.log("GET_LIST_IDP_SUCCEEDED",action.idpList);
            return {...state,idpList:action.idpList}
        case 'SELECT_IDP_FROM_LIST':
        console.log('action.showModalReqIdp',action.showModalReqIdp)
            return {...state,objIdpAtSelect:action.objIDP,showModalReqIdp:action.showModalReqIdp}
        case 'SHOW_LOADIND':
            return {...state,showLoading: true}
        case 'SUCESS_MODAL_REQUEST_IDP':
            return {...state,showModalReqIdp:!action.closeModalReqIdp}
        default:
            return state 
    }
}

export default reducer;