import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { issuesByGroup } from '../../../store/master-data'
import { useParams } from 'react-router-dom'
import rtl from 'styled-components-rtl'
import { get } from '../../../store/api'
import Pagination from '@material-ui/lab/Pagination';

import { Select } from '../../../components/form';

import { t, to } from '../../../utils/translate';

export default function Insight({ hideFilter, height, lang, ...props }) {
  const selectOptions = [{ label: t('compliance_issues'), value: 1 }, { label: t('challenges'), value: 2 }];
  const { entity_id, project_id } = useParams()
  const [data, setData] = useState([])
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({ label: t('Sort'), value: undefined });

  const [ pageNo, setPageNo ] = useState(1);
  const pageSize = 20;

  const dataPaginated = data.slice(
    (pageNo - 1) * pageSize,
    pageNo * pageSize
  );

  const [selectedType, setSelectedType] = useState({});

  useEffect(() => {
    if (entity_id) {
      if (project_id) {
        if (issuesByGroup[entity_id] && issuesByGroup[entity_id][project_id]) {
          setData(issuesByGroup[entity_id][project_id])
        }
      } else {
        if (issuesByGroup[entity_id]) {
          setData(Object.values(issuesByGroup[entity_id]).flat())
        }
      }
    } else {
      setData(Object.values(issuesByGroup).flat().map((o) => Object.values(o)).flat().flat())
    }
  }, [entity_id, project_id])

  useEffect(() => {
    setSelectedType(selectOptions[0]);
  }, [lang]);

  const handleSort = (e) => {
    setSort(e);
    if (e.value === 'desc') {
      setData((prevValue) => prevValue.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else {
      setData((prevValue) => prevValue.sort((a, b) => new Date(a.date) - new Date(b.date)));
    }
  };


  const COLORS = { NC: '#EB622B', PC: '#005CC8' }

  return (
    <Box>
      <header>
        <span>{selectedType.label}</span>
        {hideFilter ? null :
          <Select
            options={selectOptions}
            onChange={(e) => {
              setSelectedType(e)
            }}
            value={selectedType}
          ></Select>
        }
      </header>
      { selectedType.value == 1 ?
        <InnerBox>
          <SearchSort>
            <SearchBar placeholder={t('Search') + ' ' + t('issues')} value={search} onChange={({ target: { value }}) => setSearch(value)} />
            <Select
              options={[{ label: t('Date Asc'), value: 'asc' }, { label: t('Date Desc'), value: 'desc' }]}
              onChange={handleSort}
              value={sort}
            />
          </SearchSort>
          {/* <Filter>
            <Legend><Circle color='#EB622B' />{t('non_compliant')}</Legend>
            <Legend><Circle color='#005CC8' />{t('partially_compliant')}</Legend>
          </Filter> */}
          {
            data.length > 0 ?
              <Cards height={height}>
                {
                  dataPaginated.map((o, i) => (o.project_name + ' ' + o.section_name).toLowerCase().includes(search.toLowerCase()) ? (
                    <Card color={COLORS[o.compl]} key={i}>
                      {/* <div className='bc'> {to(o, 'project_name')} <span> </span> {t(o.section_name)} </div> */}
                      <div className='bc'> {t(o.project_name.toLowerCase())} <span> </span> {t(o.section_name.toLowerCase())} </div>
                      <div className='title'>{t(o.description.toLowerCase())}</div>
                      <div className='footer'>
                        <div className='tag'>{t(o.category.toLowerCase())}</div>
                        <div className='date'>{lang && lang === "ar" ? new Date(o.date).toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }) : o.date} </div>
                      </div>
                    </Card>
                  ) : null)
                }
              </Cards> :
              <Cards><div className='no-data'> {t('NO ISSUES')} </div></Cards>
          }

        <Pagination
        page={pageNo}
        count={Math.ceil(data.length / pageSize)}
        onChange={(_, pageNo) => setPageNo(pageNo)}
        size="small"
        />


        </InnerBox> : <Challenges hideHeader />

      }
    </Box>
  )
}

