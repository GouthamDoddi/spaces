import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'

import FolderButton from '../../components/folderButton';
import HeaderBar from '../../shared/header_bar';
import VerticalTabs from '../../components/verticleTab';
import Footer from '../../components/footer';

import { ReactComponent as Docs } from '../../assets/images/doc.svg';
import { ReactComponent as XLS } from '../../assets/images/xls.svg';
import { ReactComponent as PDF } from '../../assets/images/pdf.svg';
import { ReactComponent as Zip } from '../../assets/images/zip.svg';
import { ReactComponent as Download } from '../../assets/images/download.svg';

import { NavLink } from 'react-router-dom';

import { NewLayout } from '../../pages/entities';

import { role } from '../../store/user';

const data = [
  {
    name: 'Government Mobile Applications Framework [AR] v1.1.4.pdf',
    url: '/resources/file1.pdf',
    type: 'docs',
  },
  {
    name: 'Government Mobile Applications Framework [EN] v1.1.4.pdf',
    url: '/resources/file2.pdf',
    type: 'xls',
  },
  {
    name: 'Government Websites Framework [AR] v1.1.4.pdf',
    url: '/resources/file3.pdf',
    type: 'pdf',
  },
  {
    name: 'Government Websites Framework [EN] v1.1.4.pdf',
    url: '/resources/file4.pdf',
    type: 'docs',
  },
  {
    name: 'Government eServices Framework [AR] v1.1.4.pdf',
    url: '/resources/file5.pdf',
    type: 'zip',
  },
];

const types = {
  docs: <Docs />,
  xls: <XLS />,
  pdf: <PDF />,
  zip: <Zip />,
};


export default function () {

  const buttons = [
    <FolderButton active={false} text={'Portal / Mobile App Framework'}/>,
    <FolderButton active={false} text={'eService Framework'}/>,
    <FolderButton active={false} text={'Access Guidelines'}/>,
    <FolderButton active={false} text={'Miscellaneous'} />,
  ]

  const frameworks = <Files className="flex_col_sm_8">
    <Heading>eService Framework</Heading>
    <div className="flex_row">
    {data.map(({ name, type }) => (
        <div className="flex_col_sm_6">
        <FileCard>
            <div>
            {types[type]}
            <span>{name}</span>
            </div>
            <Download />
        </FileCard>
        </div>
    ))}
    </div>
    </Files>

const portals = <Files className="flex_col_sm_8">
<Heading>Portals/Mobile Apps</Heading>
<div className="flex_row">
{data.map(({ name, type }) => (
    <div className="flex_col_sm_6">
    <FileCard>
        <div>
        {types[type]}
        <span>{name}</span>
        </div>
        <Download />
    </FileCard>
    </div>
))}
</div>
</Files>

const guidlines = <Files className="flex_col_sm_8">
<Heading>Guidlines</Heading>
<div className="flex_row">
{data.map(({ name, type }) => (
    <div className="flex_col_sm_6">
    <FileCard>
        <div>
        {types[type]}
        <span>{name}</span>
        </div>
        <Download />
    </FileCard>
    </div>
))}
</div>
</Files>

const miscellaneous = <Files className="flex_col_sm_8">
<Heading>Others</Heading>
<div className="flex_row">
{data.map(({ name, type }) => (
    <div className="flex_col_sm_6">
    <FileCard>
        <div>
        {types[type]}
        <span>{name}</span>
        </div>
        <Download />
    </FileCard>
    </div>
))}
</div>
</Files>


  const pages = [
      portals,
      frameworks,
      guidlines,
      miscellaneous,
  ]

  return (
    <NewLayout>
      <HeaderBar className="hb" />
      <div className="custom_container">
        <TopBar>
          <span>Resources</span>
          {[0, 14].includes(role()) && <NavLink to="/resources/upload">
            <button className="btn_solid">Upload Resource</button>
          </NavLink>}
        </TopBar>
      </div>
      <div className="custom_container">
        <VerticalTabs noOfTabs={4} buttons={buttons} pages={pages} />


      </div>
      <Footer />
    </NewLayout>
  );
}

export const TopBar = styled.div`
  margin-top: 75px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  border-bottom: 1px solid #DDDDDD;
  margin-left: -100px;
  margin-right: -100px;
  padding: 0px 100px;

  > a {
    > svg {
      margin-right: 16px;
    }

    display: flex;
    align-items: center;
  }

  span {
    font: normal normal bold 25px/36px Muli;
    color: #666666;
  }
`;

const Files = styled.div`
  .flex_row {
    flex-wrap: wrap;
  }
`;

const Heading = styled.div`
  color: #666666;
  font: normal normal bold 25px/36px Muli;
  margin-bottom: 24px;
`;

export const FileCard = styled.div`
  padding: 0px 22px 0px 14px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  margin-bottom: 46px;
  overflow: hidden;

  > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
    width: calc(100% - 60px);

    > svg {
      margin-right: 12px;
    }

    > span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const FolderCard = styled.div`
  ${({ active }) => `
  height: 63px;
  width: 387px;
  background: ${active ? '#E8EEF3' : '#ffffff'} 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  font: normal normal normal 15px/19px Muli;
  margin-bottom: 12px;

  > div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 20px;

      path {
        fill: ${active ? '#666' : ''};
      }
    }
  }

  > svg {
    &:last-child {
      display: ${!active ? 'none' : 'block'};
    }
  }
`}
`;

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

// const PdfIcon = function() {
//   return(
//     <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-pdf" class="svg-inline--fa fa-file-pdf fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path></svg>
//   )
// }

// const Left = styled.div`
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   width: 270px;
// `

// const Data = styled.div`
//   background-color: #fff;
//   display: flex;
//   width: 100%;
//   grid-column: 1 / -1;
//   height: 500px;
//   padding: 20px 40px;

//   a {
//     width: 60px;
//     margin-right: 100px;
//     color: #e40017;
//     text-decoration: none;
//     span {
//       color: #000;
//       display: flex;
//       justify-content: center;
//       font-weight: bold;
//     }
//   }
// `
// const Content = styled.div`
//   margin-bottom: 30px;
//   display: grid;
//   grid-gap: 30px;
//   grid-template-columns: repeat(12, 1fr);
//   grid-auto-rows: auto;

//   .hb { grid-column: 1 / -1};
//   .bnr { grid-column: 1 / -1};
//   .tbl {
//     grid-column: 1 / -1;
//     height: 100%;
//     .row {
//       &:last-child {border-bottom: none;}
//     }
//   };
// `

// const Wrapper = styled.div`
//   display: flex;
//   width: 100%;
//   grid-column: 1 / -1;
//   flex-direction: column;
// `

// const Layout = styled.div`
//   padding-left: 270px;
// `

// const CLink = styled(Link)`
//   color: #000;
//   display: flex;
//   align-items: center;
// `

// const CustomInput = styled(Input)`
//   // margin: 0 0 10px 20px;
// `
