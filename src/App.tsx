import './App.css'
import SoloProject from './Project'
import TeamProject from './TeamProject'
type ProjectType = {
  name: string,
  link?: string,
  description: string,
  img: string,
  role?: string
}

function App() {
  const soloprojects: ProjectType[] = [
    { name: "Chromify", link: "https://logitech0.github.io/chromify/", description: "Cross-platform web-based graphics editor", img: "/chromify.png" },
    { name: "Professional Calculator", link: "/calculator.py", description: "Calculator but better, you can calculate complex expressions", img: "/professionalcalc.jpg" },
    { name: "Weatherly", link: "https://weatherly-nine-delta.vercel.app/", description: "Check the weather for your location easily", img: "/weatherly.jpg" },
    { name: "GitViewer", link: "https://gitviewer-beryl.vercel.app/", description: "View any person's github profile including their bio, repositories, followers", img: "/gitviewer.jpg" },
    { name: "MemoCards", link: "https://game-memo-cards.vercel.app/", description: "Memory cards game and personally my favorite project so far", img: "/memocards.jpg" },
    { name: "Expense Tracker", link: "https://expense-tracker-d-theta.vercel.app/", description: "Track your income and expenses with simple analytics and history", img: "/expensetracker.jpg" },
    { name: "Flip & Learn", link: "https://flip-n-learn.vercel.app/", description: "Flashcards app for learning and memorizing information effectively", img: "/flipnlearn.jpg" },
    { name: "CineScope", link: "https://cine-scope-iota-ten.vercel.app/", description: "Explore popular, highly rated movies and TV shows with details and posters", img: "/cinescope.jpg" },
    { name: "Link Shortener", link: "https://shortener-d.vercel.app/", description: "Simple URL shortener with history and React Router-based navigation", img: "/linkshortener.jpg" },
  ]
  const teamprojects: ProjectType[] = [
    { name: "Leleka", link: "https://deliveryleleka.netlify.app/", description: "Personal ukrainian messager with bigger privacy options", img: "/leleka.jpg", role: "Frontend Developer" },
    { name: "Rhythm", description: "Streaming platform that helps new artists discover their fanbase", img: "/rhythm.jpg", role: "Project Co-Mananger, Designer, Frontend Developer, Analyst, Content Creator" },
    { name: "Positive Content Generator", description: "Generate different things here to cheer yourself up😊", img: "/gpk.jpg", role: "Frontend Developer" }
  ]
  return (
    <>
      <h1>delured's page</h1>
      <div className="projects solo">
        <h2>solo projects</h2>
        <div className="projects solo container">
          {soloprojects.map((project) => (
            <SoloProject
              projectName={project.name}
              projectLink={project.link}
              projectDescription={project.description}
              projectIMG={project.img}
            />
          ))}
        </div>
      </div>
      <div className="projects team">
        <h2>team projects</h2>
        <div className="projects team container">
          {teamprojects.map((project) => (
            <TeamProject
              projectName={project.name}
              projectLink={project.link}
              projectDescription={project.description}
              projectIMG={project.img}
              projectRole={project.role}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
