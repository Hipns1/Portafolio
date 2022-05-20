import React, { useEffect } from 'react';

const Projects = () => {

    const [projects, setProjects] = React.useState([]);

    //obtener datos con fetch
    const getData = async () => {
        const resp = await fetch('https://portfolio-jdpf.herokuapp.com/projects');
        const data = await resp.json();
        setProjects(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div>
                <h1>PROJECTS</h1>
            </div>
            <div>
                {
                    projects.map(project => (
                        <div key={project.id}>
                            <h1>{project.title}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects