import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const email = 'mailto:hello@anthromorphic.ai?subject=' + encodeURIComponent('Business owner conversation');

const sources = [
  ['1', 'General Catalyst, “Manufacturing Outliers: Long Lake”, generalcatalyst.com/stories/manufacturing-outliers-long-lake (accessed 12 Nov 2026).', 'https://generalcatalyst.com/stories/manufacturing-outliers-long-lake'],
  ['2', 'Alexander Taubman on the David Senra podcast (“Bringing AI to the Real Economy”), as summarised at signalcast.app; and Travel Weekly, “Inside Long Lake’s acquisition of American Express Global Business Travel” (accessed 12 Nov 2026).'],
  ['3', 'Bending Spoons, Q2 2026 prepared remarks, bendingspoons.com (accessed 12 Nov 2026).'],
  ['4', 'Luca Ferrari, “The Operating System Behind Bending Spoons”, Sequoia Capital podcast, sequoiacap.com (accessed 12 Nov 2026).'],
  ['5', 'Constellation Software, Q3 2026 interim report, csisoftware.com (accessed 12 Nov 2026).'],
  ['6', 'General Catalyst, “Europe’s AI Transformation in Services”, generalcatalyst.com (accessed 12 Nov 2026).'],
  ['7', 'TechCrunch, “The AI services transformation may be harder than VCs think”, 28 Sep 2025.']
];

function Ref({ n }) {
  return <sup className="ref"><a href={'#source-' + n}>{n}</a></sup>;
}

