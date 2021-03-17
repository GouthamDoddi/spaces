import React from 'react'
import styled from 'styled-components'

export function SVGCrown({left}) {
  return(
    <div style={{marginLeft: left || '0'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#ffbf00'd="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm6.989,10.044L17.9,16.377a.75.75,0,0,1-.739.623H6.837a.75.75,0,0,1-.739-.623L5.011,10.044a.75.75,0,0,1,1.068-.8l2.894,1.409,2.372-4.267a.779.779,0,0,1,1.311,0l2.372,4.267,2.894-1.409a.749.749,0,0,1,1.067.8Z"/></svg>
    </div>
    
  )
}