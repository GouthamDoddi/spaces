import React from 'react'
import { landscapeElements as elements, elementOptions } from '../../store/governance'

import GovWorkspace from './shared/gov-workspace'

export default function(props) {
  const options = elementOptions.landscape

  return(
    <GovWorkspace elements={elements} selectOptions={options} asset='landscape' />
  )
}
