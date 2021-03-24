import React from 'react'
import styled from 'styled-components'

export default function(props) {
  return(

    <Wrapper>
      <header> Downloads </header>

      <div className='info'>
        <div className='card'>
          <div className='inner'>
            <div className='icon'>
              <SVGDownload />
            </div>
            <div className='name'>
              <div> Download File 1 </div>
              <div className='description'>Download File 1</div>
            </div>
            
          </div>
        </div>
        <div className='card'>
          <div className='inner'>
            <div className='icon'>
              <SVGDownload />
            </div>
            <div className='name'>
              <div> Download File 1 </div>
              <div className='description'>Download File 1</div>
            </div>
            
          </div>
        </div>
        <div className='card'>
          <div className='inner'>
            <div className='icon'>
              <SVGDownload />
            </div>
            <div className='name'>
              <div> Download File 1 </div>
              <div className='description'>Download File 1</div>
            </div>
            
          </div>
        </div>
        <div className='card'>
          <div className='inner'>
            <div className='icon'>
              <SVGDownload />
            </div>
            <div className='name'>
              <div> Download File 1 </div>
              <div className='description'>Download File 1</div>
            </div>
            
          </div>
        </div>
        <div className='card'>
          <div className='inner'>
            <div className='icon'>
              <SVGDownload />
            </div>
            <div className='name'>
              <div> Download File 1 </div>
              <div className='description'>Download File 1</div>
            </div>
            
          </div>
        </div>
      
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 950px;
  height: 327px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #BBBBBB;
  padding-bottom: 25px;
  padding-right: 0;
  margin-top: 40px;
  > header {
    width: 100%;
    height: 81px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    line-height: 80px;
    padding-left: 40px;
  }
  > .info {
    height: 242px;
    width: 100%;
    display: flex;
    padding-left: 40px;
    padding-top: 30px;
    overflow: scroll;
    flex-wrap: wrap;

    > .card {
      width: 450px;
      height: 105px;
      

      > .inner {
        width: 400px;
        height: 80px;
        display: flex;
        padding-top: 12px;
        background: #F4F5FA 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;

        > .icon {
          margin-left: 10px;
          margin-right: 15px;
        }

        > .name {
          > .description {
            margin-top: 3px;
            height: 30px;
            width: 100%;
            oveflow: hidden;
            font: normal normal normal 12px/15px Muli;
            color: #000000;
          }
        }
      }
    }

  }
`

function SVGDownload() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45"><g transform="translate(-131 -2415)"><circle fill='#d3dde5' cx="22.5" cy="22.5" r="22.5" transform="translate(131 2415)"/><g transform="translate(59.666 2425)"><g transform="translate(85.334)"><g transform="translate(0)"><path fill='#1a6b8f' d="M92.93,20.528h0c.024.024.049.047.076.068l.037.028c.015.011.029.023.045.033l.045.028.042.025.047.023.045.021.047.017.049.017.047.012.052.013.055.008.046.007a1.048,1.048,0,0,0,.206,0l.046-.007.055-.008.052-.013.047-.012.049-.017.047-.017.045-.021.047-.023.042-.025.045-.028c.015-.01.03-.022.045-.033l.037-.028c.026-.022.052-.044.076-.068h0l7.292-7.292a1.042,1.042,0,0,0-1.473-1.473l-5.513,5.513V1.042a1.042,1.042,0,1,0-2.083,0V17.277l-5.513-5.513a1.042,1.042,0,0,0-1.473,1.473Z" transform="translate(-85.334)"/><path fill='#1a6b8f' d="M100.959,469.333H86.376a1.042,1.042,0,0,0,0,2.083h14.583a1.042,1.042,0,1,0,0-2.083Z" transform="translate(-85.334 -446.416)"/></g></g></g></g></svg>
  )
}