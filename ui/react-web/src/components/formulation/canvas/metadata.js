import React, { useEffect } from 'react'

import { Input, Select, Actions, Container, toOpt } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'

import { reloadAuth } from '../../../store/user'

import {policyFamilyTypes, policyCategoryTypes, policyOwnerTypes, policyStatusTypes, policyStateTypes} from '../../../store/master-data'
import { useStore } from 'effector-react'

const { store, load, create, addData, update, changed, selectChange } =  makeStore(({policy_id}) => `formulation/metadata/${policy_id}`)

function submitted(policy_id, data) {
  const cb = (resp) => {
    reloadAuth()
    window.location.hash = `/formulation/${resp.id}/canvas/metadata`
  }
  policy_id === 'new' ? create({data, cb}) : update({policy_id, data, cb}) 
}


export default function(props) {

  const { policy_id } = useParams()
  
  useEffect(() => {
    if(policy_id && policy_id !== 'new') { load({policy_id}) }
    if(policy_id === 'new') { 
      addData(null) 
    }
  }, [])
  
  
  const metaStore = useStore(store)
  const { family_id, name, policy_category_id, policy_state_id,
    policy_status_id, owner_id, publication_date} = metaStore.data || {}
  console.log(family_id)
  return(
    <Container onSubmit={(data) => submitted(policy_id,data)} store={metaStore}>
      <Actions />

      <div className='container'>
        <Select name='family_id' label='Policy Family' 
            options={familyOptions}
            onChange={selectChange('family_id')}
            value={familyOptions.find((o) => o.value === family_id)} 
        />
        <Input label='Name' type='text' name='name' onChange={changed} value={name || ''}/>
        <Select name='policy_category_id' label='Policy Category' 
            options={categoryOptions}
            onChange={selectChange('policy_category_id')}
            value={categoryOptions.find(o => o.value === policy_category_id )} 
            maxMenuHeight={200}
        />

        <Select name='owner_id' label='Policy Owner' 
            options={policyOwners}
            onChange={selectChange('owner_id')}
            value={policyOwners.find(o => o.value === owner_id)}
            maxMenuHeight={200}
        />
        <Select name='policy_status_id' label='Policy Status' 
            options={policyStatuses}
            onChange={selectChange('policy_status_id')}
            value={policyStatuses.find(o => o.value === policy_status_id)} 
        />
        <Select name='policy_state_id' label='Policy State'
            options={toOpt(policyStateTypes)}
            onChange={selectChange('policy_state_id')}
            value={policyStateTypes[policy_state_id] || ''}
            maxMenuHeight={130}
        />
        <Input label='Publication Date' value={publication_date || ''}
          type='date' name='publication_date' onChange={changed} 
        />
      </div>
    </Container>
  )
}


const familyOptions = Object.values(policyFamilyTypes)

const categoryOptions = Object.values(policyCategoryTypes)


const policyOwners = Object.values(policyOwnerTypes)

const policyStatuses = Object.values(policyStatusTypes)