import Modal from "react-modal";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const cross={float:"right", backgroundColor:"red" , border:'1px solid grey'}

const customStyles = {
    content: {
      boxSizing:'border-box',
      boxShadow:'1px 0px 10px 1px black inset',
      minWidth:'500px',
      minHeight:'500px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      ObjectFit:'contain',
    },
  };

Modal.setAppElement(document.getElementById('root'));

export default function Modals(props){

  const history= useNavigate();
  const [user,setUser]=useState({
    name:'',email:'',number:'',password:'',cpassword:''
  })

  let name,value;

  const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;
      setUser({...user,[name]:value})

  }
  

  const postData= async (e)=>{
      
    e.preventDefault();

    const {name,email,number,password,cpassword}= user;

    const res= await fetch('/register',{
        method:'POST',
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          name,email,number,password,cpassword
        })
    });
      const data= await res.json()
      
      if(data.message === "User Successfully Registered")
      {
        history('/login')
      }
      window.alert(data.message);


  }


return(
<Modal isOpen={props.modalstate} style={customStyles} onRequestClose={props.close}>






    <button onClick={props.close} style={cross}> X</button> <br></br>

    <form method="POST">
   <div className="text-center">
    <br></br>
   <input type="text"name="name" 
    value={user.name}
    onChange={handleInputs}
    autoComplete="off" placeholder="enter your Name"/><br></br>

    <input type="email" name="email" 
    value={user.email}
    onChange={handleInputs}
    autoComplete="off" placeholder="enter your email address"/><br/>

    <input type="text" name="number"
    value={user.number}
    onChange={handleInputs}
    placeholder="Enter Phone number"/> <br/>

    <input type="password" name="password"
    value={user.password}
    onChange={handleInputs}
    placeholder="Enter Password"/><br/>

    <input type="password" name="cpassword"
    value={user.cpassword}
    onChange={handleInputs}
    placeholder="Confirm Password"/><br/><br/>
   </div>
    <div className="text-center">

    <button onClick={postData} > Register </button>
</div>
    <br></br>
    <div className="text-center">

    <Link to='/login'>Already Registered? </Link>
    </div>
    </form>
</Modal>
)
}
