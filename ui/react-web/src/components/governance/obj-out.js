import React from 'react'
import { objElements as elements } from '../../store/governance'

import GovWorkspace from './shared/gov-workspace'

export default function(props) {
  return(
    <GovWorkspace elements={elements} selectOptions={selectOptions} asset='obj-outcomes' />
  )
}


const selectOptions = {
  snapshot: {
    // 1: {name: 'Policies To Expire', id: 1}
  },
  analysis: {
    1: { name: 'Objectives Survey participants', desc: 'Objectives Survey participants by beneficiary type', grpah: 'bar', id: 1},
    2: { name: 'Impact Survey participants', desc: 'Impact Survey participants by beneficiary type:', grpah: 'bar', id: 2},
  },
  analyzers: {
    1: {
          name: 'Compliance overheads index',  desc: 'Policy parameter count by Project Object',
          graph: 'bar', filters: [[{name: 'All'}, {name: 'Policy Family'}]], id: 1
      },
  }
}
