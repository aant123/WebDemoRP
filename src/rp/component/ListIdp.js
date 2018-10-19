import React, { Component } from 'react';
// import {ListGroup, ListGroupItem} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { ListGroup, ListGroupItem, Button, Col, Row } from 'mdbreact'

class ListIdp extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectIdp: null,
            showModalReqIdp: false,
        }
    }
    componentWillMount(){
        this.props.getdata()
    }
    selectIdp = (objIdp,index) => {
        // objIdp= {...objIdp,showActiveIdp :true}
        this.setState({selectIdp: objIdp})
    }
    clickBtnNextStep = () => {
        if(this.state.selectIdp !== null) {
            const booleanshowModalReqIdp = true
            this.props.selectIdp(this.state.selectIdp,booleanshowModalReqIdp)
        }
    }
    render() {
        const {idpList} = this.props
        return(
            <div style={{marginLeft:'500px',marginRight:'500px',marginTop:'50px'}}>
                            {idpList.length>0? idpList.map((data,index) => {
                                const path = '/citizen_id/1234567'
                                this.checkSelect = Array(idpList.length)
                                return (
                                    <ListGroup>
                                        <ListGroupItem onClick={() => this.selectIdp(data,index)}>{data.node_id}</ListGroupItem>
                                    </ListGroup> 
                                )
                            }): null}
                            <Button href="#" color="primary" onClick={this.clickBtnNextStep}>ดำเนินการต่อ</Button>
            </div>
        )
    }
} 

export default ListIdp