import {
  useParams
} from 'react-router-dom';

export function useTo(path, exact=false) { 
  const { policy_id } = useParams()
  const eid = exact ?  policy_id : ':policy_id(\\d+|new)'
  return `/formulation/${eid}/${path}`
}