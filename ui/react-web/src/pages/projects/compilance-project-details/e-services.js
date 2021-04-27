import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import makeStore from '../../../store/make-store';
import { useParams } from 'react-router';
import { ButtonLink } from '../../entities/details';
import { projectCategoryTypes } from '../../../store/master-data';

const { load: loadComplianceProjects } = makeStore(
  ({ project_id }) =>
    `reference-data/rev-projects/${project_id}/compliance-projects-eservices`
);
const { load, update } = makeStore(({ id, q_id }) => `rev-compliance/${id}/questions${q_id ? `/${q_id}` : ''}`);

const EServices = ({ setTableProps }) => {
  const { project_id } = useParams();
  const [id, setId] = useState();
  const [serviceName, setServiceName] = useState('');
  const [data, setData] = useState({});
  const [markAll, setMarkAll] = useState(false);

  useEffect(() => {
    setData((prevVal) => {
      const updatedData = prevVal;

      Object.keys(updatedData).forEach((key) => {
        updatedData[key] = { ...updatedData[key], answer: !markAll };
      });

      return {...updatedData};
    })
  }, [markAll]);

  const handleEdit = (id, name) => {
    setId(id);
    setServiceName(name);
    load({ id }, (data) =>
      setData(
        data.reduce((prevVal, { id, question, answer }) => {
          return {
            ...prevVal,
            [id]: { question, answer: answer === 'yes' },
          };
        }, {})
      )
    );
  };

  useEffect(() => {
    loadComplianceProjects({ project_id }, (data) => {
      data = Object.values(data);

      if (data[0]?.id) {
        setId(data[0].id);
        setServiceName(data[0].label);
        load({ id: data[0].id }, (data) =>
          setData(
            data.reduce((prevVal, { id, question, answer }) => {
              return {
                ...prevVal,
                [id]: { question, answer: answer === 'yes' },
              };
            }, {})
          )
        );
      }

      setTableProps({
        rows: data,
        activeKey: data[0]?.id,
        activeClassName: 'active',
        renderCol: (colIndex, col) => {
          if (colIndex === 0) {
            return projectCategoryTypes[col]?.label;
          }

          if (colIndex === 2) {
            return (
              <ButtonLink onClick={() => handleEdit(col)}>
                Edit Compliance Record
              </ButtonLink>
            );
          }

          return false;
        },
      });
    });
  }, []);

  useEffect(() => {
    setTableProps((prevProps) => ({
      ...prevProps,
      activeKey: id,
      activeClassName: 'active',
    }))
  }, [id]);

  const updateData = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    Object.keys(data).forEach((key) => {
      update({ data: { answers: { [key]: data[key].answer ? 'yes' : 'no' }}, id, q_id: key });
    });
  };

  return (
    <>
      <OuterRowFlex>
        <div className="flex_row">
          <div className="flex_col_sm_8">
            <div className="flex_row">
              <div className="flex_col_sm_5">
                <LightGreyText>{'Questionnaire for '}</LightGreyText>
              </div>

              <div className="flex_col_sm_6">
                {serviceName && <BlueBorder>{serviceName}</BlueBorder>}
              </div>
            </div>
          </div>
        </div>
      </OuterRowFlex>

      <OuterRowFlex>
        <div className="flex_row">
          <div className="flex_col_sm_6"></div>
          <div className="flex_col_sm_6">
            <SwitchContainer>
              {'Mark all as Yes'}
              <Switch
                checked={markAll}
                onClick={() => setMarkAll((prevVal) => !prevVal)}
                name="mark_all"
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              {'No'}
            </SwitchContainer>
          </div>
        </div>
      </OuterRowFlex>

      {Object.keys(data).map((key) => (
        <OuterRowList key={data[key].question}>
          <div className="flex_row">
            <OuterSwitchText className="flex_col_sm_8">
              <SwitchText>{data[key].question}</SwitchText>
            </OuterSwitchText>
            <div className="flex_col_sm_4">
              <SwitchContainer>
                {'Yes'}
                <Switch
                  checked={!data[key].answer}
                  onClick={() => {
                    updateData(key, { ...data[key], answer: !data[key].answer });
                  }}
                  color="default"
                />
                {'No'}
              </SwitchContainer>
            </div>
          </div>
        </OuterRowList>
      ))}

      <OuterSubmit className="flex_col_sm_12 text-right">
        <button className="add_more" onClick={handleSubmit}>
          {'Save'}
        </button>
      </OuterSubmit>
    </>
  );
};

const OuterSubmit = styled.div`
  margin-top: 20px;
`;

const SwitchText = styled.span`
  color: #000000;
`;

const OuterSwitchText = styled.div`
  display: flex;
  align-items: center;
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
}
`;
// justify-content: flex-end;

const OuterRowList = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const OuterRowFlex = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LightGreyText = styled.span`
  color: #666666;
`;

const BlueBorder = styled.span`
  color: #2680eb;
  border: 2px solid #2680eb;
  padding: 5px 15px;
  border-radius: 20px;
  white-space: nowrap;
`;

export default EServices;
