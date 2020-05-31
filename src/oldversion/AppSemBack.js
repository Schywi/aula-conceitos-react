import React, {useState} from 'react';
import Header from './components/Header';
import './App.css';
import backgroundImage from './assets/background.jpg'

function App() {
  const [projects,setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
      //projects.push(`Novo projeto ${Date.now()}`)
      setProjects([...projects, `Novo projeto ${Date.now()}`])
  }

  return (
  <>
    <Header title="Projects"/> 
    <img src={backgroundImage}/>
    
    <ul>
      {projects.map(project => <li key={project}> {project}</li>)}
    </ul>
    <button type="button" onClick={handleAddProject}>Adicionar projetos</button>
  </>)
}
export default App; 