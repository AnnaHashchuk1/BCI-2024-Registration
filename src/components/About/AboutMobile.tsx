import Image from "next/image";
import BESTValuesItem, { BESTValuesItemProps } from "./BESTValuesItem";

export default function AboutMobile() {
  const BESTValues: Omit<BESTValuesItemProps, "width">[] = [
    {
      title: "Наша Візія",
      description:
        "Обізнана та адаптована до прокладання кар’єрного шляху молодь",
    },
    {
      title: "Наша Місія",
      description:
        "Передача знань від досвідчених працівників амбітним студентам",
    },
  ];

  return (
    <div className="pt-[100px] pb-[70px] px-10 bg-bci-gray">
      <div>
        <div className="text-center font-montserrat text-white font-bold text-[32px] mb-2">
          Про Наш Проєкт
        </div>
        <div className="text-left font-montserrat text-base text-white font-normal">
          BEST Company Insight – це захід для студентів, де вони зможуть більше
          дізнатися про Вашу компанію, внутрішні процеси та отримають можливість
          поспілкуватися з працівниками
        </div>
      </div>
      <div className="w-[100%] my-8">
        <Image
          className="mx-auto"
          src="/AboutMobile.png"
          alt=" "
          draggable="false"
          width={283}
          height={289}
        />
      </div>
      <div className="flex flex-col gap-8">
        {BESTValues.map((bestValue, i) => (
          <BESTValuesItem
            key={i}
            title={bestValue.title}
            description={bestValue.description}
            width={280}
          />
        ))}
      </div>
    </div>
  );
}
