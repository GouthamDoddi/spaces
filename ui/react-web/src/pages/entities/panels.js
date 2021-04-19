import React from 'react';
import Profile from './profile';
import Details from './details';
import { Route, Switch, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const AngleRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10.801"
      height="20"
      viewBox="0 0 10.801 20"
    >
      <path
        fill="#cfcfcf"
        d="M128.316,9.451,119.065.226a.775.775,0,1,0-1.095,1.1L126.67,10l-8.7,8.676a.775.775,0,0,0,1.1,1.1l9.251-9.225a.775.775,0,0,0,0-1.1Z"
        transform="translate(-117.742 0)"
      />
    </svg>
  );
};

export default function () {
  const { entity_id } = useParams();

  return (
    <div>
      <div className="custom_container">
        <ul className="breadcrumb entity_detail_menu">
          <li>
            <NavLink to={`/entities/${entity_id}`} activeClassName="active">
              <span className="step_count">1</span>
              <span className="detail">
                <span className="title">Entity Profie</span>
                <span className="sub_title">Summary of entity</span>
              </span>
            </NavLink>
          </li>
          <li className="separator">
            <AngleRight />
          </li>
          <li>
            <NavLink to={`/entities/${entity_id}/details`} activeClassName="active">
              <span className="step_count">2</span>
              <span className="detail">
                <span className="title">Entity Details</span>
                <span className="sub_title">Detailed view of entity</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/entities/:entity_id" exact>
          <Profile />
        </Route>
        <Route path="/entities/:entity_id/details" exact>
          <Details profileData={{}} />
        </Route>
      </Switch>
    </div>
  );
}
