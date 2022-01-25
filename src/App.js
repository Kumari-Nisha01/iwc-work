import "./App.css";
import React from "react";
import Switch from '@material-ui/core/Switch';
import Close from '@material-ui/icons/Close'
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import image from './images/img1.jpg'

function App() {
  
  return (
    <div style={{marginLeft:'10%', fontFamily: 'Poppins, sans-serif'}}>
    <div className="heading">
      ROI Calculator   
      </div>
      <span className='cut'><Close/></span>
      <span className='img'>
      <img className='img' src={image} alt="img"/>
      </span>
      <span className='imgt'>CAKE</span>
      <div className="switch">
      <Switch defaultChecked color="warning" /> USD
      </div>
      <input type="text" placeholder="0.000 USD"
      style={{textAlign:'right', fontColor:'black', padding:'2px 10px'}}/>
      <div>
      <span className="span1">$1000</span>
      <span className="span2">$100</span>
      <span className="sidetext">  ~ CAKE 0.000</span>
      </div>
<div style={{margin:'20px 0', fontWeight:600}}>
      TimeFrame </div>
      <div>
      <span className="span3">1 Day</span>
      <span className="span4">7 Day</span>
      <span className="span4">30 Days</span>
      <span className="span4">1 Year</span>
      <span className="span4">5 Year</span>
      </div>
      <div style={{margin:'20px 0', fontWeight:600}}>
      Enable Accelarate APY
      </div>
      <span className="slide2">
      <Switch defaultChecked color="warning" />
      </span>
     
      
      <div className=""> 
      <div style={{marginBottom:'10px', color:'gray'}}>Select Tier</div>
      <span className="span5">Tier 1</span>
      <span className="span6">Tier 2</span>
      <span className="span6">Tier 3</span>
      <span className="span6">Tier 4</span>
      <span className="span6">Tier 5</span>
      <div className="sidetext2">  ROI at Current Rates</div>
      </div>

      <input className="input2"  type="text" placeholder="0.000 USD" style={{textAlign:'right', padding:'2px 10px'}}/>
      <div className="sidetext3">  ~ 0.000 CAKE + 0.000000 DON</div>
      <div style={{marginLeft:'200px', marginTop:'20px'}}>
      <span style={{marginTop:'-20px', fontWeight:'600', fontSize:'14px'}}>Hide Detailts </span>
      <span><KeyboardArrowUp /></span></div>
      <div style={{fontWeight:600}}>
      APY
      </div>
      <div className="nine">9.0%</div>
      <p className="p1">● Calculator based on current rates</p>
      <p className="p2">● All figures are estimates provided for your convenience only, and by no <br/> <span style={{marginLeft:'12px'}}> means represent 
      represent guaranteed returns.</span></p>
      </div>
  );
}

export default App;

