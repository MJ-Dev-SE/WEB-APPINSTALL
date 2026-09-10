import { useEffect, useRef, useState } from 'react'
import './App.css'

// The APK is 120 MiB — past GitHub's 100 MiB file limit — so it is not in the
// repo. It is published as a GitHub Release asset; /releases/latest/ always
// resolves to the newest release, so this URL never needs updating.
const APK_URL =
  'https://github.com/MJ-Dev-SE/WEB-APPINSTALL/releases/latest/download/88resort.apk'

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function FadeUp({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeUp()
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>
}

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-brand">
          <img src="/favicon.svg" alt="" className="nav-logo" />
          <span className="nav-brand-text">88 <span>Hot Spring</span></span>
        </a>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li><a href="#app" onClick={() => setOpen(false)}>App</a></li>
          <li><a href="#availability" onClick={() => setOpen(false)}>Availability</a></li>
          <li><a href="#app" className="nav-cta" onClick={() => setOpen(false)}>Download App</a></li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">Calamba, Laguna &middot; Open Daily</div>
        <h1>Soak in the <em>warmth</em> of nature</h1>
        <p>
          Natural hot spring pools, spa treatments, private rooms and dining —
          all in one resort tucked into the foothills of Mt. Makiling.
        </p>
        <div className="hero-buttons">
          <a href="#app" className="btn btn-primary">Get the App</a>
          <a href="#availability" className="btn btn-secondary">Check Availability</a>
        </div>
      </div>
    </section>
  )
}

function AppSection() {
  // Drop your app screenshot at public/app-screenshot.png (portrait, ideally 512x1040).
  // If the file is missing, the placeholder below is shown instead.
  const [hasShot, setHasShot] = useState(true)

  return (
    <section className="app-section" id="app">
      <div className="app-inner">
        <FadeUp className="phone-frame">
          <div className="phone-mockup">
            <div className={hasShot ? "phone-screen phone-screen--shot" : "phone-screen"}>
              {hasShot ? (
                <img
                  className="phone-screenshot"
                  src="/app-screenshot.png"
                  alt="88 Hot Spring Resort mobile app"
                  onError={() => setHasShot(false)}
                />
              ) : (
                <>
                  <div className="phone-screen-icon">&#9832;</div>
                  <h3>88 Hot Spring Resort</h3>
                  <p>Book rooms, check availability, explore pools and more.</p>
                </>
              )}
            </div>
          </div>
        </FadeUp>

        <FadeUp className="app-info">
          <span className="app-info-tag">Mobile App</span>
          <h2>Everything about the resort, <em>in your pocket</em></h2>
          <p>
            Browse rooms, check real-time availability, make reservations,
            explore our pools and facilities — without calling the front desk.
          </p>

          <ul className="app-features">
            <li>Real-time room availability</li>
            <li>Online reservation requests</li>
            <li>Explore pools, spa and facilities</li>
            <li>Exclusive offers and promotions</li>
            <li>Live weather at the resort</li>
            <li>Dining menus and hours</li>
          </ul>

          <a href={APK_URL} download="88resort.apk" className="download-btn">
            <AndroidIcon />
            Download for Android
          </a>
          <p className="download-note">Android APK &middot; Install directly on your phone</p>
        </FadeUp>
      </div>
    </section>
  )
}

function Availability() {
  return (
    <section className="availability-section" id="availability">
      <FadeUp>
        <h2>Room Availability</h2>
        <p>Our app shows real-time availability pulled directly from our booking system, updated every 10 minutes.</p>
        <div className="avail-cards">
          <div className="avail-card">
            <h4>Real-time sync</h4>
            <p>Availability updates automatically from our property management system</p>
          </div>
          <div className="avail-card">
            <h4>View live availability</h4>
            <p>Plan ahead</p>
          </div>
          <div className="avail-card">
            <h4>All room types</h4>
            <p>Bamboo Deluxe, Bamboo Suite, Executive and more</p>
          </div>
        </div>
        <p className="avail-note">Download the app to check live availability and make a reservation.</p>
      </FadeUp>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 88 Hot Spring Resort &middot; Calamba, Laguna </p>
    </footer>
  )
}

function AndroidIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 006 7h12c0-2.02-1.01-3.8-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
    </svg>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AppSection />
      <Availability />
      <Footer />
    </>
  )
}
