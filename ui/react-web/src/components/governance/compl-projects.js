import React from 'react'
import { complienceElements as elements, elementOptions } from '../../store/governance'

import GovWorkspace from './shared/gov-workspace'

export default function(props) {
  const options = elementOptions['compl-projects']
  return(
    <GovWorkspace elements={elements} selectOptions={options} asset='compl-projects' />
  )
}


