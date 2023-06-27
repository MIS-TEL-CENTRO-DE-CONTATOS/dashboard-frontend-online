import Image from "next/image";
import logo from "../../public/logo.png";
import { FiChevronsRight, FiMail } from "react-icons/fi";
import Link from "next/link";

export default function Forgot() {
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div className="backdrop-blur-lg bg-[url('../../public/bg.jpg')] bg-cover bg-center w-full h-full font-sans font-normal">
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
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Forgot Password
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
                        className="block pl-9 w-full rounded-md border-0 py-1.5 focus:shadow-none focus:outline-primary focus:ring-1 text-gray-900  ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-center py-4 ">
                    An email will arrive with your new
                    password. Use to access the system and
                    change your password.
                  </p>
                  <p></p>
                </div>

                <div>
                  <Link href="/forgot-success">
                    <button
                      type="submit"
                      className="flex items-center w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-danger focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-danger"
                    >
                      Request
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
