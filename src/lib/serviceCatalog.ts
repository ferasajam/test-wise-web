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
  price?: string;
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "website-erstellen-lassen",
    title: "Website erstellen lassen: Gewinnen Sie mehr Anfragen mit einer klaren Website.",
    navTitle: "Website erstellen lassen",
    featured: true,
    description: "Eine verständliche Website, die Ihr Angebot zeigt, Vertrauen aufbaut und Besuchern die Kontaktaufnahme leicht macht.",
    metaDescription: "Website erstellen lassen von Quality1st: verständliche Inhalte, klare Struktur, Kontaktwege und mobilfreundliche Umsetzung für mehr Anfragen.",
    intro: "Ihre Website soll schnell erklären, was Sie anbieten, warum Kunden Ihnen vertrauen können und wie sie Sie erreichen. Wir erstellen eine Webseite, die zu Ihrem Betrieb passt und Besucher gezielt zur Anfrage führt.",
    scope: ["Klare Startseite mit Nutzen und Angebot", "Leistungsseiten, die häufige Fragen beantworten", "Kontaktmöglichkeiten mit kurzer Anfragehürde", "Mobilfreundliche Darstellung für Smartphone und Tablet", "Texte, die verständlich statt technisch klingen"],
    approach: ["Wir klären Ziel, Angebot und Wunschkunden.", "Wir planen die Seitenstruktur und schreiben verständliche Texte.", "Sie prüfen den Entwurf und geben Rückmeldung.", "Wir veröffentlichen die Website und zeigen die nächsten Schritte."],
    tools: [],
    price: "ab 299€",
    faq: [
      { question: "Wie schnell kann meine neue Website online gehen?", answer: "Das hängt vom Umfang und von vorhandenen Inhalten ab. Eine kleine Website kann oft deutlich schneller umgesetzt werden als ein großer Auftritt mit vielen Unterseiten." },
      { question: "Schreiben Sie auch die Texte?", answer: "Ja. Wir formulieren die Inhalte verständlich und nutzenorientiert, damit Besucher schnell erkennen, warum sie Sie kontaktieren sollten." },
      { question: "Kann ich meine Website später selbst aktualisieren?", answer: "Ja. Wir stimmen die Pflege auf Ihre Bedürfnisse ab und erklären, wie wichtige Inhalte geändert werden können." },
      { question: "Überarbeiten Sie auch bestehende Websites?", answer: "Ja. Wir prüfen, was bereits gut funktioniert und verbessern Struktur, Inhalte und Anfragewege gezielt." },
      { question: "Ist die Website für Smartphones geeignet?", answer: "Ja. Die Website wird so umgesetzt, dass sie auch auf mobilen Geräten gut lesbar und nutzbar ist." },
    ],
  },
  {
    slug: "marketing-social-media",
    title: "Marketing & Social Media: Werden Sie online sichtbarer und bleiben Sie aktiv im Gespräch.",
    navTitle: "Marketing & Social Media",
    featured: true,
    description: "SEO-Verbesserungen und aktive Social-Media-Auftritte mit passenden Inhalten, damit mehr Menschen Ihr Angebot finden und wiedererkennen.",
    metaDescription: "Marketing und Social Media von Quality1st: SEO verbessern, Social-Media-Accounts aktiv betreuen und Content für mehr Online-Sichtbarkeit erstellen.",
    intro: "Eine professionelle Online-Präsenz ist mehr als nur eine Website. Durch gezielte Suchmaschinenoptimierung (SEO) verbessern wir Ihre Sichtbarkeit bei Google und anderen Suchmaschinen. Gleichzeitig unterstützen wir Sie dabei, Ihre Social-Media-Kanäle mit relevanten, ansprechenden Inhalten zu bespielen. So wird Ihr Unternehmen online sichtbarer und erreicht genau die Menschen, die nach Ihren Leistungen suchen.",
    scope: ["SEO-Grundlagen prüfen und verbessern", "Website-Inhalte für Suchanfragen verständlicher ausrichten", "Social-Media-Profile einrichten oder optimieren", "Content-Ideen und Beiträge für Ihre Zielgruppe planen", "Regelmäßige Aktivität auf passenden Kanälen unterstützen"],
    approach: ["Wir klären Zielgruppe, Angebot und bisherige Sichtbarkeit.", "Wir prüfen Website, Suchbegriffe und Social-Media-Auftritte.", "Wir erstellen einen verständlichen Maßnahmen- und Content-Plan.", "Wir setzen vereinbarte SEO- und Social-Media-Maßnahmen Schritt für Schritt um."],
    tools: [],
    price: "ab 99€",
    faq: [
      { question: "Was bedeutet SEO verbessern konkret?", answer: "Wir verbessern unter anderem Inhalte, Seitentitel, Struktur, lokale Bezüge und wichtige technische Grundlagen, damit Ihr Angebot für Suchmaschinen und Besucher verständlicher wird." },
      { question: "Übernehmen Sie auch Social-Media-Content?", answer: "Ja. Wir unterstützen bei Themenplanung, Texten und Beiträgen. Der Umfang wird passend zu Ihrem Betrieb und Ihrer verfügbaren Zeit abgestimmt." },
      { question: "Muss mein Unternehmen auf allen Plattformen aktiv sein?", answer: "Nein. Sinnvoll sind die Kanäle, auf denen Ihre Zielgruppe erreichbar ist und die dauerhaft gepflegt werden können." },
      { question: "Wie oft sollte gepostet werden?", answer: "Das hängt vom Kanal und Ziel ab. Wichtiger als viel Aktivität ist ein realistischer Rhythmus mit passenden Inhalten." },
      { question: "Kann Marketing mit meiner Website verbunden werden?", answer: "Ja. Website, SEO und Social Media sollten zusammenarbeiten, damit Interessenten vom Beitrag oder Suchergebnis leichter zur Anfrage kommen." },
    ],
  },
  {
    slug: "app-entwicklung",
    title: "App-Entwicklung: Machen Sie wichtige Aufgaben für Kunden oder Team einfacher.",
    navTitle: "App-Entwicklung",
    featured: true,
    description: "Eine App, die einen klaren Zweck erfüllt und Menschen hilft, unterwegs schneller ans Ziel zu kommen.",
    metaDescription: "App-Entwicklung von Quality1st: Planung, Umsetzung und Veröffentlichung von Apps mit klarem Nutzen für Kunden oder Mitarbeitende.",
    intro: "Eine App lohnt sich, wenn sie regelmäßig genutzt wird und echte Arbeit spart. Wir klären mit Ihnen, welche Funktionen wirklich gebraucht werden und entwickeln die Lösung Schritt für Schritt.",
    scope: ["Prüfung, ob eine App sinnvoll ist", "Planung der wichtigsten Funktionen", "Einfache Bedienung für Nutzer", "Umsetzung für passende Geräte", "Begleitung bei Veröffentlichung und Verbesserungen"],
    approach: ["Wir besprechen Ziel, Nutzer und gewünschte Abläufe.", "Wir legen die wichtigsten Funktionen für den Start fest.", "Sie testen Zwischenstände und geben Feedback.", "Wir begleiten Veröffentlichung, Übergabe und Weiterentwicklung."],
    tools: [],
    price: "ab 499€",
    faq: [
      { question: "Braucht mein Unternehmen wirklich eine App?", answer: "Nicht immer. Manchmal reicht eine gute mobile Website. Wir prüfen gemeinsam, ob eine App einen klaren Mehrwert bringt." },
      { question: "Kann die App für iPhone und Android umgesetzt werden?", answer: "Ja, wenn es für Ihr Vorhaben sinnvoll ist. Wir erklären vorab, welche Varianten möglich sind und was sie bedeuten." },
      { question: "Kann die App mit meiner Website verbunden werden?", answer: "Ja. Wenn Daten oder Anfragen zusammenlaufen sollen, planen wir die Verbindung von Anfang an mit." },
      { question: "Wie viel muss ich vor Projektstart vorbereiten?", answer: "Eine grobe Idee reicht für das erste Gespräch. Gemeinsam machen wir daraus einen klaren Plan." },
      { question: "Kann die App später erweitert werden?", answer: "Ja. Wir empfehlen meist einen überschaubaren Start und ergänzen weitere Funktionen nach echtem Bedarf." },
    ],
  },
  {
    slug: "ki-automation",
    title: "KI-Automation: Sparen Sie Zeit bei wiederkehrenden Aufgaben.",
    navTitle: "KI-Automation",
    featured: true,
    description: "Automatisierte Abläufe, die Routinearbeit reduzieren und Informationen schneller an die richtige Stelle bringen.",
    metaDescription: "KI-Automation von Quality1st: wiederkehrende Aufgaben vereinfachen, Abläufe verbinden und Zeit im Arbeitsalltag sparen.",
    intro: "Viele tägliche Aufgaben kosten Zeit, obwohl sie nach festen Mustern ablaufen. Wir prüfen, welche Schritte sich sinnvoll automatisieren lassen und wo weiterhin ein Mensch entscheiden sollte.",
    scope: ["Wiederkehrende Aufgaben erkennen und vereinfachen", "Anfragen, E-Mails oder Daten geordnet weiterleiten", "KI-Hilfe für Texte, Zusammenfassungen oder Antworten", "Bestehende Werkzeuge sinnvoll verbinden", "Kontrolle und Freigaben im Ablauf einplanen"],
    approach: ["Wir schauen uns den aktuellen Ablauf gemeinsam an.", "Wir wählen einen kleinen, klaren Startbereich aus.", "Wir setzen die Automation um und testen typische Fälle.", "Wir prüfen Nutzen, Kontrolle und mögliche Erweiterungen."],
    tools: [],
    price: "ab 199€",
    faq: [
      { question: "Welche Aufgaben eignen sich für KI-Automation?", answer: "Gut geeignet sind wiederkehrende Aufgaben wie Sortieren, Zusammenfassen, Weiterleiten oder Vorbereiten von Informationen." },
      { question: "Muss ich mich mit KI auskennen?", answer: "Nein. Wir erklären verständlich, was möglich ist und richten den Ablauf so ein, dass er im Alltag nutzbar bleibt." },
      { question: "Bleibt menschliche Kontrolle möglich?", answer: "Ja. Gerade bei wichtigen Entscheidungen planen wir Freigaben oder Kontrollpunkte ein." },
      { question: "Kann klein gestartet werden?", answer: "Ja. Ein kleiner erster Ablauf ist oft sinnvoller als ein großes Projekt ohne Praxistest." },
      { question: "Können vorhandene Programme eingebunden werden?", answer: "Oft ja. Wir prüfen, welche Systeme verbunden werden können und welche Grenzen es gibt." },
    ],
  },
  {
    slug: "software-testing",
    title: "Software-Testing: Finden Sie Fehler früher, bevor Kunden sie bemerken.",
    navTitle: "Software-Testing",
    featured: true,
    description: "Gezielte Tests für Websites, Apps und Software, damit wichtige Abläufe zuverlässig funktionieren.",
    metaDescription: "Software-Testing von Quality1st: wichtige Abläufe prüfen, Fehler nachvollziehbar melden und Releases sicherer machen.",
    intro: "Software soll zuverlässig funktionieren, besonders bei Anfragen, Buchungen, Zahlungen oder internen Arbeitsabläufen. Wir prüfen die wichtigen Wege aus Nutzersicht und dokumentieren Fehler verständlich.",
    scope: ["Prüfung wichtiger Nutzerwege", "Tests auf Smartphone, Tablet und Desktop", "Verständliche Fehlerberichte mit Schritten zum Nachstellen", "Wiederholungstests nach Änderungen", "Empfehlungen für stabilere Abläufe"],
    approach: ["Wir klären, welche Abläufe besonders wichtig sind.", "Wir testen diese Wege aus Sicht der Nutzer.", "Sie erhalten klare Fehlerberichte und Prioritäten.", "Nach Korrekturen prüfen wir die wichtigsten Punkte erneut."],
    tools: [],
    price: "ab 199€",
    faq: [
      { question: "Was wird beim Software-Testing geprüft?", answer: "Wir prüfen vor allem die Abläufe, die für Nutzer und Geschäft wichtig sind, zum Beispiel Anfragen, Logins, Formulare oder Bestellungen." },
      { question: "Bekomme ich verständliche Ergebnisse?", answer: "Ja. Fehler werden mit Beschreibung, Schritten zum Nachstellen und Einschätzung der Wichtigkeit dokumentiert." },
      { question: "Testen Sie auch auf mobilen Geräten?", answer: "Ja. Wenn mobile Nutzung wichtig ist, prüfen wir die Darstellung und Bedienung auf passenden Geräten oder Ansichten." },
      { question: "Lohnt sich Testing auch für kleine Websites?", answer: "Ja, besonders wenn Kontaktformulare, Buchungen oder andere wichtige Funktionen zuverlässig laufen müssen." },
      { question: "Können Tests regelmäßig wiederholt werden?", answer: "Ja. Für häufige Änderungen können wiederkehrende Prüfungen vereinbart werden." },
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