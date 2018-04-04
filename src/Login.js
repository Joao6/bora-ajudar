import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from './base'

class Login extends Component {

    constructor(props){
        super(props)

        this.email = null
        this.password = null

        this.state = {
            isLoggedIn: false,
            error: false,
            isLogging: false
        }

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(){
        this.setState({ 
            isLogging: true,
            error: false
        })

        auth
        .signInWithEmailAndPassword(this.email.value, this.password.value)
        .then((user)=> {            
            this.setState({
                isLoggedIn: true
            })
        }).catch( error =>{            
            this.setState({
                error: true,
                isLogging: false
            })
        })
    }
    render(){
        if(this.state.isLoggedIn){
            return <Redirect to='/admin'/>
        }
        return (
            <div className='form-login'>
                <section className='page-section cta'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-6 mx-auto'>
                                <div className='cta-inner text-center rounded'>                    
                                    <h2 className='section-heading mb-5'>
                                        <span className='section-heading-lower'>Faça login</span>
                                        <span className='section-heading-upper'>Para acessar a área administrativa</span>
                                    </h2>   
                                    <div className='form-group'>                                        
                                        <input type='email' id='inputEmail' className='form-control' placeholder='Email' required ref={ref => this.email = ref}/>                                    
                                        <input type='password' id='inputPassword' className='form-control' placeholder='Senha' required ref={ref => this.password = ref} />                   
                                    </div>                                                                  
                                    <div className='form-group'>                                                                      
                                        <button disabled={this.state.isLogging} onClick={this.handleLogin} className='btn btn-lg btn-primary btn-block'>
                                            Entrar
                                        </button>     
                                    </div>
                                    {this.state.error && <p>E-mail ou senha inválidos!</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>            
        )
    }
}

export default Login