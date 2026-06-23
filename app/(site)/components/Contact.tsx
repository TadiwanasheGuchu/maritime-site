import ContactForm from "./ContactForm";
import { siteConfig } from "@/lib/site-config";
import { Ambulance, Mail, MapPin, Phone } from "./icons";

const { dispatch, email, address } = siteConfig.contact;

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-surface-container-highest py-margin-desktop scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        {/* Emergency + HQ */}
        <div className="flex flex-col gap-gutter">
          <div className="bg-primary text-on-primary p-10 rounded-lg flex flex-col gap-6 shadow-lg">
            <h3 className="font-headline-lg flex items-center gap-4">
              <Ambulance size={48} />
              Active Emergency?
            </h3>
            <p className="font-body-lg opacity-90">
              Our response teams are on call for aquatic emergencies. Save these
              numbers now.
            </p>
            <div className="flex flex-col gap-4">
              {dispatch.map((line) => (
                <a
                  key={line.label}
                  href={`tel:${line.number.replace(/[^+\d]/g, "")}`}
                  className="bg-white/10 p-6 rounded-lg flex justify-between items-center border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div>
                    <p className="font-label-md uppercase tracking-widest opacity-70 mb-1">
                      {line.label}
                    </p>
                    <p className="font-headline-md text-on-primary">
                      {line.number}
                    </p>
                  </div>
                  <Phone size={32} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest p-10 rounded-lg border border-outline-variant">
            <h4 className="font-headline-md text-on-surface mb-6">
              Our Headquarters
            </h4>
            <div className="flex flex-col gap-4 text-on-surface-variant">
              <div className="flex gap-4">
                <MapPin size={24} className="text-primary shrink-0" />
                <p className="font-body-md">{address}</p>
              </div>
              <a
                href={`mailto:${email}`}
                className="flex gap-4 hover:text-primary transition-colors"
              >
                <Mail size={24} className="text-primary shrink-0" />
                <span className="font-body-md">{email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-surface-container-lowest p-10 rounded-lg shadow-sm border border-outline-variant">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
