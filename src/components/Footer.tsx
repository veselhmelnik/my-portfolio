const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="">
      <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-10 text-[#2f3130] sm:justify-between">
        <div>© 2026 Nikita Domitrak</div>
        <div
          className="cursor-pointer hover:text-[#BCB7B0] font-semibold font-sans tracking-wide uppercase"
          onClick={scrollToTop}
        >
          Back to top
        </div>
      </div>
    </div>
  )
}

export default Footer
