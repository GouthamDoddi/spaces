import React from 'react';

import Tabs from '../shared/tabs'

import { useParams } from 'react-router-dom'


export default function() {
  const { section } = useParams()
  return (
    <Tabs data={[['FAQ', `${section}/faq`], ['SOP', `${section}/sop`], ['Templates', `${section}/templates`]]} />
  )

}