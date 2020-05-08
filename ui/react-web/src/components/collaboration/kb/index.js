import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  Redirect,
  // useRouteMatch
  useLocation
} from 'react-router-dom';

import Link from '../shared/clink'

import Faq from './faq'
import Sop from './sop'
import Templates from './templates'

function rTo(path) {
  return `/collaboration/kb/${path}`
}

function ElementWidget(props) {

  const loc = useLocation()
  let path = loc.pathname.split('/')
  path[3] = props.id
  const url = path.slice(0, 5).join('/')
  return(
    <Menu to={url} key={props.key}>
      <div className='title'> { props.name } </div>
      <div className='desc'>
        <span> Number Of People Attempted:  </span>
        <span className='value'> {props.attenmpted_ppl_count} </span>
      </div>
      <div className='desc'>
        <span> Due Date:  </span>
        <span className='value'> {props.due_date} </span>
      </div>
    </Menu>

  )
}

export default function Element({ elements, selectOptions, asset }) {
  // const [ hideWidget, setHideWidget ] = useState(false)
  // const { params } = useRouteMatch(rTo(':section')) || {}
  // const hide = (params && params.section === 'faq') ? 'hide' : ''
  const loc = useLocation()
  console.log(loc)

  return (
    <>
      <div className='form-space full-height'>
        <Switch>

          <Route path={rTo(':section/faq')}> <Faq /> </Route>
          <Route path={rTo(':section/sop')}>  <Sop /> </Route>
          <Route path={rTo(':section/templates')}>  <Templates /> </Route>
          <Route exact path={rTo(':section')}>
              <Redirect to={`${loc.pathname}/faq`} />
          </Route>
          <Route exact path=''> <SelectSectionMessage> Please Select a Section </SelectSectionMessage> </Route>
        </Switch>

      </div>
      <div className='widgets'>
        <Widget>
          <div className='title'> Surveys & Petitions </div>
          <div className='content-data'>
            { ListOfSections.map((item, i) => <ElementWidget {...item} key={i} />) }
          </div>
        </Widget>
        {/* <Widget>
          <div className='title'> Section </div>
          <Link to='' className='menu'>
            <div className='title'> Section 1 </div>
            <div className='desc'>
              The parametric data about the policy to identify, qualify, and manage across the lifecycle
            </div>
          </Link>
          <Link to='' className='menu'>
            <div className='title'> Section 1 </div>
            <div className='desc'>
              The parametric data about the policy to identify, qualify, and manage across the lifecycle
            </div>
          </Link>
          <Link to='' className='menu'>
            <div className='title'> Section 1 </div>
            <div className='desc'>
              The parametric data about the policy to identify, qualify, and manage across the lifecycle
            </div>
          </Link>
        </Widget> */}

      </div>
    </>
  )
}

const ListOfSections = [
  { id: 'section1', name: 'Section 1', desc: 'The parametric data about the policy to identify, qualify, and manage across the lifecycle '},
  { id: 'section2', name: 'Section 2', desc: 'The contextual information required for policy formulation'},
  { id: 'section3', name: 'Section 3', desc: 'The identified risks in policy making, propagation, and implementations'},
  // { id: 'section1', name: 'Section 4', desc: 'The parametric data about the policy to identify, qualify, and manage across the lifecycle'},
  // { id: 'section3', name: 'Section 5', desc: 'The areas and the impact the policy has in the intended domains'},
]


const SelectSectionMessage = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 150px;
  font-size: 32px;
`

const Menu = styled(Link)`
  text-decoration: none;
  display: block;
  min-height: 71px;
  border-radius: 3px;
  background-color: #f4f7fa;
  border: 1px solid #f4f7fa;
  padding-left: 14px;
  padding-top: 9px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 10px;
  }
  .title {
    margin: 0;
    color: #000000;
  }

  .desc {
    font-size: 10px;
    line-height: 1.2;
    color: #98acbe;
    margin-top: 4px;
  }
  &.selected {
    border: 1px solid ${p => p.theme.color}
  }
`

const Widget = styled.div`
  &.hide {
    display: none;
  }
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  width: 100%;
  height: 466px;
  display: flex;
  flex-flow: column;
  overflow: auto;
  > .title {
    margin-top: 22px;
    margin-left: 21px;
    font-size: 15px;
    font-weight: 800;
    color: #000000;
  }
  .content-data {
    height: 420px;
    overflow: auto;
    padding-left: 18px;
    padding-right: 18px;
    margin-top: 4px;
    padding-top: 12px;
  }
`