import React from 'react';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
const Nav = styled.nav`
height:64px;
line-height:64px;
@media only screen and (min-width: 601px){
    height:72px;
    line-height:72px;
    font-size:17.5px;
    color:#48486e
}
@media only screen and (min-width: 992px){
    font-size:16.5px;
}
@media only screen and (min-width: 500px){
    font-size:18.5px;
}
@media only screen and (min-width: 400px){
    font-size:19.5px;
}
@media only screen and (min-width: 300px){
    font-size:20.5px;
}
background-color:white;

`;

const NavWrapper = styled.div`
    line-height:inherit;

`;
const SideIconCont = styled.div`
position:absolute;
left:${props=>props.right?'90%':'3%'};
display:${props=>props.sideNav?'block':'none'};
height:100%;
line-height:inherit;


`;
const Logo = styled.a`
position: absolute;
color: #fff;
display:block;
font-size: 1.7em;
padding-left:${props=>props.sideNav?'0':'12%'};
font-weight:750;
height:100%;
@media only screen and (max-width: 700px){
    left:50%;
    transform: translateX(-50%);
}
line-height:inherit;


`;

const NavLinkList = styled.ul`
    margin-right:7%;
    height:100%;
    @media only screen and (max-width: 700px)
    {
        display:none;
    }
`;

const NavLink = styled.li`
transition:none;
height:100%;   
`;
const ALinks = styled.a`
color:#48486e;
transition:none;
padding-left:10px;
padding-top:20px;
font-weight:550;
height:100%;
font-size:0.8em;
:hover{
    background-color:white;
}
`;
const NavBar = (props) =>{
    console.log(props.sideNav);
    return (
    
        <Nav>
            <NavWrapper className="nav-wrapper">
                <SideIconCont sideNav={props.sideNav}><i onClick={props.handleSideNavOn}style={{height:"100%",lineHeight:"inherit",cursor:"pointer",display:"block",margin:0,color:"#48486e"}}className="material-icons">dehaze</i></SideIconCont>
                {props.sideNavOn&&<Drawer open={props.sideNavOn}>jhadsjkkasnnsasahkjsashghaj</Drawer>}
                <Logo href="#" sideNav={props.sideNav}><span style={{color:"#48486e"}}>GOOD</span><span style={{color:"#34b3d3"}}>DROP</span></Logo>
                <NavLinkList id="nav-mobile" className = "right">
                    <NavLink><div style={{height:"100%",display:"flex",flexDirection:"row"}}><i style={{paddingTop:"20px",height:"100%",fontSize:"1.2em",lineHeight:"74px"}} className="material-icons">phone</i><ALinks href = "#">9566123640</ALinks></div></NavLink>
                    <NavLink><div style={{height:"100%",display:"flex",flexDirection:"row"}}><i style={{paddingTop:"20px",height:"100%",fontSize:"1.2em",lineHeight:"74px"}} className="material-icons">person</i><ALinks href = "#">Account</ALinks></div></NavLink>
                </NavLinkList>
                <SideIconCont right sideNav={props.sideNav}><i style={{height:"100%",lineHeight:"inherit",cursor:"pointer",display:"block",margin:0,color:"#48486e",left:"95%"}}className="material-icons">settings</i></SideIconCont>
            </NavWrapper>
        </Nav>
)

}


export default NavBar;