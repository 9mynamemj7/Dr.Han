"use client";

import React, { ChangeEvent, useEffect, useState } from 'react'
import Image from 'next/image';

import { Button } from '@/components';

type DataType = [
  {
    img: string;
    name: string;
    description: string;
  }
]
type TextFieldDataType = {
  page: number
  answer: string;
}
const initAnswer: TextFieldDataType[] = [
  // TODO: 고정으로 10개가 아니라 유동적으로 값을 설정하는 방법 생각 해봐야 할 듯
  { page: 0, answer: ""},
  { page: 1, answer: ""},
  { page: 2, answer: ""},
  { page: 3, answer: ""},
  { page: 4, answer: ""},
  { page: 5, answer: ""},
  { page: 6, answer: ""},
  { page: 7, answer: ""},
  { page: 8, answer: ""},
  { page: 9, answer: ""}
]
export const Contents = () => {
  const [page, setPage] = useState<number>(0);
  const [data, setData] = useState<DataType | null>(null);
  const [textFieldData, setTextFieldData] = useState<TextFieldDataType[]>(initAnswer);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/dataset.json');
        const jsonData = await response.json();
        setData(jsonData)
      } catch (error) {
        throw error;
      }
    }
    fetchData();
  }, [])

  const handleNextButtonClick = () => {
    setPage(page + 1);
  };
  const handlePrevButtonClick = () => {
    setPage(page - 1);
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTextFieldData((prev) => {
      return prev.map((item: TextFieldDataType) => {
        if (item.page === page) {
          return { ...item, answer: value };
        }
        return item;
      })
    })
  }
  const getPageAnswer = () => {
    const result = textFieldData.find(item => item.page === page)?.answer;
    return result??'';
  }
  return (
    <>
      { data
      ? 
        <div className="flex flex-col">
          <picture className="relative h-[30vw]">
            <Image src={data[page].img} alt="image" layout="fill" />
          </picture>
          <div className="w-full text-center my-[5%]">
            <input
              type="text"
              onChange={handleInputChange}
              value={getPageAnswer()}
            />
          </div>
          <div className="flex flex-row justify-around">
            <div className="text-center w-1/2">
              <Button text="이전" disabled={page <= 0} onClick={handlePrevButtonClick} />
            </div>
            <div className="text-center w-1/2">
              <Button text="다음" disabled={page >= data.length - 1} onClick={handleNextButtonClick} />
            </div>
          </div>
        </div>
      : null
      }
    </>
  )
}
