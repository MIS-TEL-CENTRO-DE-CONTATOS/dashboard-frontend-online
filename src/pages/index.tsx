import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { CgSpinner } from "react-icons/cg";

const DMSans = DM_Sans({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-300 w-auto h-screen">
      <div className="bg-primary p-3 rounded-xl">
        <CgSpinner
          className="animate-spin h-8 w-8 "
          viewBox="0 0 24 24"
          color="white"
        />
      </div>
    </div>
  );
}
