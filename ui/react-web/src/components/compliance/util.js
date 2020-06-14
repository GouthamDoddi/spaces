import {
  useParams
} from 'react-router-dom';

export function useTo(path, exact=false) { 
  const { project_id } = useParams()
  const eid = exact ?  project_id : ':project_id(\\d+|new)'
  return `/compliance/${eid}/${path}`
}