import {Link} from 'react-router';

export function CampaignHero() {
  return (
    <section className="campaign-hero">
      <div className="campaign-hero-art" aria-hidden><span>ஓம்</span></div>
      <div className="campaign-hero-content">
        <p className="eyebrow">IRAI FESTIVAL EDITIONS</p>
        <h1>Art that keeps devotion close to home.</h1>
        <p>Thoughtful wooden wall art and sacred objects for everyday ritual, celebration, and meaningful gifting.</p>
        <div className="button-row">
          <Link className="button button-primary" to="/collections/wall-art">Shop wall art</Link>
          <Link className="button button-secondary" to="/collections/gifting">Explore gifting</Link>
        </div>
      </div>
    </section>
  );
}
