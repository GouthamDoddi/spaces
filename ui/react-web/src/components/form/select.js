import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const customStyles = ({width='208px', height='45px', border='solid 1px #dedede', backgroundColor='#efefef', color="#000"}) => ({
  // control: (provided) => ({
  //   ...provided,
  //   width: width,
  //   height: height,
  //   borderRadius: '2px',
  //   border: border,
  //   backgroundColor: backgroundColor,
  //   // color: color
  // }),

  indicatorSeparator: () => ({display: 'none'}),
  dropdownIndicator: (provided) => (
    {
      width: '24px',
      height: '24px',
      paddingTop: '2px',
      paddingLeft: '2px',
      marginRight: '8px'
    }
  )
})

export default function(props) {
  const { options=[], outerClass, className='default', label, ...others } = props
  return (
    <Container className={outerClass}>
      <label> {label} </label>
      <Select 
        styles = { customStyles({}) }
        options = { options }
        {...others}
        classNamePrefix={className}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 1px;
  label {
    font-size: 14px;
    font-weight: 500;
    color: #687c9d;
    margin-bottom: 10px;
  }
  .default__control {
    width: 265px;
    height: 38px;
    border: solid 1px #dedede;
    background-color: #efefef;
    &:focus {
      border: solid 1px ${p => p.theme.color};
    }
  }
  // .default__indicator-separator {
  //   display: none;
  // }
`