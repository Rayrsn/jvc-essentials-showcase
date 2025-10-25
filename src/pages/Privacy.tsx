import PageTransition from "@/components/PageTransition";

const Privacy = () => {
  const lastUpdated = new Date().toLocaleDateString();
  const year = new Date().getFullYear();

  return (
    <PageTransition>
      <main className="container py-12 prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground/70">Last updated: {lastUpdated}</p>

        <h2>1. Who we are</h2>
        <p>
          JVC Goods is operated by <strong>NYSPV LTD</strong>, 128 City Road, London, EC1V 2N. Contact: <a href="mailto:sales@jvcgoods.com">sales@jvcgoods.com</a>.
        </p>

        <h2>2. Data we collect</h2>
        <ul>
          <li>Contact details you provide (name, email, phone) via forms or email.</li>
          <li>Basic analytics/usage data to improve our site (aggregated).</li>
        </ul>

        <h2>3. How we use data</h2>
        <ul>
          <li>To respond to enquiries and provide customer support.</li>
          <li>To operate and improve our website and services.</li>
        </ul>

        <h2>4. Legal basis</h2>
        <p>
          We process data with your consent and/or for our legitimate interests (e.g., responding to your request).
        </p>

        <h2>5. Sharing</h2>
        <p>
          We do not sell your data. We may share with service providers (e.g., hosting, form processing) under appropriate safeguards.
        </p>

        <h2>6. Retention</h2>
        <p>
          We keep personal data only as long as necessary for the purposes collected or as required by law.
        </p>

        <h2>7. Your rights (UK/EEA)</h2>
        <p>
          You may request access, correction, deletion, or restriction of your personal data. Contact: <a href="mailto:sales@jvcgoods.com">sales@jvcgoods.com</a>.
        </p>

        <h2>8. Cookies</h2>
        <p>We use minimal cookies/analytics. You can control cookies in your browser settings.</p>

        <h2>9. International transfers</h2>
        <p>
          If data is processed outside the UK/EEA, we use appropriate safeguards (e.g., standard contractual clauses).
        </p>

        <h2>10. Contact</h2>
        <p>Questions about this policy? Email <a href="mailto:sales@jvcgoods.com">sales@jvcgoods.com</a>.</p>

        <div className="mt-8 text-sm text-muted-foreground/70">
          <p>© {year} JVC Goods. All rights reserved.</p>
        </div>
      </main>
    </PageTransition>
  );
};

export default Privacy;
