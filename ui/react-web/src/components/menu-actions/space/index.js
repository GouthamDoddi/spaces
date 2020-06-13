import React from "react";
import styled from "styled-components";
import Modal from "../modal";

import { useQuery } from "../../createMenu";
import { Input, Select } from "../../form";

export default function (props) {
  const { id } = props;
  const query = useQuery();
  const page = query.get("page");
  const render = {
    edit: <Edit></Edit>,
    profile: <Profile></Profile>,
  };
  const title = "Send Invite";
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
        <Input type="text" name="pFamily" label="Policy Family" />
        <Input type="text" name="pName" label="Policy Name" />
        <Input type="date" name="createionDate" label="Creation Date" />
        <Input type="text" name="createdBy" label="Created By" />
        <Input type="text" name="status" label="Status" />
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
  margin: 5%;
  grid-gap: 42px;
`;
const Footer = styled.div`
  margin: 20%;
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
