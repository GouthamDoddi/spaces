import React from 'react';
import './breadcrumNav.css';


import qgate from '../assets/images/qgate.png'
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { BsChevronRight } from "react-icons/bs"


const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 120,
      border: theme,
    },
    MuiInputBase: {
    height: 38,
    borderRadius: 3,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));


export default function Navbar2 ({borderBottomColor}) {
    const classes = useStyles();
    const [age, setAge] = React.useState(5);
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (

      <nav className="navbar navbar-expand-lg navbar-white bg-white" style={{display: 'flex', marginTop: '6%'}}>
        <a className="navbar-brand"><img src={qgate} style={{ marginLeft: '23%', width: '50%' }} ></img></a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <BsChevronRight size={28} color='#CFCFCF' style={{ marginTop: '1%', marginRight: '2%', marginLeft: '2%' }}/>
            <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                State
                </InputLabel>
                <Select
                className={{ root: 'MuiInputBase-root', selected: 'selected' }}
                style={{ borderBottom: `2px solid ${borderBottomColor}`, color: {borderBottomColor} }}
                variant='standard'
                value={age}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-native-label-placeholder',
                }}
                >
                <option value={5}>ABC Infra And Service Program</option>
                <option value={10}>ABC Infra</option>
                <option value={20}>BBC Infra</option>
                <option value={30}>CBC Infra</option>
                </Select>
            </FormControl>
            <BsChevronRight size={28} color='#CFCFCF' style={{ marginTop: '1%', marginRight: '2%', marginLeft: '2%' }}/>
            <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                Entity
                </InputLabel>
                <Select
                className={{ root: 'MuiInputBase-root', selected: 'selected' }}
                value={age}
                style={{ borderBottom: `2px solid ${borderBottomColor}`, color: {borderBottomColor} }}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-native-label-placeholder',
                }}
                >
                <option value={5}>ABC Infra And Service Program</option>
                <option value={10}>ABC Infra</option>
                <option value={20}>BBC Infra</option>
                <option value={30}>CBC Infra</option>
                </Select>
            </FormControl>
            <BsChevronRight size={28} color='#CFCFCF' style={{ marginTop: '1%', marginRight: '2%', marginLeft: '2%' }}/>
            <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                Project
                </InputLabel>
                <Select
                className={{ root: 'MuiInputBase-root', selected: 'selected' }}
                value={age}
                onChange={handleChange}
                style={{ borderBottom: `2px solid ${borderBottomColor}`, color: {borderBottomColor} }}
                inputProps={{
                    name: 'age',
                    id: 'age-native-label-placeholder',
                }}
                >
                <option value={5}>ABC Infra And Service Program</option>
                <option value={10}>ABC Infra</option>
                <option value={20}>BBC Infra</option>
                <option value={30}>CBC Infra</option>
                </Select>
            </FormControl>
      </nav>
    );
}

