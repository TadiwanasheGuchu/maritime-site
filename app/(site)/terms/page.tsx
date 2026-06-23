import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${siteConfig.name} website.`,
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="—">
      <p>
        These terms govern your use of the {siteConfig.legalName} website. By
        using this website you agree to them.
      </p>

      <h2>Use of this website</h2>
      <p>
        The content on this site is provided for general information about our
        services. It does not constitute a guarantee of service availability.
      </p>

      <h2>Emergencies</h2>
      <p>
        This website is not an emergency dispatch channel. In a life-threatening
        situation, contact the emergency numbers listed on the site or your
        local emergency services directly.
      </p>

      <h2>Enquiries &amp; bookings</h2>
      <p>
        Submitting the contact form is a request for information or services and
        does not create a binding agreement until confirmed in writing by our
        team.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for any loss
        arising from reliance on information presented on this website.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
