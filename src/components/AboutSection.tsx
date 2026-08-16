import { ABOUT_ITEMS, LINKS } from '../utils/constants'
import CustomButton from './CustomButton'

const AboutSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-12">
      <div className="max-w-3xl">
        <div className="text-5xl font-medium">
          Hi! I'm Nikita Domitrak.
          <div className="text-[#BCB7B0] mt-3 mb-7 italic font-light leading-15">
            Frontend & Backend Developer with a passion for Embedded & IoT.
          </div>
        </div>
        <CustomButton to={LINKS.contacts}>Let`s Talk</CustomButton>
      </div>
      <RightSection />
    </div>
  )
}

export default AboutSection

const RightSection = () => {
  return (
    <div
      className="
        flex
        flex-row
        justify-between
        gap-8
        w-full
        lg:w-auto
        lg:flex-col
        lg:justify-start
        lg:text-right
        lg:shrink-0
        lg:min-w-40
      "
    >
      {ABOUT_ITEMS.map((item) => (
        <div key={item.title}>
          <div className="text-4xl font-medium">{item.count}</div>

          <div className="text-gray-600">{item.title}</div>
        </div>
      ))}
    </div>
  )
}
