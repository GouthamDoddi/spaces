import React from 'react'
import { objElements as elements, elementOptions } from '../../store/governance'

import GovWorkspace from './shared/gov-workspace'

export default function(props) {
  const options = elementOptions['obj-outcomes']
  return(
    <GovWorkspace elements={elements} selectOptions={options} asset='obj-outcomes' />
  )
}


