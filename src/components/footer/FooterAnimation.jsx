import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP, FaYoutube, FaDiscord, FaHeart, FaTelegram,
} from "react-icons/fa";

const SocialShare = [
  // { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/polygonpenguins" },
  { Social: <FaTelegram />, link: "https://t.me/joinchat/PWlE8m5ajK5lZDE5" },
  { Social: <FaDiscord />, link: "https://discord.gg/nJ6Qg6JF" },
  // { Social: <FaLinkedinIn />, link: "https://twitter.com/" },
  // { Social: <FaPinterestP />, link: "https://www.pinterest.com/" },
];

const Footer = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        <div className="col-md-6 my-2 text-center text-md-end">
          <p>
            Built with <FaHeart color={'red'}/> on polygon
          </p>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};

export default Footer;
