import Buoy3D from "./components/Buoy3D";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import Stats from "./components/Stats";
import {
  AnchorIcon,
  ArrowRightIcon,
  GlobeIcon,
  LifebuoyIcon,
  MailIcon,
  MapPinIcon,
  MedicIcon,
  PhoneIcon,
  ShareIcon,
  StarIcon,
  UsersIcon,
} from "./components/icons";

const services = [
  {
    Icon: AnchorIcon,
    title: "MARITIME PATROL",
    body: "High-speed coastal surveillance and active patrol services for private beaches, events, and commercial ports.",
  },
  {
    Icon: LifebuoyIcon,
    title: "SEARCH & RESCUE",
    body: "Rapid response 24/7 emergency dispatch for water-based incidents using advanced tracking and rescue equipment.",
  },
  {
    Icon: MedicIcon,
    title: "TACTICAL MEDIC",
    body: "Specialized trauma care in high-stakes environments, provided by certified paramedics and emergency technicians.",
  },
];

const courses = [
  {
    title: "Ocean Professional",
    body: "Elite level lifeguard certification for open ocean environments.",
    price: "$499",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcu6Xmd2rTwB6VhkXxhdKJ34H4hqd9DmDQfa4P0eYtuM52Gt7HJ3A7l2_4Y_KfKMXuE3sqtIO7Myjv7byvRYPtYFczhszzs3RHCFmdwhbTySfBOHwYSxlimxe2YSdnjOc8XzG2tcrSTH7JRLNZ9eeeYnRs-tqikv_pGgkU2c6TO-3iz5PCf00AVyVfJRGW1yaHXYlWO9oBSzgmX1unuHRReVvCLS3MTTAW9MpPp-j-DA44jqjtFAamrvD1bQbwn1pQq-2yber759g",
  },
  {
    title: "EMS Foundation",
    body: "Core emergency medical skills for first responders and public safety.",
    price: "$299",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUOWhkz1bBHdC1CITrJ-hqzfNnVNIsIDNtf9FUlDBgNct2patjdTBjSP7isIxBcJwiyPc2o_WpZS-6gT5o1fTp5Kd2m600lvPbwTB7DhYe6UWSq_UObpr23k8ZfFazgTKaCjEzwVGmauyRmkoF-uUot_bMEw_ddV7izwNshCtyuTaAz3Ovv3o3vCoOgm-_rT_Kqdi7JE318hpkSiDqkRxvn1LUJTOrkDCialOlz32joinz-mCbfdLluwC03CzrbMCBcMbCnopgBXM",
  },
  {
    title: "Jet Ski Rescue",
    body: "Advanced watercraft handling and rescue techniques for surf zones.",
    price: "$650",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh5i46SiDkSchF1zhtUgAqvU4taaE0vfTJT7I-CoWpBDIJA5kaf2QvdLr5UGrJPWAwB5Bk44rpJA1sanbCQR5cfPmo0bDz25JbUVU7I2g-ATF3FqnrQG_YiG2dvV_nhGk5RQJ7ILS0CjvnlwzQaxhcP2C99ox_afVNnEPqbOKlwN2y38cQ8Wzois-CDDX8dNtPA8m2ZA2pnkCgxSpcRgZLXLV9b_zLL-0LH7lSuBpnbWYNm2_ZpQMSNg_-9FB5k1hqTycigqBjP4A",
  },
  {
    title: "Corporate First Aid",
    body: "Bespoke onsite safety training for businesses and industrial sites.",
    price: "$150",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUGthhmuIyjZBWTOURdZPj2Ty8EDWP565sy_Yb_DNcgHLdpWcmpojtw6BD0uvhnfgmqnZiITOU-Gb9tHjY358QgF__uSH2XdtjvJO435eKD2je1xgxx8yN-nU5511Dgg9GQaqazjzsanbzAVvNlozmCTwHmjJjC5wC67tzgyIq-j2f9zqWCAo6GeT9cAw8r5EqOSOPzhhIENh1g2momnsbIkNtYtwVW5jBhYhWWegylwrfMbD3v7KU5ZtYawTmBlDkGlg6M99dtLM",
  },
];

