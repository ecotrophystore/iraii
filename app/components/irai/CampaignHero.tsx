import {Link} from 'react-router';
import heroImage from '~/assets/irai-hero-v1.png';

export function CampaignHero() {
  return (
    <section className="campaign-hero" aria-labelledby="campaign-heading">
      <img className="campaign-hero-image" src={heroImage} alt="Handcrafted wooden wall art in a warmly lit home" />
      <div className="campaign-hero-scrim" aria-hidden="true" />
      <div className="campaign-hero-content">
        <p className="eyebrow">THE FESTIVE HOME · 2026</p>
        <h1 id="campaign-heading">Objects that let a home hold a story.</h1>
        <p>Hand-finished wood art and considered ritual objects, made for the moments that become tradition.</p>
        <div className="button-row">
          <Link className="button button-primary" to="/collections/wall-art">Discover wall art</Link>
          <Link className="button button-ghost" to="/collections/gifting">Find a gift <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <p className="hero-note">Made slowly in India · Designed to stay</p>
    </section>
  );
}
