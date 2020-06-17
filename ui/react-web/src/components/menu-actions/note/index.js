import React from "react";
import styled from "styled-components";
import Modal from "../modal";

import { Input, TextArea } from "../../form";
import { useQuery } from "../../createMenu";

export default function (props) {
  const { id } = props;
  const query = useQuery();
  const page = query.get("page");
  const render = {
    edit: <Edit></Edit>,
    profile: <Profile></Profile>,
  };
  const title = {
    profile: `${id === "new" ? "Create" : "Edit"} Notes`,
    edit: "Notes",
  };
  return <Modal title={title[page]}>{render[page]}</Modal>;
}

function Edit(props) {
  return (
    <Notes>
      <RowFirst>
        <Input type="text" name="name" label="Title" />
        <Input type="text" name="eame" label="Note" />
      </RowFirst>
      <RowSecond>
        <Input type="text" name="attachment" label="Attachment" />
        <button>Browse</button>
      </RowSecond>
      <TextOverRide>
        <TextArea type="textarea" label="Notes" />
      </TextOverRide>
      <footer>
        <button>Create</button>
      </footer>
    </Notes>
  );
}

function Profile(props) {
  return <div>Profile View</div>;
}
const Notes = styled.div`
  display: grid;
  grid-template-rows: 20% 20% 40% 20%;
  margin: 5%;
  height: 80%;
  footer {
    display: flex;
    justify-content: center;
    button {
      width: 160px;
      height: 38px;
      border-radius: 2px;
      background-color: ${(p) => p.theme.color};
      border: 1px solid ${(p) => p.theme.color};
      outline: none;
      margin-top: 15px;
    }
  }
`;
const RowFirst = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 42px;
`;
const RowSecond = styled.div`
  display: flex;
  button {
    width: 91px;
    height: 38px;
    border-radius: 2px;
    border: solid 1px #dedede;
    background-color: #efefef;
    margin: 28px;
  }
`;
const TextOverRide = styled.div`
  div > textarea {
    height: 161px;
  }
`;
