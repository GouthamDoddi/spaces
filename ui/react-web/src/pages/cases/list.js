import Pagination from '@material-ui/lab/Pagination';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import BasicTable from '../../shared/table-material';
import makeStore from '../../store/make-store';
import { cleanedEntities, projectCategoryTypes } from '../../store/master-data';
import { Progress } from '../entities';
import { PaginationWrapper } from '../projects/compliance-projects/attributes'

const { store, load } = makeStore('rev-projects');
const { load: loadEntities } = makeStore('entities');

const headlines = [
    { headline: 'Entity', key: 'entity' },
    { headline: 'Project', key: 'project' },
    { headline: 'Compliance Project', key: 'compliance_project' },
    { headline: 'Case Id', key: 'case_id'},
    { headline: 'Case Description', key: 'Case Description' },
    { headline: 'Category', key: 'category_ids' },
    { headline: 'SLA', key: 'id'},
    { headline: 'Priority', key: 'priority' },
    { headline: 'Status', key: 'status' }
];

const CasesList = () => {
  const history = useHistory();
  const [entities, setEntities] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const pageSize = 10;
  const [rowId, setRowId] = useState(null);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    loadEntities('', (data) => {
      setEntities(data);
      load();
    });
  }, []);

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

  const [tableProps, setTableProps] = useState({
    rows: [],
    renderCol: () => { },
  });

  return (
    <>
      <div className="entity_cards">
        <ul className="entity_boardcard_wrap">
          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Cases - Resolved</span>

              <span className="count">{ complianceProjectCompleted }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Case - Catogories</span>
              <span className="count">{ complianceProjectInProgress }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Cases - Pending</span>
              <span className="count">{ complianceProjectNotStarted }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total Cases</span>
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
                rows={tableProps.rows}
                renderCol={tableProps.renderCol}
                keyField="id"
                onRowClick={(rowId) => setRowId(rowId)}
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

export default CasesList;
