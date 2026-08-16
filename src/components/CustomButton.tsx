import type { ReactNode } from "react"
import { Link } from "react-router"

type CustomButtonProps = {
  children: ReactNode
  to?: string
  isActive?: boolean
  onClick?: () => void
}

const CustomButton = ({
  children,
  to,
  onClick,
  isActive
}: CustomButtonProps) => {
  const styles = `
    inline-block
    border border-dashed
    py-3 px-8
    rounded-4xl
    cursor-pointer
    ${isActive ? 'bg-black text-white border-transparent' : ''}
    hover:bg-black
    hover:text-white
    hover:border-transparent
    transition-all
  `

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  )
}

export default CustomButton