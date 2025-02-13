import {
  fetchProjects,
  fetchProject,
  postProject,
  patchProject,
  destroyProject
} from '../util/project_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects,
});

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project,
});

const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId,
});

export const requestProjects = workspaceId => dispatch => (
  fetchProjects(workspaceId).then(projects => dispatch(receiveProjects(projects)))
);

export const requestProject = id => dispatch => (
  fetchProject(id).then(Project => dispatch(receiveProject(Project)))
);

export const createProject = project => dispatch => (postProject(project))
  .then(Project => dispatch(receiveProject(Project)));

export const updateProject = project => dispatch => (patchProject(project)
  .then(Project => dispatch(receiveProject(Project))));

export const deleteProject = id => dispatch => (destroyProject(id)
  .then(project => dispatch(removeProject(id)))
);
