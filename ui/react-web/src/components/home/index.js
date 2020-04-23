import React from 'react'

import ProgressCard from '../progress-card'

export default function() {
  return(
    <>
      <ProgressCard title='Propogation'
        subtitle='Completion of selected policy'
        progress={64} color='#564fc1' />

      <ProgressCard title='Propogation'
        subtitle='Completion of selected policy'
        days={23} color='red' date='13 April 2020' />
    </>
  )
}