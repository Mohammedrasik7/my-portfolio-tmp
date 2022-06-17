import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    const isDark = JSON.parse(localStorage.getItem("isDark"));
    return (
      <div className="experience-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () =>
                      isDark
                        ? {
                            backgroundColor: `${theme.body}`,
                            border: `1px solid`,
                            borderRadius: `5px`,
                            borderColor: `#5026fc`,
                            marginBottom: `3px`,
                            fontFamily: "Google Sans Regular",
                            color: `#836be3`,
                            ":hover": `#ffffff`,
                          }
                        : {
                            backgroundColor: `${theme.body}`,
                            border: `1px solid`,
                            borderRadius: `5px`,
                            borderColor: `${theme.headerColor}`,
                            marginBottom: `3px`,
                            fontFamily: "Google Sans Regular",
                          },
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      experience={experience}
                      theme={theme}
                      key={index}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default ExperienceAccordion;
