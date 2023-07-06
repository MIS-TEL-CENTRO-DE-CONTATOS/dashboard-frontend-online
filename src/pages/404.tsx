import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../public/logo.png";
import Error from "../../public/pageerror.svg";
import { FiChevronLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      <div className="flex bg-white w-5/6 h-5/6 rounded-2xl">
        <div className="w-20 h-20">
          <Image
            src={Logo}
            alt=""
            width={80}
            height={80}
            className="m-10"
          />
        </div>
        <div className="flex-1 flex justify-between w-auto">
          <div className="flex flex-col justify-center">
            <div>
              <p className="text-3xl text-primaryTel flex items-center font-extrabold mb-3">
                OPS...
              </p>
            </div>
            <p className="font-sans flex items-center text-base font-semibold">
              Está pagina não existe, por favor, se
              redirecione
              <br />
              para a home no botão abaixo
            </p>
            <Link href="/login">
              <button className="bg-primaryTel mt-40 flex items-center justify-center pr-6 w-36 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-full">
                <span className="pr-2">
                  <FiChevronLeft />
                </span>
                Return
              </button>
            </Link>
          </div>
          <div className="flex flex-col mr-20 justify-center items-center w-auto">
            <Image
              src={Error}
              width={500}
              height={500}
              alt="Imagem erro"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
