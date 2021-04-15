import React, { useCallback, useState } from 'react';
import { Modal, Slider } from '@material-ui/core';
import Cropper from 'react-easy-crop';
import styled from 'styled-components';
import { getCroppedImg } from '../../utils/helpers';

const CloseIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21.415" height="21.414" viewBox="0 0 21.415 21.414"><g transform="translate(-1220.257 -92.258)"><line class="a" fill="none" stroke="#666" strokeLinecap="round" y2="28.283" transform="translate(1240.964 92.965) rotate(45)"/><line class="a" fill="none" stroke="#666" strokeLinecap="round" y1="28.284" transform="translate(1240.965 112.965) rotate(135)"/></g></svg>
  );
};

const RotateLeftIcon = () => {
  return (
    <svg style={{ transform: 'scaleX(-1)' }} xmlns="http://www.w3.org/2000/svg" height="16" id="svg2" version="1.1" width="16"><defs id="defs4"/><g id="layer1" transform="translate(0,-1036.3622)"><path d="M 10.54159,10.025229 A 3.8447924,3.7725897 0 1 1 6.6967979,6.2526398" id="path3755" fill="#800000" fillOpacity="0" stroke="#666666" strokeWidth="1.26981091" strokeMiterLimit="4" strokeOpacity="1" strokeDashArray="none" transform="matrix(1.1034394,1.1034394,-1.1245579,1.1245579,11.619284,1025.5889)"/><path d="m 11.977466,1040.0097 0.883884,-0.8839 0.53033,2.2981 -2.298097,-0.5303 z" id="path3757" fill="#000000" stroke="#666666" strokeWidth="1px" strokeLinecap="butt" strokeLineJoin="miter" strokeOpacity="1" /></g></svg>
  );
}

const RotateRightIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="16" id="svg2" version="1.1" width="16"><defs id="defs4"/><g id="layer1" transform="translate(0,-1036.3622)"><path d="M 10.54159,10.025229 A 3.8447924,3.7725897 0 1 1 6.6967979,6.2526398" id="path3755" fill="#800000" fillOpacity="0" stroke="#666666" strokeWidth="1.26981091" strokeMiterLimit="4" strokeOpacity="1" strokeDashArray="none" transform="matrix(1.1034394,1.1034394,-1.1245579,1.1245579,11.619284,1025.5889)"/><path d="m 11.977466,1040.0097 0.883884,-0.8839 0.53033,2.2981 -2.298097,-0.5303 z" id="path3757" fill="#000000" stroke="#666666" strokeWidth="1px" strokeLinecap="butt" strokeLineJoin="miter" strokeOpacity="1" /></g></svg>
  );
}

const CropModal = ({ file, setFile, setCroppedImage }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [cropping, setCropping] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = (_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleClose = () => {
    setFile(null);
  };

  const showCroppedImage = useCallback(async () => {
    try {
      setCropping(true);
      const croppedImage = await getCroppedImg(
        file,
        croppedAreaPixels,
        rotation,
      );
      setCroppedImage(croppedImage);
      handleClose();
      setCropping(false);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  return (
    <Modal open={!!file} onClose={handleClose}>
      <CropModalStyled>
        <div className="contents">
          <div className="headers">
            <span>Crop and resize logo image</span>
            <span onClick={handleClose}>
              <CloseIcon />
            </span>
          </div>
          <Cropper
            image={file}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={1 / 1}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
          <Slider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(_, zoom) => setZoom(zoom)}
          />
          <div className="rotators">
            <button onClick={() => setRotation((prevState) => prevState - 90)}>
              <RotateLeftIcon />
            </button>
            <button onClick={() => setRotation((prevState) => prevState + 90)}>
              <RotateRightIcon />
            </button>
          </div>
          <Button
            className="btn_solid"
            onClick={showCroppedImage}
            disabled={cropping}
          >
            Save{' '}
          </Button>
        </div>
      </CropModalStyled>
    </Modal>
  );
};

const Button = styled.button`
  width: 165px;
  height: 36px;
  background: #eb622b 0% 0% no-repeat padding-box;
  opacity: 1;
  border: none;
  font-size: 14px;
  color: #fff;
  display: block;
  margin: auto;
`;

const CropModalStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .contents {
    height: 600px;
    width: 600px;
    border-radius: 5px;
    background: white;
    padding: 24px 36px;

    .headers {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > :last-child {
        cursor: pointer;
      }
    }

    .reactEasyCrop_Container {
      position: relative;
      height: 300px;
      width: 300px;
      margin: 58px auto 18px;
    }

    .MuiSlider-root {
      color: #e8eef3;
      height: 10px;
      width: 300px;
      margin: auto;
      display: block;
    }

    .MuiSlider-rail,
    .MuiSlider-track {
      height: 10px;
    }

    .MuiSlider-thumb {
      color: #c4c4c4;
      height: 20px;
      width: 20px;
    }

    .rotators {
      width: 300px;
      margin: auto;
      display: flex;
      justify-content: space-around;
      padding: 0px 64px;
      margin-bottom: 34px;

      button {
        width: 40px;
        height: 40px;
        background: #ffffff 0% 0% no-repeat padding-box;
        box-shadow: 0px 1px 3px #00000029;
        border-radius: 3px;
        opacity: 1;
        border: none;

        svg {
          vertical-align: middle;
        }
      }
    }
  }
`;

export default CropModal;
