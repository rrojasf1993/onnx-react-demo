import logo from './logo.svg';
import './App.css';
import { ImageUploader } from './components/ImageUpload/ImageUploader';
import { loadImages } from './services/MLService';
import { useState } from 'react';

function App() {

  const [imageComponents, setImageComponents] = useState(null);

  const analyzeImages = async (files) => {
    console.log(files);
    let imageLoadResult = await loadImages(files);
    setImageComponents(imageLoadResult);
  }

  const renderUploadedImages = () => 
  {
    let component = null;
    if (imageComponents && imageComponents.length !== 0) {
      component = <div>{
        imageComponents.map((imgComponent) => {
          let img=imgComponent.image;
          return { img }
        })
      }
      </div>
    }
    return component;
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <ImageUploader onAnalyisisRequest={analyzeImages} />
      <div>
        {
          renderUploadedImages()
        }
      </div>
    </div>
  );
}

export default App;
