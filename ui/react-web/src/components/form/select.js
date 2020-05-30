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
  const { options=[{value: 'blues', label: 'Blues'}], className='default', ...others } = props
  return (
    <Container>
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
  .default__control {
    width: 208px;
    height: 45px;
    border: solid 1px #dedede;
    background-color: #efefef;
  }
  // .default__indicator-separator {
  //   display: none;
  // }
`