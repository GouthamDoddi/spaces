import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styled, {css} from 'styled-components'
import { Select, toOpt } from '../../../components/form'
import { get } from '../../../store/api'
import { cleanedEntities } from '../../../store/master-data'
import rtl from 'styled-components-rtl'
import { t, to } from '../../../utils/translate'



export default function({entities=[], projects=[], lang,  ...props}) {
  // console.log("THEME", props.theme)
  let defaultSelectedEntity = {label: t('all'), value: 0}
  let defaultSelectedProject = {label: t('all'), value: 0}
  const {entity_id, project_id} = useParams()
  const [entitiesForSelect, setEntitiesForSelect] = useState([])
  const [projectsForSelect, setProjectsForSelect] = useState([])
  const [selectedEntity, setSelectedEntity] = useState(defaultSelectedEntity)
  const [selectedProject, setSelectedProject] = useState(defaultSelectedProject)

  useEffect( () => {
    console.log("inside use effect")

    const data = [defaultSelectedEntity, ...entities.map((o) => ({label: to(o, 'name'), value: o.id}))]

    setEntitiesForSelect(data.length < 2 ? cleanedEntities : data)
    getProjects(entity_id)
    // const se = cleanedEntities[entity_id]
    // if(se?.id == 0) se.name = t('all')
    if(entity_id) setSelectedEntity(cleanedEntities[entity_id])

  }, [entity_id, project_id, lang])
  
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
    const eid = selectedEntity?.value >= 0 ? selectedEntity?.value : entity_id
    const pid = selectedProject?.value >= 0 ?  selectedProject?.value : project_id
    // console.log("Clicked", eid, pid)
    if(eid > 0 && pid > 0) {
      window.location.hash = `/qg/${eid}/${pid}`
    } else if (eid > 0){
      // alert(`pid: ${pid},eid: ${eid}`)
      window.location.hash = `/agency/${eid}`
    } else {
      // alert(`pid: ${pid},eid: ${eid}`)
      window.location.hash = '/board'
    }
  }

  

  return (
    <Filters>
      <div className='selectors'>
        <div> 
          <Select label={t('filter_by_entity')}
            options={toOpt(entitiesForSelect)}
            onChange={(e, ...args) => {
              console.log("hi", e)
              setSelectedEntity(e)
              console.log(selectedEntity)
              setSelectedProject(defaultSelectedProject)
              getProjects(e.value)
            }}
            value={selectedEntity}
          />
        </div>
        <div>
          <Select label={t('filter_by_project')}
            options={projectsForSelect}
            onChange={(e, ...args) => {
              setSelectedProject(e)
            }}
            value={selectedProject}
          /></div>
      </div>
      <div className='actions'>
        <div onClick={() => setSelectedEntity(defaultSelectedEntity)}> {t('reset')} </div> 
        <div onClick={viewDashboard}> {t('view_dashboard')} </div>
      </div>
    </Filters>
  )
}


const Filters = styled.div`
  
  height: 121px;
  background: #F7FAFD 0% 0% no-repeat padding-box;
  ${p => console.log(`${p.theme.dir} - d`)}
  ${rtl`
    padding-left: 100px;
  `}

  display: flex;
  justify-content: space-between;

  .selectors {
    align-self: center;
    display: flex;
    > div {
      ${rtl`
        margin-right: 40px;
      `}
      
    }
  }

  .actions {
    align-self: center;
    display: flex;
    ${rtl`
      margin-right: 100px;
    `}
    
    > div:first-child {
      padding: 10px;
      ${rtl`
        margin-right: 25px;
      `}
    }
    > div:last-child {
      padding: 10px;
      background-color: #EB622B;
      color: #fff;
      border-radius: 4px;
    }
  }
`