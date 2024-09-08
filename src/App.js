import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});

  const loadResumeFromPath = async (path) => {
    try {
      const response = await fetch(path);
      const data = await response.json();
      setResumeData(data);
    } catch (error) {
      alert(error);
    }
  };

  const loadSharedData = async () => {
    try {
      const response = await fetch(`portfolio_shared_data.json`);
      const data = await response.json();
      setSharedData(data);
      document.title = `${data.basic_info.name}`;
    } catch (error) {
      alert(error);
    }
  };

  const applyPickedLanguage = (pickedLanguage, oppositeLangIconId) => {
    swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    const resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    loadResumeFromPath(resumePath);
  }
  
  const swapCurrentlyActiveLanguage = (oppositeLangIconId) => {
    const pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .style.filter = "";
    document
      .getElementById(pickedLangIconId)
      .style.filter = "brightness(40%)";
  };

  useEffect(() => {
    loadSharedData();
    const applyPickedLanguage = (pickedLanguage, oppositeLangIconId) => {
      swapCurrentlyActiveLanguage(oppositeLangIconId);
      document.documentElement.lang = pickedLanguage;
      const resumePath =
        document.documentElement.lang === window.$primaryLanguage
          ? `res_primaryLanguage.json`
          : `res_secondaryLanguage.json`;
      loadResumeFromPath(resumePath);
    };    applyPickedLanguage(window.$primaryLanguage, window.$secondaryLanguageIconId);
  }, []);

  return (
    <div>
      <Header sharedData={sharedData.basic_info} resumeData={resumeData.basic_info} />
      <div className="col-md-12 mx-auto text-center language">
        <div
          onClick={() => applyPickedLanguage(window.$primaryLanguage, window.$secondaryLanguageIconId)}
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon"
            data-icon="twemoji-flag-for-flag-united-kingdom"
            data-inline="false"
            id={window.$primaryLanguageIconId}
          ></span>
        </div>
        <div
          onClick={() => applyPickedLanguage(window.$secondaryLanguage, window.$primaryLanguageIconId)}
          style={{ display: "inline" }}
        >
          <span
            className="iconify language-icon mr-5"
            data-icon="twemoji-flag-for-flag-france"
            data-inline="false"
            id={window.$secondaryLanguageIconId}
          ></span>
        </div>
      </div>
      <About
        resumeBasicInfo={resumeData.basic_info}
        sharedBasicInfo={sharedData.basic_info}
      />
        <Projects
          resumeProjects={resumeData.projects}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Skills
          sharedSkills={sharedData.skills}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Courses
          resumeCourses={resumeData.courses}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Footer sharedBasicInfo={sharedData.basic_info} />
      </div>
  );
};

export default App;
