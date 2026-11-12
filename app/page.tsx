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
  UsersRound,
  Award,
  ChevronRight,
} from "lucide-react";

import Image from "next/image";

// ============================================================
// ELECTION COUNTDOWN
// ============================================================

const election = new Date("2026-11-14T00:00:00+02:00").getTime();

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
    tag: "STUDENT SHOWCASE & COLLABORATION",
    icon: Users,
    title: "Show what you're building. Find who you're missing.",
    desc: "Every Tartan has ideas, skills and projects worth discovering. Tartan Forge gives every student a space to showcase what they're working on, share their interests and find people who can help bring their ideas to life. No nominations, no waiting for a spotlight.",
    detail: "An open, opt-in student showcase and collaboration platform where anyone can publish projects, highlight their skills, request collaborators and discover what fellow Tartans are building. Students can explore projects, connect with creators and join initiatives that match their interests.",
    line: "Your work deserves to be seen. Your ideas deserve a team."
  },
  {
    n: "03",
    tag: "LASTING IMPACT",
    icon: Landmark,
    title: "Every class leaves a mark.",
    desc: "Create a simple, repeatable way for each graduating class to contribute something meaningful to the students who come next.",
    detail:
      "Possibilities include a student-built idea bank, practical newcomer guides and initiatives that elevate CMU-Africa.",
    line: "Leave a legacy.",
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

          {/* <span className="reference-brand-slash"aria-hidden="true"/>

          <span className="reference-brand-role">
            FOR
            <br />
            COMMUNICATIONS
            <br />
            MINISTER
          </span> */}
        </a>

        <nav
          className={menu ? "navlinks open" : "navlinks"}
          aria-label="Main navigation"
        >
           <a onClick={() => setMenu(false)} href="#top">
            HOME
          </a>

          <a onClick={() => setMenu(false)} href="#vision">
            THE VISION
          </a>

          <a onClick={() => setMenu(false)} href="#initiatives">
            INITIATIVES
          </a>

          <a onClick={() => setMenu(false)} href="#commitments">
            IMPROVEMENTS
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
            Meet
            <br />
            <em>Herbert</em>
            <br />
            <span>
              Okuthe<span className="period">.</span>
            </span>
          </h1>

          <p className="hero-description">
            This is our chance to form
            <br />
            <b>connections that shape our future</b>
            <br />
            and build a legacy together.
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

        {/* <div className="hero-side">
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
        </div> */}

        
        {/* HERO CANDIDATE PORTRAIT */}
        <div className="hero-side">
          <div className="hero-portrait">
            {/* Red geometric accent */}
            <div className="hero-portrait-accent" />

            {/* Red glow behind the candidate */}
            <div className="hero-portrait-glow" />

            {/* Candidate photograph */}
            <div className="hero-portrait-photo">
              <Image
                src="/hero.png"
                alt="Herbert Okuthe — Communications Minister Candidate"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 40vw"
                className="hero-candidate-image"
              />
            </div>

            {/* Candidate name overlay */}
            {/* <div className="hero-portrait-info">
              <span>YOUR CANDIDATE</span>
              <h2>HERBERT OKUTHE</h2>
              <p>THE VOICE OF YOUR VISION.</p>
            </div> */}
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

            {/* <span className="hero-bottom-slogan">
                ONE COMMUNITY. MORE POSSIBILITIES.
            </span> */}

        </div>
      </section>

      {/* =====================================================
          SCROLLING TICKER
      ===================================================== */}

      <div className="ticker">
        <div>
            CONNECT PEOPLE <span>✳</span> OPEN DOORS <span>✳</span>{" "}
            LEAVE A LEGACY <span>✳</span> CONNECT PEOPLE <span>✳</span>{" "}
            OPEN DOORS <span>✳</span> LEAVE A LEGACY <span>✳</span>{""}
            CONNECT PEOPLE <span>✳</span> OPEN DOORS <span>✳</span>{" "}
            LEAVE A LEGACY <span>✳</span> CONNECT PEOPLE <span>✳</span>{" "}
            OPEN DOORS <span>✳</span> LEAVE A LEGACY <span>✳</span>{""}
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
          02 / THE INITIATIVES
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
          03 / ELEVATING GUILD COMMUNICATIONS
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

            <a href="https://tartan-hub.vercel.app/" className="text-link">
                CHECK OUT TARTAN FORGE
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

            <a href="https://tartan-hub.vercel.app/" className="text-link">
                CHECK OUT GUILD UPDATES
                <ArrowUpRight size={18} />
            </a>
          </article>
        </div>
      </section>

      {/* =====================================================
          ABOUT HERBERT
      ===================================================== */}

      {/* <section id="about" className="section about">
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
      </section> */}

      
{/* =====================================================
    ABOUT HERBERT — PERSONAL STORY
===================================================== */}

      <section id="about" className="about-story">
        <div className="about-story-container">
          <div className="about-story-grid">

            {/* LEFT COLUMN: PORTRAIT AND QUOTE */}
            <div className="about-story-left">

              <div className="about-portrait-frame">
                <div className="about-portrait-accent" />

                <div className="about-portrait-mask">
                  <img
                    src="/herbert-profile.jpg"
                    alt="Herbert Okuthe"
                    className="about-portrait-image"
                  />
                </div>
              </div>

              <div className="about-story-quote">
                <div className="about-quote-top">
                  <span>WHAT DRIVES ME</span>
                  <span className="about-quote-symbol">”</span>
                </div>

                <h3>
                  WHEN PEOPLE FEEL INCLUDED,
                  <em>
                    {" "}THEY DON&apos;T JUST PARTICIPATE.
                    THEY CONTRIBUTE.
                  </em>
                </h3>

                <div className="about-quote-divider" />

                <p>
                  A lesson from building Campus Connect
                  and working with international students.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: PERSONAL STORY */}
            <div className="about-story-right">

              <div className="about-story-eyebrow">
                <span>A MESSAGE FROM HERBERT</span>
                <div />
              </div>

              <h2 className="about-story-title">
                NO VOICE SHOULD GO{" "}
                <em>UNHEARD.</em>
              </h2>

              <div className="about-story-body">
                <p className="about-story-lead">
                  When I think about communication, I don&apos;t
                  think about posters, announcements, or social
                  media.{" "}
                  <strong>
                    I think about the people who miss out simply
                    because they didn&apos;t know where to begin.
                  </strong>
                </p>

                <p>
                  During my undergraduate studies, I saw
                  international students struggling to find
                  opportunities, connect with others, and feel
                  part of campus life. It wasn&apos;t that they
                  lacked ideas or ambition. Sometimes, language
                  barriers and unfamiliar systems simply stood
                  in their way.
                </p>

                <p>
                  That experience inspired me and two fellow
                  students to create{" "}
                  <strong>Campus Connect</strong>, a platform
                  designed to help students discover opportunities
                  and find their place in the community.
                </p>

                <p>
                  Watching students become more involved taught
                  me something I&apos;ve carried with me ever
                  since:{" "}
                  <strong>
                    when people feel included, they don&apos;t
                    just participate. They contribute.
                  </strong>
                </p>

                <p>
                  Later, serving as my university&apos;s
                  Honorary Ambassador reinforced that belief.
                  I met students from different countries,
                  cultures, and backgrounds, and learned how
                  much we gain when everyone has a chance
                  to be heard.
                </p>

                <p>
                  Today, at CMU-Africa, I see a community
                  full of talent, ideas, and experiences
                  worth sharing.
                </p>

                <div className="about-vision-highlight">
                  My vision is to help ensure that opportunities
                  reach students, ideas find support, and no
                  valuable voice is left out of our community.
                </div>

                <p>
                  Because communication isn&apos;t just about
                  sharing information. It&apos;s about bringing
                  people together and making participation possible.
                </p>
              </div>

              <div className="about-story-signature">
                <strong>Herbert Okuthe</strong>
                <span>The Voice of Your Vision.</span>
              </div>

              {/* MY JOURNEY */}
              <div className="about-journey">
                <h3>MY JOURNEY</h3>

                <div className="about-journey-items">

                  <div className="about-journey-item">
                    <UsersRound aria-hidden="true" />
                    <span>
                      Campus Connect
                      <br />
                      Co-Creator
                    </span>
                  </div>

                  <ChevronRight
                    className="about-journey-arrow"
                    aria-hidden="true"
                  />

                  <div className="about-journey-item">
                    <Award aria-hidden="true" />
                    <span>
                      University
                      <br />
                      Honorary Ambassador
                    </span>
                  </div>

                  <ChevronRight
                    className="about-journey-arrow"
                    aria-hidden="true"
                  />

                  <div className="about-journey-item">
                    <GraduationCap aria-hidden="true" />
                    <span>
                      CMU-Africa
                      <br />
                      Student
                    </span>
                  </div>

                </div>
              </div>

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
              <span>12:00 AM – 11:59 PM (RWANDA TIME)</span>
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
