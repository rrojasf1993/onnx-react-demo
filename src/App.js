import logo from './logo.svg';
import './App.css';
import { ImageUploader } from './components/ImageUpload/ImageUploader';
import {loadImages} from './services/MLService';


const analyzeImages=async (files)=>
{
   console.log(files);
   let imageLoadResult=await loadImages(files);
  console.log(imageLoadResult);
}

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <ImageUploader onAnalyisisRequest={analyzeImages}/>
    </div>
  );
}

export default App;
