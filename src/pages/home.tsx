import Navbar from "../components/dash/navbar";
import User from "../components/dash/user";
import Card from "../components/dash/card";
import AvatarUser from "../../public/USER.jpeg";
import {
  FiPhone,
  FiUserCheck,
  FiUsers,
  FiTarget,
  FiDollarSign,
} from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen">
        <div>
          <div className="absolute pt-5 max-h-20 w- max-h pl-3">
            <User
              urlAvatar={AvatarUser}
              UserCargo="MIS"
              UserName="Lucas"
            />
          </div>
          <div className="fixed top-0 left-0 flex h-full items-center  justify-center">
            <Navbar />
          </div>
        </div>
        <div className="flex w-full justify-center pl-28 mt-24">
          <div className="grid grid-cols-5 gap-5">
            <Card
              CardName="ALO"
              CardValue={3.452}
              CardDif={-2}
              CardIcon={FiPhone}
            />
            <Card
              CardName="CPC"
              CardValue={2.452}
              CardDif={-2}
              CardIcon={FiUsers}
            />
            <Card
              CardName="CPCA"
              CardValue={2.452}
              CardDif={-2}
              CardIcon={FiTarget}
            />
            <Card
              CardName="SUCESSO"
              CardValue={2.452}
              CardDif={-2}
              CardIcon={FiUserCheck}
            />
            <Card
              CardName="% CONV"
              CardValue={"25%"}
              CardDif={-2}
              CardIcon={FiDollarSign}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
