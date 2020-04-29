import React from 'react'
import { landscapeElements as elements } from '../../store/governance'

import GovWorkspace from './shared/gov-workspace'

export default function(props) {
  return(
    <GovWorkspace elements={elements} selectOptions={selectOptions} asset='landscape' />
  )
}


const selectOptions = {
  snapshot: {
    1: {name: 'Policies To Expire', id: 1}
  },
  analysis: {
    1: { name: 'Expiry Chart (Policy Count)', desc: 'Policy count by Expiry', grpah: 'bar', id: 1},
    2: { name: 'Policy Impact Area Chart', desc: 'Policy count by Impact Area', grpah: 'bar', id: 2},
    3: { name: 'Expiry Chart (Risk vs P. Family', desc: 'Risk count by Policy Family', grpah: 'bar', id: 3 }
  },
  analyzers: {
    1: {
          name: 'Compliance competitive index',  desc: 'Policy parameter count by benificiary',
          graph: 'bar', filters: [[{name: 'All'}, {name: 'Policy Family'}]], id: 1
      },
    2: {
          name: 'Compliance overheads index',  desc: 'Policy parameter count by Project Object',
          graph: 'bar', filters: [[{name: 'All'}, {name: 'Policy Family'}]], id: 2
      },
  }
}