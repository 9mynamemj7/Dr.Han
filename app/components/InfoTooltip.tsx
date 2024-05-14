'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// const SIZE_PERCENT = 0.02;
const INIT_ICON_SIZE = 20;

interface IInfoTooltipProps {
  width?: number;
  height?: number;
  text: string;
}

export const InfoTooltip = (props: IInfoTooltipProps) => {
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);
  // const size = { width: window.innerWidth * SIZE_PERCENT, height: window.innerHeight * SIZE_PERCENT}
  // TODO: client side rendering 인줄 알았는데 왜 오류가 나는걸까?
  const handleMouseOver = () => {
    setTooltipOpen(true);
  };
  const handleMouseOut = () => {
    setTooltipOpen(false);
  };

  // TODO: 텍스트의 출력 방향을 상하좌우로 설정할 수 있을듯. 현재는 개발하지 않지만 필요에 의해 추가 개발
  return (
    <div className="flex flex-row items-center">
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <Image src="/icons/info.svg" alt="info-icon" width={props.width??INIT_ICON_SIZE} height={props.height??INIT_ICON_SIZE} />
      </div>
      <span className={`tooltip absolute ml-[3vw] py-[0.8vw] px-[1.5vw] ${tooltipOpen? 'visible' : 'invisible'} text-[#F2F2F2] bg-[#222222] text-[1.2vw]`}>
        {props.text}
      </span>
    </div>
  )
}
