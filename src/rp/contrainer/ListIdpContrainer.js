import React, { Component } from 'react';
import {connect} from 'react-redux'
import {ListGroup, ListGroupItem, Panel} from 'react-bootstrap'
class ListIdpContrainer extends Component {
    componentWillMount(){
        this.props.getdata()
    }
    render() {
        const {idpList} = this.props
        return(
            <div style={{marginLeft:'500px',marginRight:'500px',marginTop:'50px'}}>
                <Panel>
                    <Panel.Heading> Select IDP </Panel.Heading>
                        <ListGroup>
                            {idpList.length>0? idpList.map((data,index) => {
                                const path = '/citizen_id/1234567'
                                return (
                                    <ListGroupItem href={path} >{data.node_id}</ListGroupItem>
                                )
                            }): null}
                        </ListGroup>   
                </Panel>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    idpList : state.idpList
})

const mapDispatchToProps = dispatch => ({
    getdata : () => dispatch({type:'FETCH_IDP_REQUESTED'})
})

export default connect (mapStateToProps,mapDispatchToProps)(ListIdpContrainer)