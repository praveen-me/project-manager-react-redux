import React, { Component } from 'react';

class ProjectSummary extends Component {
  render() {
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project Title</span>
          <p>Posted by Praveen</p>
          <p className="grey-text">15 November, 2018</p>
        </div>
      </div>
    );
  }
}

export default ProjectSummary;