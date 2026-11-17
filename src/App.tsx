import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectDescription from './components/ProjectDescription';
import Team from './components/Team';
import Meeting from './components/Meeting';
import Sponsors from './components/Sponsors';
import AvailabilityPoll from './components/AvailabilityPoll';
import './App.css';

function App() {
  const [showPoll, setShowPoll] = useState(false);
  const [initialApril, setInitialApril] = useState<number | null>(null);
  const [initialMay, setInitialMay] = useState<number | null>(null);
  const [initialName, setInitialName] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const aprilParam = params.get('april');
    const mayParam = params.get('may');
    const pollParam = params.get('poll');
    const nameParam = params.get('name');

    if (aprilParam && [1, 2, 3].includes(Number(aprilParam))) {
      setInitialApril(Number(aprilParam));
    }
    if (mayParam && [1, 2, 3].includes(Number(mayParam))) {
      setInitialMay(Number(mayParam));
    }
    if (nameParam) {
      setInitialName(nameParam);
    }

    if (
      pollParam === '1' ||
      aprilParam ||
      mayParam ||
      window.location.hash === '#poll' ||
      window.location.pathname.includes('availability')
    ) {
      setShowPoll(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {showPoll ? (
          <AvailabilityPoll
            initialApril={initialApril}
            initialMay={initialMay}
            initialName={initialName}
            onClose={() => {
              setShowPoll(false);
              window.history.replaceState({}, '', window.location.pathname);
            }}
          />
        ) : (
          <>
            <Hero />
            <ProjectDescription />
            <Team />
            <Meeting
              onOpenPoll={() => {
                setShowPoll(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <Sponsors />
          </>
        )}
      </main>
    </>
  );
}

export default App;
