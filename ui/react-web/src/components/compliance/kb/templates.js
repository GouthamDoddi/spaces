import React from 'react';

import styled from 'styled-components';
import { Switch, Route, useLocation, useParams } from 'react-router-dom';

import Tabs from './kb-tabs'
import Link from '../shared/link'


function Files(props) {
  const { section, folder } = useParams();
  const data = templateData[section]['data'][folder]['files'].map((file, i) => (
    <a href={`/img/kb/${file.type}.svg`} key={i} target='new'>
      <Asset className={`icon ${file.type}`}>
        {file.name}
      </Asset>
    </a>
  ))


  return (<> {data} </>)
}



function Folders(props) {
  const { section } = props;
  const loc = useLocation();
  const data = Object.values(templateData[section].data).map((folder, i) => (
    <Link to={`${loc.pathname}/${folder.link}`} key={i}>
      <Asset className='icon folder'>
        {folder.name}
      </Asset>
    </Link>
  ))

  return( <> {data} </> )

}
export default function Element(props) {
  const { section } = useParams()

  const loc = useLocation();
  console.log(loc.pathname)

  return (
    <>
      <Tabs />

      <Container>
        <Switch>
          <Route path={`/compliance/kb/:section/templates/:folder`}> <Files /> </Route>
          <Route exact path={'/compliance/kb/:section/templates'}> <Folders section={section}/> </Route>
        </Switch>
      </Container>
    </>
  )
}


const Container = styled.div`
  margin: 30px 15px 0px 45px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-gap: 55px 90px;
`

const Asset = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  &.icon {
    object-fit: contain;
    background-repeat: no-repeat;
    font-size: 14px;
    font-weight: bold;
    color: #000000;
    padding-top: 97px;
    &.folder {
      width: 91px;
      height: 83px;
      object-fit: contain;
      padding-top: 97px;
      background-image: url('/img/kb/folder.svg');
    }
    &.excel {
      width: 83px;
      height: 80px;
      background-image: url('/img/kb/excel.svg');
    }
    &.email {
      width: 92px;
      height: 70.1px;
      background-image: url('/img/kb/email.svg');
    }
    &.contact {
      width: 76px;
      height: 89px;
      background-image: url('/img/kb/contact.svg');
    }
    &.jpg {
      width: 58px;
      height: 75.5px;
      background-image: url('/img/kb/jpg.svg');
    }
    &.zip {
      width: 83px;
      height: 83px;
      background-image: url('/img/kb/zip.svg');
    }
    &.pdf {
      width: 78px;
      height: 89.1px;
      background-image: url('/img/kb/pdf.svg');
    }
    &.word {
      width: 83px;
      height: 79px;
      background-image: url('/img/kb/word.svg');
    }
  }
`

const templateData = {
  section1: {
    data: {
      folder1: {
        name: 'folder 1',
        link: 'folder1',
        files: [
          {name: 'File 1', type: 'excel'}, { name: 'File 2', type: 'contact'}, { name: 'File 3', type: 'word'}
        ]
      },
      folder2: {
        name: 'folder 2',
        link: 'folder2',
        files: [
          {name: 'File 2', type: 'word'}, { name: 'File 2', type: 'pdf'}, { name: 'File 3', type: 'word'}
        ]
      },
      folder3: {
        name: 'folder 3',
        link: 'folder3',
        files: [
          {name: 'File 3', type: 'pdf'}, { name: 'File 2', type: 'zip'}, { name: 'File 3', type: 'jpg'}
        ]
      }
    }
  },
  section2: {
    data: {
      folder1: {
        name: 'folder 1',
        link: 'folder1',
        files: [
          {name: 'File 1', type: 'zip'},{ name: 'File 3', type: 'jpg'}
        ]
      }
    }
  },

  section3: {
    data: {
      folder1: {
        name: 'folder 1',
        link: 'folder1',
        files: [
          {name: 'File 1', type: 'email'},{ name: 'File 2', type: 'jpg'}
        ]
      },
      folder2: {
        name: 'folder 2',
        link: 'folder2',
        files: [
          {name: 'File 1', type: 'pdf'},{ name: 'File 2', type: 'jpg'}
        ]
      },
    }
  },


}


