import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useStore } from 'effector-react';
import Pagination from '@material-ui/lab/Pagination';
import BasicTable from '../../shared/table-material';
import { entityTypes } from '../../store/master-data';
import makeStore from '../../store/make-store';
import { Progress } from '.';
import { entityEnter } from '../routes';
import { PaginationWrapper } from '../projects/compliance-projects/attributes';
import { BsClipboardData } from 'react-icons/bs';

const { store, load } = makeStore('entities');

const headlines = [
  { headline: 'Name', key: 'name' },
  { headline: 'Shortname', key: 'short_name' },
  { headline: 'Type', key: 'type_id' },
  { headline: 'Websites', key: 'portal_count' },
  { headline: 'Mobile', key: 'mobile_count' },
  { headline: 'E-Services', key: 'eservices_count' },
  { headline: 'Completion Percentage', key: 'progress' },
];

const EntityList = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    setPageNo(1);
  }, [search, filters]);

  let data = useStore(store).data || [];

  let totalEntities = data.length;
  let totalProjects = 0;
  let totalPortals = 0;
  let totalMobileApps = 0;
  let totalEservices = 0;
  let totalCompletetionPercentage = 0;


    data.map(data => {
        console.log(data)
        totalPortals += data.portal_count
        ? data.portal_count
        : 0

        totalMobileApps += data.eservices_count
        ? data.eservices_count
        : 0

        totalEservices += data.eservices_count
        ? data.eservices_count
        : 0

        totalCompletetionPercentage += data.progress
    })
  

  if (search || filters.length) {
    data = data.filter(({ name, short_name, type_id }) => {
      const caseInsesitiveSearch = search.toLowerCase();

      return (
        (name.toLowerCase().includes(caseInsesitiveSearch) ||
          short_name.toLowerCase().includes(caseInsesitiveSearch)) &&
          // apply filters only if any
          (filters.length ? filters.includes(entityTypes[type_id]?.label?.toLowerCase()) : true)
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

  const dataPaginated = data.slice((pageNo - 1) * pageSize, pageNo * pageSize - 1);

  return (
    <>
      <div className="entity_cards">
        <ul className="entity_boardcard_wrap">
          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total Entities</span>
              <span className="count">{ totalEntities }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total Projects</span>
              <span className="count">{ totalProjects }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total Portals/Websites</span>
              <span className="count">{ totalPortals }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total Mobile Apps</span>
              <span className="count">{ totalMobileApps }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total eServices</span>
              <span className="count">{ totalEservices }</span>
            </a>
          </li>

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">Total Completion Percentage</span>
              <div>
                <span className="count green">{ totalCompletetionPercentage/ totalProjects }</span>
                <span className="progressbar_wrap">
                  <Progress className="progress" width={ totalCompletetionPercentage/ totalProjects }/>
                </span>
              </div>
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
                  placeholder="Search entities by Name/Short Name"
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
                          value="ministry"
                          onChange={handleFiltersChange}
                        />
                        <label htmlFor="ministry">Ministry </label>
                      </div>
                    </li>

                    <li>
                      <div className="checkbox_wrap agree_check">
                        <input
                          className="filter-type filled-in"
                          type="checkbox"
                          name="filter"
                          id="authority"
                          value="authority"
                          onChange={handleFiltersChange}
                        />
                        <label htmlFor="authority">Authority </label>
                      </div>
                    </li>

                    <li>
                      <div className="checkbox_wrap agree_check">
                        <input
                          className="filter-type filled-in"
                          type="checkbox"
                          name="filter"
                          id="agency"
                          value="agency"
                          onChange={handleFiltersChange}
                        />
                        <label htmlFor="agency">Agency </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex_col_sm_4 text-right">
                  <NavLink to="/entities/new">
                    <button className="btn_solid">+ Create Entity </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="table_wrapper">
            <BasicTable
              tableCells={headlines}
              rows={dataPaginated}
              renderCol={(colIndex, col) => {
                if (colIndex === 2) {
                  return entityTypes[col]?.label;
                }

                if (colIndex === 6 && col) {
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
              onRowClick={(id) =>
                history.push(entityEnter({ entity_id: id, expand: true }))
              }
            />
          </div>
          <PaginationWrapper>
            <Pagination page={pageNo} count={Math.ceil(data.length / pageSize)} onChange={(_, pageNo) => setPageNo(pageNo)} size="small" />
          </PaginationWrapper>
        </div>
      </div>
    </>
  );
};

export default EntityList;
