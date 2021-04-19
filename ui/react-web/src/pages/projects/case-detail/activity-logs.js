import React from 'react';
import styled from 'styled-components';

export default function () {
    return (
        <React.Fragment>
            <OuterWhite>
                {'John Doe updated the case title at 01-04-2021 12:05:02 AM'}
            </OuterWhite>
            <OuterWhite>
                {'Williams updated the case description and ground mapping at 01-04-2021 12:05:02 AM'}
            </OuterWhite>
            <OuterWhite>
                {'John Doe updated the reference mapping and attachments at 01-04-2021 12:05:02 AM'}
            </OuterWhite>
            <OuterWhite>
                {'Racheal added internal notes at 31-03-2021 09:16:43 AM'}
            </OuterWhite>
        </React.Fragment>
    )
}

const OuterWhite = styled.div`
    background-color: #fff;
    font-size: 13px;
    padding: 15px 10px;
    border: 1px solid #DEDEDE;
    letter-spacing: 0px;
    color: #000000;
    margin: 10px 0px;
`