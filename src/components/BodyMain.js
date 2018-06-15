import React from 'react';
import styled from 'styled-components';
import Step from './Step';
import image from '../assets/3.png';
const Container = styled.div`
    background-color:white;
`;

const HeadingCont = styled.div`
    width:55%;
    margin:0 auto;
    text-align:center;
    padding:45px 0;
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

const InfoCont = styled.div`
width:55%;
margin:0 auto;
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
@media only screen and (max-width: 6500px){
    width:75%
}
@media only screen and (max-width: 400px){
    width:80%
}
@media only screen and (max-width: 400px){
    width:90%
}
`;
const ButtonContainer = styled.div`
    width:35%;
    padding:0 5px;
    height:34px;
    margin:0 auto;
    margin-bottom:40px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    font-size:0.9rem;
    @media only screen and (max-width: 992px){
        width:35%;
    }
    @media only screen and (max-width: 900px){
        width:45%
    }
    @media only screen and (max-width: 800px){
        width:50%
    }
    @media only screen and (max-width: 700px){
        width:60% 
    }
    @media only screen and (max-width: 600px){
        width:70%
    }
    @media only screen and (max-width: 500px){
        width:80%
    }
    @media only screen and (max-width: 400px){
        width:90%
    }
 `;

const Button = styled.div`
    background-color:#f6416c;
    text-align:center;
    height:100%;
    line-height:34px;
    width:35%;
    margin-right:3%;
    color:white;
    cursor:pointer;
`;

const Button2 = styled.div`
    text-align:center;
    border :1px solid #34b3d3;
    height:100%;
    line-height:34px;
    width:35%;
    cursor:pointer;
`;




const BodyMain = (props) =>{
    return (
        <Container>
            <HeadingCont><h6 style={{color:"black",margin:0,fontSize:"inherit"}}>Bike Shipping is easy with us in three easy steps</h6></HeadingCont>
            <InfoCont className="row">
                <Step className="col m4 s12" heading="STEP 1" src={image}/>
                <Step className="col m4 s12" heading="STEP 1" src={image}/>
                <Step className="col m4 s12" heading="STEP 1" src={image}/>
            </InfoCont>
            <ButtonContainer>
                <Button  className="col m4">BOOK NOW</Button>
                <Button2 className="col m5 offset-m1">CONTACT</Button2>
            </ButtonContainer>
        </Container>
    );
}


export default BodyMain;