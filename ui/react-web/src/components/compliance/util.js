import {
  useParams,
  useLocation
} from 'react-router-dom';

export function useTo(path, exact=false) { 
  const { project_id } = useParams()
  const eid = exact ?  project_id : ':project_id(\\d+|new)'
  return `/compliance/${eid}/${path}`
}


export function useQuery() {
  return new URLSearchParams(useLocation().search);
}