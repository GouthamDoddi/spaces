import React, { useState, useEffect } from 'react'

// import Select, {components} from 'react-select'

import styled from 'styled-components'

import cs from '../../../utils/colors'
import Attachment from '../../form/attachment'
import Uploader from '../../form/upload'
import Form, {TextArea, Select, toOpt, Submit, Input, CheckboxBig} from '../../form'
import { useParams } from 'react-router-dom'

import {useStore} from 'effector-react'

import makeStore from '../../../store/make-store'

import {userComplianceTypes, mandateLevelTypes, notTestableReasons} from '../../../store/master-data'

const { load, store } = makeStore(({project_id, attr_id}) => `compliance/project/${project_id}/attr/${attr_id}/parameters`)

const {create, update, addData, changed, selectChange, cbChanged,  ...other} = makeStore(({section_id, attr_id, id}) => (id ? 
    `compliance/section/${section_id}/attr/${attr_id}/parameters/${id}` : `compliance/section/${section_id}/attr/${attr_id}/parameters`))


function submitted(section_id, attr_id, id, parameter_id, project_id, data) {
  const cb = (resp) => {
    load({project_id, attr_id}, (resp) => {
      addData(resp.filter((o) => o.parameter_id == parameter_id)[0])
    })

  }
  data.parameter_id = parameter_id
  data.project_id = project_id

  id ? update({section_id, attr_id, id, data, cb}) : create({section_id, attr_id, data, cb})
}
       
export default function(props) {

  const { section_id, attr_id, project_id } = useParams()

  const pStore = useStore(store)
  const sStore = useStore(other.store)

  const rawData = pStore.data 

  const data = rawData || []
  useEffect(() => {
    load({project_id, attr_id})
    props.brd({ section_id, attr_id })
    addData(null)
  }, [attr_id])

  if(data[0] && sStore.data === null) {
    addData(data[0])
  }

  const { id, user_compliance_type, name, wiki_desc, description, not_testable_reason, not_testable, user_notes, mandate_level_id, parameter_id, status, approver_notes, approver_compliance_type, doc_group } = sStore.data || {}
  
  if( rawData && data.length == 0) {
    return <Container> <NoParams> No Parameters</NoParams></Container>
  } else {
    return(
      <Container>
        <Header>
          {
            data.map((o, i) => (
              <Item {...cs['gs']} 
                key={i}
                className={o.parameter_id === parameter_id ? 'selected': ''} 
                onClick={() => addData(o)}> 
                  {i + 1}  
              </Item>
            ))
          }
        </Header>
        <Title> { name }</Title>
        <Description dangerouslySetInnerHTML={{__html: wiki_desc}} />
        <Forms onSubmit={(data) => submitted(section_id, attr_id, id, parameter_id, project_id, data)} store={sStore}>
          <Left>
            {/* <Attachment label='Attachments' btn='Upload' /> */}
            { id ? <Uploader param_id={id}/> : null}
            
            {
              approver_notes ?  <div className='mandate'> <span> Approver Notes: </span> <span className='value'> {approver_notes} </span> </div> : null
            }

            {
              approver_compliance_type ? 
                <div className='mandate'>
                  <span> Complaince select by approver -  </span>
                  <span className='value'> {userComplianceTypes[approver_compliance_type]?.label} </span>
              </div> : null
            }

            <div className='exception'>
              <span> Exception Granted: </span>
              <span className='value'> None</span>
            </div>
          </Left>
          <Right>
            <div className='mandate'>
              <span> Mandate: </span>
              <span className='value'> {mandateLevelTypes[mandate_level_id]?.label} </span>
            </div>
            <div className='mandate'>
              <span> Document Group: </span>
              <span className='value'> {doc_group} </span>
            </div>

            <Select name='user_compliance_type' label='Result Type:' 
                options={toOpt(userComplianceTypes)}
                outerClass='sfield'
                onChange={status === 'closed' ? (() => {}) : selectChange('user_compliance_type')}
                value={userComplianceTypes[user_compliance_type] || ''} 
                maxMenuHeight={130}
            />
            {/* <CheckboxBig label='Not Testable' name='not_testable' checked={not_testable}  onChange={(val) => cbChanged({name: 'not_testable', val})} />  */}
            
            {/* {
              not_testable ? 
                <Select name='not_testable_reason' label='Reason (for not able to test)' 
                  options={toOpt(notTestableReasons)}
                  outerClass='sfield'
                  onChange={status === 'closed' ? (() => {}) : selectChange('not_testable_reason')}
                  value={notTestableReasons[not_testable_reason] || ''} 
                /> : <Select name='user_compliance_type' label='Compliance Type:' 
                options={toOpt(userComplianceTypes)}
                outerClass='sfield'
                onChange={status === 'closed' ? (() => {}) : selectChange('user_compliance_type')}
                value={userComplianceTypes[user_compliance_type] || ''} 
            />

            } */}



            
  
            <TextArea lab el='Notes' name='user_notes' onChange={changed} value={ user_notes || ''} className='field' disabled={ status === 'closed' } /> 
            { 
              status !== 'closed' ? 
                <Submit>
                  <input type='submit' />
                  <div> { id ? 'Update' : 'Add'} </div>
                </Submit> : null
            }

          </Right>
        </Forms>
      </Container>
  
    )
  }
}

