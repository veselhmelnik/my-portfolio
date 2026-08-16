import type { IconType } from 'react-icons'
import { SKILL_ITEMS } from '../utils/constants'

const SkillSection = () => {
  return (
    <div className="grid md:grid-cols-3 gap-y-10 gap-x-3">
      {SKILL_ITEMS.map((item) => (
        <SkillCard
          key={item.id}
          id={item.id}
          title={item.title}
          icon={item.icon}
          description={item.description}
        />
      ))}
    </div>
  )
}

type SkillCardProps = {
  id: number
  title: string
  icon: IconType
  description: string
}

const SkillCard = ({ id, title, description, icon }: SkillCardProps) => {
  const Icon = icon
  return (
    <div className='grid gap-y-1.5'>
      <div className="font-sans font-semibold">
        {id < 10 ? `0${id}.` : `${id}.`}
      </div>
      <div className="flex items-center gap-5 text-[#BCB7B0] text-3xl italic">
        <div>
          <Icon />
        </div>{' '}
        <div>{title}</div>
      </div>
      <div className='font-sans text-[#525456] text-md'>{description}</div>
    </div>
  )
}

export default SkillSection
