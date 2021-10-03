import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP, FaDiscord, FaYoutube, FaTelegram,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaTwitter />, link: "https://twitter.com/polygonpenguins" },
  { Social: <FaTelegram />, link: "https://t.me/joinchat/PWlE8m5ajK5lZDE5" },
  { Social: <FaDiscord />, link: "https://discord.gg/nJ6Qg6JF" },
  // { Social: <FaLinkedinIn />, link: "https://twitter.com/" },
  // { Social: <FaPinterestP />, link: "https://www.pinterest.com/" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
