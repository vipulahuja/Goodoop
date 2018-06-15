import React from 'react';
import styled from 'styled-components';
import image1 from '../assets/2.png';
import ParcelDetails from './ParcelDetails';

const Container = styled.div`
    background-color:#48486e;
`;

const HeadingCont = styled.div`
    width:45%;
    margin:0 auto;
    text-align:center;
    padding-top:45px;
    font-family:'Roboto' sans-serif;
    font-size:2.28rem;
    @media only screen and (max-width: 992px){
        width:55%;
    }
    @media only screen and (max-width: 900px){
        width:60%
        font-size:2.20rem;
    }
    @media only screen and (max-width: 800px){
        width:65%
    }
    @media only screen and (max-width: 700px){
        width:70% 
        font-size:2.1rem;
    }
    @media only screen and (max-width: 600px){
        width:75%
        font-size:2rem;
    }
    @media only screen and (max-width: 500px){
        width:80%
        font-size:1.8rem;
    }
    @media only screen and (max-width: 400px){
        width:85%
        font-size:1.6rem;
    }

`;

const ImageCont = styled.div`
padding-top:20px;
margin:0 auto;
width:20%;
@media only screen and (max-width: 992px){
   width:20%;
}
@media only screen and (max-width: 601px){
    width:30%
}
@media only screen and (max-width: 500px){
    width:65% 
}
@media only screen and (max-width: 400px){
    width:70%
}
@media only screen and (max-width: 300px){
    width:80%
}

`;

const FormCont = styled.div`
width:55%;
margin:0 auto;
padding:30px 0;
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
@media only screen and (max-width: 600px){
    width:75%
}
@media only screen and (max-width: 500px){
    width:85%
}
@media only screen and (max-width: 400px){
    width:90%
}

`;

const Heading = styled.h4`
font-size:2.28rem;
// @media only screen and (max-width: 992px){
//     width:20%;
//  }
//  @media only screen and (max-width: 601px){
//      width:30%
//  }
//  @media only screen and (max-width: 500px){
//      width:65% 
//  }
//  @media only screen and (max-width: 400px){
//      width:70%
//  }
//  @media only screen and (max-width: 300px){
//      width:80%
//  }
 

`


const MainBody = (props) =>
{
    return (
    <Container>
        <HeadingCont><h4 style={{color:"white",margin:0,fontSize:"inherit"}}>Bike Shipping Through Railways Got Convienient and Easy</h4></HeadingCont>
        <ImageCont><img src={image1} style={{height:"100%",width:"100%"}}></img></ImageCont>
        <FormCont>
        <div style={{margin:"0 auto",width:"100%",cursor:"pointer"}} className="row">
            <div className="col m4 s0" style={{border:"solid 1px #34b3d3",borderCollapse:"collapse",display:props.singleButton?"none":"block",height:"30px",lineHeight:"30px",color:"white"}}onClick={props.handelParcelOpener}>
                Your Parcel Details
            </div>
            <div className="col m4 s0" style={{border:"solid 1px #34b3d3",height:"30px",lineHeight:"30px",borderCollapse:"collapse",display:props.singleButton?"none":"block",color:"white"}}onClick={props.handelParcelOpener}>
                Your Bike Details    
            </div>
            <div className="col m4 offset-s2 s8"style={{padding:0}} >
                <div style ={{textAlign:"center",color:"white",border:"none",backgroundColor:"#f6416c",lineHeight:props.singleButton?"40px":"30px",width:"100%",minHeight:props.singleButton?"40px":"30px",borderRadius:props.singleButton?"15px":"0px"}}>{props.singleButton?"SHIP NOW":"SUBMIT"}</div>    
            </div>
        </div>
        </FormCont>
    </Container>
    );
}


export default MainBody;