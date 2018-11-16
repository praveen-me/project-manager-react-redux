import React, { Component } from 'react';
import ProjectSummary from './ProjectSummary';
class ProjectList extends Component {
  render() {
    const {projects} = this.props;
    return (
      <div className="project-list section">
        {
          projects && projects.map(project => <ProjectSummary project={project} key={project.id}/>)
        }
      </div>
    );
  }
}

export default ProjectList;