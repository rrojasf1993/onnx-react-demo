import logo from './logo.svg';
import './App.css';
import { ImageUploader } from './components/ImageUpload/ImageUploader';


const analyzeImages=()=>{
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ImageUploader onAnalyisisRequest={}/>
    </div>
  );
}

export default App;
