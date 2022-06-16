import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import { illustration } from "../../portfolio";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import manWorking from "../../assets/lottie/manWorking.json";
import coding1 from "../../assets/lottie/coding1.json";
import coding2 from "../../assets/lottie/coding2.json";
import coding3 from "../../assets/lottie/coding3.json";
import coding4 from "../../assets/lottie/coding4.json";
import coding5 from "../../assets/lottie/coding5.json";
import codeTypingConcept from "../../assets/lottie/codeTypingConcept.json";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return illustration.animated ? (
      <DisplayLottie animationData={codeTypingConcept} />
    ) : (
      <FullStackImg theme={props.theme} />
    );
  // return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    // return (illustration.animated ? (
    //   <DisplayLottie animationData={codeTypingConcept} />
    // ) : (
    //   <CloudInfraImg theme={props.theme} />
    // ))
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assets/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
