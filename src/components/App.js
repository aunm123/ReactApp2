import React, { Component } from 'react';
import '../styles/App.css';

var imageDatas = require('../data/imageDatas.json');

imageDatas = ((imageDataArr) => {
	
	for (let i=0;i<imageDataArr.length;i++){
		let singleImageData = imageDataArr[i];
		
		singleImageData.imageURL = require("../../public/images/"+singleImageData.fileName);
		
		imageDataArr[i] = singleImageData;
	}
	return imageDataArr;
})(imageDatas);

class App extends Component {
  render() {
    
    var controllerUnits = [],
        imgFigures =[];
    
    imageDatas.forEach((value)=>{
			imgFigures.push((<ImgFigure key={value.fileName} data={value}/>));
    });
    
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

class ImgFigure extends Component {
  render() {
    return (
      <figure>
        <img src={this.props.data.imageURL}
              alt={this.props.data.title}/>
        <figcaption>
          <h2>{this.props.data.title}</h2>
        </figcaption>
      </figure>
    )
  }
}

export default App;
