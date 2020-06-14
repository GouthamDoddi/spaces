import makeStore from '../make-store'

export default  makeStore(({project_id}) => project_id ? `compliance/projects/${project_id}` : 'compliance/projects')