import './Team.css';

export default function Team() {
  const workingGroup = [
    {
      name: "Veronika Rypdal",
      role: "Principal Investigator",
      institution: "UiT-The Arctic University of Norway, Tromsø, Norway",
      image: "/pres/bilde_VeronikaRypdal.jpg"
    },
    {
      name: "Alessandro Consolaro",
      role: "Working Group Member",
      institution: "Istituto Giannina Gaslini and University of Genova, Italy",
      image: "/pres/bilde_AlessandroConsolaro.png"
    },
    {
      name: "Joost Swart",
      role: "Working Group Member",
      institution: "UMC Utrecht, Wilhelmina Children's Hospital, The Netherlands",
      image: "/pres/image10.jpg"
    },
    {
      name: "Filipa Ramos",
      role: "Working Group Member",
      institution: "University Hospital Santa Maria, Lisbon, Portugal",
      image: "/pres/bilde_FilipaRamos.jpg"
    },
    {
      name: "Jaime Guzman",
      role: "Working Group Member",
      institution: "BC Children's Hospital, Vancouver, Canada",
      image: "/pres/image9.jpg"
    },
    {
      name: "Hermine Brunner",
      role: "Working Group Member",
      institution: "Cincinnati Children's Hospital Medical Center, USA",
      image: "/pres/image7.jpg"
    },
    {
      name: "Silvia Maria Orsi",
      role: "Working Group Member",
      institution: "Istituto Giannina Gaslini and University of Genova, Italy",
      image: "/pres/image14.JPEG"
    }
  ];

  const extendedTeam = [
    {
      name: "Achille Marino",
      role: "Extended Research Team",
      institution: "Affiliation coming soon",
      image: "/pres/bilde_AchilleMarino.png"
    },
    {
      name: "Flora McErlane",
      role: "Extended Research Team",
      institution: "Affiliation coming soon",
      image: "/pres/bilde_FloraMcErlane.jpg"
    },
    {
      name: "Klaus Tenbrock",
      role: "Extended Research Team",
      institution: "Affiliation coming soon",
      image: "/pres/bilde_KlausTenbrock.jpg"
    },
    {
      name: "Martin Rypdal",
      role: "Extended Research Team",
      institution: "UiT – The Arctic University of Norway",
      image: "/pres/bilde_MartinRypdal.jpg"
    }
  ];

  const patientRep = [
    {
      name: "Vegard Nilsen",
      role: "Patient Representative",
      institution: "Affiliation coming soon",
      image: ""
    }
  ];

  const otherMembers = [
    "Brian Feldman", "Daniel B. Horton", "Marinka Twilt", "Seza Ozen", 
    "Petra Hissink Muller", "Fabrizio Debenedetti", "Gerd Horneff", 
    "Kirsten Minden", "Pamela Weiss", "Shoop Worral", "Helmut Wittkowski", 
    "Mia Glerup", "Angela Migowa", "Raul Gutierrez Suarez", "Susa Benseler", 
    "Caifeng Li", "Esi M. Morgan", "Erin Balay-Dustrude"
  ];

  const renderGrid = (members: any[]) => (
    <div className="team-grid">
      {members.map((member, idx) => (
        <div key={idx} className="team-card glass">
          <div className="team-image-wrapper">
            <img 
              src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0284c7&color=fff&size=250`} 
              alt={member.name} 
              className="team-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0284c7&color=fff&size=250`;
              }}
            />
          </div>
          <div className="team-info">
            <h4 className="team-name">{member.name}</h4>
            <p className="team-role">{member.role}</p>
            <p className="team-inst">{member.institution}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="team" className="section">
      <div className="container">
        <h2 className="section-title">The <span className="text-gradient">Task Force</span></h2>
        <p className="section-subtitle" style={{marginBottom: "40px"}}>
          An international interest group comprising researchers with expertise in pediatric rheumatology, 
          clinical practice, observational cohort studies, and randomized controlled trials.
        </p>

        <h3 className="team-section-title" style={{marginTop: 0}}>Working Group</h3>
        {renderGrid(workingGroup)}

        <h3 className="team-section-title">Extended Research Team</h3>
        {renderGrid(extendedTeam)}

        <h3 className="team-section-title">Patient Representative</h3>
        {renderGrid(patientRep)}

        <h3 className="team-section-title">Other Task Force Members</h3>
        <p className="team-inst" style={{marginBottom: "20px"}}>Affiliations coming soon...</p>
        <ul className="other-members-list">
          {otherMembers.map((name, idx) => (
            <li key={idx} className="other-member-item">
              <span className="other-member-name">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
