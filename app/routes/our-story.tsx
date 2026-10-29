export function meta() {
  return [{ title: 'Our Story · IRAI' }];
}

export default function OurStory() {
  return (
    <>
      <section className="story-hero">
        <div>
          <span className="mono">Our story</span>
          <h1>Devotion, made by hand<br />in Tamil Nadu</h1>
        </div>
      </section>
      <article className="prose">
        <h2>Where the work starts</h2>
        <p>IRAI began with a simple question: why are so many objects for worship mass-made? We work with carvers, casters and potters who learned the craft at home, and we pay them for the time each piece takes.</p>
        <h2>Materials</h2>
        <p>We use seasoned teak, mango wood, sand-cast brass and wheel-thrown clay. Finishes are chosen to age well on a shrine wall rather than to shine for a week.</p>
        <h2>Our promise</h2>
        <p>Every piece is inspected before it leaves. If it arrives damaged, we replace it. If it is not what you pictured, write to us and we will sort it out together.</p>
      </article>
      <section className="features" style={{ marginTop: 60 }} aria-label="Commitments">
        <div className="feature"><span className="mono">Inspected</span><p>Checked by hand before dispatch.</p></div>
        <div className="feature"><span className="mono">Packed in cloth</span><p>Wrapped in cotton and boxed with corner guards.</p></div>
        <div className="feature"><span className="mono">Replaced if damaged</span><p>Send a photo within 48 hours of delivery.</p></div>
        <div className="feature"><span className="mono">Made to last</span><p>Solid materials, no veneers or plating.</p></div>
      </section>
    </>
  );
}
