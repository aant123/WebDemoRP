const reducer = (state={idpList:[]},action) => {
    switch(action.type) {
        case 'FETCH_IDP_SUCCEEDED':
        console.log("FETCH_IDP_SUCCEEDED",action.idpList);
            return {...state,idpList:action.idpList}
        default:
            return state 
    }
}

export default reducer;