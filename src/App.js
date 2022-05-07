import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import imageData from './imageData';
import Images from './components/Images';

function App() {

  const currentImage = imageData[0].img;
  const [bigImage, setBigImage] = useState(currentImage);
  const handleClick = (url)=>{
    setBigImage(url)
  }
  const allImages = imageData.map((image, index)=>{
    return(
      <img className="thumb"
        onClick={()=>handleClick(image.img)}
        key={index}
        id={image.city}
        src={image.img}
        alt={image.city}
      />
    )
  })
  
  return (
    <div className="App">
      <h1>Cities of the World</h1>
      <div id="container">
        <div id="thumbnails">
          {allImages}
        </div>
        <img  src={bigImage} id="big-image" alt="bigImage"/>
      </div>
    </div>
  );
}

export default App;
