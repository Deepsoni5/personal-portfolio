import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkdin.com" target="_black">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_black">
        <FaGithub />
      </a>
      <a href="https://instagram.com" target="_black">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
