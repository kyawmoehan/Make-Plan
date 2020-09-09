import React from "react";

const ProjectDetails = (props) => {
  let id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title- {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quod vero laborum ducimus odit facere cum qui nesciunt, quae in
            architecto quis assumenda ad. Ad quod numquam voluptatum ipsa
            officiis.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <p>Posted By nn</p>
          <p>2nd step 2020</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
