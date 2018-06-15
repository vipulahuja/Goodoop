import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainBody from './components/MainBody';
import BodyMain from './components/BodyMain';
import ParcelDetails from './components/ParcelDetails';


class App extends React.Component{
  state ={
    sideNav:false,
    display:false,
    modal:false,
    singleButton:false,
    e:null,
    sideNavOn:false,
    activeStep:0
  }
  handleSideNavOn = (e) =>{
    this.setState({
      sideNavOn:!this.state.sideNavOn
    });
    document.addEventListener("click",this.handleSideNavOff);
  }
  handleSideNavOff = (e) =>{
    e.preventDefault();
    console.log("hey");
    if(this.state.sideNavOn)
    {
      this.setState({
        sideNavOn:false
      });
      document.removeEventListener("click",this.handleSideNavOff);
    }
    
  }
  handelModalOpener = (e) =>{
    this.setState({
      modal:true
    });
  }
  handelParcelCloser = (e) =>{
    this.state.e.style.borderBottom="1px solid #34b3d3";
    this.setState({
      display:false,
      e:null
    });
  }
  handelModalCloser = (e) =>{
    this.state.e.style.borderBottom="1px solid #34b3d3";
    this.setState({
      modal:false,
      display:false,
      activeStep:0,
      e:null
    });
  }
  handelParcelOpener = (e) =>{
    e.target.style.borderBottom = e.target.style.borderBottom ==="none"?"1px solid #34b3d3":"none";
    this.setState({
      display:!this.state.display,
      e:e.target
    });
  }
  checkForSideNav = () => {
        this.setState({
          sideNav:window.innerWidth<700?true:false,
          singleButton:window.innerWidth<=600?true:false
        })
      
  }
  activeStepHandler = () =>{
    console.log("bjab");
    this.setState({
      activeStep:this.state.activeStep+1,
    });
  }
  componentDidMount(){
    this.checkForSideNav();
    window.addEventListener("resize",this.checkForSideNav);
    
  }
  render(){
    return(
    <div style={{sposition:"relative"}}>
      <NavBar sideNav={this.state.sideNav} sideNavOn={this.state.sideNavOn} handleSideNavOn={this.handleSideNavOn}/>
      <MainBody  handelParcelOpener={this.handelParcelOpener} singleButton={this.state.singleButton}/>
      <ParcelDetails activeStepHandler={this.activeStepHandler} activeStep={this.state.activeStep} modal={this.state.modal} display={this.state.display} handelModalOpener={this.handelModalOpener} handelParcelCloser={this.handelParcelCloser} handelModalCloser={this.handelModalCloser}/>
      <BodyMain sideNav={this.state.sideNav}/>
      <Footer/>
    </div>
    );  
}

}

export default App;
