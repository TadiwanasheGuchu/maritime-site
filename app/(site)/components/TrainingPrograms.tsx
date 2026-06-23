import { ArrowRight } from "./icons";

type Program = {
  title: string;
  description: string;
  cta: string;
  image: string;
};

// NOTE: placeholder imagery from the source Stitch design. Swap these for
// real, self-hosted photos in /public when available.
const PROGRAMS: Program[] = [
  {
    title: "Lifeguard Certification",
    description:
      "Complete professional training including ocean, pool, and open water rescue modules.",
    cta: "View Curriculum",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrpMpncRgrGE752q7e8mCmHOJHa7t0ZXIVgn81C4lcoDztUgGB61zNrSl677kvWuzOTlkM-DQtAkZaUqykQxitAzdzzK0OMEoFNsqdSZGxE2b7EoygzWEPG_s-Tbr913jRODV9E3pl2PHhhG1GWLgTh1BLL6K8TkVfKbhfCI6b_n3EUQZw9uPK7x5L-AbWtn9M5ipbVOTFuP6r1CG55AIdevdSuOOaiDZBMet9mYSPRJgwhHDAD9SohKoXuQogMoG9Wr950pycPQ",
  },
  {
    title: "Water Safety Awareness",
    description:
      "Educational workshops designed for schools, corporate teams, and community groups.",
    cta: "Schedule Workshop",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJEb4nA-RqMLmNin3ddGLMK3T8f5AYUd4lC9kxdJGbgc1rjOWf6RM1x1iJZF819e7A5JvRY36ZIORY6kbsfKrN1-5CFyChdobm1j2CK7QwxHu7m7vXgEA0SJeYq0NZBoTQH6-ZBi_sJrYa3EmpmYbCec7vsWnTPxtE-2E8xXAnJIe6zqQwGFGUbHja5HCXka9msEHvHx9It-v5pLutBr5XTxfp11oYTMNSzdinb7JXgmWsmoms7Yln71NWVFU_S4dYRVqjJ7bWXw",
  },
  {
    title: "Swimming Lessons",
    description:
      "From basics to advanced technical strokes, taught by certified instructors for all ages.",
    cta: "Book Lessons",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDd39cTAs9-JHvCNK-XFhz7AJhLfYrEhNKY3bQHQ_l1UkfwkQ04vuO9wzYb7wiQJMQ8C925WZWL6QlHsiZBIB0PYtry3p_NIIRqDeU9ZsYUOp_pcrxY6pUSwGftKtq6YK_IWDsBsz7g-8DHCeLQ559pyJEWgc2rAUQVxKVCOST4FjJx9B3FKVDVazJ0cyy3BT5v4nU4NyYpxFBkoY59VCcWw-aJ59e3Ua3IrQX_VtwZ3HZHHzp8fzzoEV9QPYeUrLtE6MOd1Pu1Jg",
  },
  {
    title: "First Aid Courses",
    description:
      "Accredited emergency first response and basic life support courses for individuals and firms.",
    cta: "Register Now",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFtiC3jKFuX1v_dxmv767sC8uQnRafuQvGDyoKGvrXG4vmLB5pFGlM0smTF0JNmLvf0J208ZnnAyEpq84PhslYGBlCzhlMp7xbWkZl5iHczGllbdCjeo3O7s2sh9NhHoF0nFOA_i7lQ8WZ2FE8jwYZb2N1iltiVPnUDoDI9K1vQyZgpvGBhyknlRH6EVh8tlOi_RQLPKb7H1epCp_rIXdPT0cfgfbmY8y2ssMyi4mvJPsb0bD9aP13riaMJ7fm7PVJsnWLEmGfLw",
  },
];

export default function TrainingPrograms() {
  return (
    <section id="training" className="py-margin-desktop bg-surface-container-low scroll-mt-24">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center mb-gutter">
          <h2 className="font-headline-lg text-on-surface">Training Programs</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {PROGRAMS.map((program) => (
            <div
              key={program.title}
              className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${program.image}')` }}
              />
              <div className="p-6 flex flex-col grow">
                <h4 className="font-headline-md text-on-surface mb-4">
                  {program.title}
                </h4>
                <p className="font-body-md text-on-surface-variant grow">
                  {program.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 text-primary font-label-lg flex items-center gap-2 hover:gap-3 transition-all"
                >
                  {program.cta} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
