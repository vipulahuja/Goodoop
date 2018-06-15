import React from 'react';
import styled from 'styled-components';

const HeadingCont = styled.div`
    width:40%;
    margin:0 auto;
    text-align:center;
    font-family:'Roboto Black' sans-serif;
    border-bottom:2px solid #f6416c;
    padding-bottom:5px;
    margin-bottom:3%;
`;

const ImageCont = styled.div`
    padding:20px 0;
    width:80%;
    margin:0 auto
    margin-bottom:3%;
`;



const Step = (props) =>{
    return (
        <div className={props.className}>
            <HeadingCont className="page-title">{props.heading}</HeadingCont>
            <ImageCont><img style={{width:"100%",height:"100%"}}src={props.src}></img></ImageCont>
        </div>
    )
}

export default Step;