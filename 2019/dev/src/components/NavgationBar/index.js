import React, { PureComponent } from 'react';
import './styles.css';

import ActionButton from "../ActionButton";

export default class NavgationBar extends PureComponent {
    constructor() {
        super()
        
        this.state = {
          toggle: false
        }
      }

      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
      }
      handleScroll(e) {
        if (document.body.scrollTop > 96 || document.documentElement.scrollTop > 96) {
            document.getElementById("navbar").classList.add("is-shrink")
            document.getElementById("nav-logo-small").style.display = "block"
          } else {
            if (this.state.toggle == false) {
            document.getElementById("navbar").classList.remove("is-shrink")
            document.getElementById("nav-logo-small").style.display = "none"
            }
          }
      }
      
    onOpenMenu = () => {
        if (this.state.toggle == false) {
            document.getElementById("navbar").classList.add("is-shrink")
            document.getElementById("nav-link-container").style.display = "block"
            document.getElementById("bar-menu-icon").classList.remove("fa-bars")
            document.getElementById("bar-menu-icon").classList.add("fa-times-circle")
            document.getElementById("nav").classList.add("menu-opened")
            document.getElementById("nav-logo-small").style.display = "block"
        }
        else {
            document.getElementById("nav-link-container").style.display = "none"
            document.getElementById("bar-menu-icon").classList.remove("fa-times-circle")
            document.getElementById("bar-menu-icon").classList.add("fa-bars")
            document.getElementById("nav").classList.remove("menu-opened")
            if (!(document.body.scrollTop > 96 || document.documentElement.scrollTop > 96)) {
                document.getElementById("navbar").classList.remove("is-shrink")
                document.getElementById("nav-logo-small").style.display = "none"
            }
        }
        
        this.setState({toggle: !this.state.toggle})
    }
    render() {
        return (
            <nav id="navbar">
        <div>
        <div id="nav">
        <div className="nav-menu" onClick={this.onOpenMenu}><i className="fas fa-bars " id="bar-menu-icon"></i></div>
        <div className="logo-small-container">
          <div className="logo-small-subcontainer">
          <div className="logo-small" id="nav-logo-small">
          <img
              src={require("../../images/logo_iplayground_small.png")}
              alt="iPlayground"
            />
            </div>
          </div>
        </div>
        <div className="nav-link-container" id="nav-link-container"> 
          <div className="nav-link"><a href="#speakers-section"><p>Speakers</p><p>講者</p></a></div>
          <div className="nav-link"><a href="#schedule-section"><p>Schedule</p><p>議程</p></a></div>
          <div className="nav-link"><a href="#venue-section"><p>Venue</p><p>場地</p></a></div>
          <div className="nav-link"><a href="#about-section"><p>About</p><p>關於我們</p></a></div>
          <div className="nav-link"><a href="#sponsors-section"><p>Sponsors</p><p>贊助</p></a></div>
          <div className="nav-link"><a href="#coorganizers-section"><p>Co-organizers</p><p>合作夥伴</p></a></div>
          <div className="nav-link"><a href="#staffs-section"><p>Staffs</p><p>工作人員</p></a></div>
          <div className="nav-link nav-button"><ActionButton style={{fontSize:"32px",lineHeight:"40px"}} title="HackMD 共筆" link="https://hackmd.io/@iPlayground/2019/" /></div>
          
          </div>
        </div>
        </div>
  </nav>
        )
    }
    
}