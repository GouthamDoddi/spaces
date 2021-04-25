import React, { useEffect, useState } from 'react'


import styled from 'styled-components'
import QuickActions from './quick_actions'
import Grid from '../cases/grid'
import SmallCard from './small-card'
import SimpleTable from './simple-table'
import CompliantCard from './compliant-card'
import Insight, { Challenges } from '../dashboards/shared/insights'
import Progress from '../dashboards/shared/progress'

import EntityCard from './entity-card'
import ProjectsCard from './project-card'
import { useStore } from 'effector-react'
import makeStore from '../../store/make-store'
const { store, load } = makeStore('formulation/metadata')


export default function(props) {
  const [projectCount, setProjectCount] = useState(0);
  const [entityCount, setEntityCount] = useState(0);
  const [projectCounts, setProjectCounts] = useState({});
  const listStore = useStore(store)
  const metadata = listStore.data || []

  useEffect(() => { 
    console.log(load())
  }, [])

  return (
    <Wrapper>
    <Box>
      <header> 
        <span>Jawda</span>
        <span>Policy Count {metadata.length}</span>
      </header>

      <div className='items'>
        <TotalProjects>
          <header> Total Projects {projectCount}</header>
          <div className='progress-status'>
            <Progress width='113px' value={45} height='5px' max={100} bkcolor='#DCDFE8' width='90%' color='#3FBF11' tagText={`${45}% Completed`} tagBkColor='#DEFCD4' showTag tagColor='#3FBF11' />  
          </div>
          
          <div className='tags'>
            <Tag> 
              <div> <Check /></div>
              <div>{projectCounts.completed} Completed</div>
            </Tag>
            <Tag color='#FFBF00'> 
              <div> <Sol /></div>
              <div>{projectCounts.wip} WIP </div>
            </Tag>
            <Tag color='#CFCFCF'> 
              <div> <Cancel /></div>
              <div>{projectCounts.not_started} Not Started</div>
            </Tag>
          </div>
        </TotalProjects>

        <SimpleTable />
        <div> <SmallCard count={entityCount} /> </div>
        
      </div>
    </Box>

    <Content>
      <FlexWrapper>
        <Entities>
          <header>
            List of Entities
          </header>
          <div>
            <EntityCard setEntityCount={setEntityCount} setProjectCounts={setProjectCounts} />
          </div>
          
        </Entities>
        <div>
          <QuickActions />
          <Insight hideFilter height='530px' />
    
        </div>
      </FlexWrapper>

      <FlexWrapper>
        <Projects>
          <header>
            List of Projects
          </header>
          <div>
            <ProjectsCard setProjectCount={setProjectCount} />
          </div>
          
        </Projects>
        <div>
        <Challenges />
        </div>
      </FlexWrapper>
      <FlexWrapper>
        
      </FlexWrapper>
    </Content>


      {/* <Grid></Grid>

     


      <table>
        <CompliantCard >
          <td> <Count> 1 </Count></td>
          <td> <Title> Hamad </Title></td>
          <td> 
            <Oval> 
              <div> <WebFramework /> </div>
              <div></div>
              <div> 20 </div>
            </Oval>
            <Oval color='#EB622B'> 
              <div> <MobileFramework /> </div>
              <div></div>
              <div> 20 </div>
            </Oval>
            <Oval color='#043555'> 
              <div> <EserviceFramework /> </div>
              <div></div>
              <div> 20 </div>
            </Oval>
          </td>
          <td> Hamad</td>
        </CompliantCard>

      </table> */}

    
      
    </Wrapper>
  )
}

const Cases = styled.div`
  height: 530px
  width: 100%;
  margin-top: 40px;
  // border: 1px solid #ccc;
  > header {
    font: normal normal 600 25px/36px Muli;
    color: #000000;
  }

  > div {
    height: 520px;
    text-align: center;
    background-color: #EBF4FF;
    line-height: 520px;
  }
`

const Content = styled.div`
// background: transparent url(img/db/cards-back.svg) 0% 0% padding-box;
`

