import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useStore } from 'effector-react'
import styled from 'styled-components'

import Card from './section-card'

export default function({store, to,...props}) {
  const params = useParams()
  useEffect(() => {
    const opts = params
    if(opts.sp_id) {
      opts.project_id = opts.sp_id
    }
    store.load(opts)
  }, [params])

  const lStore = useStore(store.store)
  const data = lStore.data || []
  return(
    <Container>
      {
        data.map((o, i) => (
          <Card {...o} to={to({id: o.id, ...params})} key={i}> </Card>
        ))
      }
    </Container>

  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 370px);
  grid-gap: 10px;
`