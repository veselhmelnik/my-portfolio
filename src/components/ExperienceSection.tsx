import { EXPERIENCE_ITEMS } from '../utils/constants'

const ExperienceSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-15 gap-y-15">
      {EXPERIENCE_ITEMS.map((e, i) => {
        return (
          <div key={i}>
            <div className="text-center font-semibold text-[#2f3130] text-4xl">
              {e.title}
            </div>
            <div className="grid mt-10">
              {e.items.map((item, j) => {
                let border = 'border-r'
                if ((i === 0 && j % 2 !== 0) || (i === 1 && j % 2 === 0)) {
                  border = 'border-l'
                }
                return (
                  <div
                    key={item.title}
                    className={`grid gap-1.5 border-b ${border} py-5 px-5 lg:min-h-50`}
                  >
                    <div className="font-sans font-semibold">{item.years}</div>
                    <div className="text-[#2f3130] font-bold text-2xl">
                      {item.title}
                    </div>
                    <div className="font-sans text-[#525456]">
                      {item.description}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ExperienceSection
