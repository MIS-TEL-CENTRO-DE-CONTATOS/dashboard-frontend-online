import Image from "next/image";
import logo from "../../public/logo.png";
import {
  FiChevronsRight,
  FiLock,
  FiMail,
} from "react-icons/fi";
import { Checkbox, Input } from "@material-tailwind/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-scroll bg-[url('../../public/bg.png')] w-screen h-screen font-sans font-normal">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex flex-col p-10 w-96 bg-white rounded-xl content-center items-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Link href="#">
              <Image
                className="mx-auto h-10 w-auto"
                width={120}
                height={54}
                src={logo}
                alt="Your Company"
              />
            </Link>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                      <FiMail />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Email"
                      className="block pl-9 w-full rounded-md border-0 py-1.5 focus:shadow-none focus:outline-primary focus:ring-2 text-gray-900  ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  {/* <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label> */}
                </div>
                <div className="mt-2">
                  <div className="absolute py-2.5 pl-3 text-gray-400">
                    <FiLock />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Senha"
                    required
                    className="block pl-9 w-full rounded-md border-0 py-1.5 focus:shadow-none focus:outline-primary focus:ring-1 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <Checkbox color="red" defaultChecked />
                <p className="pl-2 text-xs text-gray-500">
                  Remember me
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-danger focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger"
                >
                  Access
                  <div className="pl-1">
                    <FiChevronsRight width={24} />
                  </div>
                </button>
                <Link
                  className="flex  items-center justify-center w-auto p-4 text-primary hover:text-danger"
                  href="/forgot-password"
                >
                  <div className="text-sm">
                    Forgot your password
                  </div>
                </Link>

                <p className="flex items-center justify-center w-auto text-xs pt-3 text-gray-500">
                  Powered by TEL MIS SP
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
