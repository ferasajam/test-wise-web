import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "react-router-dom";

const Legal = () => {
  const location = useLocation();

  const renderImpressum = () => (
    <div>
      <h1 className="text-4xl font-bold mb-8">Impressum</h1>
      <Card>
        <CardContent className="p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Quality1st<br />
              Feras Ajam<br />
              Corrensstr. 88<br />
              48149 Münster<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
            <p>
              Telefon: +49 (0) 170 5975430<br />
              E-Mail: info@quality-1st.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
              DE449943837
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Feras Ajam<br />
              Corrensstr. 88<br />
              48149 Münster
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Haftungsausschluss</h2>

            <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
            <p className="text-muted-foreground mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, 
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
              die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="font-semibold mb-2">Haftung für Links</h3>
            <p className="text-muted-foreground">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb übernehmen wir für diese fremden Inhalte keine Gewähr. Für die Inhalte der verlinkten Seiten 
              ist stets der jeweilige Anbieter oder Betreiber verantwortlich.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );

  const renderDatenschutz = () => (
    <div>
      <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
      <Card>
        <CardContent className="p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>

            <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie unsere Website besuchen.
            </p>

            <h3 className="font-semibold mb-2">Datenerfassung auf unserer Website</h3>
            <p className="text-muted-foreground">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten 
              finden Sie im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Hosting & Content Delivery Networks (CDN)</h2>
            <p className="text-muted-foreground">
              Diese Website wird bei einem externen Dienstleister gehostet. Alle auf dieser Website erfassten 
              personenbezogenen Daten werden auf den Servern dieses Hosters gespeichert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Allgemeine Hinweise & Pflichtinformationen</h2>

            <h3 className="font-semibold mb-2">Datenschutz</h3>
            <p className="text-muted-foreground mb-4">
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen 
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="font-semibold mb-2">Verantwortliche Stelle</h3>
            <p className="text-muted-foreground">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              Quality1st<br />
              Feras Ajam<br />
              Corrensstr. 88<br />
              48149 Münster<br />
              Telefon: +49 (0) 170 5975430<br />
              E-Mail: info@quality-1st.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Datenerfassung auf unserer Website</h2>

            <h3 className="font-semibold mb-2">Kontaktformular</h3>
            <p className="text-muted-foreground mb-4">
              Wenn Sie uns per Kontaktformular Anfragen senden, werden Ihre Angaben zur Bearbeitung 
              der Anfrage gespeichert.
            </p>

            <h3 className="font-semibold mb-2">Server-Log-Dateien</h3>
            <p className="text-muted-foreground">
              Unser Provider erhebt und speichert automatisch Informationen in Server-Log-Dateien. Dazu zählen: 
              Browsertyp/-version, Betriebssystem, Referrer, Hostname, Uhrzeit der Anfrage und IP-Adresse.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Ihre Rechte</h2>
            <p className="text-muted-foreground">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung 
              Ihrer personenbezogenen Daten. Wenden Sie sich dazu an die im Impressum genannte Adresse.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {location.pathname === "/impressum" ? renderImpressum() : renderDatenschutz()}
      </div>
    </div>
  );
};

export default Legal;
