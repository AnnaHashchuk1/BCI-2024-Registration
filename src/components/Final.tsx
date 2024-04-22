export default function Final() {
  return (
    <section id="registration" className="relative font-montserrat text-bci-white w-4/6 flex flex-col items-center gap-12 mb-40 mt-14 lg:mt-7">
        <h3 className="font-semibold text-4xl lg:text-5xl text-center z-20">
            Вітаю!
        </h3>
        <p className="text-2xl lg:text-3xl font-light w-full lg:w-9/12 text-left lg:text-center z-20">
            Тепер ти на крок ближче до саморозвитку, набуття досвіду, пошуку робочих зв’язків та підйому по кар’єрних сходах!
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeV-6rCYsm2e-Bf7Dcb83vBuk85ggH-QP1zaCZYBRBUUWlxAQ/viewform">
          <button className="font-medium text-2xl md:text-3xl text-center bg-bci-gray py-6 px-14 rounded-2xl mt-10 hover:scale-110 duration-500 hover:shadow-normal
          border border-bci-gray hover:border-bci-white hover:bg-bci-purple z-20">
              <p>Зареєструватися</p>
          </button>
        </a>
    </section>
  )
}
