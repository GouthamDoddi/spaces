import React, { useState, useEffect } from 'react'

// import Select, {components} from 'react-select'

import styled from 'styled-components'

import cs from '../../../utils/colors'
import Attachment from '../../form/attachment'
import Form, {TextArea, Select, toOpt, Submit} from '../../form'
import Uploader from '../../form/upload'
import { useParams } from 'react-router-dom'

import {useStore} from 'effector-react'

import makeStore from '../../../store/make-store'

import {userComplianceTypes, mandateLevelTypes} from '../../../store/master-data'

const {load, store} = makeStore(({project_id, attr_id}) => `compliance/project/${project_id}/attr/${attr_id}/parameters`)

const {create, update, addData, changed, selectChange, ...other} = makeStore(({section_id, attr_id, id}) => (id ? 
    `compliance/section/${section_id}/attr/${attr_id}/parameters/${id}/approver` : `compliance/section/${section_id}/attr/${attr_id}/parameters`))


function submitted(section_id, attr_id, id, parameter_id, project_id, data) {
  const cb = (resp) => {
    load({project_id, attr_id})
  }
  data.parameter_id = parameter_id
  data.project_id = project_id
  update({section_id, attr_id, id, data, cb})
}
       
export default function(props) {

  const { sp_id, section_id, attr_id } = useParams()
  console.log("spi_id", sp_id)
  const project_id = sp_id
  const pStore = useStore(store)
  const sStore = useStore(other.store)

  const rawData = pStore.data 

  const data = pStore.data || [] //rawData?.filter((o) => o.status != 'closed') || []

  const { id, user_compliance_type, name, status, description, user_notes, mandate_level_id, parameter_id, approver_notes, approver_compliance_type } = sStore.data || {}
  
  useEffect(() => {
    load({project_id, attr_id})
    // props.brd({ section_id, attr_id })
  }, [])

  if(data[0] && sStore.data === null) {
    addData(data[0])
  }

  
  
  if( rawData && data.length == 0) {
    return <Container> <NoParams> No Parameters</NoParams></Container>
  } else {
    return(
      <Container>
        <Header>
          {
            data.filter((o) => o.id).map((o, i) => (
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
        <Description> {description || 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit consectetur adipiscing elit, sed do Lorem ipsum dolor sit consectetur '}</Description>
        <Forms onSubmit={(data) => submitted(section_id, attr_id, id, parameter_id, project_id, data)} store={sStore}>
          <Left>
            {/* <Attachment label='Attachments' btn='Upload' /> */}
            {id ? <Uploader hide_upload param_id={id}/> : null}
            <TextArea label='User Notes' name='user_notes' onChange={changed} value={ user_notes || ''} className='field' disabled /> 
            <div className='exception'>
              <span> Exception Granted: </span>
              <span className='value'> None</span>
            </div>
          </Left>
          <Right>
            <div className='mandate'>
              <span> Mandate: </span>
              <span className='value'> {mandateLevelTypes[mandate_level_id]?.label} - </span>
              <span> {userComplianceTypes[user_compliance_type]?.label} </span>
            </div>
            
            <Select name='approver_compliance_type' label='' 
              options={toOpt(userComplianceTypes)}
              outerClass='sfield'
              onChange={selectChange('approver_compliance_type')}
              value={userComplianceTypes[approver_compliance_type] || ''} 
            />
            
            <TextArea label='Approver Notes' name='approver_notes' onChange={changed} value={ approver_notes || ''} className='field' /> 
            { status != 'closed' ? 
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
  margin-top: 23px;
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

  .field {
    margin-bottom: 10px;
    margin-top: 10px;
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
    margin-bottom: 10px;
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
    label {display: none;}
    margin-bottom: 10px;
  }

  .field {
    margin-bottom: 10px;
  }

`



const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.36;
  color: #98acbe;
  margin-top: 10px;
`

const Container = styled.div`
  padding: 12px 24px;
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