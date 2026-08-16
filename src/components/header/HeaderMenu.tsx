import React from 'react'
import { MENU_ITEMS } from '../../utils/constants'
import { Link } from 'react-router'

type HeaderMenuProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderMenu = ({
  isOpen,
  setIsOpen,
}: HeaderMenuProps) => {
  return (
    <div className="flex items-center">
      <ul className="hidden md:flex gap-8 font-medium text-lg text-gray-800">
        {MENU_ITEMS.map((item) => (
          <li key={item.name}>
            <Link
              to={item.link}
              className="animated-underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <MobileButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default HeaderMenu

type MobileButtonProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileButton = ({ isOpen, setIsOpen }: MobileButtonProps) => {
  return (
    <div
      className="group p-2 cursor-pointer"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="md:hidden relative w-8 h-8">
        <span
          className={`
        absolute top-1/2 left-1/2
        w-8 h-0.5 bg-black
        -translate-x-1/2
        transition-transform duration-200

        ${isOpen ? 'rotate-45' : '-translate-y-1.5'}
      `}
        />

        <span
          className={`
        absolute top-1/2 left-1/2
        h-0.5 bg-black
        -translate-x-1/2
        transition-all duration-200

        ${isOpen ? 'w-8 -rotate-45' : 'w-6 translate-y-1.5 group-hover:w-8'}
      `}
        />
      </div>
    </div>
  )
}
