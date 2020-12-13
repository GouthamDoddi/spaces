import styled from 'styled-components'
const Button = styled.a`
  padding: 10px 10px;
  cursor: pointer;
  background-color: #eb622b;
  max-width: 80px;
  justify-self: center;
  align-self: center;
  color: #fff;

  &.right {
    position: absolute;
    max-width: 200px;
    right: 50px;
    top: ${p=> p.top || '430px'};
  }
`

export { Button }