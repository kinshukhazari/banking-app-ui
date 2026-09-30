import { useState } from 'react'
import avatar from './assets/avatar.png'
import boi from './assets/boi.png'
import prime from './assets/prime.png'

const card = { number: '1234 5678 9012 3456', holder: 'KINSHUK HAZARI', expiry: '9/11' }

// Logos: `img` uses an image file, `kfc` / `pvr` / `ikea` are CSS badges.
// Swap any of them for an exported Figma image by adding it to src/assets.
const transactions = [
  { id: 1, name: 'KFC', type: 'Food', amount: '$45.00', tone: 'g', logo: { kind: 'kfc' } },
  { id: 2, name: 'BOI', type: 'Bank', amount: '$450.00', tone: 'r', logo: { kind: 'img', src: boi } },
  { id: 3, name: 'AMAZON', type: 'Subscription', amount: '$15.64', tone: 'r', logo: { kind: 'img', src: prime, alt: 'Prime Video' } },
  { id: 4, name: 'PVR', type: 'Movie', amount: '$8.60', tone: 'r', logo: { kind: 'pvr' } },
  { id: 5, name: 'IKEA', type: 'Furniture', amount: '$178.66', tone: 'r', logo: { kind: 'ikea' } },
]

const icons = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  bell: <><path d="M6 9a6 6 0 0 1 12 0c0 6 2.5 7.5 2.5 7.5h-17S6 15 6 9z" /><path d="M10 20a2 2 0 0 0 4 0" /></>,
  home: <path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" />,
  transfer: <path d="M3 6h4l10 12h4M3 18h4l3-3.6M14 9.6L17 6h4M18 3l3 3-3 3M18 15l3 3-3 3" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></>,
}

function Icon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  )
}

function Logo({ logo, name }) {
  if (logo.kind === 'img') return <img className="logo" src={logo.src} alt={logo.alt ?? name} />
  if (logo.kind === 'kfc') return <span className="logo kfc"><b>KFC</b></span>
  return <span className={`logo ${logo.kind}`}>{name}</span>
}

const tabs = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'transfer', label: 'Transfer', icon: 'transfer' },
  { id: 'profile', label: 'Profile', icon: 'user' },
]

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <main className="phone" aria-label="Banking app home screen">
      <div className="notch" />
      <div className="hero" />

      <header className="top">
        <img className="avatar" src={avatar} alt="Profile photo" />
        <button className="icon-btn l" aria-label="Menu"><Icon name="grid" /></button>
        <button className="icon-btn r" aria-label="Notifications"><Icon name="bell" /></button>
        <p className="lbl">Balance</p>
        <p className="bal">$12,000.00</p>
      </header>

      <section className="card" aria-label="Payment card">
        <div className="mc"><i /><i /></div>
        <p className="num">{card.number}</p>
        <div className="meta"><span>{card.holder}</span><span>{card.expiry}</span></div>
      </section>

      <section className="tx">
        <h2>Transaction</h2>
        {transactions.map((t) => (
          <button className="row" key={t.id}>
            <Logo logo={t.logo} name={t.name} />
            <span className="name">{t.name}<small>{t.type}</small></span>
            <span className={`amt ${t.tone}`}>{t.amount}</span>
          </button>
        ))}
      </section>

      <nav aria-label="Main">
        {tabs.map((t) => (
          <button
            key={t.id}
            className="tab"
            aria-label={t.label}
            aria-current={tab === t.id ? 'page' : undefined}
            onClick={() => setTab(t.id)}
          >
            <Icon name={t.icon} />
          </button>
        ))}
      </nav>
    </main>
  )
}
