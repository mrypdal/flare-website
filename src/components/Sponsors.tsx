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
              {/* J&J logo from local downloads */}
              <img 
                src="/logos/johnson-johnson-logo.svg" 
                alt="Johnson & Johnson Logo" 
                className="sponsor-logo" 
              />
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
            The Disease Flare in Non-Systemic JIA project receives financial sponsorship from Johnson & Johnson. 
            This sponsorship supports the organizational and research activities of the Flare Task Force. 
            The sponsor has no control over or involvement in the scientific content, data analysis, 
            or the final consensus-driven definition of disease flare.
          </p>
        </div>
      </div>
    </section>
  );
}
