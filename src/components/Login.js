
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
const SIGNUP_MUTATION = gql`
mutation SignupMutation(
    $email : String!
    $name : String!
    $password : String!
){
    
}`

const Login = () =>{
    const navigate = useNavigate();
    const [fromState,setFormState] = useState({
        login : true,
        name:'',
        email:'',
        password:''
    });
    return(
        <div>
            <h4 className="mv3">
            {fromState.login? 'Login' :'Sign Up'}
            </h4>
            <div className="flex flex-column">
                {!fromState.login && (
                    <input 
                        value={fromState.name}
                        onChange={(e) =>
                        setFormState({
                            ...fromState, 
                            name: e.target.value
                        })
                    }
                    type="text"
                    placeholder="Your name"
                />)}
                <input 
                value={fromState.email}
                onChange={(e) => setFormState({
                    ...fromState, email: e.target.value
                })}
                type="email"
                placeholder="Your email address"/>
                <input
                value={fromState.password}
                onChange={(e)=>{
                    setFormState({
                        ...fromState,password:e.target.value
                    })
                }}
                type="password"
                placeholder="Your passzord "/>
            </div>
            <div className="flex mt3"> 
            <button className="pointe mr2 button " onClick={()=> {alert('On click')}}>{fromState.login? 'login ' :'Create account'}</button>
            <button className="ponter button" onClick={(e)=>{
                setFormState({
                    ...fromState, login: !fromState.login
                })
            }}>{fromState.login? 'need to create an account ?':'alredy have an account ?'}</button>
            </div>
        </div>
      
    );

};
export default Login;