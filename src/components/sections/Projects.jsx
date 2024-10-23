import ProjectCard from "../cards/ProjectCard";
import { fullprojects, aibcprojects } from "../../utils";
import SectionHeader from "../ui/SectionHeader";

const Projects = () => {
    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8" id="projects">
            
            <SectionHeader title={"Projects."} subtitle={'<- Fullstack Projects ->'}/>
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 gap-5">
                {fullprojects.map((project, idx) => (
                    <ProjectCard project={project} key={idx} />
                ))}
            </div>
            
            <SectionHeader title={'\n'} subtitle={"<- AI & Blockchain Projects ->"}/>
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 gap-5">
                {aibcprojects.map((project, idx) => (
                    <ProjectCard project={project} key={idx} />
                ))}
            </div>

        </section>
    )
}

export default Projects