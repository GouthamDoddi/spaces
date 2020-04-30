import React from 'react'
import { policyElements as elements, elementOptions } from '../../store/governance'

import GovWorkspace from './shared/gov-workspace'

export default function(props) {
  const options = elementOptions.policy
  return(
    <GovWorkspace elements={elements} selectOptions={options} asset='policy' />
  )
}
