import Pagination from '@material-ui/lab/Pagination';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BasicTable from '../../shared/table-material';
import makeStore from '../../store/make-store';
import { projectCategoryTypes } from '../../store/master-data';
import { Progress } from '../entities';
import { PaginationWrapper } from './compliance-projects/attributes';

const { store, load } = makeStore('rev-projects');
const { load: loadEntities } = makeStore('entities');
const { store: reportStore, load: loadReport } = makeStore(({ entity_id }) => `${entity_id ? `${entity_id}/` : ''}rev-projects/report`);

const headlines = [
  { headline: 'Master Project Name', key: 'project_name' },
  { headline: 'Category', key: 'project_type_id' },
  { headline: 'Owner', key: 'owner_id' },
  { headline: 'Sponsor', key: '' },
  { headline: 'Start Date', key: 'start_date' },
  { headline: 'End Date', key: 'end_date' },
  { headline: 'Progress', key: 'progress' },
  { headline: 'Compliance Records', key: 'compliance_records_count' },
  { headline: 'Issues', key: 'issues_count' },
  { headline: 'Challenges', key: 'challenges_count' },
];

const ProjectList = ({ selectedEntity, selectedProject }) => {
  const history = useHistory();
  const [entities, setEntities] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const pageSize = 10;
  const { challenges_count, compliance_projects_completed, compliance_projects_in_progress, issues_count, total_projects } = useStore(reportStore).data || {};

  useEffect(() => {
    loadReport({});
    loadEntities('', (data) => {
      setEntities(data);
      load();
    });
  }, []);

  useEffect(() => {
    setPageNo(1);
  }, [search, filters, selectedEntity, selectedProject]);

  let data = useStore(store).data || [];

  if (search || filters.length || selectedEntity || selectedProject) {
    data = data.filter(({ id, project_name, owner_id, project_type_id }) => {

      const caseInsesitiveSearch = search.toLowerCase();
      const entityName = entities.find(({ id }) => id === owner_id)?.name;

      return (
        (selectedProject ? parseInt(id) === parseInt(selectedProject) : true) &&
        (project_name.toLowerCase().includes(caseInsesitiveSearch) ||
          entityName.toLowerCase().includes(caseInsesitiveSearch)) &&
        (selectedEntity
          ? parseInt(selectedEntity) === parseInt(owner_id)
          : true) &&
        // apply filters only if any
        (filters.length
          ? filters.includes(
              projectCategoryTypes[project_type_id]?.label?.toLowerCase()
            )
          : true)
      );
    });
  }

  const handleFiltersChange = ({ target: { value } }) => {
    if (filters.includes(value)) {
      setFilters((prevVal) => prevVal.filter((val) => val !== value));
    } else {
      setFilters((prevVal) => prevVal.concat([value]));
    }
  };

  const dataPaginated = data.slice(
    (pageNo - 1) * pageSize,
    pageNo * pageSize
  );

  return (
    <>
      <div className="entity_cards">
        <ul className="entity_boardcard_wrap">
          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Compliance Project - Completed</span>


              <span className="count">{`${compliance_projects_completed || 0}`}</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Compliance Project - In Progress</span>

              <span className="count">{`${compliance_projects_in_progress || 0}`}</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total Projects</span>

              <span className="count">{`${data.length || 0}`}</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total Compliance Issues</span>

              <span className="count">{`${issues_count || 0}`}</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total Challenges Issues</span>

              <span className="count">{`${challenges_count || 0}`}</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="custom_container ">
        <div className="custom_row">
          <div className="flex_row padding-t-b table-header">
            <div className="input_col">
              <div className="text_field_wrapper">
                <input
                  type="text"
                  className="srch_input"
                  placeholder="Search projects by Name/Owner"
                  value={search}
                  onChange={({ target: { value } }) => setSearch(value)}
                />
              </div>
            </div>

            <div className="action_col">
              <div className="flex_row">
                <div className="flex_col_sm_8">
                  <ul className="filter_check">
                    <li>Show only </li>

                    <li>
                      <div className="checkbox_wrap agree_check">
                        <input
                          className="filter-type filled-in"
                          type="checkbox"
                          name="filter"
                          id="ministry"
                          value="website / portals"
                          onChange={handleFiltersChange}
                        />
                        <label htmlFor="ministry">Website/Portals </label>
                      </div>
                    </li>

                    <li>
                      <div className="checkbox_wrap agree_check">
                        <input
                          className="filter-type filled-in"
                          type="checkbox"
                          name="filter"
                          id="Authority"
                          value="mobile app"
                          onChange={handleFiltersChange}
                        />
                        <label htmlFor="Authority">Mobile </label>
                      </div>
                    </li>

                    <li>
                      <div className="checkbox_wrap agree_check">
                        <input
                          className="filter-type filled-in"
                          type="checkbox"
                          name="filter"
                          id="Agency"
                          value="e-service"
                          onChange={handleFiltersChange}
                        />
                        <label htmlFor="Agency">E-Services </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex_col_sm_4 text-right">
                  {/* <NavLink to="/projects/new">
                    <button className="btn_solid">+ Create Project </button>
                  </NavLink> */}
                </div>
              </div>
            </div>
          </div>

          <div className="table_wrapper">
            <BasicTable
              tableCells={headlines}
              rows={dataPaginated}
              renderCol={(colIndex, col) => {
                if (colIndex === 1) {
                  return projectCategoryTypes[col]?.label;
                }

                if (colIndex === 2) {
                  return entities.find(({ id }) => id === col)?.name;
                }

                if (colIndex === 6) {
                  return (
                    <>
                      <span className="count green bg_green">{`${
                        col || '0'
                      }%`}</span>
                      <span className="progressbar_wrap">
                        <Progress
                          className="progress"
                          width={`${col || '0'}%`}
                        />
                      </span>
                    </>
                  );
                }

                if (colIndex === 7) {
                  return col || '0';
                }

                return false;
              }}
              keyField="id"
              onRowClick={(id) => history.push(`/projects/${id}`)}
            />
          </div>

          <PaginationWrapper>
            <span className="table-info">Showing {dataPaginated.length < 10 ? dataPaginated.length : 10} out of {data.length}</span>
            <Pagination
              page={pageNo}
              count={Math.ceil(data.length / pageSize)}
              onChange={(_, pageNo) => setPageNo(pageNo)}
              size="small"
            />
          </PaginationWrapper>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
