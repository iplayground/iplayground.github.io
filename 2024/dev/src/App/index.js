import React, { PureComponent } from "react";
import _, { random } from "lodash";
import { SocialIcon } from "react-social-icons";

import ActionFooter from "../components/ActionFooter";
import SpeakerFeature from "../components/SpeakerFeature";
import Modal from "../components/Modal";
import ModalContentSpeakers from "../components/ModalContentSpeakers";
import ModalContentSchedule from "../components/ModalContentSchedule";
import TableRow from "../components/TableRow";
import ActionButton from "../components/ActionButton";

import "./styles.css";
import NavgationBar from "../components/NavgationBar";
import activityPicturesJson from "../App/JsonData/activityPictures.json"

import './i18n'; // 在这里导入 i18n.js
import { Trans } from 'react-i18next';

export default class App extends PureComponent {
  state = { showModal: false, whichDay: "session", programs: [], sponsors: null, speakers: null, staffs: null, schedule: null };

  componentDidMount = async () => {
    //const data = await 
    await fetch('https://raw.githubusercontent.com/iplayground/SessionData/2024/v1/speakers.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ programs: data.program })
      });

    await fetch('https://raw.githubusercontent.com/iplayground/SessionData/2024/v1/staffs.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ staffs: data })
      });

    await fetch('https://raw.githubusercontent.com/iplayground/SessionData/2024/v1/schedule.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ schedule: data.schedule })
      });
  }

  onClickSpeaker = id => {
    const speakersList = this.state.programs ? this.state.programs : null
    console.log(speakersList, id)
    this.modalContentDataSpeakers = _.find(speakersList, { id });
    this.setState({ showModal: "speakers" });
    document.getElementById("navbar").hidden = true;
  };

  onClickTopic = talk => {
    this.modalContentDataSchedule = talk;
    this.setState({ showModal: "schedule" });
    document.getElementById("navbar").hidden = true;
  };

  onCloseRequest = () => {
    this.setState({ showModal: false });
    document.getElementById("navbar").hidden = false;
  };

  renderTableRow = () => {
    // console.log(this.state.schedule)
    const tableCellData = this.state.schedule[this.state.whichDay]
    if (Array.isArray(tableCellData)) {
      return tableCellData.map((value, index) => {
        return (
          <TableRow
            key={index}
            start={value.start}
            end={value.end}
            rest={value.rest || null}
            talks={value.talks}
            isWorkshop={null}
            programs={this.state.programs}
            onClickTopic={talk => {
              this.onClickTopic(talk);
            }}
          />
        );
      })
    }
    return null
  }

  workshop = () => {
    return (
      <li className="schedule_row">
        <div className="schedule_time_block"></div>
        <div className="schedule_room_container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="schedule_block"><div className="room_lable schedule_room_lable room_101">1005</div></div>
          <div className="schedule_block"><div className="room_lable schedule_room_lable room_102">1006</div></div>
          <div className="schedule_block"><div className="room_lable schedule_room_lable room_103">1007</div></div>
        </div>
      </li>
    );
  }
  session = () => {
    return (
      <li className="schedule_row">
        <div className="schedule_time_block"></div>
        <div className="schedule_room_container">
          {/* <div className="schedule_block"><div className="room_lable schedule_room_lable room_101">801</div></div> */}
          {/* <div className="schedule_block"><div className="room_lable schedule_room_lable room_102">803</div></div> */}
          {/* <div className="schedule_block"><div className="room_lable schedule_room_lable room_103">1002</div></div> */}
        </div>
      </li>
    );
  }
  renderTable = () => {
    console.log(this.state.schedule)
    if (this.state.schedule === null) {
      return null
    }
    return (
      (
        <ul className="schedule_table">
          {this.state.whichDay === "session" ? this.session() : this.workshop()}
          {this.renderTableRow()}
        </ul>
      )
    );
  }
  renderWorkShopRow = (day) => _.map(
    this.workshop[day],
    ({ id, start, end, rest, isWorkshop, talks }) => (
      <TableRow
        key={id}
        start={start}
        end={end}
        rest={rest || null}
        talks={talks}
        isWorkshop={true}
        programs={this.state.programs}
        onClickTopic={talk => {
          this.onClickTopic(talk);
        }}
      />
    )
  );

  renderWorkShop = () => (
    <ul className="schedule_table">
      <li className="schedule_row"><div className="workshop_day">9/21 day 1</div></li>
      {this.renderWorkShopRow("session")}
      <li className="schedule_row "><div className="workshop_day">9/22 day 2</div></li>
      {this.renderWorkShopRow("day_2")}
    </ul>
  );

  programObject = (id) => {
    var program = this.state.programs.find(function (element) {
      return element.id === id;
    })
    console.log(program)
    if (program != null) {
      return program.title;
    }
  }

  renderSpeakers = () => {
    const speakersList = this.state.programs ? this.state.programs : null
    console.log(speakersList)
    return _.map(speakersList, ({ id, video_url, speakers }) => (
      <div key={id} className="app__speaker">
        <img
          className="app__speaker-img"
          onClick={() => this.onClickSpeaker(id)}
          src={video_url !== null && video_url !== "" ? video_url : "https://raw.githubusercontent.com/iplayground/SessionData/2020/v1/images/speakers/nopic.png"}
        />
        <p onClick={() => this.onClickSpeaker(id)} className="app__speaker-name">
          <strong>{speakers[0].name}</strong>
        </p>
        <p className="app__speaker-position">{speakers[0].bio}</p>
      </div>
    ));
  }

  renderPartyEventRow = () =>
    _.map(
      this.partyEvents,
      ({ id, start, end, rest }) => (
        <TableRow
          key={id}
          start={start}
          end={end}
          rest={rest || null}
        />
      )
    );


  renderStaff = () => {
    const staffsList = this.state.staffs ? this.state.staffs.staff : null

    return _.map(staffsList, ({ id, imgURL, alt, name, position, SNS }) => (

      <a key={id} href={SNS} target="_blank">
        <div className="app__speaker">
          <img className="app__speaker-img" src={imgURL} alt={alt} />
          <p className="app__speaker-name">
            <strong>{name}</strong>
          </p>
          <p className="app__speaker-position">{position}</p>
        </div>
      </a>

    ));
  }


  renderSponsors = () => {
    const sponsorsList = this.state.sponsors ? this.state.sponsors.sponsors : null

    return _.map(sponsorsList, ({ title, items }) => (
      <div key={_.uniqueId()} className={title == "黃金級" ? "app__sponsor-gold-container" : "staff_team_container"}>
        <div className="section_sub_title">{title}</div>
        {
          items.map(({ picture, link, name }) =>
            <div key={_.uniqueId()} className="app__sponsor">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img className={title == "黃金級" ? "app__sponsor-gold" : "app__sponsor-logo"} src={picture} alt={name} />
              </a>
            </div>
          )
        }
      </div>
    ));
  }


  renderCoOrganisers = () => {
    const partners = this.state.sponsors ? this.state.sponsors.partner : null

    return _.map(partners, ({ icon, link, name }) => (
      <div key={_.uniqueId()} className="app__sponsor">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="app__CoOrganisers-logo" src={icon} alt={name} />
        </a>
      </div>
    ));
  }

  renderPictures = () => {
    const activityPicturesList = activityPicturesJson ? activityPicturesJson.activityPictures : null
    return _.map(activityPicturesList, ({ id, imgURL, name, SNS }) => (
      <a key={id} href={SNS} target="_blank">
        <div className="app__speaker">
          <img className="app__speaker-square-img" src={require(`./images/${imgURL}`)} />
          <p className="app__speaker-name">
            <strong>{name}</strong>
          </p>
          {/* <p className="app__speaker-position">{position}</p> */}
        </div>
      </a>
    ));
  }

  render() {
    const { whichDay, showModal } = this.state;
    const mailChimpURL =
      "https://iplayground.us17.list-manage.com/subscribe/post?u=61bc80c5d8118e451c9a5ac80&amp;id=b804a3d8e0";

    return (
      <div className="app-fullscreen">
        <div className="logo-container-fullscreen">
          <NavgationBar />
          <div className="logo-container">
            <img
              className="logo"
              src={require(`./images/logo_2024.png`)}
              alt="iPlayground"
            />
            <div className="text-overlay">
              <span className="main-title">iPlayground 2024</span>
              <span className="icon-text">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                {<Trans>location.name</Trans>}
              </span>
              <span className="icon-text">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                {<Trans>date</Trans>}
              </span>
            </div>
          </div>
        </div>
        <div className="app__container">
          <div className="empty_section">
            <div className="section_action_container">
              {/* <ActionButton title={<Trans>underAboutUs.button.sponsor</Trans>} link="https://bit.ly/iplayground-2020-sponsors" /> */}
              {/* <ActionButton title={<Trans>underAboutUs.button.buyTicket</Trans>} link="https://iplayground.kktix.cc/events/iplayground2020" /> */}
              {/* <ActionButton title={<Trans>underAboutUs.button.becomeASpeaker</Trans>} link="https://cfp.iplayground.io/events/iplayground_2020" /> */}
              {/* <ActionButton title={<Trans>underAboutUs.button.hackMD</Trans>} link="https://hackmd.io/@iPlayground/2020/" /> */}
            </div>

            {/* <div className="section_action_container">
              <a href="https://apps.apple.com/tw/app/iplayground-19/id1367423535?mt=8" style={{ display: "inline-block", overflow: "hidden", background: "url(https://linkmaker.itunes.apple.com/zh-tw/badge-lrg.svg?releaseDate=2018-10-03&kind=iossoftware&bubble=ios_apps) no-repeat", width: "135px", height: "40px", verticalAlign: "middle" }}></a>
              <a href='https://play.google.com/store/apps/details?id=net.zonble.iplayground19&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Google Play立即下載' src='https://play.google.com/intl/en_us/badges/images/generic/zh-tw_badge_web_generic.png' style={{ height: "60px", verticalAlign: "middle" }} /></a>
            </div> */}
          </div>

          {/* About關於我們 */}
          <div className="app__section sub_section" id="about-section">
            <div className="section_container">
              <div className="app__title"><span className="app__title_eng">{<Trans>aboutUs.title</Trans>}</span></div>
              <div className="about_content">
                <p>
                  {<Trans>aboutUs.content.firstSentence.one</Trans>} <a href="https://iosdc.jp/2017/" target="_blank">iOSDC</a> {<Trans>aboutUs.content.firstSentence.second</Trans>}
                </p>
                <p>
                  {<Trans>aboutUs.content.secondSentence</Trans>}
                </p>
                <p>
                  {<Trans>aboutUs.content.thirdSentence</Trans>}
                </p>
                <p>
                  {<Trans>aboutUs.content.fourthSentence</Trans>}
                </p>
                <p>
                  {<Trans>aboutUs.content.fifthSentence</Trans>}
                </p>
              </div>
              {/* 活動照片 */}
              {/* <div className="app__title"><span className="app__title_eng">Photos</span><span>活動照片</span></div> */}
              {this.renderPictures()}
            </div>
          </div>

          {/* Schedule議程 */}
          <div className="app__section main_section" id="schedule-section">
            {/* <img className="main_section_logo" src={require("../images/iplayground_logo_diamond.png")} /> */}
            <div className="main_section_container">
              <div className="app__title"><span className="app__title_eng">{<Trans>navTitle.schedule</Trans>}</span></div>
              <div className="app__date">2024/11/3</div>
              <div className="schedule_container">
                {(whichDay === "workshop") ? this.renderTable() : this.renderTable()}
              </div>
              <img className="schedule_container_ipgman" src={require("../images/IPGman.png")} />
            </div>
          </div>

          {/* Speakers講者 */}
          <div className="app__section main_section" id="speakers-section">
            {/* <img className="main_section_logo" src={require("../images/iplayground_logo_ball.png")} /> */}
            <div className="main_section_container">
              <div className="app__title"><span className="app__title_eng">{<Trans>speakers.title</Trans>}</span></div>
              <div className="app__speaker-container">
                {this.renderSpeakers()}
              </div>
            </div>
          </div>

          {/* Staffs工作人員 */}
          <div className="app__section sub_section" id="staffs-section">
            <div className="section_container">
              <div className="app__title"><span className="app__title_eng">{<Trans>staff.title</Trans>}</span></div>
              {this.renderStaff()}
            </div>
          </div>

          {/* Venue 場地 */}
          <div className="app__section sub_section" id="venue-section">
            <div className="section_container">
              <div className="app__title"><span className="app__title_eng">{<Trans>venue.title</Trans>}</span></div>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                {<Trans>location.name</Trans>}
                <br /><br />
                {<Trans>location</Trans>}
              </p>

              <iframe
                title={<Trans>location</Trans>}
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.654896766674!2d121.54879247633677!3d25.079683377786893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad2f79889a2f%3A0x243e9294d51c3f3a!2z5bem6YSw5Y-z6IiN5aSa5Yqf6IO95rS75YuV56m66ZaT!5e0!3m2!1szh-TW!2stw!4v1726229640688!5m2!1szh-TW!2stw"
                allowFullScreen
              />
              <p>
                {/* {<Trans>venue.tafficTitle</Trans>}
                <br /><br /> */}
                {<Trans>venue.MRTTitle</Trans>}
                <br />
                {<Trans>venue.MRTContent.firstSentence</Trans>}
                {/* <br />
                {<Trans>venue.MRTContent.secondSentence</Trans>} */}
                <br /><br />
                {<Trans>venue.busTitle</Trans>}
                <br />
                {<Trans>venue.busContent.firstSentence</Trans>}
                {/* <br />
                {<Trans>venue.busContent.secondSentence</Trans>} */}
                <br /><br />
                {<Trans>venue.parkingTitle</Trans>}
                <br />
                {<Trans>venue.parkingContent.firstSentence</Trans>}
                <br />
                {<Trans>venue.parkingContent.secondSentence</Trans>}
              </p>
            </div>
          </div>

          {/* Sponsorships贊助商 */}
          {/* <div className="app__section sub_section" id="sponsors-section">
            <div className="section_container">
              <div className="app__title"><span className="app__title_smaller_eng" >{<Trans>sponsorships.title</Trans>}</span><span>{<Trans>sponsorships.title2</Trans>}</span></div>
              {this.renderSponsors()}
            </div>
          </div> */}

          {/* Co-organizers合作夥伴 */}
          {/* <div className="app__section sub_section" id="coorganizers-section">
            <div className="section_container">
              <div className="app__title"><span className="app__title_eng">{<Trans>CoOrganizers.title</Trans>}</span><span>{<Trans>CoOrganizers.title2</Trans>}</span></div>
              {this.renderCoOrganisers()}
            </div>
          </div> */}

          <div className="app_section_footer">
            <div className="logo-small-subcontainer">
                <div className="logo-small" id="nav-logo-small">
                  <img
                    src={require("../images/logo_iplayground_small.png")}
                    alt="iPlayground"
                  />
                </div>
            </div>
            <div className="section_action_container footer-links" style={{ marginTop: "1em" }}>
                <a href="mailto:support@iplayground.io" target="_blank"><img src={require("../images/icon-telegram.png")}/></a>
                <a href="https://www.facebook.com/theiPlayground/" target="_blank"><img src={require("../images/icon-facebook.png")}/></a>
                <a href="https://discord.gg/xS8yMKbbjB" target="_blank"><img src={require("../images/icon-discord.png")}/></a>
                <a href="https://twitter.com/theiPlayground" target="_blank"><img src={require("../images/icon-x.png")}/></a>
                <a href="https://youtube.com/@iplaygroundtaiwan" target="_blank"><img src={require("../images/icon-youtube.png")}/></a>
            </div>
            <p style={{ textAlign: "center", color: "#ffffff" }}>
                {<Trans>allRightsReserved</Trans>}
            </p>
          </div>

        </div>
        <Modal visible={showModal} onCloseRequest={this.onCloseRequest}>

          {showModal === "speakers" ? (
            <ModalContentSpeakers
              {...this.modalContentDataSpeakers}
              onClickCloseBtn={this.onCloseRequest}
            />
          ) : (
              <ModalContentSchedule
                session={this.modalContentDataSchedule}
                onClickCloseBtn={this.onCloseRequest}
                speakers={this.state.programs}
              />
            )}
        </Modal>
      </div>
    );
  }
}
