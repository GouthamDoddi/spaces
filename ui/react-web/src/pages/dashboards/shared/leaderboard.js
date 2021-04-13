import React from 'react'

import styled from 'styled-components'
import { SVGCrown } from './icons'
import rtl from 'styled-components-rtl'
import { t, numberToArabic } from '../../../utils/translate'
import { Select } from '../../../components/form'

export default function ({ leaderBoardData, type = 'Entities', lang, ...props }) {
  return (
    <LeaderBoard>
      <div className='header'>
        <span class='title'>
          {t('leaderboard')}
        </span>
        <Select
          options={[{ label: 'All', value: 'all' }, { label: 'Overall'}, { label: 'eService' }, { label: 'Portals/Websites' }, { label: 'Mobile Apps' }]}
          value={{ label: 'All', value: 'all' }}
        />
      </div>
      <div className='info'>
        <div className='title'> {t(`High Performing ${type}`)} </div>
        {leaderBoardData['High Performing Entities']?.map((o, i) => (
          <>
            <div>{i == 0 ? <SVGCrown left='-6px' /> : numberToArabic(i + 1, lang)}</div>
            <div>{t(o.name)}</div>
            <div>{numberToArabic(o.score?.toFixed(2), lang)}</div>
          </>
        ))}
        <div className='title'> {t(`Least Performing ${type}`)} </div>
        {leaderBoardData['Least Performing Entities']?.map((o, i) => (
          <>
            <div>{numberToArabic(i + 1, lang)}</div>
            <div>{t(o.name)}</div>
            <div>{numberToArabic(o.score?.toFixed(2), lang)}</div>
          </>
        ))}
      </div>
    </LeaderBoard>
  )
}

const LeaderBoard = styled.div`
  ${rtl`
    margin-left: 40px;
  `}
  
  border: 1px solid #BBBBBB;
  background-color: #fff;
  > .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 429px;
    min-width: 429px;
    height: 73px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    ${rtl`
      padding-left: 40px;
      padding-right: 20px;
    `}
    border-bottom: 1px solid #BBBBBB;
    > .title {
      height: 23px;
      font-size: 18px;
      font-weight: 600;
      color: #666666;      
    }
    > div {
      height: 56px;

      > div > div {
        width: 200px;
        background: #FFFFFF;
      }
    }
  }

  > .info {
    padding: 30px;
    display: grid;
    height: 654px;
    max-width: 429px;
    grid-template-columns: 50px 1fr 50px;
    grid-row-gap: 20px;
    > .title {
      grid-column: 1 / -1;
      font-size: 18px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 10px;
    }
  }
`