export default function CIBCBSpecialSessionPage() {
  const topics = [
    "Energy-efficient computational intelligence for medical imaging and omics data",
    "Federated and privacy-preserving learning in healthcare",
    "Explainable and interpretable AI in bioinformatics and computational biology",
    "Generative models for biomedical applications",
    "Multi-agent systems in digital health environments",
    "Data governance and regulation-aware AI architectures",
    "Sustainable computing for large-scale biological modeling",
    "Computational intelligence for climate-health and environmental monitoring",
    "Fairness and robustness in biomedical AI",
    "Lifecycle assessment of intelligent systems in healthcare",
    "Distributed ledger technologies for secure digital health infrastructures",
  ];

  const organizers = [
    {
      name: "Dr. Polat Goktas",
      role: "Sabanci University, Türkiye",
      email: "polat.goktas@sabanciuniv.edu",
      linkedin: "https://www.linkedin.com/in/polat-goktas-ph-d-29b24b58/",
      bio: "Dr. Polat Goktas is an Assistant Professor in the Faculty of Engineering and Natural Sciences at Sabancı University, Türkiye. His research spans artificial intelligence, machine learning, data mining, and explainable AI, with a focus on sustainable intelligent systems, privacy-aware learning, and digital healthcare applications. He previously served as a Senior Researcher at University College Dublin and CeADAR, and was a Fulbright Doctoral Research Fellow at Harvard Medical School and Massachusetts General Hospital.",
    },
    {
      name: "Dr. Elif Calik",
      role: "University of Galway, Ireland",
      email: "elif.calik@universityofgalway.ie",
      linkedin: "https://www.linkedin.com/in/elif-calik-6014b430/",
      bio: "Dr. Elif Calik is a Digi+ MSCA COFUND Postdoctoral Fellow and researcher at the ADAPT Research Centre and the School of Computer Science, University of Galway. Her work focuses on blockchain technology, smart contracts, medical informatics, privacy, trustworthiness-by-design, ethics, and multi-stakeholder data governance in healthcare ecosystems.",
    },
    {
      name: "Dr. Malika Bendechache",
      role: "University of Galway, Ireland",
      email: "malika.bendechache@universityofgalway.ie",
      linkedin: "https://www.linkedin.com/in/malika-bendechache-250b1381/",
      bio: "Dr. Malika Bendechache is a Lecturer Above the Bar in the School of Computer Science at the University of Galway and an investigator at ADAPT and Lero Research Centres. Her research covers big data analytics, machine learning, data governance, privacy, and trustworthy intelligent systems, with applications in healthcare and complex data-driven environments.",
    },
  ];

  const audience = [
    "Researchers in computational intelligence, bioinformatics, biomedical engineering, and healthcare informatics",
    "Digital health and clinical decision-support system designers",
    "Federated and privacy-preserving learning researchers in healthcare ecosystems",
    "Experts in trustworthy, interpretable, and sustainable intelligent systems",
    "Researchers working on governance, regulatory compliance, and ethical AI in high-risk biomedical domains",
    "Distributed systems and secure data infrastructure researchers supporting health and bio-ecosystems",
    "Industry practitioners in digital health platforms, biomedical analytics, and regulated AI deployment",
  ];

  const dates = [
    { label: "Paper Submission Deadline", value: "(Extended) April 30, 2026", href: "https://cibcb2026.dib.uth.gr/submissions/" },
    { label: "Acceptance Notification", value: "May 31, 2026" },
    { label: "Final Paper Submission & Early Registration", value: "June 30, 2026" },
    { label: "Conference Dates", value: "August 31 – September 2, 2026" },
  ];

  const linkedinIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 0 0 3.28 4.97c0 1.08.88 1.97 1.94 1.97h.03a1.97 1.97 0 1 0 0-3.94ZM20.44 13.03c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.37c.04.87 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.03 1.88 2.54V20H20v-6.97h.44Z" />
    </svg>
  );

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-slate-900 selection:bg-cyan-200 selection:text-slate-950">
      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 8px 24px rgba(8, 145, 178, 0.08); }
          50% { box-shadow: 0 12px 34px rgba(8, 145, 178, 0.18); }
        }
        .animate-fadeUp { animation: fadeUp 0.9s ease forwards; }
        .animate-floaty { animation: floaty 7s ease-in-out infinite; }
        .animate-glow { animation: pulseGlow 3.5s ease-in-out infinite; }
      `}</style>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="animate-floaty absolute -top-16 left-[-6rem] h-72 w-72 rounded-full bg-cyan-200/45 blur-3xl" />
        <div className="animate-floaty absolute top-32 right-[-5rem] h-96 w-96 rounded-full bg-emerald-200/35 blur-3xl" style={{ animationDelay: "1.3s" }} />
        <div className="animate-floaty absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" style={{ animationDelay: "2.1s" }} />
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-700">IEEE CIBCB 2026 · Special Session</div>
            <div className="mt-1 text-lg font-semibold text-slate-900">Governance-Aware and Sustainable Computational Intelligence for Medicine and Digital Health</div>
          </div>
          <div className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-950">About</a>
            <a href="#topics" className="transition hover:text-slate-950">Topics</a>
            <a href="#organizers" className="transition hover:text-slate-950">Organizers</a>
            <a href="#dates" className="transition hover:text-slate-950">Dates</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-20">
          <div className="flex flex-col justify-center animate-fadeUp">
            <div className="mb-5 inline-flex w-fit items-center rounded-full border border-cyan-200 bg-white/70 px-4 py-2 text-sm text-cyan-800 shadow-sm">
              Athens, Greece · 31 Aug – 2 Sep 2026
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              A special session on <span className="text-cyan-700">trustworthy</span>, <span className="text-emerald-700">sustainable</span>, and <span className="text-blue-700">governance-aware</span> computational intelligence for biomedicine.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
              This special session brings together researchers working at the intersection of computational intelligence, biomedical engineering, bioinformatics, and digital health to discuss intelligent systems that are not only high-performing, but also interpretable, privacy-conscious, regulation-aware, and sustainable by design.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://cibcb2026.dib.uth.gr/submissions/"
                className="animate-glow rounded-2xl bg-cyan-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-800"
              >
                Paper Submission
              </a>
              <a
                href="https://cibcb2026.dib.uth.gr/call-for-papers/"
                className="rounded-2xl border border-emerald-300 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
              >
                Call for Papers
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Contact Organizers
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Scientific Rigor", text: "Advanced computational intelligence methods for high-impact biomedical and health-related problems." },
                { title: "Responsible Design", text: "Interpretability, fairness, privacy, and compliance integrated into system development." },
                { title: "Long-Term Sustainability", text: "Resource-aware and operationally sustainable approaches for biomedical AI deployment." },
              ].map((item, idx) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur animate-fadeUp" style={{ animationDelay: `${0.1 * (idx + 2)}s` }}>
                  <div className="text-sm font-semibold text-cyan-700">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fadeUp rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur">
            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-cyan-50 via-white to-emerald-50 p-6">
              <div className="text-sm uppercase tracking-[0.25em] text-emerald-700">Session Highlights</div>
              <div className="mt-4 space-y-4">
                {[
                  "Governance-aware computational intelligence architectures for biomedical systems",
                  "Federated, privacy-preserving, and distributed learning in healthcare ecosystems",
                  "Energy-efficient and sustainable intelligent methods for omics and medical imaging",
                  "Interpretable, accountable, and regulation-conscious digital health systems",
                ].map((point) => (
                  <div key={point} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-sm">
                    <div className="mt-1 h-2.5 w-2.5 flex-none rounded-full bg-cyan-600" />
                    <p className="text-sm leading-6 text-slate-700">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                <div className="text-sm font-semibold text-cyan-800">Why this session matters</div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  As intelligent systems become embedded within real biomedical and clinical infrastructures, their scientific value depends not only on predictive performance, but also on transparency, accountability, privacy, sustainability, and readiness for deployment in regulated settings.
                </p>
              </div>

              <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-rose-700">
                  Paper Submission Deadline
                </div>
                <div className="mt-2 text-sm text-slate-500 line-through">
                  March 31, 2026
                </div>
                <div className="mt-2 inline-flex items-center rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                  Extended
                </div>
                <div className="mt-2 text-xl font-bold text-rose-700">
                  April 30, 2026
                </div>
                <a
                  href="https://cibcb2026.dib.uth.gr/submissions/"
                  className="mt-3 inline-block text-sm font-medium text-cyan-700 hover:text-cyan-800"
                >
                  Visit the Submission System
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-[2rem] border border-slate-200 bg-white/90 p-7 shadow-sm backdrop-blur animate-fadeUp">
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-700">Aim and Scope</div>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950 sm:text-3xl">
                Responsible and Sustainable Computational Intelligence for Biomedicine
              </h2>

              <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8">
                <p>
                  Computational intelligence methods are increasingly integrated into biomedical research, digital health platforms, and bioinformatics pipelines. However, beyond predictive performance, modern biomedical AI systems must address broader challenges including interpretability, fairness, privacy protection, regulatory compliance, and computational sustainability.
                </p>

                <p>
                  This special session aims to create a forum for research that combines advanced computational intelligence with responsible system design. The focus is on approaches that support trustworthy, explainable, energy-efficient, and governance-aware AI systems capable of operating in real biomedical and clinical environments.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-cyan-700">Scientific Focus</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Novel computational intelligence approaches addressing complex biomedical datasets such as medical imaging, omics data, and clinical health records.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-emerald-700">Responsible AI</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Methods that integrate transparency, explainability, privacy preservation, fairness, and governance considerations into AI system design.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-blue-700">Digital Health Systems</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Intelligent infrastructures supporting digital health platforms, distributed biomedical data ecosystems, and next-generation clinical decision systems.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-indigo-700">Sustainable AI</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Energy-efficient and resource-aware AI techniques enabling scalable biomedical intelligence with reduced environmental footprint.
                  </p>
                </div>
              </div>
            </div>

            <div id="topics" className="rounded-[2rem] border border-slate-200 bg-white/90 p-7 shadow-sm backdrop-blur animate-fadeUp">
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-700">Topics of Interest</div>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950 sm:text-3xl">Areas of contribution</h2>

              <p className="mt-4 text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8">
                We invite original research contributions in areas including, but not limited to:
              </p>

              <div className="mt-5 grid gap-3">
                {topics.map((topic, index) => (
                  <div
                    key={topic}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-4 py-3 transition hover:border-cyan-300 hover:bg-white"
                  >
                    <div className="mt-0.5 text-sm font-semibold text-cyan-700">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm leading-7 text-slate-700">{topic}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-r from-cyan-50 via-white to-emerald-50 p-8 shadow-sm backdrop-blur animate-fadeUp">
            <div className="max-w-4xl">
              <div className="text-sm uppercase tracking-[0.3em] text-emerald-700">Target Audience</div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Who should submit</h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {audience.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  <p className="text-sm leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="organizers" className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <div className="mb-8 max-w-3xl animate-fadeUp">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-700">Session Organizers</div>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">An interdisciplinary organizing team</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {organizers.map((person, idx) => (
              <div key={person.name} className="rounded-[2rem] border border-slate-200 bg-white/85 p-7 shadow-sm backdrop-blur animate-fadeUp" style={{ animationDelay: `${0.12 * idx}s` }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-semibold text-slate-950">{person.name}</h3>
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${person.name} LinkedIn`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-50"
                      >
                        {linkedinIcon}
                      </a>
                    </div>
                    <p className="mt-2 text-sm text-cyan-700">{person.role}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-lg font-semibold text-cyan-700">
                    {person.name.split(" ")[1]?.[0] || person.name[0]}
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-700">{person.bio}</p>
                <div className="mt-6 space-y-2">
                  <a href={`mailto:${person.email}`} className="block text-sm font-medium text-emerald-700 hover:text-emerald-800">
                    {person.email}
                  </a>
                  <a href={person.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 hover:text-cyan-800">
                    {linkedinIcon}
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="dates" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {dates.map((item, idx) => (
              <div key={item.label} className="rounded-[1.75rem] border border-slate-200 bg-white/85 p-6 text-center shadow-sm backdrop-blur animate-fadeUp" style={{ animationDelay: `${0.1 * idx}s` }}>
                <div className="text-sm uppercase tracking-[0.22em] text-cyan-700">{item.label}</div>

                <div className="mt-4 text-xl font-semibold text-slate-950">
                  {item.label === "Paper Submission Deadline" ? (
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-sm text-slate-500 line-through">March 31, 2026</span>
                      <span className="inline-flex items-center rounded-full bg-rose-600 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                        Extended
                      </span>
                      <span className="text-rose-700">(Extended) April 30, 2026</span>
                    </div>
                  ) : (
                    item.value
                  )}
                </div>

                {item.href ? (
                  <a href={item.href} className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-800">
                    Visit the paper Submission System
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="relative border-t border-slate-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-700">IEEE CIBCB 2026</div>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Governance-Aware and Sustainable Computational Intelligence for Medicine and Digital Health</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-700">
                A special session dedicated to responsible, interpretable, privacy-aware, and sustainable computational intelligence in biomedical research and digital health systems.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm backdrop-blur">
              <div className="text-sm uppercase tracking-[0.25em] text-emerald-700">Contact</div>
              <a href="mailto:polat.goktas@sabanciuniv.edu" className="mt-4 block text-lg font-semibold text-slate-900 hover:text-cyan-700">
              </a>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                For further information or inquiries regarding the special session, please contact the session organizers.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://cibcb2026.dib.uth.gr/submissions/"
                  className="inline-flex rounded-2xl bg-cyan-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800"
                >
                  Paper Submission
                </a>
                <a
                  href="https://cibcb2026.dib.uth.gr/call-for-papers/"
                  className="inline-flex rounded-2xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
                >
                  Call for Papers
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <div>IEEE CIBCB 2026 · Athens, Greece · Aug 31 – Sep 2, 2026</div>
            <div>Special Session Website</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
