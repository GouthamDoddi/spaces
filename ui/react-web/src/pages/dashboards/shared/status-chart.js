import React, { useState } from 'react'

import { Pie, PieChart  } from 'recharts';

export default function StatusChart({width=50, height=50, innerRadius=14, outerRadius= 20, value=200, prog,...props}) {

  return (
    <PieChart width={50} height={50}>
      <Pie
        data={[{name: '', value: value}]}
        cx={15}
        cy={15}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        fill="#FFBF00"
        startAngle={90}
        endAngle={90-prog/100*360}
      ></Pie>
    </PieChart>
  )
}