import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface UserProps {
  urlAvatar: StaticImageData | string;
  UserName: string;
  UserCargo: string;
}

export default function User({
  urlAvatar,
  UserName,
  UserCargo,
}: UserProps) {
  return (
    <div className="flex ">
      <div className="">
        <Image
          src={urlAvatar}
          alt=""
          width={64}
          height={64}
          className="rounded-full hover:animate-pulse animate-once animate-ease-in ring-2 ring-gray-200"
        />
      </div>
      <div className="ml-2 flex flex-col justify-center">
        <p className="text-xs">Bem-vindo(a)</p>
        <Link href="#">
          <h1 className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primaryTel to-orange-800">
            {UserName}
          </h1>
        </Link>
        <h3 className="text-xs">{UserCargo}</h3>
      </div>
    </div>
  );
}
