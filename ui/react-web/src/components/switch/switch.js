import React from 'react';
import styled from 'styled-components';
import { Switch as MuiSwitch } from '@material-ui/core';

const Switch = ({ leftLabel, rightLabel, checked, onClick }) => {
  return (
    <SwitchContainer>
      {leftLabel}
      <MuiSwitch
        checked={!checked}
        onClick={() => onClick(!checked)}
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      {rightLabel}
    </SwitchContainer>
  );
};

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
}`;

export default Switch;
