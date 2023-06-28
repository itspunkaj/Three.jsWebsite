/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei'

import CameraRig from './CameraRig';
import Shirt from './Shirt';
import Backdrop from './Backdrop';

const CanvasModel = () => {
  return (
    <Canvas>
      {/*eslint-disable-next-line react/no-unknown-property*/}
      <ambientLight intensity={0.5} />
      <Environment preset='city' />

      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel;