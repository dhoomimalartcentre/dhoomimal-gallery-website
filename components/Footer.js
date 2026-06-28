import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-big">Finest gallery in<br />New Delhi centre</div>
          <address className="footer-addr" style={{fontStyle:'normal'}}>
            Connaught Place<br />New Delhi - 110001<br />India
          </address>
        </div>
        <div className="footer-nav-grid">
          <div className="footer-nav-col">
            <Link href="/">Home</Link>
            <Link href="/artists">Artists</Link>
            <Link href="/exhibitions">Exhibitions</Link>
            <Link href="/collection">Collection</Link>
            <Link href="/art-fairs">Art Fairs</Link>
            <Link href="/news">News</Link>
          </div>
          <div className="footer-nav-col">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Insta</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">X (Twitter)</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">2024 Dhoomimal Art Gallery. All rights reserved.</div>
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Insta</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">X (Twitter)</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
