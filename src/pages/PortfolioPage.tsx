import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import WorkSection from '../components/WorkSection'
import { AREA_ARRAY } from '../utils/constants'
import { useDocumentTitle } from '../utils/useDocumentTitle'

const PortfolioPage = () => {
  useDocumentTitle("Portfolio | Nikita Domitrak")
  const [area, setArea] = useState('')
  const toggleArea = (area: string) => {
    setArea(area)
  }
  return (
    <div>
      <h2 className="text-center text-6xl font-semibold">My Latest Works</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-center my-15 gap-2 md:gap-5">
        {AREA_ARRAY.map((a) => {
            let buttonName;
            switch (a) {
                case 'front':
                    buttonName = 'FrontEnd'
                    break;
                case 'back':
                    buttonName = 'Extensions'
                    break;
                case 'embedded':
                    buttonName = 'Embedded'
                    break;
                default:
                    buttonName = 'Show All'
                    break;
            }
            return (
                <CustomButton key={buttonName} onClick={() => toggleArea(a)} isActive={area === a}>{buttonName}</CustomButton>    
            )
        })}
      </div>
      <div key={area} className='animate-fade-in'><WorkSection area={area}/></div>
    </div>
  )
}

export default PortfolioPage
