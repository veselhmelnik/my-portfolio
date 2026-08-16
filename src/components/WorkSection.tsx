import { WORK_ITEMS } from "../utils/constants"

const WorkSection = ({area = ''}: {area?: string}) => {
  const filteredItems = area ? WORK_ITEMS.filter((i) => i.area === area) : WORK_ITEMS
  return (
    <section className="">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-12">
        {filteredItems.map((item) => (
          <article key={item.id}>
            <a href={item.link} className="block group">
              {/* Image placeholder */}
              <div className="w-full aspect-16/10 bg-gray-300 overflow-hidden">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                )}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-2xl font-medium">{item.title}</h3>
            </a>
          </article>
        ))}
      </div>

     
    </section>
  )
}

export default WorkSection
