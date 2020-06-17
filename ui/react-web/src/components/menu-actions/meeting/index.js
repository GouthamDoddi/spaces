import React from "react";
import styled from "styled-components";
import Modal from "../modal";

import { useQuery } from "../../createMenu";
import { Input, Select, TextArea } from "../../form";

export default function (props) {
  const { id } = props;
  const query = useQuery();
  const page = query.get("page");
  const render = {
    edit: <Edit></Edit>,
    profile: <Profile></Profile>,
  };
  const title = "Call for Meeting";
  return <Modal title={title}>{render[page]}</Modal>;
}

function Edit(props) {
  return (
    <div>
      <EditContainer>
        <Input type="text" name="name" label="Name" />
        <Input type="text" name="eame" label="Email" />
        <Select options={[]} defaultValue={{}} name="status" label="Status" />
      </EditContainer>
      <Footer>
        <button>Create</button>
      </Footer>
    </div>
  );
}

function Profile(props) {
  return (
    <div>
      <EditContainer>
        <Input type="text" name="title" label="Title" />
        <Input type="text" name="subject" label="Subject" />
        <Input type="date" name="start_date" label="Start Date" />
        <Input type="date" name="end_date" label="End Date" />
        <Input type="text" name="time" label="Time" />
        <Input type="text" name="duration" label="Duration" />
        <TextArea name="agenda" label="Agenda" className='expand' />
      </EditContainer>
      <Footer>
        <button>Create</button>
      </Footer>
    </div>
  );
}
const EditContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  // grid-auto-rows: 80px;
  margin: 5%;
  grid-gap: 20px 42px;
  .expand {
    grid-column: 1 / 3;
    max-width: 624px;
  }
`;
const Footer = styled.div`
  margin: 60px;
  display: flex;
  justify-content: center;
  button {
    width: 160px;
    height: 38px;
    border-radius: 2px;
    color: #fff;
    background-color: ${(p) => p.theme.color};
    border: 1px solid ${(p) => p.theme.color};
    outline: none;
  }
`;
