import React from 'react';

import Tabs from '../shared/tabs'

import { useParams } from 'react-router-dom'


export default function() {
  const { section } = useParams()
  return (
    <Tabs data={[['FAQ', `faq`], ['SOP', `sop`], ['Templates', `templates`]]} />
  )

}