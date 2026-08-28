interface Props {
  /** Use inside a card (--rule) by default; `strong` separates major sections. */
  strong?: boolean;
  /** Push to the bottom of a flex column. */
  push?: boolean;
}

export default function Divider({ strong, push }: Props) {
  return <div className="divider" data-strong={strong} data-push={push} aria-hidden="true" />;
}