const Wrapper = styled.div`
  margin-top: 85px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
`
const Box = styled.div`
  border: 1px solid #DDDDDD;
  border-left: none;
  border-right: none;
  width: 100%;
  height: 320px;
  background-color: #F7FAFD;
  padding-bottom: 10px;
  > header {
    padding: 26px 100px;

    > :first-child {
      font: normal normal bold 30px/44px Muli;
      color: #000000;
      margin-bottom: 9px;
      border-right: 1px solid #000000;
      padding-right: 20px;
      margin-right: 20px;
    }

    > :nth-child(2) {
      font: normal normal 600 20px/30px Muli;
      color: #000000;
    }
  }
  > .items {
    display: flex;
    width: 100%;
    overflow: auto;
    > div:last-child { margin-left: 30px; padding-right: 40px;}
    padding: 0px 100px;
    height: 216px;

    /* total width */
    &::-webkit-scrollbar {
      background-color: transparent;
      height: 8px;
    }

    /* background of the scrollbar except button or resizer */
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    /* scrollbar itself */
    &::-webkit-scrollbar-thumb {
      background-color: #C9C9C9;
      border-radius: 4px;
    }

    /* set button(top and bottom of the scrollbar) */
    &::-webkit-scrollbar-button {
      display:none;
    }
  }
`


const TotalProjects = styled.div`
  height: 180px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 10px 28px;
  margin-right: 40px;
  border: 1px solid #DDDDDD;

  > header {
    font: normal normal 600 20px/30px Muli;
    color: #464646;
  }

  > .progress-status {
    margin-top: 35px;
  }

  > .tags {
    display: flex;
    margin-top: 30px;
  }

  
`

const Title = styled.div`
  padding: 14px 25px 11px 0px;
  font: normal normal normal 15px/18px Muli;
  letter-spacing: 0px;
  color: #000000;
`

const Count = styled.div`
    padding-right: 20px;
`

const Oval = styled.div`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 0.5px solid ${p => p.color || '#2680EB'};
  border-radius: 15px;
  min-width: 81px;
  height: 30px;
  font: normal normal 600 15px/30px Muli;
  color: ${p => p.color || '#2680EB'};
  // padding: 0 12px;
  display: flex;
  > div {
    &:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
    }
    &:last-child {
      min-width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1px;
    }
    &:nth-child(2) {
      height: 16px;
      align-self: center;
      min-width: 1px;
      background-color: ${p => p.color || '#2680EB'};
    }
  }
`

const Tag = styled.div`
  background: ${p => p.color || '#3FBF11'} 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  border-radius: 20px;
  display: flex;
  font: normal normal 600 15px/22px Muli;
  color: #FFFFFF;
  height: 30px;
  margin-right: 30px;

  > div:first-child {
    padding: 3px 5px 3px 3px; 
  }
  > div:last-child {
    padding: 4px 15px 0 5px;
    white-space: nowrap;
  }
`

function MobileFramework() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 14.057 24"><g transform="translate(-139 -728)"><path style={{fill:'#ff7f31'}} d="M29.186,26H17.871A1.371,1.371,0,0,1,16.5,24.629V3.371A1.371,1.371,0,0,1,17.871,2H29.186a1.371,1.371,0,0,1,1.371,1.371V24.629A1.371,1.371,0,0,1,29.186,26ZM17.871,2.686a.686.686,0,0,0-.686.686V24.629a.686.686,0,0,0,.686.686H29.186a.686.686,0,0,0,.686-.686V3.371a.686.686,0,0,0-.686-.686Z" transform="translate(122.5 726)"/><path style={{fill:'#ff7f31'}} d="M30.214,11.686H16.843a.343.343,0,0,1,0-.686H30.214a.343.343,0,0,1,0,.686Z" transform="translate(122.5 720.086)"/><path style={{fill:'#ff7f31'}} d="M30.214,57.686H16.843a.343.343,0,0,1,0-.686H30.214a.343.343,0,0,1,0,.686Z" transform="translate(122.5 689.857)"/><path style={{fill:'#ff7f31'}} d="M34.576,63.341a1.264,1.264,0,1,1,1.264-1.264,1.264,1.264,0,0,1-1.264,1.264Zm0-1.843a.579.579,0,1,0,.579.578A.579.579,0,0,0,34.576,61.5Z" transform="translate(111.452 687.352)"/><path style={{fill:'#ff7f31'}} d="M35.086,7.436H32.343a.343.343,0,1,1,0-.686h2.743a.343.343,0,1,1,0,.686Z" transform="translate(112.314 722.878)"/></g></svg>
  )
}

