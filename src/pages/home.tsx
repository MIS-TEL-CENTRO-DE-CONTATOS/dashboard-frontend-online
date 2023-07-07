import Navbar from "../components/dash/navbar";
import User from "../components/dash/user";
import Card from "../components/dash/card";
import BarExample from "../components/dash/charts/bar-chart";
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
      <div className="flex h-screen w-full">
        <div>
          <div className="absolute pt-5 max-h-15 pl-3">
            <User
              urlAvatar={AvatarUser}
              UserCargo="MIS"
              UserName="Lucas"
            />
          </div>
          <div className="fixed top-0 left-0 flex h-full items-center justify-center">
            <Navbar />
          </div>
        </div>
        <div>
          <div className="flex w-auto justify-between pr-32 pl-44">
            <div className="grid grid-cols-5 grid-rows-1 gap-10 mt-4">
              <Card
                CardName="ALO"
                CardValue={3.203}
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
          <div className="flex-1 justify-between w-auto pr-32 pl-44">
            <div className="grid grid-cols-2 gap-10 grid-rows-2">
              <BarExample
                titleChartProps="VENDAS X ALO"
                tipoGrafico="line"
              />
              <BarExample
                titleChartProps="Example BAR"
                tipoGrafico="bar"
              />
              <BarExample
                titleChartProps="Example BAR"
                tipoGrafico="line"
              />
              <BarExample
                titleChartProps="Example BAR"
                tipoGrafico="bar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
