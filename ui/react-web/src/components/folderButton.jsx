import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles({
    root: props =>  ({
        height: 63,
        width: 300,
        background: props.active ? '#E8EEF3' : '#ffffff ',
        boxShadow: '0px 1px 2px #00000029',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 20px',
        font: 'normal normal normal 15px/19px Muli',
        marginBottom: 12,
      
        '> div': {
          display: 'flex',
          alignItems: 'center',
      
          svg: {
            marginRight: 20,
            path: {
                fill: props.active ? '#666' : '',

              },
            
          }
        },

        '> svg': {
            '&:last-child': {
                display: props.active ? 'block' : 'none',
            }
        },

    }),
  });

const FolderButton = props => {
    const classes = useStyles(props);
    return <Button className={ classes.root } onClick={ props.onClick } >
        <div>
            <FolderIcon />
            <span>{props.text}</span>
        </div>
            {props.active && <RightArrow />}
    </Button>
}

const FolderIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26.09"
      height="20"
      viewBox="0 0 26.09 20"
    >
      <defs>
        <style></style>
      </defs>
      <g transform="translate(0 -47.619)">
        <g transform="translate(0 47.619)">
          <path
            fill="#ddd"
            d="M23.788,50.243H13.193l-2.11-2.509a.32.32,0,0,0-.256-.115H2.3A2.325,2.325,0,0,0,0,49.946V65.293a2.325,2.325,0,0,0,2.3,2.325H23.788a2.325,2.325,0,0,0,2.3-2.325V52.568A2.325,2.325,0,0,0,23.788,50.243Z"
            transform="translate(0 -47.619)"
          />
        </g>
      </g>
    </svg>
);

const RightArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.645"
      height="10"
      viewBox="0 0 20.645 10"
    >
      <defs>
        <style></style>
      </defs>
      <path
        fill="#666"
        d="M20.409,136.429h0l-4.214-4.194a.807.807,0,0,0-1.138,1.143l2.829,2.815H.806a.806.806,0,1,0,0,1.613H17.885l-2.829,2.816a.806.806,0,0,0,1.138,1.143l4.214-4.194h0A.807.807,0,0,0,20.409,136.429Z"
        transform="translate(0 -132)"
      />
    </svg>
);

export default FolderButton
