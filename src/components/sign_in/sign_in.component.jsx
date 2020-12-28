import React from 'react'; 
import {FormInput} from '../form-input/form-input.component'
import {FormButton} from '../button/button.component'
import './sign-in.styles.scss'


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault(); 

        //sign in using (this.state); 
       // console.log(this.state); 

        this.setState({
            email: '',
            password: ''
        }); 
    }

    handleChange = (event) => {
       
        const {name, value} = event.target; 
        
        this.setState({ [name] : value}); 
    }
    
    render(){
        return(
            <>
               <div className='sign-in'>
                   <h2>I already have an account.</h2>
                   <span>Sign in with email and password</span>


                   <form onSubmit={this.handleSubmit}>
                       <FormInput 
                            type="email"
                            name="email"
                            value={this.state.email} 
                            handleChange={this.handleChange}
                            label='Email:'
                            required
                       
                       />
                        
                        <FormInput
                            type="password"
                            name="password"
                            value={this.state.password}
                            handleChange={this.handleChange}
                            label='Password:'
                            required

                        />

                        <FormButton type="submit">Sign In</FormButton>

                   </form>
                   
                </div> 

            </>



        )
    }



}

export default SignIn;