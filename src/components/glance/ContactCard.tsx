import Divider from '@/components/ui/Divider';
import PillLink from '@/components/ui/PillLink';
import SectionTitle from '@/components/ui/SectionTitle';
import Surface from '@/components/ui/Surface';
import { glancePractices } from '@/data/skill';
import { profile } from '@/data/profile';

interface Props {
  onToggle: () => void;
}

export default function ContactCard({ onToggle }: Props) {
  return (
    <Surface as="section" className="g-contact">
      <SectionTitle>Practices</SectionTitle>
      <p className="g-practices">{glancePractices}</p>
      <Divider push />
      <p className="g-contact-lead">{profile.availability}</p>
      <PillLink className="g-cta" onClick={onToggle}>
        Read the full detail →
      </PillLink>
    </Surface>
  );
}
