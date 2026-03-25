type ProjectProps = {
    projectName: string,
    projectLink?: string,
    projectDescription: string,
    projectIMG: string,
    projectRole?: string
}

const Project = ({ projectName, projectLink, projectDescription, projectIMG, projectRole }: ProjectProps) => {
    const linkText = projectLink ? "View Project" : "Unfinished Project";
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!projectLink) return;
        e.preventDefault();

        if (projectLink.startsWith("https://")) {
            window.location.href = projectLink;
        } else {
            const a = document.createElement("a");
            a.href = projectLink;
            a.download = "";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    return (
        <div className="project">
            <img src={projectIMG} alt={projectName} />
            <h3>{projectName}</h3>
            <p>{projectDescription}</p>
            <p><strong>Role: {projectRole}</strong></p>
            <a href={projectLink} onClick={handleClick}>{linkText}</a>
        </div>
    )
}

export default Project;