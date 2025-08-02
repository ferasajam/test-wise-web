import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";

const Legal = () => {
  const { page } = useParams<{ page: string }>();

  const renderImpressum = () => (
    <div>
      <h1 className="text-4xl font-bold mb-8">Impressum</h1>
      <Card>
        <CardContent className="p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Wir testen für Sie<br />
              Max Mustermann<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
            <p>
              Telefon: +49 (0) 151 67543709<br />
              E-Mail: info@wir-testen.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Max Mustermann<br />
              Musterstraße 123<br />
              12345 Musterstadt
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Haftungsausschluss</h2>
            <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
            <p className="text-muted-foreground mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h3 className="font-semibold mb-2">Haftung für Links</h3>
            <p className="text-muted-foreground">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDatenschutz = () => (
    <div>
      <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
      <Card>
        <CardContent className="p-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können.
            </p>

            <h3 className="font-semibold mb-2">Datenerfassung auf unserer Website</h3>
            <p className="text-muted-foreground">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">2. Hosting und Content Delivery Networks (CDN)</h2>
            <p className="text-muted-foreground">
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, 
              die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="font-semibold mb-2">Datenschutz</h3>
            <p className="text-muted-foreground mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
              Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzbestimmungen 
              sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="font-semibold mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-muted-foreground">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              Wir testen für Sie<br />
              Max Mustermann<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Telefon: +49 (0) 151 67543709<br />
              E-Mail: info@wir-testen.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">4. Datenerfassung auf unserer Website</h2>
            <h3 className="font-semibold mb-2">Kontaktformular</h3>
            <p className="text-muted-foreground mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert.
            </p>

            <h3 className="font-semibold mb-2">Server-Log-Dateien</h3>
            <p className="text-muted-foreground">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
              die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes 
              Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">5. Ihre Rechte</h2>
            <p className="text-muted-foreground">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung 
              Ihrer personenbezogenen Daten. Bei Fragen können Sie sich jederzeit unter der im Impressum 
              angegebenen Adresse an uns wenden.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {page === "impressum" ? renderImpressum() : renderDatenschutz()}
      </div>
    </div>
  );
};

export default Legal;