function EserviceFramework() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 23.414 24"><g transform="translate(-134 -792)"><path style={{fill:'#043555'}} d="M28.661,12a10.721,10.721,0,0,0-.351-2.726l1.355-1L27.036,3.723,25.493,4.4a10.625,10.625,0,0,0-4.72-2.727L20.587,0H15.329l-.186,1.672A10.625,10.625,0,0,0,10.423,4.4L8.88,3.723,6.251,8.277l1.355,1a10.769,10.769,0,0,0,0,5.453l-1.355,1L8.88,20.277l1.543-.676a10.625,10.625,0,0,0,4.72,2.727L15.329,24h5.259l.186-1.672a10.625,10.625,0,0,0,4.72-2.727l1.543.676,2.629-4.554-1.355-1A10.721,10.721,0,0,0,28.661,12Zm-8.685,9.077-.491.109-.157,1.408H16.587l-.157-1.408-.491-.109a9.242,9.242,0,0,1-4.832-2.792l-.34-.37-1.3.569L8.1,16.11l1.14-.839-.151-.479a9.348,9.348,0,0,1,0-5.583l.151-.479L8.1,7.89,9.469,5.516l1.3.569.34-.37A9.242,9.242,0,0,1,15.94,2.923l.491-.109.157-1.408h2.741l.157,1.408.491.109a9.242,9.242,0,0,1,4.832,2.792l.34.37,1.3-.569L27.818,7.89l-1.14.839.151.479a9.348,9.348,0,0,1,0,5.583l-.151.479,1.14.839-1.371,2.374-1.3-.569-.34.37A9.242,9.242,0,0,1,19.976,21.077Z" transform="translate(127.749 792)"/><path style={{fill:'#043555'}} d="M123.728,201.654l-1-.984-2.572,2.626,2.626,2.572.984-1-1.621-1.588Z" transform="translate(19.188 600.736)"/><path style={{fill:'#043555'}} d="M314.871,201.654l1.588,1.621-1.621,1.588.984,1,2.626-2.572-2.572-2.626Z" transform="translate(-166.373 600.736)"/><path style={{fill:'#043555'}} d="M0,0H9.708V1.406H0Z" transform="matrix(0.206, -0.979, 0.979, 0.206, 144.024, 808.602)"/></g></svg>
  )
}

function WebFramework() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 27.199 24"><path style={{fill: '#0064fe'}} d="M24.111,24H3.088A3.091,3.091,0,0,1,0,20.912V3.088A3.091,3.091,0,0,1,3.088,0H24.111A3.091,3.091,0,0,1,27.2,3.088V20.912A3.091,3.091,0,0,1,24.111,24ZM3.088.92A2.171,2.171,0,0,0,.92,3.088V20.912A2.171,2.171,0,0,0,3.088,23.08H24.111a2.171,2.171,0,0,0,2.168-2.168V3.088A2.171,2.171,0,0,0,24.111.92Zm0,0" transform="translate(0 0)"/><path style={{fill: '#0064fe'}} d="M241.51,245.354h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -228.375)"/><path style={{fill: '#0064fe'}} d="M241.51,295.963h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -275.659)"/><path style={{fill: '#0064fe'}} d="M241.51,144.135h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -133.806)"/><path style={{fill: '#0064fe'}} d="M241.51,194.744h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -181.09)"/><path style={{fill: '#0064fe'}} d="M26.739,80.65H.46a.46.46,0,0,1,0-.92H26.739a.46.46,0,0,1,0,.92Zm0,0" transform="translate(0 -74.492)"/><path style={{fill: '#0064fe'}} d="M80.56,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,80.56,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,80.56,26.138Zm0,0" transform="translate(-73.93 -23.562)"/><path style={{fill: '#0064fe'}} d="M30.126,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,30.126,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,30.126,26.138Zm0,0" transform="translate(-26.81 -23.562)"/><path style={{fill: '#0064fe'}} d="M131,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,131,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,131,26.138Zm0,0" transform="translate(-121.054 -23.562)"/><path style={{fill: '#0064fe'}} d="M62.8,154.11H54.46a.46.46,0,0,1-.46-.46v-9.975a.46.46,0,0,1,.46-.46H62.8a.46.46,0,0,1,.46.46v9.975A.46.46,0,0,1,62.8,154.11Zm-7.884-.92h7.424v-9.055H54.92Zm0,0" transform="translate(-50.452 -133.806)"/></svg>
  )
}

function Check() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path style={{fill: '#fff'}} d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0Zm6.881,8.667L10.453,17.6a.893.893,0,0,1-1.262,0L5.619,14.024A.893.893,0,1,1,6.859,12.74l.022.022,2.94,2.94,8.3-8.3a.893.893,0,0,1,1.262,1.262Z"/></svg>)
}

