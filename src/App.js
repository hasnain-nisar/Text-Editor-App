
import Navbar from './components/Navbar';
import './App.css';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import React, {useState} from 'react';



function App() {
  
  const [mode, setMode] = useState('light'); //wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
        setAlert(null)
    },1000)

  }




  const toggleMode = () => {
      if (mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
          showAlert("Dark mode has beene Enabled","success ");
        }

      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has beene Enabled","success ");
      }
    }
  return (
    
    <>
<Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}></Navbar>
<Alert alert={alert}/>
<div className="container my-3">
      <TextArea showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
</div>

    </>
  );
}

export default App;
