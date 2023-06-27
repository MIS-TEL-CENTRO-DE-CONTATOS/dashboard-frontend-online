import Image from "next/image";
import logo from "../../public/logo.png";
import { FiChevronsRight, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function Forgot() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="bg-[url('../../public/bg.jpg')] bg-cover bg-center w-full h-full font-sans font-normal">
        <div className="flex h-screen justify-center items-center ">
          <div className="flex flex-col p-10 w-96 bg-white rounded-xl content-center items-center">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Link href="/login">
                <Image
                  className="mx-auto h-10 w-auto"
                  width={120}
                  height={54}
                  src={logo}
                  alt="Your Company"
                />
              </Link>
              <h2 className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
                New password send for
              </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="space-y-6"
                action="#"
                method="POST"
              >
                <div>
                  {/* <label
                  htmlFor="email"
                  className=" block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label> */}
                  <div className="mt-2">
                    <div className="flex">
                      <div className="absolute py-2.5 pl-3 text-gray-400">
                        <FiMail color="#34B53A" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="***il@mail.com"
                        autoComplete="email"
                        className="block pl-9 w-full rounded-md border-0 py-1.5 focus:shadow-none focus:border-success focus:ring-1 text-success ring-2 ring-inset ring-success sm:text-sm sm:leading-6"
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/login">
                    <button
                      type="submit"
                      className="flex items-center w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-danger focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger"
                    >
                      Login
                      <div className="pl-1">
                        <FiChevronsRight width={24} />
                      </div>
                    </button>
                  </Link>
                  <p className="flex items-center justify-center w-auto text-xs pt-6 text-gray-500">
                    Powered by TEL MIS SP
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
