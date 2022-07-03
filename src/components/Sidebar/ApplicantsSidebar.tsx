import React, { FC } from 'react';
import { slide as Menu } from 'react-burger-menu';
import {
  BiHomeAlt,
  BiBookBookmark,
  BiLogInCircle,
  BiPaperPlane,
  BiUser,
  BiMedal,
  BiLogOutCircle
} from "react-icons/bi";

interface Props {
  pageWrapId: string;
  outerContainerId: string;
};

const ApplicantsSidebar: FC<Props> = (props) => {
  return (
    <Menu>
      <p className="memu-title">Applicants</p>
      <a className="menu-item" href="/">
        <BiHomeAlt />{" "}
        Home
      </a>
      <a className="menu-item" href="/signup">
        <BiLogInCircle />{" "}
        Apply Now
      </a>
      <a className="menu-item" href="/upload-documents">
        <BiBookBookmark />{" "}
        Upload Documents
      </a>
      <a className="menu-item" href="/our-response">
        <BiPaperPlane />{" "}
        Our Response
      </a>
      <a className="menu-item logout" href="/logout">
        <BiLogOutCircle /> {" "}
        Withdraw Application
      </a>
    </Menu>
  )
}

export default ApplicantsSidebar