const NoParams = styled.div`

`

const Title = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #000000;
  margin-top: 10px;
`

const Forms = styled(Form)`
  display: flex;
  margin-top: 23px;

`

const Left = styled.div`
  flex: 1;
  position: relative;
  left: 0;
  top: 0;
  .button {
    span { color: white; }
    background-color: ${p => p.theme.color};
  }
  .mandate {
    font-size: 14px;
    font-weight: 500;
    color: #687c9d;
    margin-top: 10px;
    margin-bottom: 10px;
    .value {
      font-weight: bold;
      color: #f44e76;
    }
  }
  .exception {
    font-size: 14px;
    font-weight: 500;
    color: #687c9d;
    .value {
      font-weight: 800;
      color: #42d7b6;  
    }
  }
`
const Right = styled.div`
  flex: 1;
  margin-left: 63px;
  .mandate {
    font-size: 14px;
    font-weight: 500;
    color: #687c9d;
    margin-bottom: 8px;
    .value {
      font-weight: bold;
      color: #f44e76;
    }
  }
  .compliance-sel {
    margin-bottom: 19px;
  }
  textarea {
    height: 72px;
  }
  button {
    float: right;
    width: 94px;
    height: 38px;
    border-radius: 2px;
    background-color: #f44e76;
    color: #fff;
    margin-top: 15px;
    margin-right: 10px;
  }
  .sfield {
    // label {display: none;}
    margin-bottom: 10px;
  }

  .field {
    margin-bottom: 10px;
  }

`



const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  // line-height: 1.36;
  color: #98acbe;
  margin-top: 2px;
`

const Container = styled.div`
  padding: 6px 24px;
`
const Header = styled.div`
  display: flex;
`

const Item = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: ${p => p.icon};
  color: ${p => p.color};
  &.selected {
    border-radius: 12px;
    box-shadow: 0 2px 4px 0 ${p => p.color};
  }
  margin-right: 10px;
`

// const selectOptions = [
//   { value: 'compiled', label: 'Compliance: Compiled', color: '#FF8B00' },
//   { value: 'review', label: 'Compliance: Review', color: '#FFC400' },
//   { value: 'pending', label: 'Compliance: Pending', color: '#36B37E' },
// ]
// const selectComps = {
//   IndicatorSeparator: () => null,
//   DropdownIndicator: (props) => (
//     <components.DropdownIndicator {...props} className='dropdown'>
//     </components.DropdownIndicator>
//   ) 
// }