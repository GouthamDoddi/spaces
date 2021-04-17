import React, {  } from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function () {
    return (
        <React.Fragment>
            <OuterContainer className="flex_row">
                <div className="flex_col_sm_12">
                    {'This case is awaiting for your approval. Mark the status accordingly along with a note'}
                </div>
            </OuterContainer>


            <OuterContainer keepInline={true} mt={true} className="flex_row">
                <div className="flex_col_sm_12">
                    <SpanTextCustom>
                        {'Mark as'}
                    </SpanTextCustom>
                    <select
                        name="role"
                        value={''}
                    // onChange={handleChange}
                    >
                        <option value="test1">Approved</option>
                    </select>
                </div>
            </OuterContainer>

            <OuterContainer keepInline={true} mt={true} className="flex_row">
                <div className="flex_col_sm_12">
                    <div className="form_field_wrapper">
                        <div className="text_field_wrapper">
                            <TextAreaCustom name="description" value={''} placeholder="Add a comment" />
                        </div>
                    </div>
                </div>
            </OuterContainer>

            <OuterContainer mt={true} className="flex_row">
                <div className="flex_col_sm_12">
                    <SpanTextCustom>
                        {'Mark comment as'}
                    </SpanTextCustom>

                    <select
                        name="role"
                        value={''}
                    // onChange={handleChange}
                    >
                        <option value="test1">Visible to all</option>
                    </select>

                    <div className="flex_col_sm_12 text-right">
                        <ButtonSubmit>
                            {'Submit'}
                        </ButtonSubmit>
                    </div>
                </div>
            </OuterContainer>


            <OuterContainer mt={true}>
                <Card>
                    <CardContent>
                        <BtnStyleColored color={true}>{'Clarification'}</BtnStyleColored>
                        <br /> <br />
                        <CardTextStyle>
                            {'We noticed a dependency with another case and can expect a delay by 2 days'}
                        </CardTextStyle>
                        <br />
                        <CardTextStyle rt={true}>
                        {'22/02/2021'}
                        </CardTextStyle>
                        <br /> <br />
                    </CardContent>
                </Card>
            </OuterContainer>
            <OuterContainer mt={true}>
                <Card>
                    <CardContent>
                        <BtnStyleColored color={false}>{'Internal notes'}</BtnStyleColored>
                        <br /> <br />
                        <CardTextStyle>
                            {'Need to consult Risk team'}
                        </CardTextStyle>
                        <br />
                        <CardTextStyle rt={true}>
                        {'22/02/2021'}
                        </CardTextStyle>
                        <br />
                    </CardContent>
                </Card>
            </OuterContainer>

        </React.Fragment >
    )
}

const CardTextStyle = styled.span`
    font-size:14px;
    float:${props => props.rt ? 'right' : 'left'};
`;

const BtnStyleColored = styled.span`
    color:${props => props.color ? '#1A6B8F' : '#EB622B'};
    background-color: ${props => props.color ? '#F5F5F5' : '#FFF5D6'};
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 15px;
`

const ButtonSubmit = styled.button`
    background-color: #EB622B;
    padding: 10px 15px;
    border: none;
    margin-top: 15px;
    color: #fff;
`

const TextAreaCustom = styled.textarea`
    width:300px !important;
`;

const SpanTextCustom = styled.span`
    margin-right:10px;
`;

const OuterContainer = styled.div`
    padding:0px 5px;
    margin-top: ${props => props.mt ? '25px !important;' : '0px !important;'}
    white-space: ${props => props.keepInline ? 'nowrap' : 'none'}
`
