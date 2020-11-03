

export const projectList = () => '/projects'
export const projectPath = () => `/projects/:project_id(\\d+)`
export const projectProfile = ({id, expand=false, sub=null}) => {
  const p = (expand ? `/projects/${id}/profile` : '/projects/:project_id(\\d+)/profile')
  return sub ? `${p}/${sub}` : p
}

export const compliance = ({id, expand=false, sub=null}={}) => {
  const p = (expand ? `/projects/${id}/compliance` : '/projects/:project_id(\\d+)/compliance')
  return sub ? `${p}/${sub}` : p
}

export const complianceAttr = ({id, section_id, expand=false, sub=null}={}) => {
  // console.log({section_id})
  const p = (expand ? `/projects/${id}/compliance/sections/${section_id}/attrs` : '/projects/:project_id(\\d+)/compliance/sections/:section_id(\\d+)/attrs')
  return sub ? `${p}/${sub}` : p
}

export const entityList = () => '/entities'
export const entityEnter = ({entity_id, expand=false}={}) => (
  (expand ? `/entities/${entity_id}` : '/entities/:entity_id(\\d+)')
)
export const entityProfile = ({entity_id, expand=false}={}) => (
  (expand ? `/entities/${entity_id}/profile` : '/entities/:entity_id(\\d+)/profile')
)

export const entityCommm = ({entity_id, expand=false}={}) => ((expand ? `/entities/${entity_id}/communication` : '/entities/:entity_id(\\d+)/communication'))