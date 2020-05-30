import {
  useParams
} from 'react-router-dom';

export function useTo(path, exact=false) { 
  const { id } = useParams()
  const eid = exact ?  id : ':id(\\d+|new)'
  return `/compliance/${eid}/${path}`
}