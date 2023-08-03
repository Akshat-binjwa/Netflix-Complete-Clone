import "./app.css";
import logo from "./Images/logo.jpg";
// import Modals from "./modal";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
function App() {
  
  // const [isLoginModalOpen , setLoginModal ]=useState(false)
  
  // function close(){
  //   setLoginModal(false)
  // }
   
  
    const hindi = () =>{
        document.querySelector('#heading').innerHTML=('yoo')
        console.log('happy')
    }

  return (
    <div className="App">
      {/* <Modals modalstate={isLoginModalOpen} close={close}/> */}

      {/* <!-- CSS only --> */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />



      {/* <!-- background image used as main body of webpage --> */}
      <div className="background-img bg-image background" >
        <div className="container-fluid ">
          <div className="row py-4 px-5 ">
            <div className="col-3 ">
              <img className="logo" src={logo} alt="" />
            </div>
            <div className="col-9 ">
              <div className="buttonss float-end">
                <select   className="btn btn-outline-light mx-4 button-1 p-2" name="" id="">
                  <option value="1" onClick={hindi}>English</option>
                  <option value="2" onClick={hindi}>Hindi</option>
                </select>
                <Link to='/register' style={{ backgroundColor: '#e50914'}}  className='btn mx-1 text-white px-4'>
                  Sign in
                </Link>
              </div>
            </div>
          </div>
          <div className="row main mask d-flex text-center justify-content-center align-items-center">
            <div className="col-lg-6 text-white">
              <h1 id="heading" className="main-h">Unlimited movies,TV
                shows and more.</h1>
              <p style={{fontSize: '2rem'}}>Watch anywhere. Cancel any time</p>
              <p style={{fontSize: '1.5rem'}}>Ready to watch ? Please Register OR Login </p>
              <div className="input-group mb-3 ">
                <input type="text" className="form-control" placeholder="Email Address" />
                <Link to='/register' className=" text-white  btn-button btn-danger" type="button" >Get Started</Link>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default App;
