import { SOCIAL_ITEMS } from '../../utils/constants'

const HeaderSocial = () => {
  return (
    <div className="flex gap-4">
      {SOCIAL_ITEMS.map((item) => {
        const Icon = item.icon

        return (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={20}/>
          </a>
        )
      })}
    </div>
  )
}

export default HeaderSocial