function Sol() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path style={{fill: '#fff'}} d="M1.465,12.5A11.034,11.034,0,0,1,18.808,3.447h-1.42a.732.732,0,1,0,0,1.465h3.432a.732.732,0,0,0,.732-.732V.747a.732.732,0,0,0-1.465,0V2.57A12.5,12.5,0,0,0,1.676,18.75a.732.732,0,1,0,1.268-.734A11.028,11.028,0,0,1,1.465,12.5Z" transform="translate(0 0)"/><path style={{fill: '#fff'}} d="M90.464,120.878a.732.732,0,0,0-1.268.734,11.033,11.033,0,0,1-15.863,14.57h1.419a.732.732,0,0,0,0-1.465H71.319a.732.732,0,0,0-.732.732v3.432a.732.732,0,0,0,1.465,0v-1.825a12.5,12.5,0,0,0,18.412-16.178Z" transform="translate(-67.14 -114.628)"/><path style={{fill: '#fff'}} d="M139.641,125.7a.732.732,0,0,0-.073-.556l-.977-1.691a.732.732,0,0,0-1-.268l-.664.383a5.316,5.316,0,0,0-1.847-1.067v-.766a.732.732,0,0,0-.732-.732h-1.953a.732.732,0,0,0-.732.732v.766a5.317,5.317,0,0,0-1.847,1.067l-.664-.383a.732.732,0,0,0-1,.268l-.977,1.692a.732.732,0,0,0,.268,1l.664.383a5.4,5.4,0,0,0,0,2.133l-.664.383a.732.732,0,0,0-.268,1l.977,1.691a.732.732,0,0,0,1,.268l.664-.383a5.316,5.316,0,0,0,1.847,1.067v.766a.732.732,0,0,0,.732.732h1.953a.732.732,0,0,0,.732-.732v-.766a5.316,5.316,0,0,0,1.847-1.067l.664.383a.732.732,0,0,0,1-.268l.977-1.691a.732.732,0,0,0-.268-1l-.664-.383a5.406,5.406,0,0,0,0-2.133l.664-.383A.732.732,0,0,0,139.641,125.7Zm-6.27,3.847a1.953,1.953,0,1,1,1.953-1.953A1.953,1.953,0,0,1,133.371,129.545Z" transform="translate(-120.871 -115.092)"/></svg>
  )
}

function Cancel() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25.001" height="25" viewBox="0 0 25.001 25"><path style={{fill:'#fff'}} d="M21.343,3.662a12.5,12.5,0,1,0,0,17.687A12.52,12.52,0,0,0,21.343,3.662ZM17.658,16.19a1.042,1.042,0,1,1-1.474,1.474L12.5,13.978,8.818,17.663a1.042,1.042,0,0,1-1.474-1.474L11.027,12.5,7.343,8.821A1.042,1.042,0,1,1,8.816,7.347L12.5,11.031l3.684-3.684a1.042,1.042,0,1,1,1.474,1.474L13.974,12.5Z" transform="translate(0 -0.005)"/></svg>
  )
}

const FlexWrapper = styled.div`
  display: flex;
  margin-left: 100px;
  padding-top: 30px;
  margin-bottom: 30px;
  > div {
    width: calc(50% - 24px);
    margin-right: 24px;
  }

`

const Entities = styled.div`
  border: 1px solid #DDDDDD;
  background: #F7FAFD 0% 0% no-repeat padding-box;

  > header {
    font: normal normal 600 25px/36px Muli;
    opacity: 1;
    margin-bottom: 15px;
    padding: 8px 16px;
  }
  > div {
    height: 700px;
    // height: 100%;
    overflow: auto;
    padding: 0px 12px;

    /* total width */
    &::-webkit-scrollbar {
      background-color: transparent;
      width: 8px;
    }

    /* background of the scrollbar except button or resizer */
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    /* scrollbar itself */
    &::-webkit-scrollbar-thumb {
      background-color: #C9C9C9;
      border-radius: 4px;
    }

    /* set button(top and bottom of the scrollbar) */
    &::-webkit-scrollbar-button {
      display:none;
    }
  }
`

const Projects = styled(Entities)`
  > div {
    height: 900px;

    /* total width */
    &::-webkit-scrollbar {
      background-color: transparent;
      width: 8px;
    }

    /* background of the scrollbar except button or resizer */
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    /* scrollbar itself */
    &::-webkit-scrollbar-thumb {
      background-color: #C9C9C9;
      border-radius: 4px;
    }

    /* set button(top and bottom of the scrollbar) */
    &::-webkit-scrollbar-button {
      display:none;
    }
  }
`