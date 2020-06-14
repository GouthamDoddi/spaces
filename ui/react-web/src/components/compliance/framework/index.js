import React, {useEffect} from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  useParams
} from 'react-router-dom';

import { useStore } from 'effector-react'

import makeStore from '../../../store/make-store'

import Link from '../shared/link'

import cs from '../../../utils/colors'

import Survey from './survey'

import { useTo } from '../util'


const {store, load} = makeStore(({project_id}) => `compliance/${project_id}/sections`)

function useToLink(path, exact=false) {
  return useTo(`framework/${path}`, exact)
}


function ElementWidget(props) {
  const color = props.type === 'survey' ? cs.gs.color : cs.fs.color
  return(
    <Menu to={useToLink(`sec/${props.id}`, true)} color={color}>
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

  const { project_id, section_id } = useParams()

  const sectionStore = useStore(store)

  const data = sectionStore.data || []

  console.log(project_id, section_id)

  useEffect(() => {
    load({project_id})
  }, [])

  return (
    <>
      <div className='form-space full-height'>
        <Switch>
          <Route path={useToLink('sec/:section_id(\\d+)')}> <Survey sections={data} loadS={load} /> </Route>
          <Route exact path=''> <SelectMsg> Select Survey (or) Petition </SelectMsg> </Route>
        </Switch>

      </div>
      <div className='widgets'>
        <Widget>
          <div className='title'> Surveys & Petitions </div>
          <div className='content-data'>
            { data.map((item, i) => <ElementWidget {...item} key={i} />) }
          </div>
        </Widget>
      </div>
    </>
  )
}


const ListOfThings = [
  { id: 1, name: 'Survey One', attenmpted_ppl_count: 234, due_date: '8 May 2020', type: 'survey'},
  { id: 2, name: 'Survey Two', attenmpted_ppl_count: 234, due_date: '8 May 2020', type: 'survey'},
  { id: 3, name: 'Survey Three', attenmpted_ppl_count: 234, due_date: '8 May 2020', type: 'survey'},
  { id: 4, name: 'Survey Four', attenmpted_ppl_count: 234, due_date: '8 May 2020', type: 'survey'},
  // { id: 5, name: 'Survey 4', attenmpted_ppl_count: 234, due_date: '8 May 2020', type: 'survey'},
]


const SelectMsg = styled.div`
  text-align: center;
  margin-top: 100px;
  font-weight: 800;
`

const Menu = styled(Link)`
  text-decoration: none;
  display: block;
  min-height: 84px;
  border-radius: 3px;
  background-color: #f4f7fa;
  border: 1px solid #f4f7fa;
  padding-left: 14px;
  padding-top: 9px;
  margin-bottom: 10px;

  .title {
    color: ${p => p.color };
    font-weight: 800;
    margin: 0;
  }

  .desc {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.2;
    color: #98acbe;
    margin-top: 4px;
    .value {
      font-weight: 800;
    }
  }
  &.selected {
    border: 1px solid ${p => p.theme.color}
  }
`
const Widget = styled.div`
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  width: 100%;
  height: 466px;
  display: flex;
  flex-flow: column;
  overflow: auto;
  > .title {
    margin-top: 19px;
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