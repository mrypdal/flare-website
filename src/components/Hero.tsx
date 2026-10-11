
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Defining <span className="text-gradient">Disease Flare</span> in<br />
            Non-Systemic JIA
          </h1>
          
          <p className="hero-description">
            A Consensus-Driven and Data-Informed Approach by the Flare Task Force. 
            Standardizing flare assessments in clinical trials, research, and clinical practice.
          </p>
          
          <div className="hero-actions">

            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="hero-bg-elements">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
    </section>
  );
}
