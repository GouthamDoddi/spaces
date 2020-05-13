import React, { useState } from 'react'

import Select, {components} from 'react-select'

import styled from 'styled-components'

import cs from '../../../utils/colors'
import Attachment from '../../form/attachment'
import Textarea from '../../form/text'
import { useLocation } from 'react-router-dom'

const data = {
  1: { id: 1, title: 'Title', space: 'gs', mandate: 'M1', desc: null },
  2: { id: 2, title: 'Title', space: 'gs', mandate: 'M1', desc: null },
  3: { id: 3, title: 'Title', space: 'gs', mandate: 'M1', desc: null },
  4: { id: 4, title: 'Title', space: 'cs', mandate: 'M1', desc: null },
  5: { id: 5, title: 'Title', space: 'gs', mandate: 'M1', desc: null },
}

export default function(props) {

  const loc = useLocation()
  const [opt, setOpt] = useState(1)
  const obj = data[opt]

  if(!loc.search.includes('tab')) {
    window.location.hash = `${loc.pathname}?tab=cases`
  }


  return(
    <Container>
      <Header>
        {
          Object.values(data).map((attr, i) => (
            <Item {...cs[attr.space]} 
              key={i}
              className={opt === attr.id ? 'selected': ''} 
              onClick={() => setOpt(attr.id)}> 
                {attr.id}  
            </Item>
          ))
        }
      </Header>
      <Title> { obj.title }</Title>
      <Description> {obj.desc || 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit consectetur adipiscing elit, sed do Lorem ipsum dolor sit consectetur '}</Description>
      <Forms>
        <Left>
          <Attachment label='Attachments' btn='Upload' />
          <div className='exception'>
            <span> Exception Granted: </span>
            <span className='value'> Yes</span>
          </div>
        </Left>
        <Right>
          <div className='mandate'>
            <span> Mandate: </span>
            <span className='value'> {obj.mandate} </span>
          </div>
          <Select options={selectOptions}
            defaultValue={selectOptions[0]}
            components={selectComps}
            className='compliance-sel' />
          <Textarea label='Notes' />
          <button> Submit </button>
        </Right>
      </Forms>
    </Container>

  )

}

const Title = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #000000;
  margin-top: 23px;
`

const Forms = styled.div`
  display: flex;
  margin-top: 23px;

`

const Left = styled.div`
  flex: 1;
  position: relative;
  left: 0;
  top: 0;
  .button {
    span { color: white; }
    background-color: ${p => p.theme.color};
  }

  .exception {
    position: absolute;
    bottom: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #687c9d;
    .value {
      font-weight: 800;
      color: #42d7b6;  
    }
  }
`
const Right = styled.div`
  flex: 1;
  margin-left: 63px;
  .mandate {
    font-size: 14px;
    font-weight: 500;
    color: #687c9d;
    margin-bottom: 8px;
    .value {
      font-weight: bold;
      color: #f44e76;
    }
  }
  .compliance-sel {
    margin-bottom: 19px;
  }
  textarea {
    height: 72px;
  }
  button {
    float: right;
    width: 94px;
    height: 38px;
    border-radius: 2px;
    background-color: #f44e76;
    color: #fff;
    margin-top: 15px;
    margin-right: 10px;
  }

`



const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.36;
  color: #98acbe;
  margin-top: 10px;
`

const Container = styled.div`
  padding: 12px 24px;
`
const Header = styled.div`
  display: flex;
`

const Item = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: ${p => p.icon};
  color: ${p => p.color};
  &.selected {
    border-radius: 12px;
    box-shadow: 0 2px 4px 0 ${p => p.color};
  }
  margin-right: 10px;
`

const selectOptions = [
  { value: 'compiled', label: 'Compliance: Compiled', color: '#FF8B00' },
  { value: 'review', label: 'Compliance: Review', color: '#FFC400' },
  { value: 'pending', label: 'Compliance: Pending', color: '#36B37E' },
]
const selectComps = {
  IndicatorSeparator: () => null,
  DropdownIndicator: (props) => (
    <components.DropdownIndicator {...props} className='dropdown'>
    </components.DropdownIndicator>
  ) 
}