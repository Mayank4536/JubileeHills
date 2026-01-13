import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-pink-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm opacity-90">
            Your privacy and confidentiality are our top priority
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-xl shadow p-6 md:p-10 space-y-8 text-gray-700">

          {/* Intro */}
          <section>
            <p className="leading-relaxed">
              At <strong>4uescort.in</strong>, we are fully committed to protecting
              your privacy. We understand the importance of discretion and ensure
              that all user information remains strictly confidential.
            </p>
          </section>

          {/* What we collect */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p className="mb-2">
              We collect only the minimum information required to provide our services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact details provided voluntarily (phone or email).</li>
              <li>No sensitive personal identity documents are collected.</li>
            </ul>
          </section>

          {/* What we DO NOT do */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              What We Do NOT Do
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do NOT sell or rent user data to third parties.</li>
              <li>We do NOT share user details with advertisers.</li>
              <li>We do NOT store payment or financial information.</li>
              <li>We do NOT track users outside our website.</li>
            </ul>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              How Your Information Is Used
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To connect users with relevant service listings.</li>
              <li>To improve website performance and user experience.</li>
              <li>To respond to support or inquiry messages.</li>
            </ul>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Confidentiality & Anonymity
            </h2>
            <p>
              Your identity and browsing activity remain private. We never publicly
              display user data. All communication is treated as confidential.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Cookies & Tracking
            </h2>
            <p>
              We use basic cookies only to ensure smooth website functionality.
              Cookies do not contain personal information and can be disabled
              through your browser settings.
            </p>
          </section>

          {/* User rights */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Your Rights as a User
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can request deletion of your data at any time.</li>
              <li>You can opt out of communication instantly.</li>
              <li>You can browse most of the site without sharing personal details.</li>
            </ul>
          </section>

          {/* Data security */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Data Security
            </h2>
            <p>
              We use secure servers and industry-standard protections to safeguard
              user information. Access to data is strictly limited.
            </p>
          </section>

          {/* Age */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Age Restriction
            </h2>
            <p>
              This website is strictly for individuals aged 18 and above. We do not
              knowingly collect data from users.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Policy Updates
            </h2>
            <p>
              Any updates to this Privacy Policy will be reflected on this page.
              Continued use of the website indicates acceptance of changes.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold mb-3">
              Support & Contact
            </h2>
            <p>
              If you have any concerns about privacy or data protection, please
              contact us through <strong>info.4uescort.in</strong>. We respond promptly
              and respectfully.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
