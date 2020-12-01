import React, { useState, useEffect } from 'react'

// import Select, {components} from 'react-select'

import styled from 'styled-components'

import cs from '../../../utils/colors'
import Attachment from '../../../components/form/attachment'
import Uploader from '../../../components/form/upload'
import Form, {TextArea, Select, toOpt, Submit, Input, CheckboxBig} from '../../../components/form'
import { useParams, Link, useRouteMatch } from 'react-router-dom'
import {complianceAttr} from '../../routes'
import {useStore} from 'effector-react'

import makeStore from '../../../store/make-store'

import {userComplianceTypes, mandateLevelTypes, notTestableReasons, paramVariations, qualityGateTypes, testDataMethodTypes} from '../../../store/master-data'
// import Opn from '../../../components/formulation/checklist/tools/opn'
import Opn from './opn'
import Mandate from './mandate'

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
       
export default function({data, ...props}) {

  const { section_id, attr_id, project_id, param_id: combo_id } = useParams()
  const [param_id, rp_id] = combo_id.split('-')

  const {url} = useRouteMatch()

  const sStore = useStore(other.store)

  const paginate = (d, c) => {
    let s = c - 5;
    let e = c + 5;

    if (s <= 0) {
        e -= (s - 1);
        s = 1;
    }

    if (e > d.length){
      e = d.length;
    }
    
    // return([s,e])
    return {d: (d.slice(s-1, e)), start: s-1}
  }

  const backPath = url.split('/')
  backPath.pop()

  useEffect(() => {
    addData(data.find((p) => {
      return rp_id ? rp_id == p.id && p.parameter_id == param_id : p.parameter_id == param_id
    }))
  }, [attr_id, combo_id, data])

  if(data[0] && sStore.data === null) {
    addData(data.find((p) => p.parameter_id == param_id))
  }

  const { id, user_compliance_type, name, wiki_desc, description, variation, user_notes, mandate_level_id, parameter_id, 
    status, approver_notes, approver_compliance_type, doc_group, test_data_method_id, quality_gate_id } = sStore.data || {}
  
  if( data.length == 0) {
    return <Container> <NoParams> No Parameters</NoParams></Container>
  } else {
    const current = data.findIndex((o) => (o.id ? o.id == rp_id && o.parameter_id === parameter_id : o.parameter_id === parameter_id) )
    // const prev = current > 0
    // const next = current < data.length - 1

    // console.log(current)
    // console.log(paginate(data, 2))
    const pData = paginate(data, current + 1)
    return(
      <Container>
        <Nav>
          {/* 
          <Prev disable={!prev}> Previous </Prev>
          <Next disable={!next}> Next </Next> */}
          <Back to={backPath.join('/')}> Back </Back>
          <Eclipse> { pData.start > 0 ? '.... ' : ''} </Eclipse>
          {
            pData.d.map((o, i) => (
              <Item {...cs['gs']} 
                key={i}
                className={(o.id ? o.id == rp_id && o.parameter_id === parameter_id : o.parameter_id === parameter_id) ? 'selected': ''} 
                to={() => {
                  let u = url.split('/')
                  u.pop()
                  return `${u.join('/')}/${(o.id ? [o.parameter_id, o.id] : [o.parameter_id]).join('-')}`}
                }> 
                  {i + pData.start + 1}  
              </Item>
            ))
          }

        </Nav>
        <Header>
        </Header>
        <SubHeader>
          <Title> { name }</Title>
          <SubHeaderGrp>
            <Mandate type={mandateLevelTypes[mandate_level_id]?.label} />
            <DocGroup>{doc_group}</DocGroup>
          </SubHeaderGrp>
        </SubHeader>
        <Forms onSubmit={(data) => submitted(section_id, attr_id, id, parameter_id, project_id, data)} store={sStore}>
          <Left>
            {/* <Attachment label='Attachments' btn='Upload' /> */}
            <div className='title'> Description </div>
            <Description dangerouslySetInnerHTML={{__html: wiki_desc}} />
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
            <div> Operating Notes </div>
            {/* <OpnContainer> */}
              <Opn onlyUserEditable bk='#efefef' param_id={parameter_id} />
            {/* </OpnContainer> */}
            
            <div className='exception'>
              <span> Exception Granted: </span>
              <span className='value'> None</span>
            </div>
          </Left>
          <Right>
            {/* <div className='mandate'>
              <span> Document Group: </span>
              <span className='value'> {doc_group} </span>
            </div> */}

            <Select name='variation' label='Variation ' 
                options={toOpt(paramVariations)}
                outerClass='sfield'
                onChange={status === 'closed' ? (() => {}) : selectChange('variation')}
                value={paramVariations[variation] || ''} 
                maxMenuHeight={150}
            />

            <Select name='quality_gate_id' label='Quality Gate' 
                options={toOpt(qualityGateTypes)}
                outerClass='sfield'
                onChange={status === 'closed' ? (() => {}) : selectChange('quality_gate_id')}
                value={qualityGateTypes[quality_gate_id] || ''} 
                maxMenuHeight={150}
            />

            <Select name='test_data_method_id' label='Test Data Method' 
                options={toOpt(testDataMethodTypes)}
                outerClass='sfield'
                onChange={status === 'closed' ? (() => {}) : selectChange('test_data_method_id')}
                value={testDataMethodTypes[test_data_method_id] || ''} 
                maxMenuHeight={150}
            />


            <Select name='user_compliance_type' label='Result Type:' 
                options={toOpt(userComplianceTypes)}
                outerClass='sfield'
                onChange={status === 'closed' ? (() => {}) : selectChange('user_compliance_type')}
                value={userComplianceTypes[user_compliance_type] || ''} 
                maxMenuHeight={130}
            />
            <TextArea lab el='Notes' name='user_notes' onChange={changed} value={ user_notes || ''} className='field' disabled={ status === 'closed' } /> 
            { id ? <Uploader param_id={id}/> : null}
            { 
              status !== 'closed' ? 
                <Submit className='submit'>
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
const Eclipse = styled.div`
  color: #000;
  margin-right: 6px;
`
const Nav = styled.div`
  position: absolute;
  right: 10px;
  top: -32px;
  display: flex;
  font-size: 16px;
  text-align: left;
  color: #ffffff;
`

const Back = styled(Link)`
  width: 81px;
  height: 28px;
  border-radius: 10px;
  background-color: #eb622b;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: -2px;
`
const Prev = styled(Link)`
  width: 108px;
  height: 30px;
  border-radius: 10px;
  background-color: #aaaaaa;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  pointer-events: ${p => p.disabled ? 'none' : 'auto'};
`
const Next = styled(Link)`
  color: white;
  width: 79px;
  height: 30px;
  border-radius: 10px;
  background-color: #037ebf;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${p => p.disabled ? 'none' : 'auto'};
`

const DocGroup = styled.div`
  margin-left: 15px;
  height: 25px;
  border-radius: 10px;
  background-color: #444444;
  color: #fff;
  font-size: 15px;
  padding: 2px 15px;
`
const SubHeader = styled.div`
  border-bottom: 1px solid #cccccc;
  padding: 20px 24px;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  color: #444444;

`
const SubHeaderGrp = styled.div`
  display: flex;
`

const Title = styled.div`
 margin-bottom: 8px;
`



const Forms = styled(Form)`
  display: flex;
  margin-top: 23px;
  padding: 6px 24px;

  .submit {
    margin-top: 20px;
    display: block;
  }

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
  .title {
    font-size: 18px;
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
  font-size: 16px;
  font-weight: 500;
  // line-height: 1.36;
  color: #222222;
  margin-top: 2px;
  padding: 6px 8px;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 5px;

`

const Container = styled.div`
  position: relative;
`
const Header = styled.div`
  display: flex;
`

const Item = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 25px;
  border-radius: 12px;
  background-color: #666666;
  color: #dddddd;
  &.selected {
    border-radius: 12px;
    font-weight: bold;
    color: #fff;
    background-color: ${p => p.theme.color};
    box-shadow: 0 2px 4px 0 white;
  }
  margin-right: 6px;
  font-size: 12px;
`