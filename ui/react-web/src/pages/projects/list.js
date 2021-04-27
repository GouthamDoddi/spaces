import Pagination from '@material-ui/lab/Pagination';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import BasicTable from '../../shared/table-material';
import makeStore from '../../store/make-store';
import { cleanedEntities, projectCategoryTypes } from '../../store/master-data';
import { Progress } from '../entities';
import { PaginationWrapper } from './compliance-projects/attributes';

const { store, load } = makeStore('rev-projects');
const { load: loadEntities } = makeStore('entities');

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

const ProjectList = () => {
  const history = useHistory();
  const [entities, setEntities] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    loadEntities('', (data) => {
      setEntities(data);
      load();
    });
  }, []);

  useEffect(() => {
    setPageNo(1);
  }, [search, filters]);

  let data = useStore(store).data || [];

  let complianceProjectCompleted = 0
  let complianceProjectInProgress = 0
  let complianceProjectNotStarted = 0
  let complianceIssues = 0
  let challenges = 0

    data.map(data => {
        if (data.progress === 100)
        complianceProjectCompleted += 1
        else if(!data.progress)
        complianceProjectNotStarted += 1
        else 
        complianceProjectInProgress += 1
    
        complianceIssues += data.issues_count
        ? data.issues_count
        : 0
    
        challenges += data.challenges_count
        ? data.challenges_count
        : 0
    })

  if (search || filters.length) {
    data = data.filter(({ project_name, owner_id, project_type_id }) => {
      const caseInsesitiveSearch = search.toLowerCase();
      const entityName = entities.find(({ id }) => id === owner_id)?.name;

      return (
        (project_name.toLowerCase().includes(caseInsesitiveSearch) ||
          entityName.toLowerCase().includes(caseInsesitiveSearch)) &&
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
    pageNo * pageSize - 1
  );

  console.log(dataPaginated)

  return (
    <>
      <div className="entity_cards">
        <ul className="entity_boardcard_wrap">
          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Compliance Project - Completed</span>

              <span className="count">{ complianceProjectCompleted }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Compliance Project - In Progress</span>
              <span className="count">{ complianceProjectInProgress }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Compliance Project - Not Started</span>
              <span className="count">{ complianceProjectNotStarted }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total Compliance Issues</span>
              <span className="count">{ complianceIssues }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total Challenges Issues</span>
              <span className="count">{ challenges }</span>
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

                return false;
              }}
              keyField="id"
              onRowClick={(id) => history.push(`/projects/${id}`)}
            />
          </div>

          <PaginationWrapper>
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
