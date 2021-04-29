import Pagination from '@material-ui/lab/Pagination';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BasicTable from '../../shared/table-material';
import makeStore from '../../store/make-store';
import { caseCategoryTypes, casePriorityTypes, projectCategoryTypes } from '../../store/master-data';
import { PaginationWrapper } from '../projects/compliance-projects/attributes'

const { store, load } = makeStore('rev-projects/cases');

const headlines = [
    { headline: 'Name', key: 'name' },
    { headline: 'Entity', key: 'entity_name' },
    { headline: 'Project', key: 'project_name' },
    { headline: 'Compliance Project', key: 'compliance_project_id' },
    { headline: 'Case ID', key: 'id'},
    { headline: 'Case Description', key: 'description' },
    { headline: 'Category', key: 'category_ids' },
    { headline: 'SLA', key: 'id'},
    { headline: 'Priority', key: 'priority' },
    { headline: 'Status', key: 'status' }
];

const CasesList = () => {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    load();
  }, []);

  let data = useStore(store).data || [];

  let complianceProjectCompleted = 0
  let complianceProjectInProgress = 0
  let complianceProjectNotStarted = 0
  let complianceIssues = 0
  let challenges = 0

    data.map(data => {
        if (data.status === 'approved')
        complianceProjectCompleted += 1
        else if(data.status === 'created')
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
    data = data.filter(({ name, entity_name, category_ids }) => {
      const caseInsesitiveSearch = search.toLowerCase();

      return (
        (name?.toLowerCase().includes(caseInsesitiveSearch) ||
          entity_name?.toLowerCase().includes(caseInsesitiveSearch)) &&
        // apply filters only if any
        (filters.length
          ? category_ids.some((id) => filters.includes(id))
          : true)
      );
    });
  }

  const handleFiltersChange = ({ target: { value } }) => {
    if (filters.includes(parseInt(value))) {
      setFilters((prevVal) => prevVal.filter((val) => val !== parseInt(value)));
    } else {
      setFilters((prevVal) => prevVal.concat([parseInt(value)]));
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
              <span className="title">Cases - Resolved</span>

              <span className="count">{ complianceProjectCompleted }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Case - In Progress</span>
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
              <span className="count">{data.length}</span>
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
                  placeholder="Search cases by Owner"
                  value={search}
                  onChange={({ target: { value } }) => setSearch(value)}
                />
              </div>
            </div>

            <div className="action_col">
              <div className="flex_row">
                <div className="flex_col_sm_3" />
                <div className="flex_col_sm_9">
                  <ul className="filter_check">
                    <li>Show only </li>

                    {Object.values(caseCategoryTypes).map(({ label, value }) => (
                      <li key={value}>
                        <div className="checkbox_wrap agree_check">
                          <input
                            className="filter-type filled-in"
                            type="checkbox"
                            name="filter"
                            id={value}
                            value={value}
                            onChange={handleFiltersChange}
                          />
                          <label htmlFor={value}>{label}</label>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="flex_col_sm_4 text-right"> */}
                  {/* <NavLink to="/projects/new">
                    <button className="btn_solid">+ Create Project </button>
                  </NavLink> */}
                {/* </div> */}
              </div>
            </div>
          </div>

          <div className="table_wrapper">
              <BasicTable
                tableCells={headlines}
                rows={dataPaginated}
                renderCol={(colIndex, col) => {
                  if (colIndex === 6) {
                    return col ? col.map((key) => <CatergoryBadge key={key}>{caseCategoryTypes[key]?.label}</CatergoryBadge>) : '';
                  }

                  if (colIndex === 7 || colIndex === 3) {
                    return ' ';
                  }

                  if (colIndex === 8) {
                    return <Priority active={col}>{casePriorityTypes[col]?.badge}</Priority>;
                  }

                  if (colIndex === 9) {
                    return <Badge status={col}>{col}</Badge>;
                  }

                  return false;
                }}
                keyField="id"
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

const Priority = styled.span`
  background-color: ${props => props.active === 1 ? '#FFF1F1' : props.active === 2 ? '#EAF4FF' : '#FFF5DF'};
  color: ${props => props.active === 1 ? '#FF6060' : props.active === 2 ? '#005CC8' : '#FFB300'};
  border: ${props => props.active === 1 ? '1px solid #FF6060' : props.active === 2 ? '1px solid #005CC8' : '1px solid #FFB300'};
  font-size: 12px;
  padding: 3px;
  border-radius: 3px;
`;

const CatergoryBadge = styled.span`
    padding: 5px 10px;
    background:#F5F5F5;
    color:#1A6B8F;
    border-radius:15px;
    margin: 0px 4px 4px 0px;
`;

const Badge = styled.span`
  padding:5px 10px;
  background:${({ status }) => status === 'review' ? '#EB622B' :
    status === 'approve' ? '#3FBF11' :
      status === 'rejected' ? '#FF6060' :
        status === 'draft' ? '#FFBF00' :
          status === 'on-hold' ? '#999999' :
            status === 'submitted' ? '#0064FE' : '#EB622B'};         
    color: #fff;
    border-radius: 15px;
    text-transform: capitalize;
`;

export default CasesList;
