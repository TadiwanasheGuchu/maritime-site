import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.legalName} collects and uses your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="—">
      <p>
        This Privacy Policy explains how {siteConfig.legalName} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;) handles information collected through this website.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit the contact form we collect the name, email address,
        service type, and message you provide so we can respond to your enquiry.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use the information you submit solely to respond to your request and
        to provide the services you ask about. We do not sell your information.
      </p>

      <h2>Service providers</h2>
      <p>
        Contact-form messages may be delivered through a third-party email
        provider acting on our behalf. These providers process the data only as
        needed to deliver your message.
      </p>

      <h2>Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of the personal
        information you have submitted by contacting us at{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        .
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}
