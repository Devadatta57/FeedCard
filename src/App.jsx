import { useEffect, useRef, useState } from 'react'
import FaqSection from './components/Faq/FaqSection.jsx'
import FeedCardInfo from './components/FeedCardInfo/FeedCardInfo.jsx'
import HeroHeader from './components/HeroHeader/HeroHeader.jsx'
import { DEFAULT_SECTION, isSection } from './sections.js'

function sectionFromHash() {
  const id = window.location.hash.slice(1)
  return isSection(id) ? id : null
}

export default function App() {
  const [active, setActive] = useState(() => sectionFromHash() ?? DEFAULT_SECTION)
  const infoRef = useRef(null)

  function scrollToInfo() {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    infoRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  // A deep link such as /#benefits opens that panel and jumps to it; keep in sync with
  // hash changes from the address bar too.
  useEffect(() => {
    if (sectionFromHash()) scrollToInfo()

    function onHashChange() {
      const id = sectionFromHash()
      if (id) {
        setActive(id)
        scrollToInfo()
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  function selectSection(id, { scroll = true } = {}) {
    setActive(id)
    window.history.replaceState(null, '', `#${id}`)
    if (scroll) scrollToInfo()
  }

  return (
    <>
      <HeroHeader activeSection={active} onSelectSection={selectSection} />
      <main>
        <FeedCardInfo ref={infoRef} activeSection={active} />
        <FaqSection />
      </main>
    </>
  )
}
