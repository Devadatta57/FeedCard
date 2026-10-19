// Card used by both the Benefits and Beneficiaries panels: tinted icon tile, title, text.
export default function InfoCard({ Icon, tone, title, text }) {
  return (
    <li className="info-card">
      <span className={`info-card__icon tone-${tone}`}>
        <Icon />
      </span>
      <h3 className="info-card__title">{title}</h3>
      <p className="info-card__text">{text}</p>
    </li>
  )
}