export default function ThesisPage() {
  return (
    <main>
      <section className="hero thesis-hero">
        <div className="hero-glow"></div>
        <div className="container hero-content">
          <div className="eyebrow"><span className="status-dot"></span> OUR THESIS</div>
          <h1>Own the business.<br /><em>Make it AI-first.</em></h1>
          <p className="hero-text">Anthromorphic is built on one idea. AI can change how a services business works: its costs, its service levels, and how fast it grows. But that change only sticks when someone has end-to-end responsibility for the outcome. So we buy good businesses first, then transform them.</p>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="section-meta"><span>THE BUSINESSES</span><span>01</span></div>
          <h2>Two businesses<br /><span>under one brand.</span></h2>
          <p className="lead thesis-lead">Anthromorphic runs as two separate businesses under one brand.</p>
          <div className="branches">
            <article className="branch">
              <div className="branch-meta"><span>01 / PLATFORM</span></div>
              <h3>Anthromorphic Platform</h3>
              <p>Builds and runs the AI transformation platform: agentic workflows, integrations, business simulation, and the measurement that ties each change to earnings.</p>
            </article>
            <article className="branch">
              <div className="branch-meta"><span>02 / HOLDINGS</span></div>
              <h3>Anthromorphic Holdings</h3>
              <p>Acquires and operates established, founder-led services businesses, and deploys the platform inside them.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section light thesis-follow">
        <div className="container">
          <div className="section-meta"><span>WHY NOW</span><span>02</span></div>
          <div className="two-col">
            <h2>Why now</h2>
            <div className="bodycopy">
              <p>Most businesses aren’t short of AI tools. What holds them back is deployment. Legacy systems, messy data, and the everyday work of changing how people do their jobs are what stop AI from showing up in the numbers. Selling software or advice into a business you don’t control rarely gets past the pilot stage.</p>
              <p>Australia has thousands of profitable, founder-led services businesses with loyal customers, recurring demand, and little technology investment. Many of their founders are thinking about succession and have no obvious successor. These businesses are sound. They just haven’t had the capital or the capability to rebuild their operations around AI.</p>
              <p>Ownership solves both problems. A long-term owner can fund the transformation, take on the risk of doing it, and see it through.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section technology">
        <div className="container">
          <div className="section-meta"><span>THE MODEL</span><span>03</span></div>
          <h2>The model</h2>
          <ol className="model">
            <li><span>01</span><div><h3>Acquire</h3><p>A well-run services business with stable earnings and a founder who cares about what happens next.</p></div></li>
            <li><span>02</span><div><h3>Understand</h3><p>Its economics, its bottlenecks, and where AI can genuinely help.</p></div></li>
            <li><span>03</span><div><h3>Transform</h3><p>Workflows with the platform, keeping people accountable for every outcome.</p></div></li>
            <li><span>04</span><div><h3>Measure</h3><p>Results against a credible baseline, counting costs and risks as well as gains.</p></div></li>
            <li><span>05</span><div><h3>Reuse</h3><p>What works across the next workflow and the next business.</p></div></li>
          </ol>
          <p className="thesis-close">Each business we add should make the platform more capable for the rest. That compounding is the point. Cost-cutting isn’t.</p>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="section-meta"><span>WHAT WE BUY</span><span>04</span></div>
          <div className="two-col">
            <div>
              <h2>What we buy</h2>
              <div className="bodycopy">
                <p>We focus on services businesses. We’re still deciding which sectors to enter first, and we’ll pick them deliberately.</p>
              </div>
            </div>
            <dl className="criteria">
              <dt>Size</dt>
              <dd>Typically A$4–12 million in annual EBITDA</dd>
              <dt>Ownership</dt>
              <dd>Founder-led, often with succession in mind</dd>
              <dt>Quality</dt>
              <dd>Stable historical earnings, recurring or repeat revenue, limited customer concentration, and low capital needs</dd>
              <dt>Opportunity</dt>
              <dd>A clear chance to improve service and productivity with AI, in a fragmented market where a better operator can grow</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="section light thesis-follow">
        <div className="container">
          <div className="section-meta"><span>HOW WE TRANSFORM</span><span>05</span></div>
          <h2>How we transform with AI</h2>
          <ul className="thesis-list">
            <li><strong>Agentic operating systems.</strong> Human-supervised agents and orchestrated workflows that take on repetitive work, so teams can focus on customers and judgement calls.</li>
            <li><strong>Integration and data foundation.</strong> Reusable connections across finance, CRM, operations, and industry systems, so each business doesn’t start from scratch.</li>
            <li><strong>Business simulation.</strong> Data-connected models of how a business runs, used to test decisions before making them.</li>
            <li><strong>Governance and evaluation.</strong> Testing, audit trails, and ongoing monitoring of every AI system in production.</li>
            <li><strong>Measured value.</strong> Every change tracked against earnings, cash flow, and customer outcomes.</li>
          </ul>
          <p className="thesis-close">Our founder has led AI systems in production at enterprise scale, including at ASX 200 companies. We bring the same production discipline to the businesses we own.</p>
          <p className="thesis-note">That refers to previous roles at ASX 200 companies. It is not an endorsement by those companies.</p>
        </div>
      </section>

      <section className="section light thesis-follow" id="comparables">
        <div className="container">
          <div className="section-meta"><span>WHAT WE’VE LEARNED</span><span>06</span></div>
          <h2>What we’ve learned from others</h2>
          <p className="thesis-lead">We aren’t affiliated with any of the companies below. Their public results and statements shaped our thinking, and the facts here come from their published material.</p>
          <div className="comparables">
            <article className="comparable">
              <span className="kicker">UNITED STATES</span>
              <h3>Long Lake</h3>
              <p>An AI-native holding company that buys established services businesses and deploys a shared AI platform, Nexus, across all of them. General Catalyst reports that Long Lake has completed 40 acquisitions in about two and a half years, and recently closed the take-private of corporate travel company Amex GBT<Ref n="1" />. Its CEO has described sharing roughly 70–80% of the platform across sectors, with engineers embedded in each business to map workflows and connect legacy data<Ref n="2" />. He has also said that in its longest-held sector, headcount grew rather than shrank as people became more productive<Ref n="2" />.</p>
              <p className="take">What we take: one shared platform, engineers close to the work, and AI that makes people better at their jobs instead of replacing them.</p>
            </article>
            <article className="comparable">
              <span className="kicker">ITALY</span>
              <h3>Bending Spoons</h3>
              <p>Bending Spoons acquires digital businesses, integrates them deeply into one shared platform of people, technology and data, and reinvests the cash they generate in further acquisitions. It says it has made more than 50 acquisitions, buys to own and operate for the long term, and has never sold a material business<Ref n="3" /><Ref n="4" />.</p>
              <p className="take">What we take: real transformation means rebuilding how a business runs, not adding a layer on top. It also takes time, so you only buy what you can genuinely improve.</p>
            </article>
            <article className="comparable">
              <span className="kicker">CANADA</span>
              <h3>Constellation Software</h3>
              <p>Constellation now owns more than 1,600 vertical-market software businesses across over 100 markets. It holds them permanently and runs them through decentralised operating groups<Ref n="5" />.</p>
              <p className="take">What we take: patient, disciplined capital allocation, and respect for the specialist knowledge that already exists inside each business.</p>
            </article>
            <article className="comparable">
              <span className="kicker">GENERAL CATALYST</span>
              <h3>AI-enabled services companies</h3>
              <p>General Catalyst’s Creation strategy backs companies that acquire and rebuild services businesses with AI, including Long Lake, Titan MSP and Crescendo. It says this is “an AI transformation and product reinvention strategy, not a PE roll-up”. It also says automation metrics come first and financial results follow<Ref n="6" />. TechCrunch reported that Titan’s pilots showed 38% of typical IT-services tasks could be automated<Ref n="7" />.</p>
              <p className="take">What we take: measure the operational change first, and expect the platform to need investment before it pays back.</p>
            </article>
          </div>
          <p className="thesis-close">Our difference is focus. We bring this model to Australian founder-led services businesses, with a platform built here.</p>
        </div>
      </section>

      <section className="contact" id="founders">
        <div className="container">
          <span className="eyebrow">FOR FOUNDERS AND SELLERS</span>
          <h2>If you’ve built a business<br /><em>you’re proud of.</em></h2>
          <p>If you’re thinking about what comes next, we’d like to talk.</p>
          <ul className="thesis-list founder-points">
            <li><strong>People and customers.</strong> The relationships and expertise in a business are part of what we look at.</li>
            <li><strong>Confidential conversations.</strong> An early conversation is exploratory and commits neither side.</li>
          </ul>
          <a className="contact-email" href={email}>Start a confidential conversation <ArrowUpRight size={30} /></a>
        </div>
      </section>

      <section className="section light thesis-sources-section">
        <div className="container">
          <p className="thesis-disclaimer">This page describes Anthromorphic’s strategy and priorities. It does not describe completed acquisitions or guarantee any outcome, and it is not an offer of securities.</p>
          <h2 className="sources-heading">Sources</h2>
          <ol className="thesis-sources">
            {sources.map(([n, text, href]) => (
              <li id={'source-' + n} key={n}>
                {href ? <a href={href} target="_blank" rel="noreferrer">{text}</a> : text}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
