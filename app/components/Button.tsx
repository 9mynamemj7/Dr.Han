import React from 'react'

interface IButtonProps {
  text?: string;
  onClick?: () => void;
  sx?: string;
  disabled?: boolean;
}
/**
  * @text: 간지나는 이름
  * @onClick: 쌈@뽕한 기능
  * @sx: 중복되지 않은 스타일만 적용 가능
*/
export const Button = (props: IButtonProps) => {
  const basicSx = "rounded-xl bg-neutral-400 hover:bg-neutral-500 text-slate-100 lg:px-[10%] px-[20%] "
  // TODO: tailwndCSS에서 중복된 CSS에 대해서는 자체적으로 정한 우선순위가 적용된다. twin.macro를 이용하면 className에 선언된 여러 클래스 중에 뒤에 위치한 클래스가 최종적으로 적용 돼 해결할 수 있다.
  return (
    <div className="w-full h-full">
      <button
        className={
          props.sx ? basicSx + props.sx : basicSx
        }
        onClick={props.onClick}
        disabled={props.disabled??false}
      >
        {props.text??""}
      </button>
    </div>
  )
}
