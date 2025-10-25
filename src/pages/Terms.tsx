import PageTransition from "@/components/PageTransition";

const Terms = () => {
  const lastUpdated = new Date().toLocaleDateString();
  const year = new Date().getFullYear();

  return (
    <PageTransition>
      <main className="container py-12 prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold tracking-tight">Terms &amp; Conditions</h1>
        <p className="text-sm text-muted-foreground/70">Last updated: {lastUpdated}</p>

        <h2>1. Who we are</h2>
        <p>
          “JVC Goods” is operated by <strong>NYSPV LTD</strong>, 128 City Road, London, EC1V 2N
          (“we”, “us”, “our”). Contact: <a href="mailto:sales@jvcgoods.com">sales@jvcgoods.com</a>, +44 7577 035776.
        </p>

        <h2>2. Using our website</h2>
        <p>
          By accessing this website you agree to these Terms. We may update them periodically.
          Content is provided “as is” and may change without notice.
        </p>

        <h2>3. Products &amp; availability</h2>
        <p>
          Product titles, descriptions, prices and availability are subject to change. Images are illustrative.
          Stock status may vary.
        </p>

        <h2>4. Pricing &amp; taxes</h2>
        <p>Prices are shown in GBP and include VAT where applicable unless stated otherwise.</p>

        <h2>5. Orders &amp; payments</h2>
        <p>
          At present our site operates as a catalogue. If/when checkout is enabled, additional terms will
          apply and be displayed at purchase.
        </p>

        <h2>6. Delivery</h2>
        <p>
          Delivery times and charges (if applicable) will be shown at checkout or in order confirmations.
          We are not responsible for delays outside our control.
        </p>

        <h2>7. Returns &amp; refunds</h2>
        <p>
          Please see our <a href="/returns">Returns &amp; Shipping Policy</a> for details on returns, exchanges, and refunds.
        </p>

        <h2>8. Your information</h2>
        <p>Our use of your personal information is described in our <a href="/privacy">Privacy Policy</a>.</p>

        <h2>9. Intellectual property</h2>
        <p>
          All content on this site is owned by or licensed to us. You may not copy or reuse without permission,
          except as permitted by law.
        </p>

        <h2>10. Liability</h2>
        <p>
          Nothing in these Terms limits legal rights that cannot be excluded by law. We are not liable for indirect
          or consequential loss.
        </p>

        <h2>11. Governing law</h2>
        <p>
          These Terms are governed by the laws of England and Wales. Disputes shall be subject to the exclusive
          jurisdiction of the English courts.
        </p>

        <div className="mt-8 text-sm text-muted-foreground/70">
          <p>© {year} JVC Goods. All rights reserved.</p>
        </div>
      </main>
    </PageTransition>
  );
};

export default Terms;
