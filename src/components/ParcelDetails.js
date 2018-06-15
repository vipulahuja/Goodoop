import React from 'react';
import styled from 'styled-components';
import Stepper from 'react-stepper-horizontal';
import ReactModal from 'react-modal';



const Container = styled.div`
width:55%;
padding:20px 10px;
margin:0 auto;
display:${props=>props.display?'block':'none'};
background-color:#48486e;
min-height:160px;
border:1px solid #34b3d3;
border-top:none;
margin-top:-30px;
@media only screen and (max-width: 992px){
    width:55%;
}
@media only screen and (max-width: 900px){
    width:60%
}
@media only screen and (max-width: 800px){
    width:65%
}
@media only screen and (max-width: 700px){
    width:70% 
}

`;
const FormContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    height:30px;
`;

const ButtonContainer = styled.div`
    width:100%; 
    margin-top:20px;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
`;

const Button = styled.div`
    background-color:#f6416c;
    text-align:center;
    height:100%;
    line-height:34px;
    width:20%;
    margin-right:3%;
    color:white;
    cursor:pointer;
`;

const Button2 = styled.div`
    text-align:center;
    border :1px solid #34b3d3;
    height:100%;
    line-height:34px;
    width:20%;
    padding-left:3%;
    cursor:pointer;
`;

const ParcelDetails = (props)=>{
    console.log(props.activeStep);
    return (
        <Container display={props.display}>
            <FormContainer>
                <div style={{width:"30%",backgroundColor:"white"}}></div>
                <div style={{width:"30%",backgroundColor:"white",margin:"0 3%"}}></div>
                <div style={{width:"30%",backgroundColor:"white"}}></div>
            </FormContainer>
            <p style={{marginTop:"10px",display:"block"}}>Could Not Find Your Option Click Here</p>
            <ButtonContainer>
                <Button onClick={props.handelModalOpener}>Next</Button>
                <Button2 onClick={props.handelParcelCloser}>Cancel</Button2>
            </ButtonContainer>
            <ReactModal
  
              isOpen={props.modal}
  
              style={{overlay:{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
              },
              content: {
                position: 'absolute',
                top: '80px',
                left: '15%',
                right: '15%',
                bottom: '15px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
              }}}
  
  shouldFocusAfterRender={true}
  /*
    Boolean indicating if the overlay should close the modal
  */
  shouldCloseOnOverlayClick={true}
  /*
    Boolean indicating if pressing the esc key should close the modal
    Note: By disabling the esc key from closing the modal you may introduce an accessibility issue.
  */
  shouldCloseOnEsc={true}
  /*
    Boolean indicating if the modal should restore focus to the element that
    had focus prior to its display.
  */
  shouldReturnFocusAfterClose={true}>
            <div style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-start"}}>
              <div style={{width:"90%"}}>
                <Stepper circleFontSize={12} titleFontSize={12} circleTop={0} steps={ [{title: 'Step One'}, {title: 'Step Two'}, {title: 'Step Three'}, {title: 'Step Four'}] } activeStep={ props.activeStep } />
              </div>
               <div style={{paddingLeft:"5%",width:"10%"}}><i style={{cursor:"pointer"}}onClick={props.handelModalCloser} className="material-icons">close</i></div>
            </div>
            <div style={{width:"60%",margin:"0 auto",display:"flex",flexDirection:"column",}}>
              <p style={{display:"blockk"}}>Charges for this would be Rs 500</p>
              <h6 style={{marginTop:"20px"}}>PickUp Details</h6>
              <div style={{margin:"20px 0",height:"35px",border:"1px solid blue"}}></div> 
              <div style={{margin:"20px 0",height:"35px",border:"1px solid blue"}}></div>
              <div style={{margin:"20px 0",height:"35px",border:"1px solid blue"}}></div>
              <div style={{margin:"20px 0",height:"35px",border:"1px solid blue"}}></div>
              <div style={{margin:"20px 0",height:"35px",border:"1px solid blue"}}></div>
              <div style={{margin:"20px 0",height:"35px",border:"1px solid blue"}}></div>
              <div style={{margin:"20px 0",height:"35px",border:"1px solid blue"}}></div>
              <div style={{margin:"20px 0",height:"20px",border:"1px solid blue"}}></div>
              <div style={{margin:"20px 0",height:"40px",border:"1px solid blue",display:"flex",flexDirection:"row"}}>
                <Button style={{width:"30%"}} onClick={props.activeStepHandler}>{props.activeStep===3?"Finish":"Next"}</Button>
                <Button2 style={{width:"30%"}} onClick={props.handelModalCloser}>Cancel</Button2>
              </div>
            </div> 
          </ReactModal>
        </Container>
    )
}

export default ParcelDetails;