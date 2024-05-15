import Link from 'next/link';
import { InfoTooltip, Card } from '@/components';

export default function Home() {
  return (
    <main>
      <section>
        <Card>
          <h1 className="font-bold text-[5vw] xl:text-[3vw] mb-[2vw]">나무의사 2차 시험을 위한 테스트</h1>
          <div id="select" className="flex flex-col gap-y-[1vw]">
            <div className="flex flex-row gap-x-[1vw]">
              <label>테스트 유형을 선택</label>
              <InfoTooltip text="현재는 한가지 유형만 제공하고 있습니다."/>
            </div>
            <select className="w-full">
              <option>정답 입력하기</option>
            </select>
          </div>
          <Link href="/enter-answer" className="my-[5vw] bg-lime-600 hover:bg-lime-500 rounded-md">
            <button id="select-btn" className="px-[5vw]"><p className="text-white">시험 시작</p></button>
          </Link>
        </Card>
      </section>
    </main>
  );
}
