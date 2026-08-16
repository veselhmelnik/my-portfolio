import { useState } from 'react'
import portfolioLogo from '../../assets/portfolio-img.png'
import { MENU_ITEMS } from '../../utils/constants'
import HeaderMenu from './HeaderMenu'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header
        className="
          px-5 sm:px-15
          flex justify-between items-center
          sticky top-0 z-50
          bg-[#eee8de]/50
          backdrop-blur-md
          w-full
        "
      >
        <a href="/">
          <img src={portfolioLogo} className="w-30" alt="Logo" />
        </a>

        <HeaderMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        <HeaderSocial />
      </header>

      {isOpen && (
        <div
          className="
            md:hidden
            fixed
            top-18
            left-0 right-0
            z-40
            bg-[#eee8de]/50
            backdrop-blur-md
            py-6
          "
        >
          <ul className="flex flex-col pl-6 items-center gap-2 text-lg font-medium">
            {MENU_ITEMS.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="animated-underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Header
