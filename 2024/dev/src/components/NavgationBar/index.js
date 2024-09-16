import React, { PureComponent } from 'react';

import './styles.css';

import ActionButton from "../ActionButton";

import { Trans } from 'react-i18next';

export default class NavgationBar extends PureComponent {
  constructor() {
    super()
    this.state = {
      toggle: false
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll(e) {
    if (document.body.scrollTop > 96 || document.documentElement.scrollTop > 96) {
      document.getElementById("navbar").classList.add("is-shrink")
      document.getElementById("nav-logo-small").style.display = "block"
    } else {
      if (this.state.toggle === false) {
        document.getElementById("navbar").classList.remove("is-shrink")
        document.getElementById("nav-logo-small").style.display = "block"
      }
    }
  }

  updateWindowDimensions() {
    console.log("innerWidth: " + window.innerWidth + "innerHeight: " + window.innerHeight);
    if (window.innerWidth < 680) {
      if (this.state.toggle === false) {
        document.getElementById("nav-link-container").style.display = "none"
      } else {
        document.getElementById("nav-link-container").style.display = "block"
        document.getElementById("nav").classList.add("menu-opened")
      }
    } else {
      document.getElementById("nav-link-container").style.display = "block"
      document.getElementById("nav").classList.remove("menu-opened")
    }
    // this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onOpenMenu = () => {
    if (this.state.toggle === false) {
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
      }
    }

    this.setState({ toggle: !this.state.toggle })
  }
  render() {
    return (
      <nav id="navbar">
        <div>
          <div id="nav">
            <div className="nav-menu" onClick={this.onOpenMenu.bind(this)}><i className="fas fa-bars" id="bar-menu-icon"></i></div>
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
              <div className="nav-link"><a href="#about-section"><p>{<Trans>navTitle.about</Trans>}</p></a></div>
              <div className="nav-link"><a href="#speakers-section"><p>{<Trans>navTitle.speakers</Trans>}</p></a></div>
              <div className="nav-link"><a href="#staffs-section"><p>{<Trans>navTitle.staff</Trans>}</p></a></div>
              <div className="nav-link"><a href="#venue-section"><p>{<Trans>navTitle.venue</Trans>}</p></a></div>
              <div className="nav-link nav-button"><ActionButton style={{ fontSize: "30px", lineHeight: "40px" }} title={<Trans>navButtonTitle.buyTicket</Trans>} link="https://iplayground.kktix.cc/events/iplayground2024" /></div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

}