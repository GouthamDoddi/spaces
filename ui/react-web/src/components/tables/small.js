import styled from 'styled-components'

export const Table = styled.div`
  width: 100%;
  min-width: 696px;
  // height: 100%;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: ${p => p.columns || '.3fr 1fr 1fr 1.5fr'};
  grid-auto-rows: 40px;
  background-color: #e4e4e4;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Row = styled(Header)`
  background-color: #fafafa;
  margin-bottom: 3px;
  border: 1px solid #fafafa;
  justify-content: center;
  text-overflow: ellipsis;
  // white-space: nowrap;
  overflow: hidden;
`

export const Add = styled.div`
  cursor: pointer;
  display: block;
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: ${p => p.theme.color};
  &:after {
    content: '+';
    color: #fff;
    position: relative;
    top: 6px;
    left: 15px;
    font-size: 24px;
  }

  div {
    position: absolute;
    bottom: -20px;
    left: 2px;
    font-size: 8px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    color: ${p => p.theme.color};
  } 
`