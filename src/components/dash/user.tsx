import Image, { StaticImageData } from "next/image";

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
        <h1 className="text-sm font-semibold">
          {UserName}
        </h1>
        <h3 className="text-xs">{UserCargo}</h3>
      </div>
    </div>
  );
}
