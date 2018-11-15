import React, { Component } from 'react';

class ProjectDetails extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title</span>
            <p>Loren ispum is this</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by Praveen</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;