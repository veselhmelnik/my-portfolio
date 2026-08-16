import { useEffect, useState } from 'react'
import { CAROUSEL_ITEMS } from '../utils/constants'

const CarouselSection = () => {
  const [index, setIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1)
      } else if (window.innerWidth < 768) {
        setVisibleCount(2)
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3)
      }
        else if (window.innerWidth < 1280) {
        setVisibleCount(4)
      } else if (window.innerWidth < 1700) {
        setVisibleCount(5)
      } else {
        setVisibleCount(6)
      }
    }
    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)

    return () => {
      window.removeEventListener('resize', updateVisibleCount)
    }
  }, [])
  const itemWidth = 100 / visibleCount

  const maxIndex = Math.max(0, CAROUSEL_ITEMS.length - visibleCount)
  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0))
  }
  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex))
  }
  return (
    <div className="flex items-center gap-6">
      <button
        onClick={handlePrev}
        disabled={index === 0}
        className="w-10 h-10 shrink-0 rounded-full border border-dashed border-black flex items-center justify-center cursor-pointer transition hover:bg-black hover:text-white disabled:opacity-30"
      >
        ←
      </button>
      <div className="overflow-hidden flex-1">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * itemWidth}%)` }}
        >
          {CAROUSEL_ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                style={{ width: `${itemWidth}%` }}
                className="text-[#525456] text-xl hover:text-[#292a2b] shrink-0 flex justify-center items-center gap-3 font-bold cursor-default"
              >
                <div>
                  <Icon size={26} />
                </div>
                {item.skill}
              </div>
            )
          })}
        </div>
      </div>
      <button
        onClick={handleNext}
        disabled={index === maxIndex}
        className="w-10 h-10 shrink-0 rounded-full border border-dashed border-black flex items-center justify-center cursor-pointer transition hover:bg-black hover:text-white disabled:opacity-30"
      >
        →
      </button>
    </div>
  )
}

export default CarouselSection
