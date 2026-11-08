"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  GraduationCap,
  Globe2,
  Landmark,
  MessageCircle,
  Users,
  CalendarDays,
  Share2,
} from "lucide-react";

// ============================================================
// ELECTION COUNTDOWN
// ============================================================

const election = new Date("2026-11-14T08:00:00+02:00").getTime();

function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());

    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const difference =
    now === null ? 0 : Math.max(0, election - now);

  const values = [
    Math.floor(difference / 86400000),
    Math.floor(difference / 3600000) % 24,
    Math.floor(difference / 60000) % 60,
    Math.floor(difference / 1000) % 60,
  ];

  const labels = ["DAYS", "HOURS", "MINUTES", "SECONDS"];

  return (
    <div className="countdown" aria-label="Countdown to election day">
      {values.map((value, index) => (
        <div className="countunit" key={index}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{labels[index]}</span>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// CAMPAIGN INITIATIVES
// ============================================================

const initiatives = [
  {
    n: "01",
    tag: "GLOBAL OPPORTUNITIES",
    icon: Globe2,
    title: "A bridge to Korea.",
    desc: "Open conversations about graduate study in Korea through firsthand stories, practical guidance, and connections with Global Korea Scholarship alumni.",
    detail:
      "Planned conversations with alumni and researchers connected to KAIST, Seoul National University, and other institutions.",
    line: "From curiosity to possibility.",
  },
  {
    n: "02",
    tag: "ACADEMIC CONNECTIONS",
    icon: GraduationCap,
    title: "Opportunities worth sharing.",
    desc: "Use academic networks to surface potential PhD openings, faculty contacts, and pathways for students considering research careers.",
    detail:
      "Beginning with an existing academic connection at Korea University, with further outreach to expand the network.",
    line: "The right information can open a door.",
  },
  {
    n: "03",
    tag: "LASTING IMPACT",
    icon: Landmark,
    title: "Every class leaves a mark.",
    desc: "Create a simple, repeatable way for each graduating class to contribute something meaningful to the students who come next.",
    detail:
      "Possibilities include a student-built idea bank, practical newcomer guides, and initiatives that elevate CMU-Africa.",
    line: "Graduate. Give back. Leave a legacy.",
  },
];

// ============================================================
// MAIN PAGE
// ============================================================

export default function Home() {
  const [menu, setMenu] = useState(false);

  // Share campaign using native sharing or clipboard
  const share = async () => {
    const data = {
      title: "Herbert Okuthe — The Voice of Your Vision",
      text: "Vote Herbert Okuthe for CMU-Africa Communications Minister. The Voice of Your Vision.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        // User cancelled sharing
      }
    } else {
      await navigator.clipboard.writeText(
        `${data.text} ${data.url}`
      );

      alert("Campaign link copied!");
    }
  };

  return (
    <main>
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header className="nav">
        <a
          href="#top"
          className="brand"
          aria-label="Herbert Okuthe home"
        >
          <span className="brand-mark">
            H<span>.</span>
          </span>

          <span className="brand-text">
            HERBERT
            <br />
            OKUTHE
          </span>
        </a>

        <nav
          className={menu ? "navlinks open" : "navlinks"}
          aria-label="Main navigation"
        >
          <a onClick={() => setMenu(false)} href="#vision">
            THE VISION
          </a>

          <a onClick={() => setMenu(false)} href="#initiatives">
            THE PLAN
          </a>

          <a onClick={() => setMenu(false)} href="#commitments">
            THE COMMITMENT
          </a>

          <a onClick={() => setMenu(false)} href="#about">
            ABOUT
          </a>
        </nav>

        <a className="nav-cta" href="#vote">
          VOTE HERBERT
          <ArrowUpRight size={15} />
        </a>

        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation"
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section id="top" className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="pulse" />
            CMU-AFRICA STUDENT GUILD ELECTIONS
            <span className="eyebrow-line" />
            2026
          </div>

          <div className="hero-kicker">
            FOR COMMUNICATIONS MINISTER
          </div>

          <h1>
            THE VOICE
            <br />
            <em>OF YOUR</em>
            <br />
            <span>
              VISION<span className="period">.</span>
            </span>
          </h1>

          <p className="hero-description">
            Not just announcements. <b>Connections that matter.</b>
            <br />
            Opportunities that open doors. A legacy we build together.
          </p>

          <div className="hero-actions">
            <a href="#initiatives" className="button primary">
              EXPLORE MY VISION
              <ArrowUpRight size={19} />
            </a>

            <a href="#vote" className="button secondary">
              WHY YOUR VOTE MATTERS
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="hero-side">
          <div className="portrait-placeholder">
            <div className="portrait-initial">
              H<span>.</span>
            </div>

            <p>
              YOUR CANDIDATE
              <br />
              <strong>HERBERT OKUTHE</strong>
            </p>

            <span className="portrait-note">
              REPLACE WITH CANDIDATE PORTRAIT
            </span>
          </div>

          <div className="side-caption">
            A DIFFERENT KIND OF COMMUNICATION.
          </div>
        </div>

        <div className="hero-bottom">
            <a href="#vision" className="scroll-indicator" aria-label="Scroll to the vision section">
                <span>SCROLL TO DISCOVER</span>
                <span className="down-arrow">↓</span>
            </a>

            <span className="hero-bottom-slogan">
                ONE COMMUNITY. MORE POSSIBILITIES.
            </span>

          {/* <span>ONE COMMUNITY. MORE POSSIBILITIES.</span> */}
        </div>
      </section>

      {/* =====================================================
          SCROLLING TICKER
      ===================================================== */}

      <div className="ticker">
        <div>
            CONNECT PEOPLE <span>✳</span> OPEN DOORS <span>✳</span>{" "}
            PRESERVE KNOWLEDGE <span>✳</span> CONNECT PEOPLE <span>✳</span>{" "}
            OPEN DOORS <span>✳</span> PRESERVE KNOWLEDGE <span>✳</span>{""}
            CONNECT PEOPLE <span>✳</span> OPEN DOORS <span>✳</span>{" "}
            PRESERVE KNOWLEDGE <span>✳</span> CONNECT PEOPLE <span>✳</span>{" "}
            OPEN DOORS <span>✳</span> PRESERVE KNOWLEDGE <span>✳</span>{""}
        </div>
      </div>

      {/* =====================================================
          VISION SECTION
      ===================================================== */}

      <section id="vision" className="section vision">
        <div className="section-label">
          <span className="red-square" />
          01 / THE BIGGER PICTURE
        </div>

        <div className="vision-layout">
          <h2>
            NONE OF US
            <br />
            SUCCEED <span>ALONE.</span>
          </h2>

          <div className="vision-copy">
            <p className="lead">
              “If success were a solo journey, communication would
              not matter.”
            </p>

            {/* <p>
              Think about how many times a conversation with a fellow student has helped you understand a difficult concept, 
              discover an opportunity, or see an idea differently. 
              
              Sometimes, the difference between having an idea and making 
              it happen is simply knowing the right person or having access to the right information.
            </p> */}
            
            <p>
             Communication should {" "}
              <strong>
                not just keep us informed, but help us connect, grow and make the most of our time at CMU-Africa.
              </strong>
            </p>

            <a href="#initiatives" className="text-link">
              HERE&apos;S HOW WE MAKE IT REAL
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          INITIATIVES SECTION
      ===================================================== */}

      <section id="initiatives" className="section initiatives">
        <div className="section-label light">
          <span className="red-square" />
          02 / THE PLAN
        </div>

        <div className="section-top">
          <h2>
            THREE IDEAS.
            <br />
            <span>REAL IMPACT.</span>
          </h2>

          <p>
            Practical initiatives to connect students with
            opportunities and give our community something lasting.
          </p>
        </div>

        <div className="initiative-list">
          {initiatives.map((item) => {
            const Icon = item.icon;

            return (
              <article className="initiative" key={item.n}>
                <div className="initiative-number">
                  {item.n}
                </div>

                <div className="initiative-main">
                  <div className="initiative-tag">
                    <Icon size={16} />
                    {item.tag}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <div className="initiative-detail">
                    {item.detail}
                  </div>
                </div>

                <div className="initiative-end">
                  <ArrowUpRight size={28} />
                  <span>{item.line}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CAMPAIGN QUOTE
      ===================================================== */}

      <section className="quote-section">
        <span className="quote-mark">“</span>

        <blockquote>
          Communication is not a one-person job.
          <br />
          <strong>It&apos;s a collective effort </strong>
          of every individual involved
        </blockquote>

        {/* <span className="quote-mark quote-mark-close">”</span> */}

        <p>— HERBERT OKUTHE</p>
      </section>

      {/* =====================================================
          CORE COMMITMENTS
      ===================================================== */}

      <section id="commitments" className="section commitments">
        <div className="section-label">
          <span className="red-square" />
          03 / GETTING THE BASICS RIGHT
        </div>

        <div className="section-top dark">
          <h2>
            THE ESSENTIALS.
            <br />
            <span>DONE WELL.</span>
          </h2>

          <p>
            Doing the everyday work of the Communications Ministry 
            consistently and transparently matters.
          </p>
        </div>

        <div className="commitment-grid">
          <article>
            <CalendarDays />

            <span>01 / STAY INFORMED</span>

            <h3>Timely updates.</h3>

            <p>
              Clear, reliable communication about events,
              deadlines and what is happening across the Guild.
            </p>

            <a href="https://tartan-now-jht6-silk.vercel.app/" className="text-link">
                CHECK OUT TARTAN NOW
                <ArrowUpRight size={18} />
            </a>
          </article>

          <article>
            <Users />

            <span>02 / CELEBRATE PEOPLE</span>

            <h3>Student voices.</h3>

            <p>
              Recognize the work, ideas, achievements and
              contributions of Tartans across our community.
            </p>

            <a href="#voices" className="text-link">
                CHECK OUT TARTAN CONNECT
                <ArrowUpRight size={18} />
            </a>
          </article>

          <article>
            <MessageCircle />

            <span>03 / BUILD TRUST</span>

            <h3>Guild transparency.</h3>

            <p>
              Help students understand what their representatives
              are working on, what has changed and what comes next.
            </p>

            <a href="#guild-ledger" className="text-link">
                CHECK OUT GUILD LEDGER
                <ArrowUpRight size={18} />
            </a>
          </article>
        </div>
      </section>

      {/* =====================================================
          ABOUT HERBERT
      ===================================================== */}

      <section id="about" className="section about">
        <div className="about-index">
          04 / THE CANDIDATE
        </div>

        <div className="about-grid">
          <div>
            <div className="about-avatar">
              HO<span>.</span>
            </div>
          </div>

          <div>
            <div className="section-label">
              <span className="red-square" />
              A MESSAGE FROM HERBERT
            </div>

            <h2>
              YOUR IDEAS.
              <br />
              OUR <span>FUTURE.</span>
            </h2>

            <p>
              I&apos;m Herbert Okuthe, a candidate for
              Communications Minister at CMU-Africa.
              I believe this role should connect every ministry,
              every initiative and every student to the
              possibilities around us.
            </p>

            <p>
              I won&apos;t pretend that meaningful change is a
              one-person show. That is why I&apos;m asking each of you to
              vote for a Guild where your ideas are heard, shared
              and turned into action.
            </p>

            <div className="signature">
              Herbert Okuthe

              <span>THE VOICE OF YOUR VISION</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VOTING SECTION
      ===================================================== */}

      <section id="vote" className="vote">
        <div className="vote-top">
          <span>05 / YOUR VOICE, YOUR CHOICE.</span>
          <span>CMU-AFRICA · 2026</span>
        </div>

        <div className="vote-inner">
          <span className="vote-eyebrow">
            THE FUTURE SOUNDS BETTER TOGETHER
          </span>

          <h2>
            LET YOUR
            <br />
            VISION <em>BE</em>
            <br />
            HEARD<span>.</span>
          </h2>

          <p>
            On 14 November 2026, vote for communication that
            connects, creates opportunity, and puts students
            at the center.
          </p>

          <div className="vote-buttons">
            <button
              onClick={share}
              className="button white"
            >
              SHARE THE CAMPAIGN
              <Share2 size={19} />
            </button>

            <a
              href="#initiatives"
              className="button outline-white"
            >
              REVISIT THE PLAN
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="election-timer">
            <div>
              <span>ELECTION DAY</span>
              <strong>SATURDAY, 14 NOVEMBER 2026</strong>
            </div>

            <Countdown />
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <div className="footer-brand">
          H<span>.</span>

          <small>
            HERBERT OKUTHE
            <br />
            COMMUNICATIONS MINISTER CANDIDATE
          </small>
        </div>

        <div className="footer-right">
          <a href="#top">
            BACK TO TOP ↑
          </a>

          <button onClick={share}>
            SHARE
            <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="footer-bottom">
          <span>THE VOICE OF YOUR VISION.</span>

          <span>
            BUILT FOR A MORE CONNECTED CMU-AFRICA.
          </span>
        </div>
      </footer>
    </main>
  );
}
