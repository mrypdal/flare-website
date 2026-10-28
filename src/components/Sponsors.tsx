import './Sponsors.css';

export default function Sponsors() {
  return (
    <section id="sponsors" className="section sponsors-section">
      <div className="container">
        <h2 className="section-title">Partners & <span className="text-gradient">Sponsors</span></h2>
        <p className="section-subtitle">
          This project is made possible through the collaboration of leading research institutions 
          and the generous support of our sponsors.
        </p>

        <div className="sponsors-grid">
          <div className="sponsor-card glass">
            <h3 className="sponsor-tier">Main Sponsors</h3>
            <div className="logo-container" style={{ gap: '40px', flexDirection: 'row', maxWidth: '500px' }}>
              {/* J&J logo from local downloads (hidden until contract is signed) */}
              <div 
                style={{ 
                  width: '150px', 
                  height: '80px', 
                  backgroundColor: '#e2e8f0', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#64748b',
                  fontSize: '0.9rem',
                  fontWeight: 500
                }}
              >
                Pending
              </div>
              {/* <img 
                src="/logos/johnson-johnson-logo.svg" 
                alt="Johnson & Johnson Logo" 
                className="sponsor-logo" 
              /> */}
              <img 
                src="/logos/logo_Harbitz.png" 
                alt="Harbitz Logo" 
                className="sponsor-logo" 
              />
            </div>
          </div>
          
          <div className="sponsor-card glass">
            <h3 className="sponsor-tier">Research Partners</h3>
            <div className="partners-logos">
              {[
                "logo_CAPRI.png", "logo_PRCSG.png", "logo_UNN.png", "logo_UIT.png",
                "logo_nosper.jpg", "logo_BURG.jpg", "logo_CARRA.jpg", "logo_CHP.png", "logo_CHYRRP.png",
                "logo_ERNRITA.png", "logo_JIR.png", "logo_OMERACT.png", "logo_PAFLAR.jpg", "logo_PANLAR.png",
                "logo_PRCOIN.png", "logo_PRES.png", "logo_PRESTAR.png", "logo_SICKKIDS.png", 
                "logo_bikeor.png", "logo_jumbo.png", "logo_BCH.png"
              ].map((filename, idx) => (
                <img key={idx} src={`/logos/${filename}`} alt="Partner" className="partner-logo" onError={(e) => (e.target as HTMLImageElement).style.display='none'} />
              ))}
            </div>
          </div>
        </div>

        <div className="disclaimer glass">
          <h4>Funding Transparency & Independence</h4>
          <p>
            Sponsors have no control over or involvement in the scientific content, data analysis, 
            or the final consensus-driven definition of disease flare.
          </p>
          <div style={{marginTop: "20px", textAlign: "center"}}>
            <a 
              href="/docs/Funding_opportunity_letter.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{fontSize: "0.85rem", color: "var(--primary)", textDecoration: "underline"}}
            >
              View Funding Opportunity Document
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
