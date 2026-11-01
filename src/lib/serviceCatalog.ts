export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  featured?: boolean;
  description: string;
  metaDescription: string;
  intro: string;
  scope: string[];
  approach: string[];
  tools: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "websites-webshops",
    title: "Websites & Webshops",
    navTitle: "Websites & Webshops",
    featured: true,
    description: "Professionelle Websites und Webshops, die Ihr Angebot verständlich zeigen und neue Anfragen erleichtern.",
    metaDescription: "Quality1st erstellt verständliche, mobilfreundliche Websites und Webshops für Unternehmen, lokale Betriebe und Selbstständige.",
    intro: "Ob Friseursalon, Umzugsfirma oder lokaler Dienstleister: Ihre Website soll auf den ersten Blick zeigen, was Sie anbieten und wie Kunden Sie erreichen. Wir erstellen neue Webauftritte und verbessern bestehende Seiten.",
    scope: ["Aufbau und Gestaltung Ihrer Website", "Klare Darstellung Ihrer Leistungen und Preise", "Kontaktmöglichkeiten und Anfrageformulare", "Webshops für Produkte und Online-Anfragen", "Mobilfreundliche Darstellung"],
    approach: ["Wir besprechen Ihr Angebot und Ihre Kunden", "Wir planen die passenden Seiten und Inhalte", "Sie sehen den Entwurf und geben Rückmeldung", "Wir veröffentlichen die Website und erklären die Pflege"],
    tools: [],
    faq: [
      { question: "Kann ich meine Website später selbst aktualisieren?", answer: "Ja. Wir stimmen die Pflege auf Ihre Bedürfnisse ab und zeigen Ihnen, wie Sie wichtige Inhalte selbst ändern können." },
      { question: "Können Sie eine bestehende Website überarbeiten?", answer: "Ja. Wir prüfen gemeinsam, was bleiben kann und welche Inhalte, Gestaltung oder Funktionen verbessert werden sollten." },
    ],
  },
  {
    slug: "seo-google-sichtbarkeit",
    title: "SEO & Google-Sichtbarkeit",
    navTitle: "SEO & Google",
    featured: true,
    description: "Damit Menschen in Ihrer Umgebung Ihr Unternehmen bei Google leichter finden.",
    metaDescription: "Quality1st unterstützt Unternehmen mit lokaler Suchmaschinenoptimierung, einem gepflegten Google-Unternehmensprofil und verständlichen Website-Inhalten.",
    intro: "Wenn Menschen nach einem Friseur, Umzugsunternehmen oder anderen Angeboten in ihrer Nähe suchen, sollte Ihr Betrieb gut auffindbar sein. Wir verbessern die Grundlagen Ihrer Website und helfen bei Ihrem Google-Unternehmensprofil.",
    scope: ["Google-Unternehmensprofil einrichten oder verbessern", "Leistungen und Einsatzgebiete verständlich beschreiben", "Seiten für lokale Suchanfragen verbessern", "Technische und mobile Grundlagen prüfen", "Einfache Maßnahmen für neue Bewertungen besprechen"],
    approach: ["Wir klären, welche Kunden und Orte Sie erreichen möchten", "Wir prüfen Ihren aktuellen Online-Auftritt", "Sie erhalten eine verständliche Prioritätenliste", "Wir setzen die vereinbarten Verbesserungen um"],
    tools: [],
    faq: [
      { question: "Können Sie einen Platz auf Seite eins bei Google garantieren?", answer: "Nein. Google entscheidet selbst über die Reihenfolge. Wir verbessern die Auffindbarkeit mit nachvollziehbaren Maßnahmen, versprechen aber keine bestimmten Rankings." },
      { question: "Ist SEO auch für lokale Betriebe sinnvoll?", answer: "Ja. Gerade bei Angeboten mit lokalem Einzugsgebiet helfen klare Standort- und Leistungsinformationen, von passenden Kunden gefunden zu werden." },
    ],
  },
  {
    slug: "social-media-online-marketing",
    title: "Social Media & Online-Marketing",
    navTitle: "Social Media & Marketing",
    featured: true,
    description: "Mit einem passenden Online-Auftritt sichtbar bleiben und Interessenten auf Ihr Angebot aufmerksam machen.",
    metaDescription: "Quality1st unterstützt Unternehmen bei Social-Media-Auftritten, verständlichen Inhalten und passenden Online-Marketing-Maßnahmen.",
    intro: "Social Media und Online-Marketing sollen zu Ihrem Betrieb passen und im Alltag umsetzbar sein. Gemeinsam klären wir, welche Kanäle sinnvoll sind und wie Sie dort Ihr Angebot regelmäßig und verständlich zeigen.",
    scope: ["Passende Social-Media-Kanäle auswählen", "Profile für Ihr Unternehmen einrichten oder überarbeiten", "Themen und Inhalte für Beiträge planen", "Website und Social Media sinnvoll verbinden", "Mögliche Online-Werbung verständlich einordnen"],
    approach: ["Wir klären Zielgruppe, Angebot und verfügbare Zeit", "Wir wählen passende Kanäle und Themen", "Wir erstellen einen einfachen, umsetzbaren Plan", "Wir prüfen gemeinsam, was Resonanz und Anfragen bringt"],
    tools: [],
    faq: [
      { question: "Muss ich auf allen Social-Media-Plattformen aktiv sein?", answer: "Nein. Sinnvoll ist zunächst der Kanal, auf dem Ihre Kunden tatsächlich nach Angeboten suchen und den Sie regelmäßig pflegen können." },
      { question: "Erstellen Sie auch Inhalte für Social Media?", answer: "Wir unterstützen bei Themen, Planung und der verständlichen Aufbereitung Ihrer Inhalte. Den konkreten Umfang stimmen wir passend zu Ihrem Betrieb ab." },
    ],
  },
  {
    slug: "mobile-app-entwicklung",
    title: "Apps für iOS & Android",
    navTitle: "Apps",
    featured: true,
    description: "Mobile Apps für Unternehmen, wenn Kunden oder Mitarbeitende unterwegs etwas erledigen sollen.",
    metaDescription: "Quality1st plant und entwickelt Apps für iOS und Android, passend zu den Aufgaben Ihres Unternehmens und Ihrer Zielgruppe.",
    intro: "Eine App kann Abläufe für Ihre Kunden oder Mitarbeitenden vereinfachen. Wir klären zuerst, ob eine App wirklich die passende Lösung ist, welche Funktionen gebraucht werden und wie sie später gepflegt wird.",
    scope: ["Apps für iPhone und Android-Geräte", "Funktionen passend zu Ihren Kunden und Abläufen", "Verbindung mit Ihrer Website oder vorhandenen Diensten", "Veröffentlichung und spätere Verbesserungen"],
    approach: ["Wir besprechen die Aufgabe und die künftigen Nutzer", "Wir legen die wichtigsten Funktionen fest", "Sie können die App während der Entwicklung prüfen", "Wir begleiten Veröffentlichung und Weiterentwicklung"],
    tools: [],
    faq: [
      { question: "Braucht mein Unternehmen wirklich eine App?", answer: "Nicht immer. Wir prüfen gemeinsam, ob eine mobile Website ausreicht oder eine App Ihren Kunden beziehungsweise Mitarbeitenden einen konkreten Vorteil bietet." },
      { question: "Funktioniert die App auf iPhone und Android?", answer: "Das hängt vom Vorhaben ab. Wir planen die passenden Versionen und erklären Aufwand und Unterschiede vor der Umsetzung." },
    ],
  },
  {
    slug: "softwareentwicklung",
    title: "Individuelle Software",
    navTitle: "Individuelle Software",
    description: "Individuelle Software, Webanwendungen und APIs für konkrete Geschäftsanforderungen.",
    metaDescription: "Quality1st unterstützt Unternehmen, Selbstständige, Start-ups und Privatkunden bei individueller Softwareentwicklung, Webanwendungen, Backend- und API-Entwicklung.",
    intro: "Wenn Standardsoftware nicht zu Ihren Abläufen passt, entwickeln wir digitale Lösungen, die sich in Ihre technische Umgebung einfügen. Anforderungen, Schnittstellen und Betrieb werden früh mitgedacht.",
    scope: ["Webanwendungen und digitale Produkte", "Backend- und API-Entwicklung", "Integration mit bestehenden Systemen", "Weiterentwicklung und technische Modernisierung"],
    approach: ["Ziele, Nutzer und vorhandene Systeme verstehen", "Umfang und technische Optionen transparent abgrenzen", "In überprüfbaren Schritten entwickeln und testen", "Übergabe und Weiterentwicklung planbar halten"],
    tools: ["TypeScript", "React", "Node.js", "REST APIs", "GitHub Actions"],
    faq: [
      { question: "Entwickelt Quality1st auch bestehende Anwendungen weiter?", answer: "Ja. Neben Neuentwicklungen unterstützen wir bei Erweiterungen, Schnittstellen und der technischen Verbesserung vorhandener Anwendungen." },
      { question: "Wie beginnt ein Softwareprojekt?", answer: "Mit einem Gespräch über Ziel, Nutzer, technische Ausgangslage und Rahmenbedingungen. Daraus lässt sich der nächste sinnvolle Schritt eingrenzen." },
    ],
  },
  {
    slug: "quality-engineering",
    title: "Quality Engineering & Testautomatisierung",
    navTitle: "Quality Engineering & Testautomatisierung",
    description: "Manuelle, explorative und automatisierte Tests für nachvollziehbare Qualität über den Entwicklungszyklus hinweg.",
    metaDescription: "Quality Engineering und Testautomatisierung von Quality1st: manuelle, explorative, UI-, API-, Mobile- und Regressionstests, sinnvoll in CI/CD integriert.",
    intro: "Quality Engineering verbindet fachliche Prüfung und technische Tests über den gesamten Entwicklungsprozess. Dazu gehören manuelle und explorative Tests ebenso wie automatisierte UI-, API- und Regressionstests, passend zu Produkt, Risiko und Release-Praxis.",
    scope: ["Funktionale, manuelle und explorative Tests", "UI-, API- und Integrationstests", "Regression und Abnahmetests", "Mobile-, Performance- und Security-Checks", "Testautomatisierung für wiederkehrende Abläufe", "Einbindung automatisierter Tests in CI/CD"],
    approach: ["Kritische Nutzerpfade und wiederkehrende Prüfungen priorisieren", "Passende manuelle und automatisierte Testebenen festlegen", "Tests nachvollziehbar dokumentieren und schrittweise integrieren", "Befunde mit klaren Reproduktionsschritten teilen", "Stabilität und Pflegeaufwand regelmäßig bewerten"],
    tools: ["Postman", "Playwright", "Cypress", "Selenium", "Appium", "JUnit", "GitHub Actions", "Jenkins"],
    faq: [
      { question: "Welche Arten von Softwaretests sind möglich?", answer: "Je nach System kommen funktionale, explorative, Regression-, API-, UI-, Mobile-, Performance- oder Security-Tests infrage." },
      { question: "Wann lohnt sich Testautomatisierung?", answer: "Vor allem bei häufig wiederholten Prüfungen, stabilen Abläufen und Releases, bei denen schnelle Rückmeldung Risiken reduziert. Nicht jeder Testfall muss automatisiert werden." },
      { question: "Kann die Automatisierung in eine bestehende Pipeline integriert werden?", answer: "Ja. Die Integration richtet sich nach Ihren vorhandenen Build- und Deployment-Prozessen, zum Beispiel mit GitHub Actions oder Jenkins." },
    ],
  },
  {
    slug: "ki-automation",
    title: "KI & Workflow-Automatisierung",
    navTitle: "KI & Automation",
    description: "KI-Anwendungen und verbundene Workflows für klar umrissene, wiederkehrende Aufgaben.",
    metaDescription: "Quality1st entwickelt KI-gestützte Anwendungen und n8n-Workflows für Unternehmen, Selbstständige, Start-ups und Privatkunden – mit Blick auf den praktischen Nutzen.",
    intro: "Automatisierung ist dann hilfreich, wenn sie einen konkreten Ablauf vereinfacht. Wir prüfen mit Ihnen, welche Schritte sich verbinden oder unterstützen lassen und wo menschliche Kontrolle wichtig bleibt.",
    scope: ["n8n-Workflows und Systemintegrationen", "KI-gestützte Funktionen und Assistenten", "Anbindung vorhandener APIs und Datenquellen", "Fehlerbehandlung und kontrollierbare Abläufe"],
    approach: ["Prozess und Ausnahmefälle aufnehmen", "Datenzugriff und Rahmenbedingungen klären", "Einen abgegrenzten Workflow umsetzen und prüfen", "Nutzen, Kontrolle und laufenden Betrieb gemeinsam bewerten"],
    tools: ["n8n", "REST APIs", "TypeScript", "Node.js", "KI-Modell-APIs"],
    faq: [
      { question: "Welche Prozesse eignen sich für n8n-Automatisierung?", answer: "Vor allem klar beschriebene Abläufe mit wiederkehrenden Schritten und verfügbaren Schnittstellen. Ausnahmen und Verantwortlichkeiten sollten vor der Automatisierung mitgeplant werden." },
      { question: "Wird für jede Automatisierung KI benötigt?", answer: "Nein. Viele Abläufe lassen sich zuverlässiger mit klaren Regeln und Schnittstellen automatisieren. KI ist sinnvoll, wenn flexible Verarbeitung tatsächlich gebraucht wird." },
    ],
  },
  {
    slug: "it-devops",
    title: "IT & DevOps",
    navTitle: "IT & DevOps",
    description: "Technische Abläufe, CI/CD und Automatisierung für nachvollziehbare Builds und Releases.",
    metaDescription: "Quality1st unterstützt Unternehmen, Selbstständige und Start-ups bei CI/CD, Build- und Testpipelines, technischer Automatisierung und bestehenden Entwicklungsabläufen.",
    intro: "Gute Entwicklungsabläufe machen Änderungen prüfbar und Releases wiederholbar. Wir betrachten vorhandene Toolchains und verbessern gezielt die Schritte, die Teams ausbremsen oder unnötige Risiken erzeugen.",
    scope: ["CI/CD- und Testpipelines", "Automatisierung wiederkehrender Entwicklungsaufgaben", "Build- und Release-Abläufe", "Technische Beratung zu Tooling und Integration"],
    approach: ["Abläufe und aktuelle Engpässe sichtbar machen", "Risiken und Verbesserungen gemeinsam priorisieren", "Änderungen schrittweise in die Toolchain integrieren", "Dokumentation und Wissenstransfer sicherstellen"],
    tools: ["GitHub Actions", "Jenkins", "Docker", "Git", "CI/CD"],
    faq: [
      { question: "Muss die bestehende Entwicklungsumgebung ersetzt werden?", answer: "Nein. Ziel ist zunächst, die vorhandene Umgebung zu verstehen und auf ihr aufzubauen. Ein Austausch ist nur dann Thema, wenn er begründet ist." },
      { question: "Unterstützt Quality1st bei CI/CD und Testpipelines?", answer: "Ja. Dazu gehören die Planung und Verbesserung von Build-, Test- und Release-Schritten sowie deren Einbindung in bestehende Abläufe." },
    ],
  },
  {
    slug: "security-performance",
    title: "IT-Security & Performance",
    navTitle: "Security & Performance",
    description: "Gezielte technische Prüfungen, um Schwachstellen und Engpässe frühzeitig einzuordnen.",
    metaDescription: "Quality1st unterstützt mit OWASP-orientierten Security-Checks sowie Last- und Performance-Tests für Webanwendungen, APIs und digitale Produkte.",
    intro: "Sicherheit und Leistung hängen vom konkreten System und dessen Nutzung ab. Wir richten Prüfungen an den relevanten Angriffsflächen, Nutzerabläufen und erwarteten Lasten aus und dokumentieren Befunde nachvollziehbar.",
    scope: ["OWASP-orientierte technische Security-Checks", "Prüfung von Authentifizierung und Berechtigungen", "Last-, Stress- und Performancetests", "Priorisierte Befunde und technische Empfehlungen"],
    approach: ["Umfang, Testumgebung und Freigaben klären", "Prüfziele und erwartetes Verhalten festhalten", "Tests kontrolliert durchführen und Befunde sichern", "Ergebnisse besprechen und nächste Schritte priorisieren"],
    tools: ["OWASP ZAP", "Burp Suite", "Postman", "k6", "JMeter"],
    faq: [
      { question: "Wie werden Security-Tests abgegrenzt?", answer: "Vor Beginn werden Systemumfang, Testumgebung, Berechtigungen und erlaubte Prüfmethoden abgestimmt. Die konkrete Planung hängt von Ihrer Anwendung ab." },
      { question: "Was zeigen Performance-Tests?", answer: "Sie helfen, Antwortzeiten, Fehlerverhalten und mögliche Engpässe unter einer definierten Last einzuordnen." },
    ],
  },
];