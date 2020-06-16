import React, { useEffect } from 'react'

import { Input, Select, Actions, Container } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'

import {policyFamilyTypes, policyCategoryTypes, policyOwnerTypes, policyStatusTypes} from '../../../store/master-data'
import { useStore } from 'effector-react'

const { store, load, create, update, changed, selectChange } =  makeStore(({policy_id}) => `formulation/metadata/${policy_id}`)

function submitted(policy_id, data) {
  const cb = (resp) => {
    window.location.hash = `/formulation/${resp.id}/canvas/metadata`
  }
  policy_id === 'new' ? create({data, cb}) : update({policy_id, data, cb}) 
}


export default function(props) {

  const { policy_id } = useParams()
  
  useEffect(() => {
    if(policy_id && policy_id !== 'new') { load({policy_id}) }
  }, [])
  
  console.log(store)
  const metaStore = useStore(store)
  const { family_id, name, policy_category_id, 
    policy_status_id, owner_id, publication_date} = metaStore.data || {}

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
        />
        <Input label='Publication Date' value={publication_date || ''}
          type='date' name='publication_date' onChange={changed} 
        />
        <Select name='owner_id' label='Policy Owner' 
            options={policyOwners}
            onChange={selectChange('owner_id')}
            value={policyOwners.find(o => o.value === owner_id)} 
        />
        <Select name='policy_status_id' label='Policy Status' 
            options={policyStatuses}
            onChange={selectChange('policy_status_id')}
            value={policyStatuses.find(o => o.value === policy_status_id)} 
        />

      </div>
    </Container>
  )
}


const familyOptions = Object.values(policyFamilyTypes)

const categoryOptions = Object.values(policyCategoryTypes)


const policyOwners = Object.values(policyOwnerTypes)

const policyStatuses = Object.values(policyStatusTypes)