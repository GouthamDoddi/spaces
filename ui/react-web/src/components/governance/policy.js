import React from 'react'
import { policyElements as elements } from '../../store/governance'

import GovWorkspace from './shared/gov-workspace'

export default function(props) {
  return(
    <GovWorkspace elements={elements} selectOptions={selectOptions} asset='policy' />
  )
}


const selectOptions = {
  snapshot: {
    1: {name: 'Backlog count', id: 1},
    2: {name: 'Petitions', id: 2},
    3: {name: 'Expiry Date', id: 3},
    4: {name: 'Next Review', id: 4},
    5: {name: 'Budget Consumption', id: 5},
    6: {name: 'Coverage Score', id: 6},

  },

  analysis: {
    1: { name: 'Ageing Chart', desc: 'Propagation  Projects/Tasks* by TAT and Feedback', grpah: 'bar', id: 1},
    2: { name: 'Compliance Projects by sections', desc: 'Compliance Projects by sections', grpah: 'bar', id: 2},
    3: { name: 'Budget Allocated & Utlized Chart', desc: 'Budget Allocated & Utlized Chart', grpah: 'pie', id: 3 },
    4: { name: 'Collaboration Chart', desc: 'Collaboration Chart', grpah: 'bar', id: 4 },
  },

  analyzers: {
    1: { name: 'Policy change index', desc: 'Backlog & Petition count by section', grpah: 'bar', id: 1,
        filters: [[{name: 'All'}, {name: 'Critical'}]]
      },
    2: { name: 'Policy gap index', desc: 'Exception count by section', grpah: 'bar', id: 2,
        filters: [
          [ {name: 'All'}, {name: 'High Impact'}],
          [ {name: 'All'}, {name: 'Mandate Level'}],
          [ {name: 'Policy'}, {name: 'Std'}, {name: 'Guideline'} ]
        ]
      },
  }
}
