import Link from 'next/link';
import { InfoTooltip } from '@/components';

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-full h-screen bg-slate-400 items-center">
      <div className="flex flex-col items-center w-[80vw] bg-slate-300 rounded-md shadow-md p-[5vw]">
        <div id="main-title">
          <span className="font-bold text-[5vw] mb-[2vw]">나무의사 2차 시험을 위한 테스트</span>
        </div>
        <div id="select" className="flex flex-col gap-y-[1vw]">
          <div className="flex flex-row gap-x-[1vw]">
            <label>테스트 유형을 선택</label>
            <InfoTooltip text="현재는 한가지 유형만 제공하고 있습니다."/>
          </div>
          <select className="w-full">
            <option>정답 사진 고르기</option>
          </select>
        </div>
        <div className="my-[5vw] bg-lime-600 hover:bg-lime-500 rounded-md">
          <Link href="/test-page">
            <button id="select-btn" className="px-[5vw]"><span className="text-white">btn</span></button>
          </Link>
        </div>
      </div>
    </main>
  );
}
