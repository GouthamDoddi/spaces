import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { TextArea, Select, Actions, Container, Input, DeleteIcon } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { useStore } from 'effector-react'
import { Table, Header, Row, Add } from '../../tables/small'

import Modal from './modal'

import { Switch, Route, Redirect } from 'react-router-dom'

import { mandateLevelTypes, HMLTypes, docGroupTypes, testDataMethodTypes, qualityGateTypes } from '../../../store/master-data'
import Breadcrumb from './breadcrumb'
import { useTo } from '../util'
import ToolsForm from './tools-form'

import Tools from './tools'

const { store, load  } =  makeStore(({attr_id, id}) => `formulation/attributes/${attr_id}/params`)

const {changed, selectChange, addData, remove, ...localState} = makeStore(({attr_id, id}) => id ? `formulation/attributes/${attr_id}/params/${id}` : `formulation/attributes/${attr_id}/params`)

function toOpt(hash) {
  return(Object.values(hash))
}

function submitted(attr_id, id, data) {
  const cb = (resp) => {
    load({attr_id})
  }
  id ? localState.update({attr_id, id, data, cb}) : localState.create({attr_id, data, cb})
}

function useLinkTo(path, exact=false) {
  const { policy_id, attr_id, id } = useParams()

  const eid = exact ? attr_id : ':attr_id(\\d+)'
  const sid = exact ? id : ':id(\\d+)'
  return useTo(`checklist/${sid}/params/${eid}`, exact) + `/${path}`
}

const columns = '0.3fr 1fr 2fr 0.7fr 0.5fr'
export default function(props) {

  const { attr_id } = useParams()

  const [sectionId, setSectionId] = useState(null)
  
  useEffect(() => {
    load({attr_id})
  }, [])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  let {id, mandate_level_id, description, name, weightage, doc_group, test_method} = localStore.data || {}

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }

  return (
    <>
    <div className='form-space no-background'>
      <Breadcrumb />
      <CustomContainer onSubmit={(data) => submitted(attr_id, id , data)} store={localStore}>      
        <div className='fields'>
          <Input label='Name' name='name' type='text' onChange={changed} value={ name || ''} required className='field' />
          <Select name='doc_group' label='Document Group' 
              options={toOpt(docGroupTypes)}
              outerClass='field'
              onChange={selectChange('doc_group')}
              value={docGroupTypes[doc_group?.toLowerCase()] || ''} 
          />
          <Select name='mandate_level_id' label='Mandate Level' 
              options={toOpt(mandateLevelTypes)}
              outerClass='field'
              onChange={selectChange('mandate_level_id')}
              value={mandateLevelTypes[mandate_level_id] || ''} 
          />

          <Select name='test_method' label='Test Method' 
              options={toOpt(testDataMethodTypes)}
              outerClass='field'
              onChange={selectChange('test_method')}
              value={testDataMethodTypes[test_method] || ''} 
          />
          {/* <Select name='quality_gates' label='Mandate Level' 
              options={toOpt(qualityGateTypes)}
              outerClass='field'
              onChange={selectChange('mandate_level_id')}
              value={mandateLevelTypes[mandate_level_id] || ''} 
          /> */}
          {/* <Select name='weightage' label='Weightage' 
              options={toOpt(HMLTypes)}
              outerClass='field'
              onChange={selectChange('weightage')}
              value={HMLTypes[weightage] || ''} 
          /> */}
          <TextArea label='Description' name='Short description' type='text' onChange={changed} value={ description || ''} className='field' />
          <label className='submit'>
            <input type='submit' />
            <div> { sectionId ? 'Update' : 'Add'} </div>
          </label>

        </div>
        <Content>
          <Table className='table'>
            <Header columns={columns}>
              <div>ID</div>
              <div>Name</div>
              <div>Docment Group</div>
              <div>Mandate Lavel</div>
              <div>Actions</div>
            </Header>   

            <RowContainer>
              {
                listData.map((o, i) => (
                  <Row onClick={() => setSectionId(o.id)} className={ o.id === id ? 'selected row' : 'row'} key={i} columns={columns}> 
                    <div> {o.id} </div>
                    
                    <div> {o.name} </div>
                    <div> {docGroupTypes[o.doc_group?.toLowerCase()]?.label} </div>
                    <div className='center'> {mandateLevelTypes[o.mandate_level_id]?.label} </div>
                    <div className='center' onClick={() => remove({id: o.id, attr_id, cb: () => {load({attr_id}); setSectionId(null)}})}> <DeleteIcon /> </div>
                  </Row>
                ))
                
              }
            </RowContainer>
          </Table>
          <Add className='add-btn' onClick={() => setSectionId(null)} />
        </Content>

      </CustomContainer>
    </div>
    <div className='widgets'>
        <Tools parameterId={sectionId}/>
          
        <Switch>
          <Route path={useLinkTo('faq')}> <Popup item={'faq'} /></Route>
          <Route path={useLinkTo('eg')}> 
            <Popup item='eg' />
          </Route>
          <Route path={useLinkTo('opn')}>
            <Popup item='opn' />
          </Route>
          <Route path={useLinkTo('sops')}> 
            <Popup item='sops' />
          </Route>
          <Route path={useLinkTo('steps')}>
            { sectionId ? <Popup item='steps' parameterId={sectionId} /> :  <Redirect to={useLinkTo('', true)} /> }
          </Route>
        </Switch>

          
    </div>
    </>
  )
}

const Popup = function(props) {
  return(
    <Modal closePath={useLinkTo('', true)} closeTop='15px'> 
      <ToolsForm {...props} /> 
    </Modal> 
  )
}


// const ContentForm = styled.div`
//   background-color: #fff;
//   height: 418px;
// `
const RowContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
  min-height: 0;
`

const TabContent = styled.div`
  // background-color: #f4f4f4;
  // padding: 5px 10px 0 10px;
`

const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .table {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .row {
      cursor: pointer;
      &.selected {
        border: 1px solid ${p => p.theme.color};
      }
    }
  }
  .add-btn {
    right: 35px;
  }
`
const CustomContainer = styled(Form)`
  
  position: relative;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-height: 435px;
  
  .fields {
    margin: 20px;
    margin-left: 76px;
    display: grid;
    grid-auto-rows: 78px;
    grid-template-columns: repeat(auto-fit, 265px);
    grid-column-gap: 90px;

    label.submit {
      cursor: pointer;
      align-self: flex-end;
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
  }

  .sub-parent {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-grow: 1;
  }
  .scrollable-content {
    background: white;
    flex-grow: 1;
    
    overflow: auto;
    
    /* for Firefox */
    min-height: 0;
  } 
`

const riskTypes = {
  1: { value: 1, label: 'Risk 1' },
  2: { value: 2, label: 'Risk 2' },
  3: { value: 3, label: 'Risk 3' },
  4: { value: 3, label: 'Risk 4' },
}


const impactTypes = {
  low: { value: 'low', label: 'Low' },
  medium: { value: 'medium', label: 'Medium' },
  high: { value: 'high', label: 'High' },
}

const probabilityTypes = {
  'high-neg': { value: 'high-neg', label: 'High Negative' },
  'low-neg': { value: 'low-neg', label: 'Low Negative' },
  'low-pos': { value: 'low-pos', label: 'Low Positive' },
  'high-pos': { value: 'high-pos', label: 'High Positive' },
}

const headerData = [
  ['ID', 'id'],
  ['Risk', 'risk_id'],
  ['Trigger Type', 'trigger_type_id'],
  ['Last Updated By', 'updated_user']
]