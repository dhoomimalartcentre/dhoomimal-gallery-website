import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const EXHIBITIONS = {
  current: [{
    title: "Expressions in Light: Contemporary Indian Masters",
    venue: "Main Pavillion", year: "2024",
    desc: "Expressions in Light is an innovative exhibition that juxtaposes the works of leading contemporary Indian artists. This exhibit examines how light and colour coexist and enhance each other, offering viewers a diverse visual experience that spans from the luminous to the introspective.",
  }],
  past: [{
    title: "Confluence: Nature and Structure",
    venue: "Westingham Gallery", year: "2023",
    desc: "Confluence: Nature and Structure is a thought-provoking exhibition that brings together contrasting yet complementary artistic styles. This exhibit invites viewers to explore the dynamic interactions between organic growth and human-made environments.",
  }],
}

const ARTISTS = [
  { name: "M.F. Husain", country: "India", initial: "H" },
  { name: "Ram Kumar", country: "India", initial: "R" },
  { name: "Akbar Padamsee", country: "India", initial: "A" },
]

const FAIRS = [
  { name: "India Art Fair", meta: "Feb 2024 - New Delhi, India", desc: "Held annually in New Delhi, India Art Fair is a premier event in the global art calendar. Drawing top galleries, collectors, and curators from around the world, this fair showcases cutting-edge contemporary art and groundbreaking works by emerging and established artists alike." },
  { name: "Frieze Art Fair", meta: "Dec 2023 - London, UK", desc: "Established in London in 2003, Frieze Art Fair has since expanded to New York and Los Angeles. It is known for showcasing a mix of established and emerging artists, and its cutting-edge programming." },
]

const AWARDS = [
  { title: "Outstanding Contribution to Indian Art", attr: "International Art Critics Association, 2021" },
  { title: "Gallery of the Decade", attr: "Art Collectors Digest, 2022" },
  { title: "Innovator of the Year", attr: "International Art Critics Association, 2021" },
  { title: "Top 10 Must-Visit Galleries", attr: "Global Art Review, 2023" },
  { title: "Best Historic Collection", attr: "Art World Magazine, 2022" },
]

export default function Home() {
  const [tab, setTab] = useState("current")
  const list = EXHIBITIONS[tab]

  return (
    <>
      <Head>
        <title>Dhoomimal Art Gallery - New Delhi</title>
        <meta name="description" content="Dhoomimal offers a unique selection of artwork. Established 1936, New Delhi." />
      </Head>
      <Navbar />

      {/* HERO - white, title right-aligned */}
      <div className="hero">
        <div className="hero-title-area">
          <h1 className="hero-h1">The finest gallery<br />in New Delhi centre</h1>
        </div>
        <div className="hero-bottom-row">
          <p className="hero-desc">
            Dhoomimal offers a unique selection of artwork for the art connoisseur. Our experienced staff provides a variety of services to assist you in selecting the art that best suits your individual style and personal taste. With an expansive collection of oil paintings, watercolors, drawings, and sculptures, Dhoomimal has something to satisfy everyone.
          </p>
          <address className="hero-addr" style={{fontStyle:'normal'}}>
            Connaught Place<br />New Delhi - 110001<br />India
          </address>
        </div>
      </div>

      <hr className="section-divider" />

      {/* EXHIBITIONS */}
      <div className="ex-section">
        <div className="ex-top">
          <h2 className="ex-main-title">Highlighted<br />Exhibitions</h2>
          <div className="ex-tabs">
            <button className={`ex-tab${tab==="current"?" on":""}`} onClick={()=>setTab("current")}>Current</button>
            <button className={`ex-tab${tab==="past"?" on":""}`} onClick={()=>setTab("past")}>Past</button>
          </div>
        </div>
        <Link href="/exhibitions" className="ex-view-all">View all exhibitions</Link>

        {list.map((ex, i) => (
          <div key={i} className="ex-card">
            {i > 0 && <hr className="ex-sep" />}
            <div className="ex-img-full">Exhibition Image</div>
            <div className="ex-card-footer">
              <div className="ex-card-left">
                <div className="ex-avatars">
                  <div className="ex-avatar">A</div>
                  <div className="ex-avatar">B</div>
                </div>
                <Link href="/exhibitions" className="ex-read-btn">+ Read more</Link>
                <h3 className="ex-card-title">{ex.title}</h3>
                <div className="ex-card-sub">{ex.year} • {ex.venue}</div>
              </div>
              <p className="ex-card-desc">{ex.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ARTISTS */}
      <div className="artists-section">
        <div className="artists-head">
          <h2 className="artists-title">Artists we<br />represent</h2>
          <Link href="/artists" className="view-all-link">View all</Link>
        </div>
        <div className="artists-grid">
          {ARTISTS.map((a, i) => (
            <Link key={i} href="/artists" className="a-card">
              <div className="a-img">{a.initial}</div>
              <div className="a-info">
                <div className="a-texts">
                  <span className="a-name">{a.name}</span>
                  <span className="a-country">{a.country}</span>
                </div>
                <div className="a-plus">+</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ART FAIRS */}
      <div className="fairs-section">
        <div className="fairs-head">
          <h2 className="fairs-title">Latest<br />Art Fairs</h2>
          <Link href="/art-fairs" className="view-all-link">View all</Link>
        </div>
        <div className="fairs-grid">
          {FAIRS.map((f, i) => (
            <div key={i} className="fair-card">
              <div className="fair-img">Fair Image</div>
              <div className="fair-card-footer">
                <div className="fair-texts">
                  <span className="fair-name">{f.name}</span>
                  <span className="fair-meta">{f.meta}</span>
                </div>
                <Link href="/art-fairs" className="fair-btn">+ Read more</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="fairs-desc-row">
          {FAIRS.map((f, i) => (
            <div key={i} className="fair-desc-box">
              <p className="fair-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AWARDS */}
      <div className="awards-section">
        <div className="awards-layout">
          <div className="awards-left">
            <h2>Awards &amp;<br />Accolades</h2>
            <p>Won by the gallery and its artists</p>
          </div>
          <div className="awards-list">
            {AWARDS.map((a, i) => (
              <div key={i} className="award-row">
                <h3 className="award-title">{a.title}</h3>
                <span className="award-attr">– {a.attr}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
