import React from 'react'
import styled from 'styled-components'

export function SVGCrown({left}) {
  return(
    <div style={{marginLeft: left || '0'}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#ffbf00'd="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm6.989,10.044L17.9,16.377a.75.75,0,0,1-.739.623H6.837a.75.75,0,0,1-.739-.623L5.011,10.044a.75.75,0,0,1,1.068-.8l2.894,1.409,2.372-4.267a.779.779,0,0,1,1.311,0l2.372,4.267,2.894-1.409a.749.749,0,0,1,1.067.8Z"/></svg>
    </div>
    
  )
}

export function SVGCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill='#fff' d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.5,7.5,0,0,0,7.5,0Zm4.129,5.2L6.272,10.557a.536.536,0,0,1-.757,0L3.371,8.414a.536.536,0,1,1,.744-.771l.013.013L5.893,9.421l4.978-4.978a.536.536,0,0,1,.757.757Z"/></svg>
  )
}
export function SVGCancel() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g transform="translate(0 -0.005)"><g transform="translate(0 0.005)"><path fill='#fff' d="M12.806,2.2a7.5,7.5,0,1,0,0,10.612A7.512,7.512,0,0,0,12.806,2.2ZM10.6,9.716a.625.625,0,1,1-.884.884L7.5,8.389,5.291,10.6a.625.625,0,0,1-.884-.884L6.616,7.5l-2.21-2.21A.625.625,0,0,1,5.29,4.41L7.5,6.621l2.21-2.21a.625.625,0,0,1,.884.884L8.385,7.5Z" transform="translate(0 -0.005)"/></g></g></svg>
  )
}

export function SVGSolution() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g transform="translate(0)"><path fill='#fff' d="M.879,7.5A6.621,6.621,0,0,1,11.285,2.068h-.852a.439.439,0,1,0,0,.879h2.059a.439.439,0,0,0,.439-.439V.448a.439.439,0,1,0-.879,0V1.542A7.5,7.5,0,0,0,1.006,11.25a.439.439,0,0,0,.761-.44A6.617,6.617,0,0,1,.879,7.5Z" transform="translate(0)"/><path fill='#fff' d="M82.513,120.732a.439.439,0,0,0-.761.44,6.62,6.62,0,0,1-9.518,8.742h.851a.439.439,0,0,0,0-.879H71.026a.439.439,0,0,0-.439.439v2.059a.439.439,0,0,0,.879,0v-1.1a7.5,7.5,0,0,0,11.047-9.707Z" transform="translate(-68.519 -116.982)"/><path fill='#fff' d="M134.615,123.818a.439.439,0,0,0-.044-.333l-.586-1.015a.439.439,0,0,0-.6-.161l-.4.23a3.19,3.19,0,0,0-1.108-.64v-.46a.439.439,0,0,0-.439-.439h-1.172a.439.439,0,0,0-.439.439v.46a3.19,3.19,0,0,0-1.108.64l-.4-.23a.439.439,0,0,0-.6.161l-.586,1.015a.439.439,0,0,0,.161.6l.4.23a3.243,3.243,0,0,0,0,1.28l-.4.23a.439.439,0,0,0-.161.6l.586,1.015a.439.439,0,0,0,.6.161l.4-.23a3.19,3.19,0,0,0,1.108.64v.46a.439.439,0,0,0,.439.439h1.172a.439.439,0,0,0,.439-.439v-.46a3.19,3.19,0,0,0,1.108-.64l.4.23a.439.439,0,0,0,.6-.161l.586-1.015a.439.439,0,0,0-.161-.6l-.4-.23a3.244,3.244,0,0,0,0-1.28l.4-.23A.439.439,0,0,0,134.615,123.818Zm-3.762,2.309a1.172,1.172,0,1,1,1.172-1.172A1.172,1.172,0,0,1,130.853,126.127Z" transform="translate(-123.353 -117.455)"/></g></svg>
  )
}