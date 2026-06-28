import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NEWS = [
  { title: 'Dhoomimal Gallery Participates in India Art Fair 2024', date: 'February 2024', tag: 'Event', excerpt: 'The gallery presented a carefully curated selection of modern and contemporary works at this year\'s India Art Fair, drawing significant collector attention.' },
  { title: 'New Acquisition: Major Akbar Padamsee Canvas Joins Permanent Collection', date: 'November 2023', tag: 'Acquisition', excerpt: 'A significant addition to the gallery\'s holdings, this large-format Padamsee canvas from the late 1970s exemplifies the artist\'s mature abstract language.' },
  { title: '"Roots and Routes" Receives Critical Acclaim', date: 'September 2023', tag: 'Press', excerpt: 'The gallery\'s landmark survey of modern Indian abstraction was widely praised by critics and collectors alike, with full attendance across its six-week run.' },
]

export default function News() {
  return (
    <>
      <Head><title>News – Dhoomimal Art Gallery</title></Head>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <section style={{ padding: '80px 48px 100px' }}>
          <div className="section-eyebrow">Latest</div>
          <h1 className="section-title" style={{ marginBottom: 60 }}>News &<br /><em>Updates</em></h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {NEWS.map((n, i) => (
              <article key={i} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr',
                gap: 48, padding: '40px 0',
                borderBottom: '1px solid var(--divider)',
                alignItems: 'start'
              }}>
                <div>
                  <div className="section-eyebrow" style={{ marginBottom: 6 }}>{n.tag}</div>
                  <div style={{ fontSize: 13, color: 'var(--warm-gray)' }}>{n.date}</div>
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 400, marginBottom: 12, lineHeight: 1.3 }}>{n.title}</h2>
                  <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--warm-gray)', maxWidth: 600 }}>{n.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
