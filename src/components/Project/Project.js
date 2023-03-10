import React from "react";
import { StyleWrapper } from "./Project.styled";

import { useSelector } from "react-redux";

const Project = () => {
  const projects = useSelector((state) => state.projects);
  return (
    <StyleWrapper
      className=" d-flex flex-column align-items-center"
      id="projects"
    >
      <h1>Projects</h1>

      <div className="d-flex w-100 justify-content-center flex-wrap">
        {projects.map((item) => {
          return (
            <div
              className="d-flex flex-column project-card"
              key={item.projectName}
            >
              <div className="text-center">
                <img
                  src={item.imageUrl}
                  width="400px"
                  height={"400px"}
                  alt="projectImage"
                />
              </div>
              <h4>{item.projectName}</h4>
              <p className="lh-lg">{item.description}</p>
            </div>
          );
        })}
      </div>
    </StyleWrapper>
  );
};

export default Project;
