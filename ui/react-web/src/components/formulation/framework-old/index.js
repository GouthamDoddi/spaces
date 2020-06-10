import React, {useEffect} from 'react'

import styled from 'styled-components'

import {
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import Form, { TextArea, Container, Input } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { useStore } from 'effector-react'
import smallTable from '../../tables/small'
import { useTo } from '../util'
import { Add } from '../../tables/list'


import SubObjects from './subobjects'


const { store, changed, create, update, load } =  makeStore(({policy_id, id}) => `formulation/${policy_id}/objects`)


const objectStore =  makeStore(({policy_id, id}) => `formulation/${policy_id}/objects`)


function useLinkTo(path, exact=false) {
  return(useTo(`frameworks/${path}`, exact))
}

function Link({to, className, children}) {
  return (
    <NavLink to={useLinkTo(to, true)} className={className} activeClassName='selected'>
      {children}
    </NavLink>
  )
}

export default function(props) {
  const { policy_id } = useParams()

  console.log(useLinkTo('new'))


  useEffect(() => {
    load({policy_id})
  }, [])


  const objectsStore = useStore(store)

  const objects = objectsStore.data || []
  return(
    <>
      <div className='form-space no-background'>
        <Wrapper>
          <Breadcrumb> Objects </Breadcrumb>
          <Content>
            {
              objects.map(({id, name, description }, i) => (
                <ObjectCard to={id} key={i}>
                  <Title>
                    { name }
                  </Title>
                  <Description>
                    {description}
                  </Description>
              </ObjectCard>
              ))
            }

          </Content>
          <Add to={useLinkTo('new', true)} />
        </Wrapper>
      </div>
      <div className='widgets'>
        <Widgets>
          <Switch>
            <Route path={useLinkTo('new')}> <NewObject /> </Route>
            <Route path={useLinkTo(':object_id(\\d+)')}> <SubObjects /> </Route>
            <Route path=''> <Redirect to={useLinkTo('new', true)} /> </Route>
          </Switch>

        </Widgets>
      </div>
    </>

  )
}


function submitted(policy_id,  data) {
  const cb = (resp) => {
    load({policy_id})
    objectStore.addData(null)
  }
  data.policy_id = policy_id
  objectStore.create({policy_id, data, cb})
}

function NewObject() {

  const { policy_id } = useParams()

  const localStore = useStore(objectStore.store) 

  const { name, description } = localStore.data || {}

  return (
    <CustomForm onSubmit={(data) => submitted(policy_id, data)} store={localStore}>
      <div className='obj-title'> Create Object </div>
      <Input label='Name' name='name' required onChange={objectStore.changed} value={name || ''}/>
      <TextArea className='text-area' label='Description' name='description' onChange={objectStore.changed} value={description || ''}/>
      
      <label className='submit'>
        <input type='submit' />
        <div> Create </div>        
      </label>
    </CustomForm>
  )

}

const CustomForm = styled(Form)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  .obj-title { 
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #000;
  }

  .text-area {
    margin-top: 10px;
  }

  label.submit {
    cursor: pointer;
    margin-top: 10px;
    input[type='submit'] {
      display: none;
    }
    > div {
      width: 100%;
      text-align: center;
      background-color: ${p => p.theme.color};
      color: white;
      line-height: 38px;
    }
  }  
`
const Widgets = styled.div`
  background-color: #ffffff;
  height: 464px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
`


const Breadcrumb = styled.div`
  margin: 10px 0px 19px 4px;
  color: #000000;
  font-weight: bold;
  font-size: 15px;
`

const Content = styled.div`
  flex-grow: 1;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 207px);
  grid-auto-rows: 108px;
  grid-gap: 18px 10px;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 8px;
`

const Description = styled.div`
  font-size: 10px;
  line-height: 1.2;
  color: #98acbe;
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const ObjectCard = styled(Link)`
  position: relative;
  top: 0;
  left: 0;
  min-width: 207px;
  height: 108px;
  border-radius: 3px;
  border: solid 1px #f4f7fa;
  background-color: #f4f7fa;
  padding: 20px;
  &.selected {
    border: solid 1px ${p => p.theme.color};
  }
`