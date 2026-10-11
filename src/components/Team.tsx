import './Team.css';

export default function Team() {
  const team = [
    {
      name: "Veronika Rypdal, MD, PhD",
      role: "Principal Investigator",
      institution: "UiT-The Arctic University of Norway, Tromsø, Norway",
      image: "/pres/bilde_VeronikaRypdal.jpg"
    },
    {
      name: "Jaime Guzman MD, MS",
      role: "Task Force Member",
      institution: "BC Children's Hospital, Vancouver, Canada",
      image: "/pres/image9.jpg"
    },
    {
      name: "Hermine I. Brunner, MD, MSc",
      role: "Task Force Member",
      institution: "Cincinnati Children's Hospital Medical Center, USA",
      image: "/pres/image7.jpg"
    },
    {
      name: "Joost Swart, MD, PhD",
      role: "Task Force Member",
      institution: "UMC Utrecht, Wilhelmina Children's Hospital, The Netherlands",
      image: "/pres/image10.jpg"
    },
    {
      name: "Alessandro Consolaro, MD, PhD",
      role: "Task Force Member",
      institution: "Istituto Giannina Gaslini and University of Genova, Italy",
      image: "/pres/bilde_AlessandroConsolaro.png"
    },
    {
      name: "Filipa Oliveira Ramos, MD, PhD",
      role: "Task Force Member",
      institution: "University Hospital Santa Maria, Lisbon, Portugal",
      image: "" // Placeholder
    },
    {
      name: "Martin Rypdal, PhD",
      role: "Methodologist / Statistics",
      institution: "UiT – The Arctic University of Norway",
      image: "/pres/bilde_MartinRypdal.jpg"
    },
    {
      name: "Silvia Maria Orsi",
      role: "Pediatric Resident / PhD Student",
      institution: "Istituto Giannina Gaslini and University of Genova, Italy",
      image: "/pres/image14.JPEG"
    },
    {
      name: "Demi van Grieken",
      role: "Medical Student",
      institution: "UMC Utrecht, Wilhelmina Children's Hospital, The Netherlands",
      image: "/pres/image15.jpeg"
    }
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        <h2 className="section-title">The <span className="text-gradient">Task Force</span></h2>
        <p className="section-subtitle">
          An international interest group comprising researchers with expertise in pediatric rheumatology, 
          clinical practice, observational cohort studies, and randomized controlled trials.
        </p>

        <div className="team-grid">
          {team.map((member, idx) => (
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
      </div>
    </section>
  );
}
