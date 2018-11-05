import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListIdp from '../component/ListIdp'
import ModalReqIdp from '../component/ModalReqIdp'

class ListIdpContrainer extends Component {
  render() {
    const { 
      idpList, 
      getdata, 
      selectIdp, 
      showModalReqIdp, 
      showLoading, 
      reqToIdp, 
      sucessModal, 
      requestId, 
      currentDate, 
      objIdpAtSelect, 
      requestStatus,
      showLoadingIdpList,
      citizenId 
    } = this.props

    const modalReqIdp = showModalReqIdp ? (
      <ModalReqIdp
        showLoading={showLoading}
        reqToIdp={reqToIdp}
        sucessModal={sucessModal}
        requestId={requestId}
        currentDate={currentDate}
        objIdpAtSelect={objIdpAtSelect}
        requestStatus={requestStatus}
        citizenId={citizenId}
      />
    ) : null
    return (
      <div>
        <ListIdp
          idpList={idpList}
          getdata={getdata}
          selectIdp={selectIdp} 
          showLoadingIdpList={showLoadingIdpList}
          />
        {modalReqIdp}
      {console.log(this.props)}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  idpList: state.idpList,
  showModalReqIdp: state.showModalReqIdp,
  showLoading: state.showLoading,
  requestId: state.requestId,
  currentDate: state.currentDate,
  objIdpAtSelect: state.objIdpAtSelect,
  requestStatus: state.requestStatus,
  showLoadingIdpList: state.showLoadingIdpList,
  citizenId : state.citizenId
})

const mapDispatchToProps = dispatch => ({
  getdata: () => dispatch({ type: 'GET_LIST_IDP_REQUESTED' }),
  // getdata: idpList => dispatch({ type: 'MOCK_TEST_GETIDP',idpList }),
  selectIdp: (objIDP, showModalReqIdp, requestId, currentDate) => dispatch({ type: 'SELECT_IDP_FROM_LIST', objIDP, showModalReqIdp, requestId, currentDate }),
  reqToIdp: (idpDetail, citizenId) => dispatch({ type: 'REQUEST_TO_IDP', idpDetail, citizenId }),
  sucessModal: closeModalReqIdp => dispatch({ type: 'SUCESS_MODAL_REQUEST_IDP', closeModalReqIdp })
})

export default connect(mapStateToProps, mapDispatchToProps)(ListIdpContrainer)