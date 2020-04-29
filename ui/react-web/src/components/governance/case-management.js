import React from 'react'
import { caseElements as elements } from '../../store/governance'

import GovWorkspace from './shared/gov-workspace'

export default function(props) {
  return(
    <GovWorkspace elements={elements} selectOptions={selectOptions} asset='case-management' />
  )
}


const selectOptions = {
  snapshot: {
    1: {name: 'Clarifications', id: 1},
    2: {name: 'Exceptions', id: 2},
    3: {name: 'Support', id: 3},
    4: {name: 'Relief', id: 4},
  },
  analysis: {
    1: { name: 'Case aging by SLA by Type', desc: 'Case aging by SLA by Type', grpah: 'stacked-bar', id: 1},
    2: { name: 'Cases Resulting in Backlog', desc: 'Cases Resulting in Backlog by (Policy Backlog/Knowledge Backlog)', grpah: 'bar', id: 2},

  },
  analyzers: {
    1: {
          name: 'Compliance overheads index',  desc: 'Policy parameter count by Project Object',
          graph: 'bar', filters: [[{name: 'All'}, {name: 'Policy Family'}]], id: 1
      },
  }
}
