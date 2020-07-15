import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import svgAvatar from "../svg/avatar.svg";
import svgGithub from "../svg/socials/github.svg";
import svgInstar from "../svg/socials/instagram.svg";
import svgFacebook from "../svg/socials/facebook.svg";

import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faFacebook } from '../../node_modules/@fortawesome/free-brands-svg-icons'


const BioWrapper = styled.div`
  position: sticky;
  top: 2em;
  width: ${props => props.theme.sizes.bioWidth};
  padding: 1.5em;
  font-size: 15.5px;
  background: ${props => props.theme.colors.blackLight};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: ${props => props.theme.responsive.large}) {
    position: relative;
    margin: 2em 0;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.responsive.small}) {
    padding: 1.3em 1em;
  }
`;

const AvatarImage = styled.img`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const BioHeader = styled.div`
  display: flex;
  align-items: center;
`;
const BioName = styled.div`
  margin-left: 10px;
  a {
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1.3em;
    color: #fff;
  }
`;
const BioMain = styled.div`
  margin-top: 1em;
`;
const BioText = styled.p`
  color: #fff;
  font-size: 0.92em;
`;
const BioLinks = styled.div`
  margin-top: 1.5em;
  display: flex;
  color: #fff;
  text-align: center;
  max-width: 244px;
`;

const BioLink = styled.a`
  width: 33.3%;
  display: block;
  font-weight: 600;
  font-size: 0.9em;
  line-height: 30px;
  color: ${props => props.theme.colors.gray};
  letter-spacing: 0.5px;
  
  &:hover {
    color: ${props => props.theme.colors.whitesmoke};
    transform: translateY(-2px);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  display: block;
  margin: 0 auto;
  width: 2em !important;
  height: 33px;
`

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {

        const { author, social } = data.site.siteMetadata;
        return (
          <BioWrapper>
            <BioHeader>
              <AvatarImage src={svgAvatar} alt={author} />
              <BioName>
                <a href={`https://github.com/${social.github}`}>{author}</a>
              </BioName>
            </BioHeader>
            <BioMain>
              <BioText>
                안녕하세요. <br/>한성민입니다.
              </BioText>
              <BioLinks>
                <BioLink href="https://www.instagram.com/hsm950825">
                  <Icon icon={faInstagram} />
                  {/* <img src={svgInstar} alt="Instargram" /> */}
                </BioLink>
                <BioLink href="https://github.com/zhsks528">
                  <Icon icon={faGithub} />
                  {/* <img src= {svgGithub} alt="Github" /> */}
                </BioLink>
                <BioLink href="https://www.facebook.com/profile.php?id=100003864617985">
                  <Icon icon={faFacebook} />
                  {/* <img src= {svgFacebook} alt="Facebook" /> */}
                </BioLink>
              </BioLinks>
            </BioMain>
          </BioWrapper>
        );
      }}
    />
  );
};

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/avatar.png/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter,
          github,
          facebook
        }
      }
    }
  }
`;

export default Bio;
