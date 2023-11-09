import React, { useState } from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';

const Projects = ({ resumeProjects, resumeBasicInfo }) => {
  const [detailsModalInfo, setDetailsModalInfo] = useState({
    show: false,
    deps: {}
  });

  const detailsModalClose = () => setDetailsModalInfo({ ...detailsModalInfo, show: false });
  const detailsModalShow = (data) => setDetailsModalInfo({ show: true, deps: data });

  const sectionName = resumeBasicInfo?.section_name?.projects;
  const projects = resumeProjects?.map((project) => (
    <div
      className="col-sm-12 col-md-6 col-lg-4"
      key={project.title}
      style={{ cursor: 'pointer' }}
      onClick={() => detailsModalShow(project)}
    >
      <span className="portfolio-item d-block">
        <div className="foto">
          <div>
            <img
              src={project.images[0]}
              alt="projectImages"
              height="230"
              style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
            />
            <span className="project-date">{project.startDate}</span>
            <p className="project-title-settings mt-3">
              {project.title}
            </p>
          </div>
        </div>
      </span>
    </div>
  ));

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: 'black' }}>
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={detailsModalInfo.show}
          onHide={detailsModalClose}
          data={detailsModalInfo.deps}
        />
      </div>
    </section>
  );
};

export default Projects;
