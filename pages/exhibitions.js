import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ALL = {
  current: [
    { title: 'Expressions in Light: Contemporary Indian Masters', venue: 'Main Gallery', year: '2024', desc: 'A landmark exhibition presenting works by leading contemporary Indian artists.' },
    { title: 'Ink and Silence: The Meditative Line', venue: 'East Wing', year: '2024', desc: 'An intimate showcase of ink-based works rooted in disciplined gesture and quiet introspection.' },
  ],
  past: [
    { title: 'Roots and Routes: Modern Indian Abstraction', venue: 'Main Gallery', year: '2023', desc: 'Tracing the lineage of Indian abstraction from the Progressive Artists Group to the present.' },
    { title: 'Chromatic Dialogues', venue: 'West Gallery', year: '2022', desc: 'A vibrant survey of colour as language across five decades of Indian painting.' },
    { title: 'The Sculptured Self', venue: 'Sculpture Court', year: '2022', desc: 'An ambitious gathering of sculptural works exploring identity, the body, and material.' },
  ],
}

export default function Exhibitions() {
  const [tab, setTab] = useState('current')
  return (
    <>
      <Head><title>Exhibitions – Dhoomimal Art Gallery</title></Head>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <section className="exhibitions" style={{ paddingTop: 80 }}>
          <div className="section-header">
            <div>
              <div className="section-eyebrow">On View</div>
              <h1 className="section-title">Exhibitions</h1>
            </div>
          </div>
          <div className="exhibitions-tab-row">
            {['current', 'past'].map(t => (
              <button key={t} className={`tab-btn${tab === t ? ' active' : ''}`} onClick={() => setTab(t)}>
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          {ALL[tab].map((ex, i) => (
            <div key={i} className="exhibition-item">
              <div className="exhibition-img"><div className="img-placeholder">Exhibition {i + 1}</div></div>
              <div className="exhibition-meta">
                <span className="exhibition-tag">{ex.year} · {ex.venue}</span>
                <h3 className="exhibition-title">{ex.title}</h3>
                <p className="exhibition-desc">{ex.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
