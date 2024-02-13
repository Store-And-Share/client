'use client'

import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const LottiePlayerComponent = () => {
  const animationURL = "https://assets3.lottiefiles.com/packages/lf20_JExdDIS87T.json";

  return (
    <Player
    autoplay
    loop
    // src="https://lottie.host/c525e7e9-a0b7-40a2-b62e-e8da90658590/tALaXZnnNg.json"
    src="https://lottie.host/6be1d614-e220-42a1-8d00-1954f8ab2342/xD7bXr1Mmt.json"
    // src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
    style={{ height: '200px', width: '300px' }}
  >
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player>
  );
};

export default LottiePlayerComponent