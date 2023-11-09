import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from 'react-bootstrap/Badge';

const Courses = ({ resumeCourses, resumeBasicInfo }) => {
  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              {resumeBasicInfo?.section_name.courses}
            </span>
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
          {resumeCourses && resumeCourses.map((work, i) => {
            const technologies = work.technologies;
            const mainTechnologies = work.mainTech;

            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={work.years}
                iconStyle={{
                  background: "#AE944F",
                  color: "#fff",
                  textAlign: "center",
                }}
                icon={<i className="fas fa-solid fa-graduation-cap courses-icon"></i>}
                key={i}
              >
                <div style={{ textAlign: "left", marginBottom: "4px" }}>
                  {mainTechnologies.map((technology, index) => (
                    <Badge pill className="main-badge mr-2 mb-2" key={index}>
                      {technology}
                    </Badge>
                  ))}
                </div>

                <h3
                  className="vertical-timeline-element-title"
                  style={{ textAlign: "left" }}
                >
                  {work.title}
                </h3>
                <h4
                  className="vertical-timeline-element-subtitle"
                  style={{ textAlign: "left" }}
                >
                  {work.company}
                </h4>
                <div style={{ textAlign: "left", marginTop: "15px" }}>
                  {technologies.map((technology, index) => (
                    <Badge pill className="courses-badge mr-2 mb-2" key={index}>
                      {technology}
                    </Badge>
                  ))}
                </div>
              </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto courses-icon"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Courses;
