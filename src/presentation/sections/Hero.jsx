import { Reveal } from '../components/Reveal';
import { SectionLabel } from '../components/SectionLabel';
import { ArrowLink } from '../components/ArrowLink';
import { CodeBlockScene } from '../components/CodeBlockScene';

export function Hero({ profile }) {
  return (
    <section className="section hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__intro">
          <Reveal><SectionLabel>{profile.greeting.replace(/^\/\/\s*/, '')}</SectionLabel></Reveal>
          <h1 className="hero__title">
            <span className="hero__word"><span>{profile.firstName}</span></span>{' '}
            <span className="hero__word accent"><span>{profile.lastName}</span></span>
          </h1>
          <Reveal delay={350}><p className="hero__role">&lt; {profile.role} /&gt;</p></Reveal>
        </div>

        <Reveal className="hero__cta" delay={450}>
          <ArrowLink href={profile.handleUrl}>{profile.handle}</ArrowLink>
        </Reveal>

        <Reveal className="hero__bio" delay={550}>
          <p>{profile.bio}</p>
          <p className="hero__meta">{profile.location}</p>
        </Reveal>

        <div className="hero__scene"><CodeBlockScene /></div>
      </div>
    </section>
  );
}
