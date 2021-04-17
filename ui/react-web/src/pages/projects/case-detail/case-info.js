import React, { useState } from 'react';
import styled from 'styled-components';
import leftArrow from '../../../assets/images/left-arrow.svg';
import textDocumentIcon from '../../../assets/images/text-document.svg';
import editIcon from '../../../assets/images/edit.svg';
import groundMapping from '../../../assets/images/ground-mapping.svg';
import attachment from '../../../assets/images/attachment.svg'
import download from '../../../assets/images/download.svg'


const AngleRight = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10.801"
            height="20"
            viewBox="0 0 10.801 20"
        >
            <path
                fill="#cfcfcf"
                d="M128.316,9.451,119.065.226a.775.775,0,1,0-1.095,1.1L126.67,10l-8.7,8.676a.775.775,0,0,0,1.1,1.1l9.251-9.225a.775.775,0,0,0,0-1.1Z"
                transform="translate(-117.742 0)"
            />
        </svg>
    );
};

export default function () {
    const [step, setStep] = useState(1);

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
                </InnerCol1>

                <InnerCol2 className="flex_col_sm_6">
                    <OrangeBtn>
                        <GroundMappingIcon src={groundMapping} />
                        {'Ground Mapping'}
                    </OrangeBtn>

                    <EditOuter className="edit-icon">
                        {'Edit'}
                        <IconEdit src={editIcon} />
                    </EditOuter>

                    <DateAdded>
                        {'Added Date'}
                        <br />
                        <b>{'22/02/2021'}</b>
                    </DateAdded>
                </InnerCol2>
            </div>

            <CaseOuter className="flex_row">
                <div className="flex_col_sm_8">
                    <LightGreyText>
                        {'Case Title'}
                    </LightGreyText>
                    <p>
                        {'Two-factor authentication to make private, E-mail after registration so'}
                    </p>
                </div>

                <TextAlign right={true} className="flex_col_sm_4">
                    <LightGreyText>
                        {'Priority:'}
                        <PriorityType>
                            {'P1'}
                        </PriorityType>
                    </LightGreyText>
                </TextAlign>
            </CaseOuter>

            <OuterNewFlex className="flex_row">
                <div className="flex_col_sm_12">
                    <LightGreyText>
                        {'Case Description'}
                    </LightGreyText>
                    <p>
                        {'Two-factor authentication to make private, E-mail after registration so Two-factor authentication to make private, E-mail after registration so ….'}
                    </p>
                </div>
            </OuterNewFlex>

            <OuterNewFlex className="flex_row">
                <div className="flex_col_sm_8">
                    <LightGreyText>
                        {'Categories'}
                    </LightGreyText>
                    <p>
                        {['Clarification', 'Exception', 'Support', 'Relief', 'Suggestion'].map(item => (
                            <BadageCategoriesStyle>
                                {item}
                            </BadageCategoriesStyle>
                        ))}
                    </p>
                </div>
                <TextAlign center={true} className="flex_col_sm_4">
                    <LightGreyText>
                        {'SLA'}
                    </LightGreyText>
                    <DaysText>{'2 Days'}</DaysText>
                    <DelayedText><i>{'Delayed by 4 days'}</i></DelayedText>
                </TextAlign>
            </OuterNewFlex>

            <LightGreyText>
                {'Reference'}
            </LightGreyText>
            <OuterNewFlex xs={true} className="flex_row">
                <p>
                    <UList>
                        <li>
                            <LightGreyText>
                                {'Entity'}
                            </LightGreyText>
                            <br />
                            <BoldText>
                                {'ABC Infra & Service Company'}
                            </BoldText>
                        </li>
                        <ListAngleItem>
                            <AngleRight />
                        </ListAngleItem>
                        <li>
                            <LightGreyText>
                                {'Project'}
                            </LightGreyText>
                            <br />
                            <BoldText>
                                {'ABC Infra Project'}
                            </BoldText>
                        </li>
                        <ListAngleItem>
                            <AngleRight />
                        </ListAngleItem>
                        <li>
                            <LightGreyText>
                                {'Compliance Record'}
                            </LightGreyText>
                            <br />
                            <BoldText>
                                {'Web Compliance record'}
                            </BoldText>
                        </li>
                        <ListAngleItem>
                            <AngleRight />
                        </ListAngleItem>
                        <li>
                            <LightGreyText>
                                {'Section'}
                            </LightGreyText>
                            <br />
                            <BoldText>
                                {'Web Project Section'}
                            </BoldText>
                        </li>
                        <ListAngleItem>
                            <AngleRight />
                        </ListAngleItem>

                        <li>
                            <LightGreyText>
                                {'Parameter'}
                            </LightGreyText>
                            <br />
                            <BoldText>
                                {'Web Project Parameter'}
                            </BoldText>
                        </li>
                        <ListAngleItem>
                            <AngleRight />
                        </ListAngleItem>


                        <li>
                            <LightGreyText>
                                {'Attribute'}
                            </LightGreyText>
                            <br />
                            <BoldText>
                                {'Web Project Attribute'}
                            </BoldText>
                        </li>
                    </UList>
                </p>
            </OuterNewFlex>

            <LightGreyText>
                {'Attachments'}
            </LightGreyText>


            <OuterNewFlex className="flex_row">
                <div className="flex_col_sm_6">
                    <OuterAttachment>
                        <OuterAttachmentSpan>
                            <AttachmentIcon src={attachment} alt="attachment" />
                        </OuterAttachmentSpan>
                        <TextItem>
                            {'Case_Evidence_v1.pdf'}
                        </TextItem>

                        <TextItem>
                            {'14 MB'}
                        </TextItem>

                        <OuterAttachmentSpan>
                            <AttachmentIcon src={download} alt="attachment" />
                        </OuterAttachmentSpan>
                    </OuterAttachment>

                    <OuterAttachment>
                        <OuterAttachmentSpan>
                            <AttachmentIcon src={attachment} alt="attachment" />
                        </OuterAttachmentSpan>
                        <TextItem>
                            {'Case docs.docx'}
                        </TextItem>

                        <TextItem>
                            {'3.5 MB'}
                        </TextItem>

                        <OuterAttachmentSpan>
                            <AttachmentIcon src={download} alt="attachment" />
                        </OuterAttachmentSpan>
                    </OuterAttachment>


                    <OuterAttachment>
                        <OuterAttachmentSpan>
                            <AttachmentIcon src={attachment} alt="attachment" />
                        </OuterAttachmentSpan>
                        <TextItem>
                            {'Case docs.docx'}
                        </TextItem>

                        <TextItem>
                            {'3.5 MB'}
                        </TextItem>

                        <OuterAttachmentSpan>
                            <AttachmentIcon src={download} alt="attachment" />
                        </OuterAttachmentSpan>
                    </OuterAttachment>
                </div>
            </OuterNewFlex>

            <ExtraSpaceBottom />

        </React.Fragment >
    )
}

