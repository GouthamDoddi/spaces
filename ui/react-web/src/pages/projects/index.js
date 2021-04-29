import React, { useEffect, useState } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import HeaderBar from '../../shared/header_bar';
import { NewLayout } from '../entities';
import ProjectElem from './panel';
import qgate from '../../assets/images/qgate.png';
import ProjectList from './list';
import makeStore from '../../store/make-store';
import { useStore } from 'effector-react';
import { isJAWDAUser, isMOTCUser, userEntities } from '../../store/user';

const { load: loadEntities } = makeStore(() => 'entities');
const { store: projectStore, load: loadProjects } = makeStore(({ entity_id }) => `${entity_id}/rev-projects`);

const Projects = () => {
  const [entities, setEntities] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const projects = useStore(projectStore).data || [];
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    loadEntities('', (data) => {
      setEntities(isMOTCUser() ? data : data.filter(({ id }) => userEntities().includes(id)));
    });
  }, []);

  const handleChange = ({ target: { value, name }}) => {
    if (name === 'entity') {
      setSelectedEntity(value);
    } else {
      setSelectedProject(value);
    }
  };

  useEffect(() => {
    setSelectedProject(null);
    if (selectedEntity) {
      loadProjects({ entity_id: selectedEntity });
    }
  }, [selectedEntity]);

  return (
    <div className="app_wrapper">
      <NewLayout>
        <HeaderBar className="hb" />
        <FilterBreadcrumb className="custom_container">
          <div className="filter_breadcrumb">
            <ul>
              <li>
                <NavLink to="/">
                  <img src={qgate} width="100%" />
                </NavLink>
              </li>

              {isJAWDAUser() && (
                <li>
                  <div className="filter_sele active">
                    <label>State</label>
                    <label>QDG</label>
                  </div>
                </li>
              )}

              <li>
                <div className="filter_sele">
                  <label>Entity</label>
                  <select name="entity" value={selectedEntity} onChange={handleChange}>
                    <option value="">Select Entity</option>
                    {entities.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                  </select>
                </div>
              </li>

              <li>
                <div className="filter_sele">
                  <label>Project</label>
                  <select name="project" value={selectedProject} onChange={handleChange} disabled={!selectedEntity}>
                    <option value="">Select Project</option>
                    {projects.map(({ id, project_name }) => <option key={id} value={id}>{project_name}</option>)}
                  </select>
                </div>
              </li>
            </ul>
          </div>
        </FilterBreadcrumb>
        <Switch>
          <Route
            path={[
              '/projects/:project_id',
              '/projects/:project_id/compliance-project-details',
              '/projects/:project_id/compliance-projects',
              '/projects/:project_id/case-management',
            ]}
            exact
          >
            <ProjectElem />
          </Route>
          <Route path="/projects" exact>
            <ProjectList selectedEntity={selectedEntity} selectedProject={selectedProject} />
          </Route>
        </Switch>
      </NewLayout>
    </div>
  );
};

const FilterBreadcrumb = styled.div`
  background-color: #f7fafd !important;
  margin-top: 75px;

  ul {
    padding-left: 0px;
  }
`;

export const Progress = styled.span`
  ${({ width }) => css`
    display: block;
    position: absolute;
    height: 100%;
    width: ${width};
    background-color: #3fbf11;
  `}
`;

export default Projects;
