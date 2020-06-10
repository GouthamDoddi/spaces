import React, { useEffect } from 'react'

import { Input, Select, Actions, Container } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { useStore } from 'effector-react'
import ProgressCard from '../../progress-card'

const { store, load, create, update, changed, selectChange } =  makeStore(({policy_id, id}) => `formulation/${policy_id}/bill-decree`)

function submitted(policy_id, bill_id, data) {
  const cb = (resp) => {
    window.location.hash = `/formulation/${policy_id}/bill`
  }
  data.policy_id = policy_id
  bill_id ? update({policy_id, data, cb}) : create({policy_id, data, cb})
}

export default function(props) {

  const { policy_id } = useParams()
  
  useEffect(() => {
    load({policy_id})
  }, [])
  
  console.log(store)
  const billStore = useStore(store)
  const { name, number, doc_ref, number1,
    effective_date, ownership, passed_by, version, id } = billStore.data || {}

  return(
    <>
      <div className='form-space'>
        <Container onSubmit={(data) => submitted(policy_id, id , data)} store={billStore}>

          <div className='container'>
            <Input label='Bill / Decree Name' type='text' name='name' onChange={changed} value={name || ''}/>
            <Input label='Bill / Decree Number' type='text' name='number' onChange={changed} value={number || ''}/>
            <Input label='Document Reference' type='text' name='doc_ref' onChange={changed} value={doc_ref || ''}/>
            
            <Input label='Effective Date' value={effective_date || ''}
              type='date' name='effective_date' onChange={changed} 
            />
            <Input label='Ownership' type='text' name='ownership' onChange={changed} value={ownership || ''}/>
            <Select name='passed_by' label='Passed By' 
                options={PassedByOptions}
                onChange={selectChange('passed_by')}
                value={PassedByOptions.find((o) => o.value === (passed_by || 1))} 
            />
          </div>
        </Container>
      </div>

      <div className='widgets'>
        <ProgressCard title='Due Date'
          subtitle='DUe date of selected policy'
          days={23} color='#fd7635' date='13 April 2020' />
      </div>
    </>
  )
}

const PassedByOptions = [
  { value: 1, label: 'passed by 1' },
  { value: 2, label: 'passed by 2' },
  { value: 3, label: 'passed by 3' },
]

