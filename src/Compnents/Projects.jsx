import "./Projects.css";
export default function Projects() {
  return (
    <>
      <section id="projects" className="projects">
        <div className="projectcontainer">
          <div className="projectcontent">
            <h3 className="head">Projects</h3>
            <h4>Each project is a unique piece of development</h4>
            <div className="project-grid-one">
              <img className="project-img" src="Project2img.png" width="571px" height="auto"></img>
              <div className="text-flex-one">
                <h3>ROVER APP</h3>
                <p>The Rover application is primarily used for timesheet management. Additionally, users can approve, submit, or reject pending tasks</p>
                <div className="skill-flex">
                  <h2 className="skill-text">React</h2>
                  <h2 className="skill-text">CSS</h2>
                </div>
                <div className="source-flex">
                  <h2 className="source-text">Code</h2>
                  <h2 className="source-text">Live Demo</h2>
                </div>
              </div>
            </div>
            <div className="project-grid-two">
              <div className="text-flex-two">
                <h3>NEWS APP</h3>
                <p>News application allows users to update with daily news with different categories. using react router user can navigate into different categories with benifit of the infinite scroll functionality </p>
                <div className="skill-flex">
                  <h2 className="skill-text">React</h2>
                  <h2 className="skill-text">Bootstrap</h2>
                </div>
                <div className="source-flex">
                  <h2 className="source-text">Code</h2>
                  <h2 className="source-text">Live Demo</h2>
                </div>
              </div>
              <img className="project-img" src="ComingSoon.jpg" width="571px" height="309.09px" style={{opacity:"0.9"}}></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
   