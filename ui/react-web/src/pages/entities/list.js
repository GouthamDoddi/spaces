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

const EntityList = ({ selectedEntity }) => {
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
  }, [search, filters, selectedEntity]);

  let data = useStore(store).data || [];

  let totalEntities = data.length;
  let totalPortals = 0;
  let totalMobileApps = 0;
  let totalEservices = 0;
  let totalCompletetionPercentage = 0;


    data.map(data => {
        totalPortals += data.portal_count
        ? data.portal_count
        : 0

        totalMobileApps += data.mobile_count
        ? data.mobile_count
        : 0

        totalEservices += data.eservices_count
        ? data.eservices_count
        : 0

        totalCompletetionPercentage += (data.progress || 0)
    })
  
    let totalProjects = totalPortals + totalMobileApps + totalEservices;

  if (search || filters.length || selectedEntity) {
    data = data.filter(({ id, name, short_name, type_id }) => {
      const caseInsesitiveSearch = search.toLowerCase();

      return (
        (selectedEntity ? parseInt(selectedEntity) === id : true) &&
        (name.toLowerCase().includes(caseInsesitiveSearch) ||
          short_name.toLowerCase().includes(caseInsesitiveSearch)) &&
          // apply filters only if any
          (filters.length ? filters.includes(type_id) : true)
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

  const dataPaginated = data.slice((pageNo - 1) * pageSize, pageNo * pageSize);

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
                <span className="count green">{ isNaN(totalCompletetionPercentage/ totalProjects) ? totalCompletetionPercentage/ totalProjects : 0 }</span>
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

                    {Object.values(entityTypes).slice(0, 3).map(({ label, value }) => (
                      <li key={label}>
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
              onRowClick={(id) =>
                history.push(entityEnter({ entity_id: id, expand: true }))
              }
            />
          </div>
          <PaginationWrapper>
            <span className="table-info">Showing {dataPaginated.length < 10 ? dataPaginated.length : 10} out of {data.length}</span>
            <Pagination page={pageNo} count={Math.ceil(data.length / pageSize)} onChange={(_, pageNo) => setPageNo(pageNo)} size="small" />
          </PaginationWrapper>
        </div>
      </div>
    </>
  );
};

export default EntityList;
