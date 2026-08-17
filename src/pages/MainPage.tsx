import AboutSection from '../components/AboutSection'
import Reveal from '../components/Reveal'
import WorkSection from '../components/WorkSection'
import SkillSection from '../components/SkillSection'
import CarouselSection from '../components/CarouselSection'
import ExperienceSection from '../components/ExperienceSection'
import CustomButton from '../components/CustomButton'
import { LINKS } from '../utils/constants'
import { useDocumentTitle } from '../utils/useDocumentTitle'

const MainPage = () => {
  useDocumentTitle("Home | Nikita Domitrak")
  return (
    <div className="flex flex-col gap-15">
      <AboutSection />
      <Reveal>
        <WorkSection area={'front'} />
        <div className="flex justify-center mt-12">
          <CustomButton to={LINKS.portfolio}>View All Works</CustomButton>
        </div>
      </Reveal>
      <Reveal>
        {' '}
        <SkillSection />
      </Reveal>
      <Reveal>
        <CarouselSection />
      </Reveal>
      <Reveal>
        <ExperienceSection />
        <div className="mt-15 text-[#BCB7B0] text-center italic text-6xl tracking-wider ">
          <a
            href="mailto:nikitadomitrak@gmail.com"
            className=" wrap-anywhere block text-center text-2xl md:text-5xl italic hover:text-black transition-colors"
          >
            nikitadomitrak@gmail.com
          </a>
        </div>
      </Reveal>
    </div>
  )
}

export default MainPage
