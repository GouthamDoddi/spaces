import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { BsChevronRight } from "react-icons/bs"
import { BsChevronLeft } from "react-icons/bs"
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

import FullWidthTabs from './tab';
import CasesList from './list';
import CasesList2 from './list2';


function Issues (props) {
    const { handleChange } = props;

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    return (
        <div>
            <div style={{  marginTop: '3%', marginBottom: '2%' }}>
                <Button style={{ marginLeft: '5%', backgroundColor: '#EB622B', color: 'white', width: '10%' }}>
                    <BsChevronLeft />
                    Previous
                </Button>

                <Button style={{ marginLeft: '70%', backgroundColor: '#EB622B', color: 'white', width: '10%' }}>
                    Next
                    <BsChevronRight />
                </Button>
            </div>

            <div style={{ marginBottom: '1%', marginLeft: '5%' }}>
                <TextField id="outlined-basic" placeholder="Search Cases" variant="outlined" style={{ width: '15%' }}/> 

                <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
                variant='outlined'
                style={{ width: '15%', marginLeft: '1%' }}
                >
                <option aria-label="None" value="" > Select Category </option>
                <option value={'clarification'}>Clarification</option>
                <option value={'exception'}>Exception</option>
                <option value={'support'}>Support</option>
                <option value={'relief'}>Relief</option>
                <option value={'suggestion'}>Suggestion</option>
                <option value={'others'}>Others</option>

                </Select>

                <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
                variant='outlined'
                style={{ width: '15%', marginLeft: '1%' }}
                >
                <option aria-label="None" value="" > Select Status </option>
                <option value={'draft'}>Draft</option>
                <option value={'subbmited'}>Subbmited</option>
                <option value={'in_review'}>In Review</option>
                <option value={'approved'}>Approved</option>
                <option value={'on_hold'}>On Hold</option>
                <option value={'rejected'}>Rejected</option>
                </Select>

                <Select
                native
                value={state.age}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-native-simple',
                }}
                variant='outlined'
                style={{ width: '15%', marginLeft: '1%' }}
                >
                <option aria-label="None" value="" > Select Priority </option>
                <option value={'p1'}>P1</option>
                <option value={'p2'}>P2</option>
                <option value={'p3'}>P3</option>
                </Select>

            </div>
            <div style={{ marginLeft:'5%', marginRight: '5%' }}>
                <FullWidthTabs table1={<CasesList />} table2={<CasesList2 />} />
            </div>
        </div>
    )
}

export default Issues;


