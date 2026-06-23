import { siteConfig } from "@/lib/site-config";

const { founderName, foundedYear, foundedLocation, milestones } =
  siteConfig.story;
const hasFounder = Boolean(founderName && foundedYear && foundedLocation);
const yearsOfService = foundedYear
  ? new Date().getFullYear() - foundedYear
  : null;

export default function Story() {
  return (
    <section
      id="story"
      className="py-margin-desktop bg-surface-container-lowest scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 relative">
          {/* Placeholder until a real team/founder photo is supplied. */}
          <div className="aspect-[4/5] rounded-lg overflow-hidden bg-gradient-to-br from-primary/15 via-surface-container to-primary-fixed/30 grid place-items-center">
            <span className="font-label-lg uppercase tracking-widest text-on-surface-variant/60">
              Photo coming soon
            </span>
          </div>
          {yearsOfService !== null && (
            <div className="absolute -bottom-4 -right-4 bg-primary text-on-primary p-8 rounded-lg max-w-[220px] shadow-lg">
              <p className="font-headline-md">{yearsOfService}+ Years</p>
              <p className="font-label-md opacity-80">
                Of service in Namibia
              </p>
            </div>
          )}
        </div>

        <div className="md:col-span-7 flex flex-col gap-6">
          <h2 className="font-headline-lg text-on-surface">
            The Story of Monarch
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            {hasFounder ? (
              <>
                Founded in {foundedYear} by{" "}
                <span className="text-primary font-bold">{founderName}</span> in{" "}
                {foundedLocation}, {siteConfig.legalName} set out to bring
                professional aquatic safety to Namibia&apos;s waters.
              </>
            ) : (
              <>
                {siteConfig.legalName} was established to bring professional,
                well-trained aquatic safety to Namibia&apos;s coastlines and
                inland waters.
              </>
            )}
          </p>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            What began as a small team protecting local beaches has grown into a
            dedicated rescue and training operation. Our focus stays the same:
            preventing drownings through education, vigilance, and capable
            response.
          </p>

          {milestones.length > 0 && (
            <div className="grid grid-cols-2 gap-6 mt-4">
              {milestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="border-l-4 border-primary pl-6"
                >
                  <p className="font-label-lg text-on-surface">
                    {milestone.year}
                  </p>
                  <p className="font-body-md text-on-surface-variant">
                    {milestone.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
