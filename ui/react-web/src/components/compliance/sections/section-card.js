import React, {useEffect} from 'react'

import styled from 'styled-components'

import {
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import ModalView from './modal-view'

import { useParams } from 'react-router-dom'


import { useStore } from 'effector-react'

import { useTo } from '../util'

import { Add } from '../../tables/list'


import  makeStore from '../../../store/make-store'

const {store, load } = makeStore(({project_id}) => `compliance/${project_id}/sections/applicable`)

function useLinkTo(path, exact=false) {
  return(useTo(`compl-sections/${path}`, exact))
}

function Link({to, className, children}) {
  return (
    <NavLink to={useLinkTo(to, true)} className={className} activeClassName='selected'>
      {children}
    </NavLink>
  )
}

export default function(props) {
  const { project_id } = useParams()


  useEffect(() => {
    load({project_id})
  }, [])


  const sectionStore = useStore(store)

  const sections = sectionStore.data || []
  
  return(
    
      // <Switch>
      //   <Route path={useLinkTo(':id(\\d+|new)')}> <ModalView /></Route>
      // </Switch>
      <div className='form-space'>
        <Wrapper>
          <Content>
            {
              sections.map(({id, name, description, tags=[] }, i) => (
                <ObjectCard key={i}>
                  <Title>
                    { name }
                  </Title>
                  <Description>
                    {description}
                  </Description>
                  <Tags>
                    {
                      tags.map((tag,i) => (
                        <div key={i}> #{tag} </div>
                      ))
                    }
                  </Tags>
                </ObjectCard>
              ))
            }
          </Content>
          <Add to={useLinkTo('new', true)} />
        </Wrapper>
      </div>

  )
}


const Tags = styled.div`
  max-width: 300px;
  overflow: auto;
  display: flex;
  margin-top: 10px;
  > div {
    height: 20px;
    border-radius: 3px;
    border: solid 1px #e4eaf0;
    background-color: #f4f7fa;
    font-size: 10px;
    color: #8fa8bf;
    line-height: 20px;
    margin-right: 5px;
    padding: 0 5px;
  }
`

const Content = styled.div`
  flex-grow: 1;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 307px);
  grid-auto-rows: 108px;
  grid-gap: 18px 10px;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 8px;
`

const Description = styled.div`
  font-size: 10px;
  line-height: 1.2;
  color: #98acbe;
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const ObjectCard = styled(Link)`
  position: relative;
  top: 0;
  left: 0;
  min-width: 307px;
  height: 108px;
  border-radius: 3px;
  border: solid 1px #f4f7fa;
  background-color: #f4f7fa;
  padding: 20px;
  &.selected {
    border: solid 1px ${p => p.theme.color};
  }
`