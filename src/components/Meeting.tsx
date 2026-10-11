export default function Meeting() {
  return (
    <section id="meeting" className="section">
      <div className="container">
        <h2 className="section-title">FLARE <span className="text-gradient">Consensus Meeting</span></h2>
        <p className="section-subtitle" style={{marginBottom: "30px", fontWeight: 500}}>
          Spring 2027: Consensus-Based and Data-Driven Conceptual Definition of Flare in Non-Systemic JIA
        </p>
        
        <div className="glass" style={{padding: "30px", borderRadius: "16px"}}>
          <p style={{lineHeight: 1.6, color: "var(--text-main)"}}>
            The final aim of our project is to establish a globally accepted, consensus-based conceptual definition of flare in non-systemic JIA. This definition will help standardize flare assessments in clinical trials, research, and clinical practice. 
          </p>
          <p style={{lineHeight: 1.6, color: "var(--text-main)", marginTop: "16px"}}>
            For the final phase, the Task Force, consisting of representatives of worldwide organizations with expertise in clinical trials, registries, and observational studies in pediatric rheumatology, including members of the Flare Working Group, the core team of the PReS JIA Working Party, a Data Scientist, and a Patient Representative, will convene for a two-day, in-person consensus meeting in early spring 2027.
          </p>
        </div>
      </div>
    </section>
  );
}
