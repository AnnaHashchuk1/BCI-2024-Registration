import Image from "next/image"

export default function AboutBEST(){
    return(
        <section className="relative w-full flex justify-center mt-20">
            <div className="grid grid-col mx-5 max-w-md md:max-w-3xl gap-6 lg:gap-10">
                <h1 className="text-4xl lg:text-7xl font-montserrat font-bold text-white self-center text-center mt-10">Що таке BEST Lviv?</h1>
                <div className="w-full border border-white rounded-xl bg-bci-purple p-10 z-20">
                    <p className="font-montserrat text-md lg:text-lg text-white">
                        <strong>
                            BEST Lviv (Board of European Students of Technology)  
                        </strong> – осередок міжнародної неприбуткової громадської організації, який об’єднує 
                        студентів технічних спеціальностей. Нашою місією є розвиток студентів через обмін знаннями 
                        та співпраці компаній, університетів та студентів Європи.
                    </p>
                </div>
                <div className="flex flex-row gap-7 justify-center md:justify-between px-4 md:px-16 ">
                    <div className="flex items-center">
                        <a href="https://best-lviv.org.ua/">
                            <Image
                                src="/BESTLogo.svg"
                                alt="logo"
                                draggable="false"
                                height={150}
                                    width={100}
                                className="hidden md:flex w-64"
                            />
                        </a>
                    </div>
                    <div className="grid grid-col font-montserrat text-3xl gap-4 lg:gap-8 text-white">
                        <p><strong>35</strong> років досвіду</p>
                        <p><strong>85</strong> осередків</p>
                        <p><strong>30</strong> країн</p>
                    </div>
                </div>
                <div className="w-full border border-white rounded-xl bg-bci-purple p-10 z-20">
                    <p className="font-montserrat text-md  lg:text-lg text-white">
                        Усі проєкти спрямовані на допомогу студентам на початку кар’єрного росту, 
                        розвиток їхніх навичок та об’єднанню активної молоді. 
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/BESTLogo.svg"
                            alt="logo"
                            draggable="false"
                            height={150}
                            width={100}
                            className="md:hidden flex w-52 "
                        />
                    </div>
                </div>
                <Image
                    src="/AboutBest2.png"
                    alt=" "
                    height={1500}
                    width={1000}
                    draggable="false"
                    className="absolute right-0 hidden xl:flex self-center h-full w-auto z-10"
                />
                <Image
                    src="/AboutBest1.png"
                    alt=" "
                    height={1500}
                    width={1000}
                    draggable="false"
                    className="absolute left-0 hidden xl:flex self-center h-full w-auto z-10"
                />

            <Image
                src="/BgElement.svg"
                width={800}
                height={600}
                alt=" "
                draggable="false"
                className="absolute w-auto self-center rotate-210 z-0 opacity-20 -top-10 lg:top-4 -right-64 md:scale-90 lg:scale-125"
            />
            <Image
                src="/BgElement.svg"
                width={800}
                height={600}
                alt=" "
                draggable="false"
                className="absolute w-auto self-center rotate-210 z-0 opacity-20 -bottom-10 -left-48 md:scale-90 lg:scale-125"
            />
        </section>
    )
}