import React from 'react'

import { caseElements as elements, elementOptions } from '../../store/governance'

import GovWorkspace from './shared/gov-workspace'

export default function(props) {

  const options = elementOptions['case-management']
  return(
    <GovWorkspace elements={elements} selectOptions={options} asset='case-management' />
  )
}