export function Challenges({ hideHeader, height, ...props }) {
  const { entity_id, project_id } = useParams()
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState({ label: t('Sort'), value: undefined })
  const [data, setData] = useState([])
  useEffect(() => {
    const path = ['reports', 'challenges', entity_id, project_id].filter((e) => e)
    get(path.join('/'), {
      success: (json) => {
        setData(json.data)
      }, error: (e) => { console.log(e) }
    })
  }, [entity_id, project_id])

  const [ pageNo, setPageNo ] = useState(1);
  const pageSize = 20;

  const dataPaginated = data.slice(
    (pageNo - 1) * pageSize,
    pageNo * pageSize
  );

  const handleSort = (e) => {
    setSort(e);
    if (e.value === 'desc') {
      setData((prevValue) => prevValue.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else {
      setData((prevValue) => prevValue.sort((a, b) => new Date(a.date) - new Date(b.date)));
    }
  };


  const COLORS = { NC: '#EB622B', PC: '#005CC8' }

  return (
    <Box>
      { hideHeader ? null : <header><span> {t('Challenges')} </span></header>}

      <InnerBox>
        <SearchSort>
          <SearchBar placeholder={t('search') + ' ' + t('challenges')} value={search} onChange={({ target: { value }}) => setSearch(value)} />
          <Select
            options={[{ label: t('Date Asc'), value: 'asc' }, { label: t('Date Desc'), value: 'desc' }]}
            onChange={handleSort}
            value={sort}
          />
        </SearchSort>
        <Filter>

        </Filter>
        {
          data.length > 0 ?
            <Cards height={height}>
              {
                dataPaginated.map((o, i) => (o.project.name + ' ' + o.section.name).toLowerCase().includes(search.toLowerCase()) ? (
                  <Card2 color={COLORS[o.compl]} key={i}>
                    <div className='bc'> {o.project.name} <span> </span> {o.section.name} </div>
                    <div className='title'>{o.description}</div>
                    <div className='footer'>
                      <div className='tag'> {o.type.name}</div>
                      <div className='date'> {o.date} </div>
                    </div>
                  </Card2>
                ) : null)
              }
            </Cards> :
            <Cards><div className='no-data'> {t('NO ISSUES')} </div></Cards>
        }

        <Pagination
        page={pageNo}
        count={Math.ceil(data.length / pageSize)}
        onChange={(_, pageNo) => setPageNo(pageNo)}
        size="small"
        />

      </InnerBox>
    </Box>
  )
}

const SearchSort = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;

  .default__control {
    width: 120px;
    margin-right: 20px;
    background: #ffffff;
  }

  label {
    margin-bottom: 0px;
  }
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 6px 8px;
  border: 1px solid lightgray;
  outline: none;
  border-radius: 2px;
  margin-right: 20px;
`;

const ChallengeCard = styled.div`
  height: 104px;
  background: #F7F6F3 0% 0% no-repeat padding-box;
  > .footer {
    height: 30px;
    background: #E4E4E4 0% 0% no-repeat padding-box;

    > .tag {
      font: normal normal bold 12px/20px Muli;
      
      color: #FFFFFF;
      background: #EB622B 0% 0% no-repeat padding-box;
      border-radius: 11px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }

    > .date {
      font: normal normal normal 12px/15px Muli;
      color: #000000;
    }
  }

`
const Box = styled.div`
  // max-width: 758px;
  // min-width: 758px;
  // margin-top: 30px;
  flex: 1;
  // height: 990px;
  
  background: #F7FAFD 0% 0% no-repeat padding-box;
  border: 1px solid #DDDDDD;
  border-top-right: none;
  opacity: 1;


  > header {
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding-top: 18px;
    > span {
      font: normal normal 600 25px/36px Muli;
    }
    ${rtl`
      padding-left: 20px;
      padding-right: 20px;
    `}
    > div {
      label {
        display: none;
      }
      .default__control {
        width: auto;
        background: white;
      }
      .default__value-container {
        width: 150px;
      }
    }
  }
`

const InnerBox = styled.div`
  padding: 20px 0px 25px 20px;

`

const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  ${rtl`
    padding-right: 25px;
  `}
  
`

const Legend = styled.div`
  display: flex;
  font: normal normal normal 12px/15px Muli;
  color: #000000;
  ${rtl`
    margin-right: 30px;
  `}
  
`
const Circle = styled.div`
  ${rtl`
    margin-right: 5px;
  `}
  width: 15px;
  height: 15px;
  background: ${p => p.color} 0% 0% no-repeat padding-box;
  border-radius: 11px;

`

const Card = styled.div`
  height: auto;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  ${rtl`
    border-left: 2px solid ${p => p.color};
    margin-right: 20px;
  `}
  padding: 15px;
  margin-bottom: 12px;

  > .bc {
    font: normal normal normal 12px/18px Muli;
    color: #EB622B;
    text-transform: uppercase;
    opacity: 1;
     > span {
       color: #00000029;
     }
     margin-bottom: 3px;
  }
  > .title {
    font: normal normal 600 15px/27px Muli;
    color: #131313;
    height: auto;
  }
  > .footer {
    display: flex;
    margin-top: 11px;
    justify-content: space-between;
    > .tag {
      font: normal normal normal 10px/20px Muli;
      padding: 2px 10px 2px 10px;
      color: #1A6B8F;
      background: #F5F5F5 0% 0% no-repeat padding-box;
      border-radius: 11px;
    }
    > .date {
      font: normal normal normal 12px/18px Muli;
      color: #999999;
      margin-top: 5px;
    }
  }
`


const Card2 = styled.div`
  height: auto;
  background: #F7F6F3 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;  
  margin-bottom: 12px;
  margin-right: 15px;

  > .bc {
    font: normal normal normal 12px/18px Muli;
    color: #EB622B;
    text-transform: uppercase;
    
    opacity: 1;
     > span {
       color: #00000029;
     }
     margin-bottom: 3px;
    padding: 17px 15px 0 15px;
  }
  > .title {
    font: normal normal 600 15px/27px Muli;
    color: #131313;
    height: auto;
    padding: 0 15px;
    // margin-top: 10px;
  }
  > .footer {
    display: flex;
    padding: 0 15px;
    height: 30px;
    background: #E4E4E4 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-top: 6px;
    justify-content: space-between;
    > .tag {
      align-self: center;
      height: 20px;
      background: #EB622B 0% 0% no-repeat padding-box;
      border-radius: 11px;
      font: normal normal bold 12px/20px Muli;
      color: #FFFFFF;
      padding: 0px 15px 2px 15px;
    }
    > .date {
      font: normal normal normal 12px/18px Muli;
      color: #000;
      margin-top: 5px;
    }
  }
`


const Cards = styled.div`
  overflow: auto;
  height: ${p => p.height || '810px'};
  .no-data {
    text-align: center;
    margin-top: 100px;
  }

  /* total width */
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }

  /* background of the scrollbar except button or resizer */
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* scrollbar itself */
  &::-webkit-scrollbar-thumb {
    background-color: #C9C9C9;
    border-radius: 4px;
  }

  /* set button(top and bottom of the scrollbar) */
  &::-webkit-scrollbar-button {
    display:none;
  }
`

export { Insight }