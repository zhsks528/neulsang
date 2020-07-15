import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faGithub } from '../../node_modules/@fortawesome/free-brands-svg-icons'

const Follow = styled.div`
  margin-top: 2em;
  text-align: left;
`;

const FollowLink = styled.a`
  display: inline-flex;
  align-items: center;
  background: #20a8ea;
  color: #fff;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  
  .follow-link-text {
    padding: 5px 7px;
    background: #dfebf3;
    color: #445271;
    font-size: 14px;
    transition: 0.2s;
  }

  &:hover .follow-link-text {
    background: #d3ebfb;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  background : black;
  width: 2em !important;
  height: 2em;
  padding: 5px;
`

const ShareButtons = () => {
  return (
    <Follow>
      <FollowLink href="https://github.com/zhsks528" rel="nofollow">
        <Icon icon={faGithub} />
        <div className="follow-link-text">@zhsks528</div>
      </FollowLink>
    </Follow>
  );
};

export default ShareButtons;
