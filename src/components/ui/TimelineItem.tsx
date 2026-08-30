import Heading from './Heading';

interface Props {
  title: string;
  org: string;
  period: string;
  current?: boolean;
}

export default function TimelineItem({ title, org, period, current }: Props) {
  return (
    <div className="timeline-item">
      <span className="timeline-dot" data-current={current} aria-hidden="true" />
      <div className="stack">
        <Heading as="strong">{title}</Heading>
        <span className="stack-note">{org}</span>
        <span className="meta">{period}</span>
      </div>
    </div>
  );
}
