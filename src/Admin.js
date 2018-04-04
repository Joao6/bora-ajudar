import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { auth } from './base'

import AdminCampaigns from './AdminCampaigns'

const AdminHome = props => <p>Seja bem-vindo!</p>

class Admin extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAuthing: true,
            isLoggedIn: false,
            user: null
        }
    }
    componentDidMount(){
        auth.onAuthStateChanged(user => {
            this.setState({
                isAuthing: false,
                isLoggedIn: !!user,
                user: user
            })
        })
    }
    render(){
        if(this.state.isAuthing){
            return <p>Aguarde...</p>
        }
        if(!this.state.isLoggedIn){
            return <Redirect to='/login' />
        }
        return (
            <div>
                <h2>Painel administrativo</h2>
                <Route path='/' component={AdminHome}/>
                <Route path={`${this.props.match.url}/campanhas`} component={AdminCampaigns}/>
            </div>
        )
    }
}
export default Admin