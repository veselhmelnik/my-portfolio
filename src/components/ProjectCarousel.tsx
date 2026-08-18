import { useState } from 'react'

type ProjectCarouselProps = {
  images: string[]
  title?: string
}

const ProjectCarousel = ({
  images,
  title = 'Project',
}: ProjectCarouselProps) => {
  const [index, setIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  if (!images.length) return null

  const prev = () => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  const next = () => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-5">
        {images.length > 1 && (
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="
            shrink-0
            w-11 h-11
            rounded-full
            bg-black text-white
            cursor-pointer
            transition
            hover:bg-black/70
          "
          >
            ←
          </button>
        )}

        <div className="w-full max-w-5xl overflow-hidden">
          <div key={index} className="animate-fade-in">
            <img
              src={images[index]}
              alt={`${title} screenshot ${index + 1}`}
              onClick={() => setIsFullscreen(true)}
              className="
              w-full
              max-h-162.5
              object-contain
              cursor-zoom-in
            "
            />
          </div>
        </div>

        {images.length > 1 && (
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="
            shrink-0
            w-11 h-11
            rounded-full
            bg-black text-white
            cursor-pointer
            transition
            hover:bg-black/70
          "
          >
            →
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`
              h-2 rounded-full transition-all cursor-pointer
              ${index === i ? 'w-6 bg-black' : 'w-2 bg-black/30'}
            `}
            />
          ))}
        </div>
      )}
      {isFullscreen && (
        <div
          className="
      fixed inset-0
      z-100
      bg-black/90
      flex items-center justify-center
      p-4
    "
          onClick={() => setIsFullscreen(false)}
        >
          <img
            src={images[index]}
            alt={`${title} screenshot ${index + 1}`}
            className="
        max-w-full
        max-h-full
        object-contain
        cursor-zoom-out
      "
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            aria-label="Close fullscreen image"
            onClick={() => setIsFullscreen(false)}
            className="
        absolute
        top-5 right-5
        w-12 h-12
        rounded-full
        bg-white/10
        text-white
        text-2xl
        cursor-pointer
        hover:bg-white/20
        transition
      "
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectCarousel
