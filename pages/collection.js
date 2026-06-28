import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WORKS = [
  { title: 'Untitled (Landscape)', artist: 'Ram Kumar', year: '1972', medium: 'Oil on canvas' },
  { title: 'Composition in Blue', artist: 'Akbar Padamsee', year: '1965', medium: 'Oil on canvas' },
  { title: 'Figure Study', artist: 'M.F. Husain', year: '1980', medium: 'Acrylic on canvas' },
  { title: 'The Devotee', artist: 'Manjit Bawa', year: '1989', medium: 'Oil on canvas' },
  { title: 'Untitled (Bandwallah)', artist: 'Krishen Khanna', year: '2001', medium: 'Gouache on paper' },
  { title: 'Women in Garden', artist: 'Arpita Singh', year: '1996', medium: 'Watercolour' },
  { title: 'Benares Series I', artist: 'Ram Kumar', year: '1975', medium: 'Oil on canvas' },
  { title: 'Metascape', artist: 'Akbar Padamsee', year: '1978', medium: 'Oil on canvas' },
]

export default function Collection() {
  return (
    <>
      <Head><title>Collection – Dhoomimal Art Gallery</title></Head>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-h)' }}>
        <section style={{ padding: '80px 48px 100px' }}>
          <div className="section-eyebrow">Artwork</div>
          <h1 className="section-title" style={{ marginBottom: 60 }}>The<br /><em>Collection</em></h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {WORKS.map((w, i) => (
              <div key={i} style={{ cursor: 'pointer' }}>
                <div style={{
                  aspectRatio: '3/4',
                  background: `hsl(${30 + i * 20}, 20%, ${72 - i * 4}%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontStyle: 'italic',
                  fontSize: 13, color: 'rgba(0,0,0,0.2)',
                  marginBottom: 16,
                }}>{w.title}</div>
                <div style={{ padding: '0 4px 24px' }}>
                  <div className="section-eyebrow" style={{ marginBottom: 4, fontSize: 10 }}>{w.year} · {w.medium}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 400, marginBottom: 2 }}>{w.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--warm-gray)' }}>{w.artist}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
