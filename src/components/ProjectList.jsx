
const ProjectList = (props) => {
  const {
    projects,
  } = props
  return (
    <div className="ProjectList">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;