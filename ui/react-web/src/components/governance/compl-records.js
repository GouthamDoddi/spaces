import React from 'react'
import { complienceRecElements as elements, elementOptions } from '../../store/governance'

import GovWorkspace from './shared/gov-workspace'

export default function(props) {
  const options = elementOptions['compl-records']
  return(
    <GovWorkspace elements={elements} selectOptions={options} asset='compl-records' />
  )
}


