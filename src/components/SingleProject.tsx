import { useParams } from 'react-router'
import { WORK_ITEMS } from '../utils/constants'
import { useDocumentTitle } from '../utils/useDocumentTitle'
import ProjectCarousel from './ProjectCarousel'

const SingleProject = () => {
  const { slug } = useParams()

  const project = WORK_ITEMS.find((item) => item.slug === slug)

  useDocumentTitle(
    project ? `${project.title} | Nikita Domitrak` : 'Project Not Found',
  )
  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-center text-5xl font-bold font-sans">
        {project.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <ProjectInfo label="Frontend" value={project.frontend} />

        <ProjectInfo label="Backend" value={project.backend} />

        <ProjectInfo label="Embedded" value={project.embedded} />

        <ProjectInfo
          label="Project"
          value="Live Demo"
          github={project.github}
          githubFront={project.githubFront}
          githubBack={project.githubBack}
          demo={project.demo}
        />
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex-1">
          <div className="text-lg font-bold">Description</div>
          <div className="text-[#525456]">{project.description}</div>
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold">Challenge</div>
          <div className="text-[#525456]">{project.challenge}</div>
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold">Solution</div>
          <div className="text-[#525456]">{project.solution}</div>
        </div>
      </div>
      {project.hasImages ?<ProjectCarousel
        images={project.images?.slice(1) ?? []}
        title={project.title}
      /> : ''}
    </div>
  )
}
type ProjectInfoProps = {
  label: string
  value: string | undefined
  demo?: string
  github?: string 
  githubFront?: string
  githubBack?: string
}

const ProjectInfo = ({
  label,
  value,
  demo,
  github,
  githubFront,
  githubBack,
}: ProjectInfoProps) => {
  return (
    <div
      className={`${label === 'Embedded' || label === 'Project' ? 'border-l' : 'border-r'} border-b p-4`}
    >
      <div className="font-semibold text-lg">{label}:</div>

      <div className="mt-1 text-[#525456]">
        {label === 'Project' ? (
          <div>
            {' '}
            {demo ? <a
              className="text-blue-800 font-semibold hover:underline"
              href={demo}
              target="_blank"
            >
              Live Demo
            </a> : ''}{' '}
            {' '}
            <div>
              {github ? (
                <a
                  className="mr-3 text-blue-800 font-semibold hover:underline"
                  href={github}
                  target="_blank"
                >
                  Github
                </a>
              ) : (
                ''
              )}
              {githubFront ? (
                <a
                  className="mr-3 text-blue-800 font-semibold hover:underline"
                  href={githubFront}
                  target="_blank"
                >
                  Github - Front
                </a>
              ) : (
                ''
              )}  
              {githubBack ? (
                <a
                  className="ml-3 text-blue-800 font-semibold hover:underline"
                  href={githubBack}
                  target="_blank"
                >
                Github - Back
                </a>
              ) : (
                ''
              )}
            </div>
          </div>
        ) : (
          value
        )}
      </div>
    </div>
  )
}
export default SingleProject
