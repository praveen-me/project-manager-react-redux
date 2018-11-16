import React, { Component } from 'react';
import {connect} from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {redux, compose} from 'redux';


class ProjectDetails extends Component {
  render() {
    const id = this.props.match.params.id;
    const {project} = this.props;
    if(project) {
      return (
        <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{}</div>
          </div>
        </div>
      </div>
      )
    }
    console.log(project)
    return (
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project : project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection : 'projects'}
  ])
)(ProjectDetails);