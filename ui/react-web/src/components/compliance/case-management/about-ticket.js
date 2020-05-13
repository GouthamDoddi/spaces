import React from 'react'

import styled from 'styled-components'

import Select, {components} from 'react-select'

import Modal from './modal'
import Tabs from '../shared/tabs'

import Past from './past'
import CreateTask from './create-task'
import Cc from './cc'
import ConvList from './conv-list'


import { 
  useParams,
  Switch,
  Route,
  Redirect,
  useLocation,
  Link,
  matchPath
 } from 'react-router-dom'

import ticketData from '../../../store/temp-data-tickets'


function rTo(asset, path) {
  return `/compliance/${asset}/:ticket/open/${path}`
}

export default function(props) {
  const { ticket } = useParams()
  const data = ticketData[ticket]

  const loc = useLocation()
  const closePath = loc.pathname.split('/open')[0]

  const { params } = matchPath(loc.pathname, {path: '/:space/:asset/:ticket/'}) || {}
  const { asset } = params || { asset: 'case-management'}

  const { title, type, sla, beneficiary_name, description, status, tags } = data
  return (
    <Modal>
      <Header> {title} </Header>
      <Content>
        <Info>
          <div> 
            <span className='type'> Type: </span>
            <span> {type} </span>
          </div>
          <div className='status'> 
            <span> status: </span>
            <span> {status} </span>
          </div>
          <div className='sla'> 
            <span> SLA: </span>
            <span> {sla} </span>
          </div>
        </Info>
        <Info>
          <div className='ben'> 
            <span> Beneficiary Name: </span>
            <span> {beneficiary_name} </span>
          </div>
          <div className='ref'> 
            <span> Referance: </span>
            <span> Section > Attribute > Parameters </span>
          </div>
        </Info>
        <Info>
          <div className='desc'> 
            <span> Description: </span>
            <span> {description} </span>
          </div>
        </Info>

        <Form> 
          <div className='label'> Category </div>
          <div className='input'>
            <input type='text' />
            <button> Add </button>
          </div>
          <div className='tags'>
            {
              tags.map((tag, i) => <div className='tag' key={i}> #{tag} </div>)
            }
          </div>
          <Select options={priorityOptions}
            defaultValue={priorityOptions[0]}
            components={selectComps}
            className='priority-box' />
        </Form>

        <Grounds>
          <label> Grounds / Links </label>
          <div className='boxes'>
            <Select options={priorityOptions}
              placeholder='Section'
              className='select'
              components={selectComps}
            />
            <Select options={priorityOptions}
              placeholder='Attribute'
              className='select'
              components={selectComps}
            />
            <Select options={priorityOptions}
              placeholder='Parameter'
              className='select'
              components={selectComps}
            />
            <input type='text' placeholder='Grounds'/>
            <input type='text' placeholder='Link' />    
          </div>
        </Grounds>
        
        <Container>
          <Tabs data={[['Past Tickets', 'open/past'], 
            ['Create / View Tasks', 'open/create'], ['Closure Comments', 'open/cc'], 
            ['Conversation', 'open/conv']]} />

          <TabContent>
            <Switch>
              <Route path={rTo(asset, 'past')}> <Past /> </Route>
              <Route path={rTo(asset, 'create')}> <CreateTask /> </Route>
              <Route path={rTo(asset, 'cc')}> <Cc /> </Route>
              <Route path={rTo(asset, 'conv')}> <ConvList /> </Route>
              <Route exact path={rTo(asset, '')}> <Redirect to='open/past' /> </Route>
            </Switch>
          </TabContent>
          
          <Actions>
            <Link to={closePath}> 
              <button> Close </button>
            </Link>
            <button className='save'> Save </button>
            <button> Hold </button>
          </Actions>
        </Container>

      </Content>
    </Modal>
  )
}

const Container = styled.div`
  margin-top: 20px;
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  button {
    width: 160px;
    height: 38px;
    border-radius: 2px;
    border: solid 1px ${p => p.theme.color};
    color: ${p => p.theme.color};
    margin-right: 20px;
    &.save { 
      background-color: ${p => p.theme.color};
      color: #fff;
    }
  }
` 

const TabContent = styled.div`
  background-color: #f4f4f4;
  padding: 5px 10px 0 10px;
`

const Grounds = styled.div`
  margin-top: 20px;
  label {
    font-size: 14px;
    font-weight: 500;
    color: #687c9d;
  }
  .boxes {
    margin-top: 8px;
    display: flex;
    > * {
      flex: 1;
      margin-right: 5px;
      &:last-child {
        width: 91px;
      }
      
    }
    input {
      max-width: 110px;
      padding-left: 10px; 
    }
  }
`

const Content = styled.div`
  padding: 20px 38px 20px 38px;
  position: relative;
  top: 0;
  left: 0;
`
const Info = styled.div`
  display: flex;
  padding-right: 40px;
  justify-content: space-between;
  margin-top: 35px;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  > div {
    span:first-child{ color: #687c9d; }
    &.status {
      margin-left: 30px;
      span:last-child {
        color: ${p => p.theme.color}
      }
    }
    &.ref { padding-right: 60px;}
    &.sla { span:last-child { color: #42d7b6 } }
  }
`

const Form = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 340px 250px;
  grid-template-rows: 40px 40px 40px;
  grid-gap: 12px;
  grid-template-areas: 
          "label priority"
          "input priority"
          "tags  priority";
  .label {
    grid-area: label;
    align-self: flex-end;
  }
  .priority-box {
    grid-area: priority;
    align-self: center;
    width: 135px;
    height: 38px;
    border-radius: 2px;
    border: solid 1px #dedede;
    background-color: #efefef;
    margin-top: -5px;
    justify-self: center;
    font-size: 14px;
  }
  .input {
    grid-area: input;
    display: flex;
    input {
      outline: none;
      width: 231px;
      height: 38px;
      border-radius: 2px;
      border: solid 1px #dedede;
      background-color: #efefef;
      margin-right: 12px;
    }
    button {
      width: 94px;
      height: 38px;
      border-radius: 2px;
      color: #fff;
      background-color: ${p => p.theme.color};
      border: 1px solid ${p => p.theme.color};
      outline: none;
    }
  }
  .tags {
    grid-area: tags;
    display: flex;
    flex-wrap: wrap;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 49px;
      height: 28px;
      border-radius: 5px;
      background-color: #d8d8d8;
      margin-right: 12px;
      font-size: 14px;
      font-weight: 500;
      color: #7e9ab3;
    }
  }
`

const Header = styled.div`
  display: flex;
  height: 92px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #e6f0f9;
  font-size: 15px;
  font-weight: 800;
  color: #000000;
  text-transform: uppercase;
`

const priorityOptions = [
  { value: 'p1', label: 'Priority P1', color: '#FF8B00' },
  { value: 'p2', label: 'Priority P2', color: '#FFC400' },
  { value: 'p3', label: 'Priority P3', color: '#36B37E' },
]
const selectComps = {
  IndicatorSeparator: () => null,
  DropdownIndicator: (props) => (
    <components.DropdownIndicator {...props} className='dropdown'>
    </components.DropdownIndicator>
  ) 
}