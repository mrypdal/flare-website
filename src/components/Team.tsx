import './Team.css';

export default function Team() {
  const workingGroup = [
    {
      name: "Veronika Rypdal, MD, PhD",
      role: "Working Group Member",
      institution: "Consultant, Department of Pediatrics, University Hospital of North Norway, Norway. Associate Professor of Pediatrics, UiT-The Arctic University of Norway, Tromsø, Norway. Chair of the PReS JIA Working Party.",
      image: "/pres/bilde_VeronikaRypdal.jpg"
    },
    {
      name: "Hermine I. Brunner, MD, MSc, MBA",
      role: "Working Group Member",
      institution: "Director, Division of Rheumatology and Professor, UC Department of Pediatrics Cincinnati Children's Hospital Medical Center, Cincinnatti, USA.",
      image: "/pres/image7.jpg"
    },
    {
      name: "Alessandro Consolaro, MD, PhD",
      role: "Working Group Member",
      institution: "Associate Professor of Pediatrics, Pediatric Rheumatology Unit, Istituto Giannina Gaslini, Genova Italy. University of Genova, Genova, Italy. PReS Council, Secretary for the Pediatric Rheumatology European Society (PReS).",
      image: "/pres/bilde_AlessandroConsolaro.png"
    },
    {
      name: "Joost Swart, MD, PhD",
      role: "Working Group Member",
      institution: "Pediatric Rheumatologist/-immunologist, Associate Professor, Department of Pediatric Immunology and Rheumatology, UMC Utrecht, Wilhelmina Children's Hospital, Utrecht, The Netherlands.",
      image: "/pres/image10.jpg"
    },
    {
      name: "Jaime Guzman MD, MS",
      role: "Working Group Member",
      institution: "Clinical Associate Professor of Pediatrics, University of British Columbia, Attending Rheumatologist, BC Children’s Hospital, Clinical Investigator, BC Children’s Hospital Research Institute, Vancouver, British Columbia, Canada.",
      image: "/pres/image9.jpg"
    },
    {
      name: "Filipa Oliveira Ramos, MD, PhD",
      role: "Working Group Member",
      institution: "Pediatric Rheumatologist, Pediatric Rheumatology Unit, Pediatric and Rheumatology Department, University Hospital Santa Maria, Lisbon, Portugal. Associate Professor, Rheumatology and Pediatrics Department, Lisbon School of Medicine, University of Lisbon, Portugal. Secretary of the PReS JIA Working Party.",
      image: "/pres/bilde_FilipaRamos.jpg"
    },
    {
      name: "Silvia Maria Orsi",
      role: "Working Group Member",
      institution: "Pediatric resident/PhD student, Pediatric Rheumatology Unit, Istituto Giannina Gaslini and University of Genova, Genova, Italy. EMERGE representative, PReS JIA Working Party.",
      image: "/pres/image14.JPEG"
    }
  ];

  const extendedTeam = [
    {
      name: "Achille Marino, MD, PhD",
      role: "Extended Research Team",
      institution: "Pediatric Rheumatilogy Unit, ASST G.Pini-CTO, Milan, Italy. Representative for Training and Education, PReS JIA Working Party.",
      image: "/pres/bilde_AchilleMarino.png"
    },
    {
      name: "Flora McErlane, MD",
      role: "Extended Research Team",
      institution: "Consultant Paediatric Rheumatologist, Paediatric Rheumatology, Great North Children's Hospital, Newcastle Hospitals NHS Foundation Trust, Newcastle upon Tyne, UK. Institute of Population and Health Sciences, Medical School, Newcastle University, Newcastle upon Tyne, UK. Representative for Clinical Affairs, PReS JIA Working Party.",
      image: "/pres/bilde_FloraMcErlane.jpg"
    },
    {
      name: "Klaus Tenbrock, MD",
      role: "Extended Research Team",
      institution: "Department of Pediatrics, Translational Pediatric Rheumatology, and Immunology, RWTH Aachen University, Aachen, Germany. Representative for Research, PReS JIA Working Party.",
      image: "/pres/bilde_KlausTenbrock.jpg"
    },
    {
      name: "Martin Rypdal, PhD",
      role: "Extended Research Team",
      institution: "Professor and Head of the department, Department of Mathematics and statistics, UiT- the arctic University of Norway, Tromsø, Norway.",
      image: "/pres/bilde_MartinRypdal.jpg"
    }
  ];

  const patientRep = [
    {
      name: "Vegard Nilsen",
      role: "Patient Representative",
      institution: "Styreleder Norsk Revamtikerforbund (NRF), Barne- og ungdomsrevmatikergruppen (BURG) Troms, Norway.",
      image: ""
    }
  ];

  const otherMembers = [
    { name: "Brian Feldman, MD, MSc, FRCPC", affiliation: "Professor Pediatrics, Medicine, IHPME, University of Toronto. Senior Scientist and Head, Division of Rheumatology. The Hospital for Sick Children, Toronto, Canada." },
    { name: "Daniel B. Horton, MD, MSCE", affiliation: "Assistant Professor of Pediatrics and Epidemiology. Rutgers Robert Wood Johnson Medical School. Rutgers Center for Pharmacoepidemiology and Treatment Science. Institute for Health Care Policy and Aging Research Rutgers School of Public Health. New Brunswick, New Jersey, USA." },
    { name: "Marinka Twilt, MD, MScE, PhD", affiliation: "Pediatric Rheumatologist, Clinician Scientist, Alberta Childrens Hospital. Professor Department of PEdiatris, Cumming School of Medicine, University of Calgary, Canada. Chair, CARRA JIA committee. Representative for CARRA." },
    { name: "Seza Ozen, MD, PhD", affiliation: "Head, Professor in Pediatric Rheumatology Hacettepe University, Ankara, Turkey. President of the Pediatric Rheumatology European Society (PReS). Representative for PReS." },
    { name: "Petra Hissink Muller, MD PhD", affiliation: "Assistant Professor, Pediatrician, Rheumatology Immunology at Leiden University Medical Centre, Leiden, The Netherlands. Treasurer, PReS Council, PReS. Representative for PReS." },
    { name: "Fabrizio Debenedetti, MD, PhD", affiliation: "Head, Division Rheumatology. Head, Laboratory of ImmunoRheumatology. Head, Department of Immunology Reserch. IRCCS Ospedale Pediiatrico Bambino Gesù, Roma, Italy. Scientific Committee Chair, PReS Council, PReSTaR. Representative for PReSTaR." },
    { name: "Gerd Horneff, MD", affiliation: "Medical Director Asklepios Clinic Sankt Augustin. Director Centre of General Pediatric and Neonatology. Head Department of General Pediatrics. Asklepios Clinic Sankt Augustin, Germany. Representative for BIKeR registry." },
    { name: "Kirsten Minden, MD, PhD", affiliation: "Professor of Health Services Research in Rheumatology, Department for Pediatrics, Division Pneumology, Immunology and Intensive Medicine; Consultant at the Centre for Chronically Sick Children, Charité – Universitätsmedizin Berlin, Germany. Head of the Pediatric Rheumatology group at the Deutsches Rheuma-Forschungszentrum Berlin (DRFZ), Germany. Representative for JUMBO Registry." },
    { name: "Pamela F. Weiss, MD, MSCE", affiliation: "Associate Director for Clinical Trials, The Center for Pediatric Clinical Effectiveness (CPCE), Children’s Hospital of Philadelphia (CHOP). Clinical Research Director and attending physician, Division of Rheumatology, Director of the CHOP Clinical Trials Research Affinity group. Professor of Pediatrics and Epidemiology at the Perelman School of Medicine at the University of Pennsylvania, USA. Representative for CHOP Clinical Trials Research Affinity group." },
    { name: "Stephanie J.W. Shoop-Worrall, PhD", affiliation: "FHEA, MSc Epidemiology (Biostatistics) BSc (Hons), MRC Career Development Fellow, Children & Young Person’s Rheumatology Research Programme, Centre for Musculoskeletal Research, The University of Manchester, UK. Representaitve for CHYRRP (Children and Young Person´s Rheumatology)." },
    { name: "Helmut Wittkowski, MD", affiliation: "Pediatric Rheumatology and Immunology, University Children's Hospital, Muenster, Germany. Representative for JIR cohort." },
    { name: "Mia Glerup, MD,PhD", affiliation: "Clinical Associate Professor. Aarhus University Hospital, Aarhus, Denmark. Co-chair Nordic JIA 28-year study. Representative for the Nordic JIA study." },
    { name: "Angela Nyangore Migowa, MD", affiliation: "Department of Paediatrics, Aga Khan University Medical College East Africa Nairobi, Kenya. Representative for PAFLAR JIA registry." },
    { name: "Raul Gutierrez Suarez, MD", affiliation: "Hospital para el niño, Instituto Materno Infantil del Estado de México, Toluca, México. Hospital Shriners Para Niños, México City, México. Representative for Pan American League of Associations for Rheumatology (PANLAR)." },
    { name: "Susa Benseler, MD, PhD.", affiliation: "Chief Academic Officer and Head of Paediatric Health Affairs at Children's Health Ireland (CHI) and is a Professor of Paediatrics at University College Dublin, Ireland. Pediatric Rheumatology Stream Lead, ERN RITA (European Reference Network on Rare Immunological and Autoinflammatory Diseases). Representative for ERN RITA." },
    { name: "Caifeng Li, MD", affiliation: "Professor, Department of Rheumatology, Beijing Children’s Hospital, Capital Medical University, National Center for Children’s Health, Beijing, China." },
    { name: "Esi M. Morgan, MD, MSCE", affiliation: "Professor University of Washington. Head, Division of Rheumatology, Seattle Children’s Hospital, Seattle, USA. Chair, Pediatric Rheumatology Care and Outcomes Improvement Network (PR-COIN). Representative for PR-COIN." },
    { name: "Erin Balay-Dustrude, MD, MS", affiliation: "Division of Rheumatology, Seattle Children’s Hospital, Seattle, USA. Co-chair Omeract JIA Working Group. Representative for Omeract JIA Working Group." }
  ];

  const contributors = [
    { name: "Demi van Grieken, Medical student", affiliation: "Medical Student, UMC Utrecht, Wilhelmina Children's Hospital, Utrecht, The Netherlands" },
    { name: "Sytze de Roock", affiliation: "Assistant Professor, Department of Pediatric Immunology and Rheumatology, Wilhelmina Children’s Hospital / UMC Utrecht, Utrecht, The Netherlands" }
  ];

  const renderGrid = (members: any[]) => (
    <div className="team-grid">
      {members.map((member, idx) => (
        <div key={idx} className="team-card glass">
          <div className="team-image-wrapper">
            <img 
              src={member.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name.split(',')[0])}&background=0284c7&color=fff&size=250`} 
              alt={member.name} 
              className="team-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name.split(',')[0])}&background=0284c7&color=fff&size=250`;
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
        <ul className="other-members-list">
          {otherMembers.map((member, idx) => (
            <li key={idx} className="other-member-item">
              <span className="other-member-name" style={{fontWeight: 600, display: "block", marginBottom: "4px"}}>{member.name}</span>
              <span className="other-member-affil" style={{fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.4, display: "block"}}>{member.affiliation}</span>
            </li>
          ))}
        </ul>

        <h3 className="team-section-title">Other Contributors (Systematic Literature Review)</h3>
        <ul className="other-members-list">
          {contributors.map((member, idx) => (
            <li key={idx} className="other-member-item">
              <span className="other-member-name" style={{fontWeight: 600, display: "block", marginBottom: "4px"}}>{member.name}</span>
              <span className="other-member-affil" style={{fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.4, display: "block"}}>{member.affiliation}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