const ExtraSpaceBottom = styled.div`
    height:250px;
`

const OuterAttachmentSpan = styled.div``;

const AttachmentIcon = styled.img`
  height: 20px;
  width: 20px;
`

const TextItem = styled.span`
  font-size:15px;
  color:#666666;
  font-weight:bold;
`

const OuterAttachment = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 6px 3px;
  margin-top: 5px;
  border: 2px solid #ccc;
  cursor: pointer;
  box-shadow: 0px 1px 2px #00000029;
`
const BoldText = styled.span`
    font-weight:bold;
`

const ListAngleItem = styled.li`
    padding: 5px 10px;
`

const UList = styled.ul` 
    display: inline-flex;
    margin-top: 21px !important;
    margin-left: 0px !important;
    padding: 0px !important;
    font-size:11px
`

const TextAlign = styled.div`
    text-align:  ${props => props.center ? 'center' : props.left ? 'left' : 'right'}
`

const OuterNewFlex = styled.div`
    margin: ${props => props.sm ? '10px 0px !important;' : props.xs ? '5px 0px !important;' : '20px 0px !important;'}
`

const DelayedText = styled.div`
    letter-spacing: 0px;
    color: #FF0000;
    margin:10px 0px;
`


const DaysText = styled.div`
    letter-spacing: 0px;
    color: #000000;
    margin:10px 0px;
    text-transform: uppercase;
`

const BadageCategoriesStyle = styled.span`
    font-size: 12px;
    padding: 8px 25px;
    color: #1A6B8F;
    background: #e5e2e2;
    border: 1px solid #e5e2e2;
    border-radius: 15px;
    margin: 0px 5px;
`

const CaseOuter = styled.span`
  padding-top: 65px;
`

const LightGreyText = styled.span`
    color:#999999;
`

const PriorityType = styled.span`
    color: #FF6060;
    font-size: 10px;
    padding: 1px;
    border: 2px solid #FF6060;
    margin: 5px;
    border-radius: 3px;
`

const DateAdded = styled.span`
  font-size: 12px;
  padding: 5px 15px;
  margin: 0px 10px;
`
const IconEdit = styled.img`
  padding-left:5px;
`
const EditOuter = styled.span`
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  border-radius: 3px;
  padding: 9px 15px;
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
