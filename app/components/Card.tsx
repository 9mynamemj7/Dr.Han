import React from 'react'

interface ICardProps {
  children: React.ReactNode;
}
export const Card = (props: ICardProps) => {
  return (
    <div className="flex flex-col items-center xl:w-[70vw] w-[80vw] bg-slate-300 rounded-md shadow-md p-[5vw]">
      {props.children}
    </div>
  )
}
