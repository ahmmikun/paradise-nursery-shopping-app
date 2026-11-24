function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">About Paradise Nursery</p>
          <h2>Bringing a little paradise into every home.</h2>
          <p>
            Paradise Nursery started in 2014 as a small family greenhouse with one simple
            belief: everyone deserves a little greenery in their life. Today, we care for
            thousands of plants and ship them, packed with love, to homes across the country.
          </p>
          <p>
            We hand-pick every plant, share honest care advice, and make shopping simple so
            that first-time plant parents and seasoned collectors alike can find their next
            leafy companion with confidence.
          </p>
          <div className="about-values">
            <div className="value-card">
              <span aria-hidden="true">🌱</span>
              <div>
                <h3>Grown with care</h3>
                <p>Healthy, nursery-grown plants raised by our dedicated team.</p>
              </div>
            </div>
            <div className="value-card">
              <span aria-hidden="true">🚚</span>
              <div>
                <h3>Safe delivery</h3>
                <p>Secure packaging and fast shipping to keep every leaf happy.</p>
              </div>
            </div>
            <div className="value-card">
              <span aria-hidden="true">💬</span>
              <div>
                <h3>Real support</h3>
                <p>Lifetime care tips from plant lovers who actually know their stuff.</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="about-card" aria-label="Company facts">
          <p className="about-card-label">Our story in numbers</p>
          <div className="stat"><strong>2014</strong><span>Year founded</span></div>
          <div className="stat"><strong>24</strong><span>Plants in our collection</span></div>
          <div className="stat"><strong>12k+</strong><span>Happy plant parents</span></div>
          <div className="stat"><strong>4</strong><span>Plant categories</span></div>
          <p className="about-card-footnote">
            Family-owned. Plant-obsessed. Proudly growing green spaces since day one.
          </p>
        </aside>
      </div>
    </section>
  )
}

export default AboutUs
