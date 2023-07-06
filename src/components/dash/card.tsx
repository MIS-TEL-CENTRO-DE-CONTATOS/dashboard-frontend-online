import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";

interface CardProps {
  CardName: string;
  CardValue: number | string;
  CardDif: number;
  CardIcon: IconType;
}

export default function Card({
  CardName,
  CardValue,
  CardDif,
  CardIcon,
}: CardProps) {
  return (
    <div className="relative flex flex-col w-44 min-w-0 mb-6 break-words bg-gray-900 shadow-soft-xl rounded-2xl bg-clip-border h-28">
      <div className="flex-auto p-4">
        <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-2/3 max-w-full px-3">
            <div>
              <p className="mb-0 font-sans text-white font-semibold leading-normal text-sm">
                {CardName}
              </p>
              <h5 className="mt-8 text-lg font-bold text-white">
                {CardValue}
                <span className="leading-normal text-xs ml-2 top-0 font-light text-white">
                  {CardDif}
                </span>
              </h5>
            </div>
          </div>
          <div className="w-4/12 max-w-full px-2 ml-auto text-right flex-0">
            <div className="inline-block w-10 h-10 text-center rounded-lg bg-gradient-to-tl from-primaryTel to-orange-800 shadow-soft-2xl">
              <span
                className={`flex items-center justify-center text-xl relative top-2.5 text-white`}
              >
                {React.createElement(CardIcon)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
