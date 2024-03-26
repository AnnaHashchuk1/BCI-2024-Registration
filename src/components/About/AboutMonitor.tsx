import Image from "next/image";
import BESTValuesItem, { BESTValuesItemProps } from "./BESTValuesItem";

export default function AboutMonitor() {
  const BESTValues: Omit<BESTValuesItemProps, "width">[] = [
    {
      title: "Наша Візія",
      description:
        "Обізнана та підготована до старту кар'єрного шляху молодь",
    },
    {
      title: "Наша Місія",
      description:
        "Передача знань від досвідчених працівників амбітним студентам",
    },
  ];

  return (
    <div className="relative w-[100vw] z-[0] px-10 py-8 bg-bci-gray pt-[80px] mb-[50px]">
      <div className="absolute top-10 left-5 xl:left-48 xl:top-[120px] w-[410px]">
        <BESTValuesItem
          title={BESTValues[0].title}
          description={BESTValues[0].description}
          width={410}
        />
      </div>
      <div className="absolute right-5 xl:right-10 top-[50%] xl:top-[45%] w-[410px]">
        <BESTValuesItem
          title={BESTValues[1].title}
          description={BESTValues[1].description}
          width={410}
        />
      </div>
      <div className="flex justify-end mr-0 lg:mr-24">
        <Image src={"/AboutMonitor.png"} alt=" " draggable="false" width={875} height={580} />
      </div>
      <div className="w-[580px] my-5">
        <div className="text-[64px] text-white font-montserrat font-bold ">
          Про Наш Проєкт
        </div>
        <div className="text-[20px] text-white font-montserrat">
          BEST Company Insight – це захід для студентів, де вони зможуть більше
          дізнатися про Вашу компанію, внутрішні процеси та отримають можливість
          поспілкуватися з працівниками
        </div>
      </div>
    </div>
  );
}
