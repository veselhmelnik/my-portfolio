import { Link } from "react-router"
import { WORK_ITEMS } from "../utils/constants"

const WorkSection = ({area = '', preview = false}: {area?: string, preview?: boolean}) => {
  const filteredItems = area ? WORK_ITEMS.filter((i) => i.area === area) : WORK_ITEMS
  const previewItems = WORK_ITEMS.slice(3)
  const workItems = preview ? previewItems : filteredItems
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-12">
        {workItems.map((item) => (
          <article key={item.id}>
            <Link to={`/portfolio/${item.slug}`}>
              {/* Image placeholder */}
              <div className="w-full rounded-2xl aspect-16/10 bg-gray-300 overflow-hidden">
                {item.images && (
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="
                      w-full
                      rounded-2xl
                      shadow-2xl
                      h-full
                      object-fill
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-2xl font-medium">{item.title}</h3>
            </Link>
          </article>
        ))}
      </div>

     
    </section>
  )
}

export default WorkSection
