import coinImg from '../../assets/krishi-coin.png'
import HeroNav from './HeroNav.jsx'
import HeroScene from './HeroScene.jsx'
import {
  CapIcon,
  HealthIcon,
  SproutIcon,
  StarIcon,
  TractorIcon,
  TruckIcon,
} from './BenefitIcons.jsx'
import './HeroHeader.css'

const BENEFITS = [
  { label: 'Discounts on Inputs', Icon: SproutIcon },
  { label: 'Services & Equipment', Icon: TractorIcon },
  { label: 'Travel & Logistics', Icon: TruckIcon },
  { label: 'Healthcare & Insurance', Icon: HealthIcon },
  { label: 'Education & Training', Icon: CapIcon },
  { label: 'And Much More...', Icon: StarIcon },
]

// Decorative dot grids: [first x, first y, column gap, row gap]
const DOT_GRIDS = [
  [1515, 96, 23.8, 26.8],
  [50, 590, 23.8, 24],
]

function Backdrop() {
  return (
    <svg
      className="hero__backdrop"
      viewBox="0 0 1672 941"
      preserveAspectRatio="xMinYMin slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="circle-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fde3d2" />
          <stop offset="0.75" stopColor="#fde6d7" />
          <stop offset="1" stopColor="#fdf1e7" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="75" cy="290" r="142" fill="url(#circle-fade)" />
      <g fill="#fad3bd">
        {DOT_GRIDS.flatMap(([x0, y0, dx, dy]) =>
          Array.from({ length: 25 }, (_, i) => (
            <circle
              key={`${x0}-${i}`}
              cx={x0 + (i % 5) * dx}
              cy={y0 + Math.floor(i / 5) * dy}
              r="3.2"
            />
          )),
        )}
      </g>
    </svg>
  )
}

export default function HeroHeader({ activeSection, onSelectSection }) {
  return (
    <header className="hero">
      <Backdrop />

      <div className="hero__content">
        <h1 className="hero__title">
          <span className="hero__title-feed">FEED</span>{' '}
          <span className="hero__title-card">CARD</span>
        </h1>
        <p className="hero__tagline">More Benefits. Stronger Agriculture.</p>
        <p className="hero__text">
          FEED CARD is a reward-based discount card offering exclusive benefits across multiple
          categories through Krishi Coins.
        </p>
        <span className="hero__progress" aria-hidden="true" />
      </div>

      <div className="hero__visual">
        <div
          className="hero__stage"
          role="img"
          aria-label="Green FEED CARD and a gold Krishi Coin resting on a wooden slab among leaves"
        >
          <div className="hero__stage-inner">
            <HeroScene />
            <div className="hero__badge">
              <img className="hero__badge-coin" src={coinImg} alt="" width="98" height="98" />
              <p className="hero__badge-text">
                Earn &amp; Use
                <br />
                Krishi Coins
              </p>
            </div>
          </div>
        </div>

        <ul className="hero__benefits" aria-label="FEED CARD benefits">
          {BENEFITS.map(({ label, Icon }, i) => (
            <li className="hero__benefit" key={label} style={{ '--i': i }}>
              <span className="hero__benefit-icon">
                <Icon />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>

      <HeroNav active={activeSection} onSelect={onSelectSection} />
    </header>
  )
}
