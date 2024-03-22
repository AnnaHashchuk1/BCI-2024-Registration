import Image from "next/image"

export default function RoadmapStudent() {
  return (
    <section className="w-full min-h-screen pb-40 bg-bci-purple flex flex-col items-center gap-4 md:gap-24 font-montserrat text-bci-gray">
        <div className="hidden md:flex md:flex-col items-center gap-7 mt-4 w-11/12 md:text-5xl xl:text-6xl font-bold text-center">
            <h2>
                Що Потрібно, 
            </h2>
            <h2 className="leading-4-rem">
                Щоб Стати <span className="text-bci-white border-6 rounded-full px-8">Учасником</span> Проєкту?
            </h2>
        </div>
        <div className="md:hidden flex flex-col items-center text-center text-3xl font-bold mt-14 w-11/12">
          <h2>Як Стати</h2>
          <span className="text-bci-white border-2 rounded-full px-5 h-11 flex items-center">Учасником</span>
          <h2>Проєкту</h2>
        </div>
        <div className="relative w-11/12">
          <Image
                src="/Timeline.svg"
                width={28}
                height={732}
                alt=" "
                draggable="false"
                className="absolute w-auto self-center left-6 md:left-1/2 z-0"
            />
          <div className="flex flex-col md:grid md:grid-cols-2 text-xl md:gap-10 gap-9 z-20 mt-12 ml-20 md:ml-0">
            <div className="flex flex-col items-start gap-3 order-1 h-[140px] pl-24">
              <span className="bg-bci-gray rounded-full text-bci-white font-semibold px-5 py-2">Крок 1</span>
              <p className="text-left pl-4 w-10/12 lg:w-4/6">Зареєструватися  на подію до 12.04.2024</p>
            </div>
            <span className="order-2 hidden md:flex"></span>
            <span className="order-3 hidden md:flex"></span>
            <div className="flex flex-col items-start gap-3 order-4 md:pl-32 h-[140px]">
              <span className="bg-bci-gray rounded-full text-bci-white font-semibold px-5 py-2">Крок 2</span>
              <p className="text-left pl-4 w-10/12 lg:w-4/6">Пройти співбесіду з нашою командою 15.04 - 19.04</p>
            </div>
            <div className="flex flex-col items-start gap-3 order-5 h-[140px] pl-24">
              <span className="bg-bci-gray rounded-full text-bci-white font-semibold px-5 py-2">Крок 3</span>
              <p className="text-left pl-4 w-10/12 lg:w-4/6">Отримати запрошення у вибрану компанію</p>
            </div>
            <span className="order-6 hidden md:flex"></span>
            <span className="order-7 hidden md:flex"></span>
            <div className="flex flex-col items-start gap-3 order-8 md:pl-32 h-[140px]">
              <span className="bg-bci-gray rounded-full text-bci-white font-semibold px-5 py-2">Крок 4</span>
              <p className="text-left pl-4 w-10/12 lg:w-4/6">Прийти й круто провести чаc</p>
            </div>
          </div>
        </div>
    </section>
  )
}