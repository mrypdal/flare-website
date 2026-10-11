import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectDescription from './components/ProjectDescription';
import Team from './components/Team';
import Meeting from './components/Meeting';
import Sponsors from './components/Sponsors';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectDescription />
        <Team />
        <Meeting />
        <Sponsors />
      </main>
    </>
  );
}

export default App;
