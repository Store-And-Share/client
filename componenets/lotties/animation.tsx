'use client'

import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const LottiePlayerComponent = () => {
  const animationURL = "https://assets3.lottiefiles.com/packages/lf20_JExdDIS87T.json";

  return (
    <Player
    autoplay
    loop
    src="https://lottie.host/9b278f1f-5238-43d5-9355-789d3f4674ab/2xXu29YWKS.json"
    // src="https://lottie.host/f3d26114-ee3d-4e72-b14f-18983ff88190/R4l14iByPO.json"
    // src="https://lottie.host/34669d92-576e-4eb7-a436-fd19bf93d14f/s69dfFwNlW.json"
    // src="https://lottie.host/6be1d614-e220-42a1-8d00-1954f8ab2342/xD7bXr1Mmt.json"
    style={{ height: '200px', width: '300px' }}
  >
    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player>
  );
};

export default LottiePlayerComponent