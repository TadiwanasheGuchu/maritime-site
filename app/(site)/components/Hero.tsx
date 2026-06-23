import { Ambulance } from "./icons";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-surface via-surface to-primary-fixed/40">
      <div className="relative z-10 px-gutter max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter py-margin-desktop md:py-32">
        <div className="md:col-span-9 flex flex-col items-start gap-gutter">
          <span className="bg-primary px-4 py-1 text-on-primary font-label-lg uppercase tracking-widest rounded-full">
            Coastal &amp; Inland Water Safety
          </span>
          <h1 className="font-display-lg text-on-surface">
            Namibia&apos;s <span className="text-primary">Aquatic Safety</span>{" "}
            &amp; Rescue Team
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">
            Professional lifeguard services, emergency response, rescue
            training, and water safety education across Namibia&apos;s
            coastlines and inland waters.
          </p>
          <div className="flex flex-wrap gap-base mt-base">
            <a
              href="#contact"
              className="bg-primary text-on-primary font-label-lg px-8 py-4 rounded-full hover:bg-primary-container transition-all active:scale-95"
            >
              Request Services
            </a>
            <a
              href="#contact"
              className="border-2 border-primary text-primary font-label-lg px-8 py-4 rounded-full hover:bg-primary/5 transition-all flex items-center gap-base"
            >
              <Ambulance size={20} />
              Emergency Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
