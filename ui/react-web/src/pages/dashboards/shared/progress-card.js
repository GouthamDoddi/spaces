import styled from 'styled-components'

import React from 'react'
import { PieChart, Pie, Cell} from 'recharts'

// const pieData = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
// ];

const COLORS = ['#0064FE', '#FFBF00', '#D3DDE5', '#FF8042'];

export function CircularProgressCard({ level=1, full=30, par=20, non=40, total=60, ...props}) {
  const pieData = [  
    { name: 'Fully Compliant', value: full },
    { name: 'Partially Compliant', value: par },
    { name: 'Non Compliant', value: non }]
  return (
    <Box>
      <Banner color='#EB622B'> Mandate Level {level} </Banner>
      <Info>
        <div className='chart'>
          <PieChart width={200} height={200}>
            <Pie
              data={pieData}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className='legend'>
          <Score> {total}% Compliance </Score>
          <Legend>
            <SmallBox color={COLORS[0]} /> 
            <span> {full}% Fully Compliant</span>
          </Legend>
          <Legend>
            <SmallBox color={COLORS[1]} /> 
            <span> {par}% Partially Compliant</span>
          </Legend>
          <Legend>
            <SmallBox color={COLORS[2]} /> 
            <span> {non}% Non Compliant</span>
          </Legend>
        </div>
      </Info>
    </Box>
  )
}


export function BarProgressCard(props) {
  return (
    <Box>
      <Banner color='#1A6B8F'> Test Cases </Banner>
    </Box>
  )
}

const Box = styled.div`
  
  margin-bottom: 30px;
  width: 454px;
  height: 255px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DDDDDD;
`

const Banner = styled.div`
  height: 36px;
  margin-top: 12px;
  padding: 2px 23px; 
  display: inline-block;
  background: ${p => p.color} 0% 0% no-repeat padding-box;
  border-radius: 0px 5px 5px 0px;
  text-align: left;
  font: normal normal 600 20px/30px Muli;
  color: #FFFFFF;
`

const Info = styled.div`
  display: flex;
  > .chart {
    margin-right: 30px;
  }

  > .legend {
    margin-top: 15px;
  }
`

const Score = styled.div`
  font: normal normal 600 20px/30px Muli;
  color: #1A6B8F;
`

const SmallBox = styled.div`
  width: 15px;
  height: 15px;
  background: ${p => p.color} 0% 0% no-repeat padding-box;
  margin-right: 10px;
  margin-top: 5px;
`

const Legend = styled.div`
  display: flex;
  font: normal normal 600 15px/22px Muli;
  color: #000000;
  margin-top: 24px;
  
`