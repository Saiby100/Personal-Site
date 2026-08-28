import MediaSlot from '../MediaSlot';
import {
  education,
  glancePractices,
  glanceSkills,
  links,
  lowdefy,
  profile,
  project,
} from '../../data/site';

interface Props {
  exitAnimation?: string;
  onToggle: () => void;
  onGoDetail: (anchor?: string) => void;
}

export default function GlanceView({ exitAnimation, onToggle, onGoDetail }: Props) {
  return (
    <div className="glance" style={{ animation: exitAnimation }}>
      <header className="glass g-header">
        <div className="g-identity">
          <h1>{profile.name}</h1>
          <span>
            {profile.role} · {profile.location}
          </span>
        </div>

        <div className="g-header-right">
          <nav className="g-nav">
            <a href={`mailto:${links.email}`}>Email</a>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <button type="button" onClick={() => onGoDetail('cv')}>
              CV
            </button>
          </nav>

          <button
            type="button"
            className="g-toggle"
            onClick={onToggle}
            title="Switch to the full detail page"
          >
            <span className="g-toggle-label">At a glance</span>
            <span className="g-toggle-track" aria-hidden="true">
              <span className="g-toggle-knob" />
            </span>
            <span className="g-toggle-label g-toggle-label--off">In detail</span>
          </button>
        </div>
      </header>

      <MediaSlot id="portrait" className="g-portrait" />

      <button
        type="button"
        className="glass card-button g-summary"
        onClick={() => onGoDetail('summary')}
      >
        <p>{profile.summaryShort}</p>
      </button>

      <aside className="glass g-skills">
        <h2 className="eyebrow">Languages &amp; tools</h2>
        <div className="g-chips">
          {glanceSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <div className="g-divider" />
        <h2 className="eyebrow">Practices</h2>
        <p className="g-practices" style={{ margin: 0 }}>
          {glancePractices}
        </p>

        <div className="g-divider g-divider--push" />
        <h2 className="eyebrow">Earlier</h2>
        {[...education].reverse().map((item) => (
          <div className="g-earlier" key={item.title}>
            <strong>{item.glanceTitle}</strong>
            <span>{item.glanceMeta}</span>
          </div>
        ))}
      </aside>

      <button
        type="button"
        className="glass card-button g-project"
        onClick={() => onGoDetail('project')}
      >
        <MediaSlot id="projectThumb" />
        <div className="g-project-body">
          <div className="g-project-title">
            <span className="eyebrow">Project</span>
            <h3>{project.name}</h3>
          </div>
          <p>{project.glanceBlurb}</p>
          <span className="g-project-stack">{project.stack}</span>
        </div>
      </button>

      <button
        type="button"
        className="glass card-button g-lowdefy"
        onClick={() => onGoDetail('lowdefy')}
      >
        <div className="g-lowdefy-head">
          <h2>{lowdefy.heading}</h2>
          <span>{lowdefy.period}</span>
        </div>
        <div className="g-lowdefy-grid">
          {lowdefy.highlights.map((item) => (
            <article key={item.id}>
              <h3>{item.glanceTitle}</h3>
              <p>{item.glanceBlurb}</p>
              <div className="g-metrics">
                {item.glanceMetrics.map((metric) => (
                  <span className="metric" key={metric}>
                    {metric}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </button>

      <section className="glass g-contact">
        <p className="g-contact-lead" style={{ margin: 0 }}>
          {profile.availability}
        </p>
        <div className="g-contact-links">
          <a href={`mailto:${links.email}`}>{links.email}</a>
        </div>
        <button type="button" className="g-cta" onClick={onToggle}>
          Read the full detail →
        </button>
      </section>
    </div>
  );
}
