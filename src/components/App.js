import React, { Component } from 'react';
import ReactDOM from 'react-dom'
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
	
	constructor(props){
		super(props);
		this.state = {
			imgArrangeArr:[
				
			]
		}
	}
	
	Constant = {
		centerPos:{
			left: 0,
			right: 0
		},
		hPosRange: {
			leftSecX:[0,0],
			rightSecx:[0,0],
			y:[0,0]
		},
		vposRange:{
			x:[0,0],
			topY:[0,0]
		}
	};
	
	getRangeRandom(low,high) {
		return Math.ceil(Math.random()*(high-low)+low);
	}
	
	rearrange(centerIndex) {
		var imgArrangeArr = this.state.imgArrangeArr,
			Constant = this.Constant,
			centerPos = Constant.centerPos,
			hPosRange = Constant.hPosRange,
			vPosRange = Constant.vposRange,
			hPosRangeLeftSecX = hPosRange.leftSecX,
			hPosRangeRightSecX = hPosRange.rightSecx,
			hPosRangeY = hPosRange.y,
			vPosRangeTopY = vPosRange.topY,
			vPosRangeX = vPosRange.x,
			
			imgArrangeTopArr = [],
			topImgNum = Math.ceil(Math.random() * 2),
		
			topImgSpliceIndex = 0,
				
			imgArrangeCenterArr = imgArrangeArr.splice(centerIndex,1);
			imgArrangeCenterArr[0].pos = centerPos;
			
			topImgSpliceIndex = Math.ceil(Math.random()*(imgArrangeArr.length - topImgNum));
			imgArrangeTopArr = imgArrangeArr.splice(topImgSpliceIndex,topImgNum);
			
			imgArrangeTopArr.forEach((value,index)=>{
				imgArrangeTopArr[index].pos = {
					top:this.getRangeRandom(vPosRangeTopY[0],vPosRangeTopY[1]),
					left:this.getRangeRandom(vPosRangeX[0],vPosRangeX[1])
				}
			});
			
			for (var i = 0,j=imgArrangeArr.length,k = j/2;i<j;i++){
				var hPosRangeLORX = null;
				
				if(i<k){
					hPosRangeLORX = hPosRangeLeftSecX;
				}else {
					hPosRangeLORX = hPosRangeRightSecX;
				}
				
				imgArrangeArr[i].pos = {
					top:this.getRangeRandom(hPosRangeY[0],hPosRangeY[1]),
					left:this.getRangeRandom(hPosRangeLORX[0],hPosRangeLORX[1])
				}
				
			}
			
			if (imgArrangeTopArr && imgArrangeTopArr[0]) {
				imgArrangeArr.splice(topImgSpliceIndex,0,imgArrangeTopArr[0]);
			}
			
			imgArrangeArr.splice(centerIndex,0,imgArrangeCenterArr[0]);
		
			this.setState({
				imgArrangeArr: imgArrangeArr
			})
		
	}
	
	componentDidMount() {
		var stageDOM = ReactDOM.findDOMNode(this.refs.stage),
				stageW = stageDOM.scrollWidth,
				stageH = stageDOM.scrollHeight,
				halfStageW = Math.ceil(stageW/2),
				halfStageH = Math.ceil(stageH/2);
		
		var imageFigureDOM = ReactDOM.findDOMNode(this.refs.imageIndex0),
				imgW = imageFigureDOM.scrollWidth,
				imgH = imageFigureDOM.scrollHeight,
				halfImgW = Math.ceil(imgW/2),
				halfImgH = Math.ceil(imgH/2);
		
		this.Constant.centerPos = {
			left:halfStageW-halfImgW,
			top:halfStageH-halfImgH
		}
		this.Constant.hPosRange.leftSecX[0] = -halfImgW;
		this.Constant.hPosRange.leftSecX[1] = halfStageW - 3*halfImgW;
		
		this.Constant.hPosRange.rightSecx[0] = halfStageW + halfImgW;
		this.Constant.hPosRange.rightSecx[1] = stageW - halfImgW;
		
		this.Constant.hPosRange.y[0] = -halfImgH;
		this.Constant.hPosRange.y[1] = stageH - halfImgH;
		
		this.Constant.vposRange.topY[0] = -halfImgH;
		this.Constant.vposRange.topY[1] = halfStageH-halfImgH*3;
		
		this.Constant.vposRange.x[0] = halfStageW - imgW;
		this.Constant.vposRange.x[1] = halfStageW;
		
		this.rearrange(0);
	}
	
  render() {
    
    var controllerUnits = [],
        imgFigures =[];
    
    imageDatas.forEach(((value,index)=>{
    	
    	if(!this.state.imgArrangeArr[index]) {
    		this.state.imgArrangeArr[index] = {
    			pos:{
    				left:0,
						top:0
					}
				}
			}
    	
			imgFigures.push((<ImgFigure key={index} arrange={this.state.imgArrangeArr[index]} ref={'imageIndex'+index} data={value}/>));
    }).bind(this));
    
    return (
      <section className="stage" ref="stage">
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
  	
  	var styleObj = {};
		if(this.props.arrange.pos){
			styleObj = this.props.arrange.pos;
		}
  	
    return (
      <figure className="img-figure" style={styleObj}>
        <img src={this.props.data.imageURL}
              alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    )
  }
}

export default App;
