import Pagination from '@material-ui/lab/Pagination';
import { useStore } from 'effector-react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BasicTable from '../../shared/table-material';
import makeStore from '../../store/make-store';
import { caseCategoryTypes, casePriorityTypes, projectCategoryTypes } from '../../store/master-data';
import { PaginationWrapper } from '../projects/compliance-projects/attributes'
import Footer from '../../components/footer';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const { store, load } = makeStore('rev-projects/cases');

const headlines = [
    { headline: 'Code', key: 'code' },
    { headline: 'Challenge Type', key: 'type'},
    { headline: 'Challenge Description', key: 'challenge_description' },
];

const CasesList2 = () => {

  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const pageSize = 10;


  useEffect(() => {
    load();

  }, []);

  let data = useStore(store).data || [];

  let complianceProjectCompleted = 0
  let complianceProjectInProgress = 0
  let complianceProjectNotStarted = 0
  let complianceIssues = 0
  let challenges = 0

    data.map(data => {

        if (data.status === 'approved')
        complianceProjectCompleted += 1
        else if(data.status === 'created')
        complianceProjectNotStarted += 1
        else 
        complianceProjectInProgress += 1
    
        complianceIssues += data.issues_count
        ? data.issues_count
        : 0
    
        challenges += data.challenges_count
        ? data.challenges_count
        : 0
    })

  if (search || filters.length) {

    data = data.filter(({ name, entity_name, category_ids }) => {
      const caseInsesitiveSearch = search.toLowerCase();

      return (
        (name?.toLowerCase().includes(caseInsesitiveSearch) ||
          entity_name?.toLowerCase().includes(caseInsesitiveSearch)) &&
        // apply filters only if any
        (filters.length
          ? category_ids.some((id) => filters.includes(id))
          : true)
      );
    });
  }

  const handleFiltersChange = ({ target: { value } }) => {

    if (filters.includes(parseInt(value))) {
      setFilters((prevVal) => prevVal.filter((val) => val !== parseInt(value)));
    } else {
      setFilters((prevVal) => prevVal.concat([parseInt(value)]));
    }
  };

  const dataPaginated = data.slice(
    (pageNo - 1) * pageSize,
    pageNo * pageSize
  );

  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>

          <div className="table_wrapper">
              <BasicTable
                tableCells={headlines}

                rows={dataPaginated}
                renderCol={(colIndex, col) => {
                //   if (colIndex === 6) {
                //     return col ? col.map((key) => <CatergoryBadge key={key}>{caseCategoryTypes[key]?.label}</CatergoryBadge>) : '';
                //   }

                  if (colIndex === 0 ) {
                    return <FormControlLabel
                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label={col}
                  />
                  }

                  return false;
                }}
                keyField="id"
              />
            </div>

          <PaginationWrapper>
            <Pagination
              page={pageNo}
              count={Math.ceil(data.length / pageSize)}
              onChange={(_, pageNo) => setPageNo(pageNo)}
              size="small"
            />
          </PaginationWrapper>
      <Footer />

    </>
  );
};

const Priority = styled.span`
  background-color: ${props => props.active === 1 ? '#FFF1F1' : props.active === 2 ? '#EAF4FF' : '#FFF5DF'};
  color: ${props => props.active === 1 ? '#FF6060' : props.active === 2 ? '#005CC8' : '#FFB300'};
  border: ${props => props.active === 1 ? '1px solid #FF6060' : props.active === 2 ? '1px solid #005CC8' : '1px solid #FFB300'};
  font-size: 12px;
  padding: 3px;
  border-radius: 3px;
`;

const CatergoryBadge = styled.span`
    padding: 5px 10px;
    background:#F5F5F5;
    color:#1A6B8F;
    border-radius:15px;
    margin: 0px 4px 4px 0px;
`;

const Badge = styled.span`
  padding:5px 10px;
  background:${({ status }) => status === 'review' ? '#EB622B' :
    status === 'approve' ? '#3FBF11' :
      status === 'rejected' ? '#FF6060' :
        status === 'draft' ? '#FFBF00' :
          status === 'on-hold' ? '#999999' :
            status === 'submitted' ? '#0064FE' : '#EB622B'};         
    color: #fff;
    border-radius: 15px;
    text-transform: capitalize;
`;


export default CasesList2;
