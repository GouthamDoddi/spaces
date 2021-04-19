import React from 'react';
import styled from 'styled-components';

//images imported
import leftArrow from '../../../assets/images/left-arrow.svg';
import textDocumentIcon from '../../../assets/images/text-document.svg';
import groundMapping from '../../../assets/images/ground-mapping.svg';
import cancelIcon from '../../../assets/images/cancel.svg'
// material icons
import AddIcon from '@material-ui/icons/Add';

export default function () {
    return (
        <React.Fragment>
            <div className="flex_row">
                <InnerCol1 className="flex_col_sm_6">
                    <ImageLeftArrow src={leftArrow} alt="left-arrow" />
                    <ImageAttachment src={textDocumentIcon} alt="left-arrow" />
                    <SpanTextColor>
                        {'Case ID: 2356'}
                    </SpanTextColor>
                    <BlueBadage>
                        {'Submitted'}
                    </BlueBadage>

                    <TextSelected>
                        {'1 Selected'}
                    </TextSelected>
                </InnerCol1>

                <InnerCol2 className="flex_col_sm_6">
                    <OrangeBtn>
                        <GroundMappingIcon src={groundMapping} />
                        {'Save Mapping'}
                    </OrangeBtn>

                    <EditOuter className="edit-icon">
                        {'Cancel'}
                        <IconEdit src={cancelIcon} />
                    </EditOuter>

                    <DateAdded>
                        {'Added Date'}
                        <br />
                        <b>{'22/02/2021'}</b>
                    </DateAdded>
                </InnerCol2>
            </div>

            <OuterRowSpace extraSpace={true} className="flex_row">
                <div className="flex_col_sm_12">
                    <TextStyleItem boldFont={true}>
                        {'Mapping Grounds'}
                    </TextStyleItem>
                    <SubLabelText boldFont={true} smallFont={true}>
                        {'Select the grounds below to map with case ID:2354'}
                    </SubLabelText>
                </div>
                <br />
            </OuterRowSpace>

            <OuterRowSpace className="flex_row">
                <div className="flex_col_sm_4">
                    <select
                        name="role"
                        value={''}
                    // onChange={handleChange}
                    >
                        <option value="">{'Select Status'}</option>
                    </select>
                </div>

                <div className="flex_col_sm_4">
                    <input
                        type="text"
                        placeholder="Select Ground"
                        name="ground"
                        value={''}
                    />
                </div>

                <div className="flex_col_sm_4">
                    <CustomButton>
                        <AddIcon />
                        {'Create Group'}
                    </CustomButton>
                </div>
            </OuterRowSpace>

        </React.Fragment>
    )
}

const CustomButton = styled.button`
    background-color: #EB622B;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid #EB622B;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
`

const OuterRowSpace = styled.div`
    margin-top: ${props => props.extraSpace ? '65px !important' : '10px !important'};
`;

const TextStyleItem = styled.span`
    font-weight: ${props => props.boldFont ? 'bold' : 'normal'};
    font-size: ${props => props.smallFont ? '13px' : '16px'};
    margin-bottom:15px;
`

const SubLabelText = styled.p`
    font-weight: ${props => props.boldFont ? 'bold' : 'normal'};
    font-size: ${props => props.smallFont ? '13px' : '16px'};
    margin-bottom:15px;
`;

const TextSelected = styled.span`
    font-size: 13px;
    padding: 5px 10px;
    display: flex;
    margin-left: 35px;
    color: #005CC8;
    font-weight: bold;
`

const DateAdded = styled.span`
  font-size: 12px;
  padding: 5px 15px;
  margin: 0px 10px;
`
const IconEdit = styled.img`
  padding-left:5px;
  height:9px;
`
const EditOuter = styled.span`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  border-radius: 3px;
  padding: 9px 15px;
  font-size:14px;
`

const GroundMappingIcon = styled.img`
  padding-right: 5px;
`
const OrangeBtn = styled.span`
  background: #EB622B;
  padding: 10px 20px;
  border-radius: 3px;
  color: #fff;
  margin-right:10px;
  font-size: 12px;
`

const SpanTextColor = styled.span`
  color:#666666;
  padding-left:5px;
  padding-right:5px;
`

const BlueBadage = styled.span`
  font-size: 12px;
  background: #0064FE;
  padding: 5px 10px;
  border-radius: 20px;
  color: #fff;  
  margin: 0px 10px;
`

const ImageLeftArrow = styled.img`
  cursor:pointer;
`
const ImageAttachment = styled.img`
  padding-right:10px;
  padding-left:35px;
  height: 30px;
`

const InnerCol1 = styled.div`
  display:flex;
  align-items: center;
  height:70px;
`

const InnerCol2 = styled.div`
  display:flex;
  align-items: center;
  height:70px;
`