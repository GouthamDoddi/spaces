import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import BasicTable from '../../shared/table-material';
import makeStore from '../../store/make-store';
import { caseQueueTypes, policyStatusTypes } from '../../store/master-data';

const { load, store } = makeStore(() => `case-grounds/`);

const GroundList = () => {
  const history = useHistory();
  const grounds = useStore(store).data || [];
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState(0);
  const [createdDate, setCreatedDate] = useState(null);
  const [proposedDate, setProposedDate] = useState(null);
  let stats = Object.keys(caseQueueTypes).reduce(
    (prevValue, key) => ({ ...prevValue, [key]: 0 }),
    {}
  );
  let casesOnHold = 0;

  useEffect(() => {
    load('');
  }, []);

  const filteredGrounds = grounds.filter(
    ({ name, category_ids, status: s, start_date, created_at }) => {
      category_ids = category_ids || [];
      category_ids.map((key) => {
        stats[key] += stats[key] || 0;
      });

      if (status === 3) {
        casesOnHold += 1;
      }

      return (
        name.includes(search) &&
        (status ? status === s : true) &&
        (start_date && proposedDate
          ? new Date(start_date).setHours(0, 0, 0, 0) ===
            new Date(proposedDate).setHours(0, 0, 0, 0)
          : true) &&
        (createdDate && created_at
          ? new Date(createdDate).setHours(0, 0, 0, 0) ===
            new Date(created_at).setHours(0, 0, 0, 0)
          : true)
      );
    }
  );

  return (
    <>
      <div className="entity_cards">
        <ul className="entity_boardcard_wrap">
          {Object.values(caseQueueTypes).map(({ value, label }) => (
            <li className="entity_boardcard">
              <a className="inner_wrap">
                <span className="title">{label}</span>
                <span className="count">{stats[value]}</span>
              </a>
            </li>
          ))}

          <li className="entity_boardcard">
            <a className="inner_wrap">
              <span className="title">On Hold Cases</span>
              <span className="count">{casesOnHold}</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="custom_container ">
        <div className="custom_row">
          <div className="flex_row padding-t-b table-header">
            <LeftActions>
              <div className="input_col">
                <div className="text_field_wrapper">
                  <select
                    value={status}
                    onChange={({ target: { value } }) => setStatus(value)}
                  >
                    <option value="">Select Status</option>
                    {Object.values(policyStatusTypes).map(
                      ({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div className="input_col">
                <div className="text_field_wrapper">
                  <input
                    type="text"
                    className="srch_input"
                    placeholder="Search grounds"
                    value={search}
                    onChange={({ target: { value } }) => setSearch(value)}
                  />
                </div>
              </div>
            </LeftActions>

            <div className="action_col">
              <div className="flex_row">
                <RightActions className="flex_col_sm_8">
                  <span>Filter By</span>
                  <div className="text_field_wrapper">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd-MM-yyyy"
                        id="date-picker-inline"
                        placeholder="Created Date"
                        value={createdDate}
                        onChange={setCreatedDate}
                        autoOk={true}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                  <div className="text_field_wrapper">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd-MM-yyyy"
                        id="date-picker-inline"
                        placeholder="Proposed Date"
                        value={proposedDate}
                        onChange={setProposedDate}
                        autoOk={true}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </RightActions>
                <div className="flex_col_sm_4 text-right">
                  <NavLink to="/policies/new/profile">
                    <button className="btn_solid">{` + Create Ground `}</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <BasicTable
            keyField="id"
            tableCells={[
              {
                headline: 'Status',
                key: 'status',
              },
              {
                headline: 'Grounds ID',
                key: 'id',
              },
              {
                headline: 'Title',
                key: 'name',
              },
              {
                headline: 'Cases',
                key: 'cases',
              },
              {
                headline: 'Category',
                key: 'category',
              },
              {
                headline: 'Created By',
                key: 'created_at',
              },
              {
                headline: 'Created On',
                key: 'updated_at',
              },
              {
                headline: 'Proposed Date',
                key: 'created_at',
              },
            ]}
            rows={filteredGrounds}
            renderCol={(colIndex, col) => {
              if (colIndex === 5 || colIndex === 6 || colIndex === 7) {
                return col ? new Date(col).toLocaleDateString() : null;
              }

              return false;
            }}
            onRowClick={(id) => {
              history.push(`/policies/${id}/profile`);
            }}
          />
        </div>
      </div>
    </>
  );
};

const LeftActions = styled.div`
  display: flex;

  .input_col {
    max-width: 200px;
    margin-right: 20px;
  }
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;

  > * {
    &:first-child {
      margin-left: 32px;
    }

    margin-right: 16px;
  }
`;

export default GroundList;
