import React from 'react'
import { complienceElements as elements } from '../../store/governance'

import GovWorkspace from './shared/gov-workspace'

export default function(props) {
  return(
    <GovWorkspace elements={elements} selectOptions={selectOptions} asset='compl-projects' />
  )
}


const selectOptions = {
  snapshot: {
    1: {name: 'Uninitiated / Open Projects', id: 1},
    2: {name: 'Submitted / Approved', id: 2},
    3: {name: 'Successful Audited', id: 3},
  },
  analysis: {
    1: { name: 'Compliance aging by TAT', desc: 'Compliance aging by TAT', grpah: 'bar', id: 1},
    2: { name: 'Compliance Improvement Chart', desc: 'Compliance Improvement Chart', grpah: 'stacked-bar', id: 2},
  },
  analyzers: {
    1: {
          name: 'Compliance overheads index',  desc: 'Policy parameter count by Project Object',
          graph: 'bar', filters: [[{name: 'All'}, {name: 'Policy Family'}]], id: 1
      },
  }
}