const testimonials = [
  {
    quote:
      "Monarch redefined what coastal safety means for our resort. Their team is disciplined, highly skilled, and professional.",
    name: "Stefan de Beer",
    role: "Director, Atlantic Sands Resort",
  },
  {
    quote:
      "Their response time during a major shoreline incident was flawless. The medical triage team saved lives that day. Truly elite.",
    name: "Cap. Sarah van Wyk",
    role: "Coastal Patrol Division",
  },
  {
    quote:
      "As an event organizer, safety is my top concern. Monarch provides a peace of mind that no other agency in the region can match.",
    name: "Jason Mbeki",
    role: "Head of Operations, NAM-Fest",
  },
];

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <Navbar />

      {/* Hero ------------------------------------------------------------ */}
      <section className="relative flex h-screen min-h-160 flex-col items-center justify-center px-4 text-center">
        {/* Atmosphere + animated 3D buoy */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 hero-grid opacity-60" />
          <div className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full buoy-halo" />
        </div>
        <Buoy3D className="absolute inset-0 -z-10" />

        <Reveal className="max-w-4xl">
          <p className="mb-4 text-sm font-bold tracking-mega text-tertiary md:text-base">
            ELITE OCEAN RESCUE &amp; TRAINING
          </p>
          <h1 className="mb-6 font-display text-6xl leading-none text-white text-glow sm:text-7xl md:text-8xl lg:text-9xl">
            GUARDING
            <br />
            NAMIBIA&apos;S WATERS
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-white/60 md:text-xl">
            Setting the gold standard for maritime safety, emergency medical
            response, and professional lifeguard certification across the
            Skeleton Coast and beyond.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="rounded-lg bg-tertiary px-10 py-4 font-bold text-white shadow-lg transition-transform hover:-translate-y-1"
            >
              OPERATIONAL SERVICES
            </a>
            <a
              href="#courses"
              className="rounded-lg glass-card px-10 py-4 font-bold text-white transition-transform hover:-translate-y-1"
            >
              VIEW ACADEMY
            </a>
          </div>
        </Reveal>
      </section>

      {/* Services -------------------------------------------------------- */}
      <section
        id="services"
        className="relative z-10 bg-linear-to-b from-transparent to-background px-6 py-32 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16 text-center">
            <h2 className="mb-2 font-display text-5xl text-white">
              PRECISION SERVICES
            </h2>
            <div className="mx-auto h-1 w-20 bg-tertiary" />
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div className="group flex h-full flex-col items-center rounded-2xl glass-card p-10 text-center">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-tertiary/10 text-tertiary transition-transform group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-4 font-display text-3xl text-white">
                    {title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-white/60">
                    {body}
                  </p>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-1 text-xs font-bold tracking-widest text-tertiary"
                  >
                    LEARN MORE <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats ----------------------------------------------------------- */}
      <section id="stats" className="relative z-10 px-6 py-24 md:px-12">
        <Reveal>
          <Stats />
        </Reveal>
      </section>

      {/* Courses --------------------------------------------------------- */}
      <section
        id="courses"
        className="relative z-10 overflow-hidden px-6 py-32 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-16">
            <p className="mb-2 text-sm font-bold tracking-[0.2em] text-tertiary">
              MONARCH ACADEMY
            </p>
            <h2 className="font-display text-5xl text-white">
              PROFESSIONAL TRAINING
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, i) => (
              <Reveal key={course.title} delay={i * 100}>
                <div className="group flex h-full flex-col rounded-xl glass-card p-6 transition-transform hover:-translate-y-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={course.img}
                    alt={course.title}
                    loading="lazy"
                    className="mb-6 h-48 w-full rounded-lg object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                  <h4 className="mb-2 text-lg font-bold text-white">
                    {course.title}
                  </h4>
                  <p className="mb-4 text-xs text-white/50">{course.body}</p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="font-bold text-tertiary">
                      {course.price}
                    </span>
                    <span className="text-white/30 transition-colors group-hover:text-white">
                      <ArrowRightIcon className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials ---------------------------------------------------- */}
      <section className="relative z-10 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-16 text-center font-display text-4xl text-white">
              OPERATIONAL TRUST
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 150}>
                <div className="flex h-full flex-col rounded-2xl glass-card p-10">
                  <div className="mb-6 flex gap-1 text-tertiary">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} className="h-5 w-5" />
                    ))}
                  </div>
                  <p className="mb-8 flex-1 italic leading-relaxed text-white/70">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-tertiary/50 bg-tertiary/10 font-display text-xl text-tertiary">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white">{t.name}</div>
                      <div className="text-xs text-white/40">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact --------------------------------------------------------- */}
      <section id="contact" className="relative z-10 px-6 py-32 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="mb-6 font-display text-7xl text-white drop-shadow-[0_0_15px_rgba(29,158,117,0.4)] md:text-8xl">
              REACH US
            </h2>
            <p className="mb-10 max-w-md text-lg text-white/60">
              Secure your premises, train your staff, or request emergency
              planning today. Our operators are standing by.
            </p>
            <div className="space-y-6">
              {[
                { Icon: PhoneIcon, text: "+264 (0) 81 123 4567" },
                { Icon: MailIcon, text: "ops@monarchlifeguard.com" },
                { Icon: MapPinIcon, text: "Swakopmund Operational Hub, Namibia" },
              ].map(({ Icon, text }) => (
                <div key={text} className="group flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-tertiary transition-all group-hover:bg-tertiary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-white/80">{text}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form className="space-y-6 rounded-3xl glass-card p-8 md:p-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full Name" />
                <Field label="Contact Number" />
              </div>
              <div className="space-y-2">
                <Label>Inquiry Type</Label>
                <select className="w-full appearance-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white/70 outline-none transition-all focus:border-tertiary">
                  <option className="bg-primary">Operational Services</option>
                  <option className="bg-primary">Training / Courses</option>
                  <option className="bg-primary">Emergency Support</option>
                  <option className="bg-primary">Recruitment</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Mission Details</Label>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-tertiary"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-tertiary py-4 font-bold text-white shadow-lg transition-all hover:bg-tertiary-bright"
              >
                SUBMIT REQUEST
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Footer ---------------------------------------------------------- */}
      <footer className="relative z-10 overflow-hidden bg-primary pb-12 pt-24">
        <div className="absolute left-0 top-0 w-full translate-y-[-99%] overflow-hidden leading-none">
          <svg
            className="relative block h-24 w-[200%] animate-wave"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#042c53"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="mb-6 font-display text-4xl uppercase tracking-widest text-white">
                MONARCH
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-white/40">
                Namibia&apos;s premiere Lifeguard and Emergency Services
                provider. Professionalism, readiness, and excellence in every
                deployment.
              </p>
            </div>
            <div>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
                Quick Links
              </h4>
              <ul className="space-y-4 text-sm text-white/40">
                {["Emergency Protocol", "Training Calendar", "Equipment Shop", "Privacy Policy"].map(
                  (l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="transition-colors hover:text-tertiary"
                      >
                        {l}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">
                Social Reach
              </h4>
              <div className="flex gap-4">
                {[GlobeIcon, ShareIcon, UsersIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-tertiary hover:text-tertiary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between border-t border-white/5 pt-8 text-xs text-white/20 md:flex-row">
            <p>© 2024 MONARCH LIFEGUARD &amp; EMERGENCY SERVICES. ALL RIGHTS RESERVED.</p>
            <p>CERTIFIED OPERATIONAL EXCELLENCE</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-bold uppercase tracking-widest text-white/40">
      {children}
    </label>
  );
}

function Field({ label }: { label: string }) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <input
        type="text"
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-tertiary"
      />
    </div>
  );
}
