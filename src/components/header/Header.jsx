import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import {
  // FiUser,
  FiBriefcase,
  // FiFileText,
  // FiPhoneOutgoing,
    FiTwitter,
} from "react-icons/fi";

import {FaBookOpen, FaDiscord, FaHome, FaQuestion, FaTelegram} from 'react-icons/fa';
import {RiVideoLine} from 'react-icons/ri';

import Logo from '../../assets/logo.svg';

import {RiTeamLine} from 'react-icons/ri';
import {GiFrog} from 'react-icons/gi';
import PP from '../../assets/pp1.png'

// import {
//   // FaHome,
//   FaBlog } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      {/* Header */}
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      {/* End Header */}

      {/* nav bar */}
      <header className={click ? "header-left menu-open" : "header-left"}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <Link to="/">
                <img src={PP} alt="Logo"/>
              </Link>
            </div>
          </div>
          {/* End htl-top */}

          <Scrollspy
            className="nav nav-menu"
            items={["home", "faq", "team"]}
            currentClassName="active"
            offset={-30}
          >
            <li>
              <a
                className="nav-link "
                href="#home"
                data-tip
                data-for="HOME"
                onClick={handleClick}
              >
                <FaHome size={20}/>
                <ReactTooltip id="HOME" place="top" type="dark" effect="float">
                  <span>Home</span>
                </ReactTooltip>
              </a>
            </li>

            {/*<li>*/}
            {/*  <a*/}
            {/*      className="nav-link"*/}
            {/*      href="#videos"*/}
            {/*      data-tip*/}
            {/*      data-for="VIDEOS"*/}
            {/*      onClick={handleClick}*/}
            {/*  >*/}
            {/*    <RiVideoLine />*/}
            {/*    <ReactTooltip id="VIDEOS" place="top" type="dark" effect="float">*/}
            {/*      <span>Videos</span>*/}
            {/*    </ReactTooltip>*/}
            {/*  </a>*/}
            {/*</li>*/}

            <li>
              <a
                  className="nav-link"
                  href="#faq"
                  data-tip
                  data-for="FAQ"
                  onClick={handleClick}
              >
                <FaQuestion size={20}/>
                <ReactTooltip
                    id="FAQ"
                    place="top"
                    type="dark"
                    effect="float"
                >
                  <span>Faq</span>
                </ReactTooltip>
              </a>
            </li>

            <li>
              <a
                  className="nav-link"
                  href="#team"
                  data-tip
                  data-for="TEAM"
                  onClick={handleClick}
              >
                <RiTeamLine size={20} />
                <ReactTooltip id="TEAM" place="top" type="dark" effect="float">
                  <span>Team</span>
                </ReactTooltip>
              </a>
            </li>

            <li>
              <a
                className="nav-link"
                href="https://twitter.com/polygonpenguins"
                target={'_blank'}
                rel={'noreferrer'}
                data-tip
                // data-for="BLOG"
                // onClick={handleClick}
              >
                <FiTwitter size={20} />
                <ReactTooltip id="TWITTER" place="top" type="dark" effect="float">
                  <span>Twitter</span>
                </ReactTooltip>
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                rel={'noreferrer'}
                href="https://discord.gg/nJ6Qg6JF"
                target={'_blank'}
                data-for="DISCORD"
                onClick={handleClick}
              >
                <FaDiscord size={20} />
                <ReactTooltip
                  id="DISCORD"
                  place="top"
                  type="dark"
                  effect="float"
                >
                  <span>Discord</span>
                </ReactTooltip>
              </a>
            </li>

            <li>
              <a
                  className="nav-link"
                  rel={'noreferrer'}
                  href="https://t.me/joinchat/PWlE8m5ajK5lZDE5"
                  target={'_blank'}
                  data-for="DISCORD"
                  onClick={handleClick}
              >
                <FaTelegram size={20} />
                <ReactTooltip
                    id="DISCORD"
                    place="top"
                    type="dark"
                    effect="float"
                >
                  <span>Discord</span>
                </ReactTooltip>
              </a>
            </li>

            <li>
              <a
                  className="nav-link"
                  rel={'noreferrer'}
                  href="https://docs.polygonpenguins.com/"
                  target={'_blank'}
                  data-for="DISCORD"
                  // onClick={handleClick}
              >
                <FaBookOpen size={20} />
                <ReactTooltip
                    id="DISCORD"
                    place="top"
                    type="dark"
                    effect="float"
                >
                  <span>Docs</span>
                </ReactTooltip>
              </a>
            </li>

            <li>
              <Link
                  className="nav-link"
                  // rel={'noreferrer'}
                  to="/penguins"
                  // target={'_blank'}
                  // data-for="DISCORD"
                  onClick={handleClick}
              >
                <FaBookOpen size={20} />
                <ReactTooltip
                    id="DISCORD"
                    place="top"
                    type="dark"
                    effect="float"
                >
                  <span>Docs</span>
                </ReactTooltip>
              </Link>
            </li>

          </Scrollspy>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
