

export const projectList = () => '/projects'
export const projectPath = () => `/projects/:project_id(\\d+|new)`
export const projectProfile = ({id, expand=false, sub=null}) => {
  const p = (expand ? `/projects/${id}/profile` : '/projects/:project_id(\\d+|new)/profile')
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
  (expand ? `/entities/${entity_id}` : '/entities/:entity_id(\\d+|new)')
)
export const entityProfile = ({entity_id, expand=false}={}) => (
  (expand ? `/entities/${entity_id}/profile` : '/entities/:entity_id(\\d+|new)/profile')
)
export const entityDetails = (entity_id) => `/entities/${entity_id}/details`;

export const entityCommm = ({entity_id, expand=false}={}) => ((expand ? `/entities/${entity_id}/communication` : '/entities/:entity_id(\\d+)/communication'))
export const entityAccess = ({entity_id, expand=false}={}) => ((expand ? `/entities/${entity_id}/access` : '/entities/:entity_id(\\d+)/access'))
export const entityService = ({entity_id, expand=false}={}) => ((expand ? `/entities/${entity_id}/services` : '/entities/:entity_id(\\d+)/services'))

/***
 * Policy Routes
 ***/

 export const policyList = () => '/policy'
 export const policyPath = () => `/policy/:policy_id(\\d+|new)`
 export const projectPolicy = ({id, expand=false, sub=null}) => {
   const p = (expand ? `/policy/${id}/profile` : '/policy/:policy_id(\\d+|new)/profile')
   return sub ? `${p}/${sub}` : p
 }
 