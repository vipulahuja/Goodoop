import React from 'react';
import styled from 'styled-components';

const Footer = (props) =>{
    return (
        <footer class="page-footer" style={{backgroundColor:"#48486e"}}>
          <div style={{paddingLeft:"10%"}}>
            <div class="row" style={{marginBottom:0}}>
              <div class="col l2 m3 s12">
                <h6 class="white-text">Company</h6>
                <ul style={{fontSize:"1rem"}}>
                  <li><a class="grey-text text-lighten-3" href="#!">About Us</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Coustmer Reviews</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Booking Terms</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Terms of Use</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                </ul>
              </div>
              <div class="col l2 offset-l2 m2 offset-m2 s12" style={{marginLeft:"-1%"}}>
                <h6 class="white-text">Support</h6>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">How To</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">FAQs</a></li>
                </ul>
              </div>
              <div class="col l2 offset-l2 m3 offset-m2 s12" style={{marginLeft:"-1%"}}>
                <h6 class="white-text">Need Help</h6>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">support@gooddrop.com</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Call at 9756432675</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    );
}


export default Footer;