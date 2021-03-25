import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { Select } from '../../../components/form'
import { get } from '../../../store/api'
import { cleanedEntities } from '../../../store/master-data'

const defaultSelectedEntity = {label: 'All', value: 0}
const defaultSelectedProject = {label: 'All', value: 0}

export default function({entities=[], projects=[], ...props}) {
  const {entity_id, project_id} = useParams()
  const [entitiesForSelect, setEntitiesForSelect] = useState([])
  const [projectsForSelect, setProjectsForSelect] = useState([])
  const [selectedEntity, setSelectedEntity] = useState(defaultSelectedEntity)
  const [selectedProject, setSelectedProject] = useState(defaultSelectedProject)

  useEffect( () => {
    console.log("inside use effect")
    setEntitiesForSelect([defaultSelectedEntity, ...entities.map((o) => ({label: o.name, value: o.id}))])
    getProjects(entity_id)
  }, [entities, entity_id, project_id])
  
  const getProjects = (entity_id) => {
    if(!entity_id) return;
    get(`reports/${entity_id}/projects`, {
      success: (json) => { 
        const projects = json.data
        setProjectsForSelect([defaultSelectedProject, ...projects.map((o) => ({label: o.name, value: o.id}))])
      },      
      error: (json) => {}
    })
  }

  const viewDashboard = () => {
    const eid = selectedEntity?.value || entity_id
    const pid = selectedProject?.value || project_id

    if(eid > 0 && pid > 0) {
      window.location.hash = `/qg/${eid}/${pid}`
    } else if (eid > 0){
      window.location.hash = `/agency/${eid}`
    } else {
      window.location.hash = '/board'
    }
  }

  return (
    <Filters>
      <div className='selectors'>
        <div> 
          <Select label='Filter By Entity'
            options={entitiesForSelect}
            onChange={(e, ...args) => {
              setSelectedEntity(e)
              getProjects(e.value)
            }}
            value={selectedEntity}
          />
        </div>
        <div>
          <Select label='Filter By Project'
            options={projectsForSelect}
            onChange={(e, ...args) => {
              setSelectedProject(e)
            }}
            value={selectedProject}
          /></div>
      </div>
      <div className='actions'>
        <div onClick={() => setSelectedEntity(defaultSelectedEntity)}> Reset </div> 
        <div onClick={viewDashboard}> View Dashboard </div>
      </div>
    </Filters>
  )
}


const Filters = styled.div`
  height: 121px;
  background: #F7FAFD 0% 0% no-repeat padding-box;
  padding-left: 100px;

  display: flex;
  justify-content: space-between;

  .selectors {
    align-self: center;
    display: flex;
    > div {
      margin-right: 40px;
    }
  }

  .actions {
    align-self: center;
    display: flex;
    margin-right: 100px;
    > div:first-child {
      padding: 10px;
      margin-right: 25px;
    }
    > div:last-child {
      padding: 10px;
      background-color: #EB622B;
      color: #fff;
      border-radius: 4px;
    }
  }
`