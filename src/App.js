import './App.css';
import './style.css';
import projectDev from "./project_dev.jpg"
// import { Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap';

function App() {
  return (
    <>
      <div style={{border:'solid1pxBlack',maxWidth:'100vw'}}>

      <h1 className ="title red">Mohamed Jlassi</h1>
      
      <br/>

      <img src={projectDev} className ="myProfile" alt="project_photo"/>

      <br/>

      <img src="./developer.jpg"  className ="myProfile" alt="my_mage"/>

      </div>

      <video style={{width:320,height:240}} controls>

      <source src="./myVideo.mp4" type="video/mp4"/>

      </video>
    </>
  );
}

export default App;
