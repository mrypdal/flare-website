import './ProjectDescription.css';
import { Target, Search, FileText } from 'lucide-react';

export default function ProjectDescription() {
  const objectives = [
    {
      icon: <Target className="objective-icon" />,
      title: "Consensus Definition",
      description: "To develop an international, agreed on clear definition of disease flare in non-systemic JIA for more consistent evaluation in clinical practice, observational studies and RCTs."
    },
    {
      icon: <Search className="objective-icon" />,
      title: "Evaluation Standard",
      description: "Establishing a clinical 'evaluation standard' for flare in a real-world dataset of patients with non-systemic JIA based on physician scoring."
    },
    {
      icon: <FileText className="objective-icon" />,
      title: "Clinical Tool",
      description: "To develop a clinical tool to assess the presence of flare in non-systemic JIA."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">The <span className="text-gradient">Project</span></h2>
        <p className="section-subtitle">
          Juvenile idiopathic arthritis (JIA) is the most common rheumatic disease in childhood. 
          Although new and more effective biologic DMARDs have made remission an achievable goal, 
          a substantial proportion of children still experience periods of flare.
        </p>

        <div className="objectives-grid">
          {objectives.map((obj, idx) => (
            <div key={idx} className="objective-card glass">
              <div className="icon-wrapper">
                {obj.icon}
              </div>
              <h3 className="objective-title">{obj.title}</h3>
              <p className="objective-desc">{obj.description}</p>
            </div>
          ))}
        </div>

        <div className="timeline-container glass">
          <div className="timeline-content">
            <h3>Project Progress</h3>
            <p>
              The Flare Interest Group was established in fall 2025. We have completed a systematic literature review (SLR) 
              of published trials and conducted an international task force survey. 
            </p>
            <p>
              Currently, a team of 10 physicians are independently scoring clinical data from 1,338 patients across 13,383 visits 
              from the Canadian CAPRI inception cohort to establish our clinical evaluation standard.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
