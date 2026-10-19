// The three info panels below the header, in tab order. The id doubles as the panel's
// element id and the URL hash, so links like /#benefits open that panel directly.
export const SECTIONS = [
  {
    id: 'what-is-feed-card',
    eyebrow: 'What is',
    title: 'FEED CARD?',
    text: 'Overview and key features',
  },
  {
    id: 'benefits',
    eyebrow: 'Benefits of',
    title: 'FEED CARD',
    text: 'Rewards, discounts and services',
  },
  {
    id: 'beneficiaries',
    eyebrow: 'Who are',
    title: 'Beneficiaries?',
    text: 'Eligible users and stakeholders',
  },
]

export const DEFAULT_SECTION = SECTIONS[0].id

export const isSection = (id) => SECTIONS.some((section) => section.id === id)
