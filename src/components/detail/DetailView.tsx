import MediaSlot from "../MediaSlot";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import {
  education,
  links,
  lowdefy,
  profile,
  project,
  skillGroups,
  tocItems,
} from "../../data/site";

interface Props {
  exitAnimation?: string;
  onToggle: () => void;
}

export default function DetailView({ exitAnimation, onToggle }: Props) {
  const progress = useScrollProgress(true);
  const [lead, ...rest] = lowdefy.highlights;

  return (
    <>
      {/* Outside the animated shell: a transformed ancestor would break position:fixed. */}
      <div
        className="d-progress"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <div className="detail" style={{ animation: exitAnimation }}>
        <header className="d-header">
          <div className="d-identity">
            <strong>{profile.name}</strong>
            <span>
              {profile.role} · {profile.location}
            </span>
          </div>
          <button
            type="button"
            className="d-toggle"
            onClick={onToggle}
            title="Back to the glance view"
          >
            <span className="d-toggle-off">At a glance</span>
            <span className="d-toggle-on">In detail</span>
          </button>
        </header>

        <div className="d-body">
          <nav className="d-toc">
            <span className="d-toc-label">On this page</span>
            {tocItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <span className="d-toc-rule" />
            <a className="d-cv" href={links.cv} download>
              Download CV
            </a>
          </nav>

          <div className="d-main">
            <section id="summary" className="glass-deep">
              <MediaSlot id="summaryWide" />
              <p className="d-lead">{profile.summaryLead}</p>
              <p className="d-prose">{profile.summaryBody}</p>
            </section>

            <section id="lowdefy" className="glass-deep">
              <div className="d-role-head">
                <h2>{lowdefy.heading}</h2>
                <span>{lowdefy.period}</span>
              </div>

              <article className="d-split">
                <div className="d-split-text">
                  <h3>{lead.title}</h3>
                  {lead.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <div className="d-pills">
                    {lead.metrics.map((metric) => (
                      <span className="metric" key={metric}>
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="d-split-aside">
                  <MediaSlot id="workflowShot" />
                  <div className="d-note">schema snippet — before / after</div>
                </div>
              </article>

              <div className="d-columns">
                {rest.map((item, index) => (
                  <article
                    key={item.id}
                    className={
                      index === rest.length - 1 ? "is-wide" : undefined
                    }
                  >
                    <h3>{item.title}</h3>
                    {item.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </article>
                ))}
              </div>
            </section>

            <section id="project" className="glass-deep">
              <h2 className="d-section-title">Project</h2>
              <div className="d-split">
                <div className="d-split-text" style={{ gap: 11 }}>
                  <h3>{project.name}</h3>
                  <span className="d-stack">{project.stack}</span>
                  {project.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <MediaSlot id="parserShot" />
              </div>
            </section>

            <section id="earlier" className="glass-deep">
              <h2 className="d-section-title">Teaching &amp; education</h2>
              <div className="d-grid">
                {education.map((item) => (
                  <div key={item.title}>
                    <h3>{item.title}</h3>
                    <span className="d-grid-meta">{item.meta}</span>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="skills" className="glass-deep">
              <h2 className="d-section-title">Skills</h2>
              <div className="d-grid">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <span className="d-skill-label">{group.title}</span>
                    <span className="d-skill-list">
                      {group.items.map((item) => item.label).join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <footer id="cv">
              <span className="d-footer-lead">{profile.availability}</span>
              <div className="d-footer-links">
                <a href={`mailto:${links.email}`}>{links.email}</a>
                <a href={links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={links.cv} download>
                  Download CV
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
