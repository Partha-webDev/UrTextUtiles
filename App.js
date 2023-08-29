import React  , {useState} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Textform from './components/textform';
import Alert from './components/alert';
function App() {
  const [mode , setmode] = useState("light");
  const [alert , setAlert] = useState(null);
   
  const showAlert = (massage , type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }
  const togglemode = () =>{
    if(mode === 'light'){
        setmode("dark");
        document.body.style.backgroundColor = "#042743";
        document.body.style.color = "white";
        document.title = ('UrTextUtiles - Dark Mode')
        showAlert("Dark Mode has been enabled" , "success");
    }
    else{
        setmode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"; 
        document.title = ('UrTextUtiles - Light Mode')
        showAlert("Light Mode has been enabled" , "success")
    }
  }

  return (
    <>
    <Navbar home="Home" about="About Us" mode={mode} toggleMode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container mb-3"> 
    <Textform showAlert={showAlert} heading="Enter your Text" mode={mode}/>
    </div>
    </>
  );
}

export default App;
 