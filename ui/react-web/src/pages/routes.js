

export const projectList = () => '/projects'
export const projectPath = () => `/projects/:project_id(\\d+)`
export const projectProfile = ({id, expand=false, sub=null}) => {
  const p = (expand ? `/projects/${id}/profile` : '/projects/:project_id(\\d+)/profile')
  return sub ? `${p}/${sub}` : p
}

export const compliance = ({id, expand=false, sub=null}) => {
  const p = (expand ? `/projects/${id}/compliance` : '/projects/:project_id(\\d+)/compliance')
  return sub ? `${p}/${sub}` : p
}

