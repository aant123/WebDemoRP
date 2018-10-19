import React, { Component } from 'react';
import {connect} from 'react-redux'
import ListIdp from '../component/ListIdp'
import ModalReqIdp from '../component/ModalReqIdp'
class ListIdpContrainer extends Component {
    render() {
        const {idpList, getdata, selectIdp, showModalReqIdp, showLoading, reqToIdp, sucessModal} = this.props
        const modalReqIdp = showModalReqIdp? (
            <ModalReqIdp
                showLoading={showLoading}
                reqToIdp = {reqToIdp}
                sucessModal = {sucessModal}
            />
        ):null
        return(
            <div>
            <ListIdp
            idpList={idpList}
            getdata={getdata}
            selectIdp={selectIdp}/>
            {modalReqIdp}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    idpList : state.idpList,
    showModalReqIdp : state.showModalReqIdp,
    showLoading : state.showLoading
})

const mapDispatchToProps = dispatch => ({
    getdata : () => dispatch({type:'GET_LIST_IDP_REQUESTED'}),
    selectIdp : (objIDP,showModalReqIdp) => dispatch({type:'SELECT_IDP_FROM_LIST', objIDP , showModalReqIdp}),
    reqToIdp : idpDetail => dispatch({type:'REQUEST_TO_IDP',idpDetail}),
    sucessModal : closeModalReqIdp => dispatch({type:'SUCESS_MODAL_REQUEST_IDP',closeModalReqIdp})
})

export default connect (mapStateToProps,mapDispatchToProps)(ListIdpContrainer)