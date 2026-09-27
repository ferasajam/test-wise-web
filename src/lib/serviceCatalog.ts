export type Service = {
  slug: string;
  title: string;
  navTitle: string;
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
    slug: "softwareentwicklung",
    title: "Softwareentwicklung",
    navTitle: "Softwareentwicklung",
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
    slug: "mobile-app-entwicklung",
    title: "Mobile App Entwicklung",
    navTitle: "Mobile App Entwicklung",
    description: "Mobile Anwendungen für iOS und Android, abgestimmt auf Nutzung, Plattform und vorhandene Systeme.",
    metaDescription: "Quality1st entwickelt mobile Apps für Unternehmen, Selbstständige, Start-ups und Privatkunden auf iOS und Android – von der Planung bis zu Tests und Veröffentlichung.",
    intro: "Wir entwickeln mobile Anwendungen für konkrete Aufgaben und Nutzungssituationen. Plattformwahl, Schnittstellen, Bedienbarkeit und Wartbarkeit stimmen wir früh auf Ihr Produkt und Ihre technische Umgebung ab.",
    scope: ["Apps für iOS und Android", "Native und Cross-Platform-Ansätze", "Anbindung an APIs und vorhandene Systeme", "App-Tests, Veröffentlichung und Weiterentwicklung"],
    approach: ["Nutzer, Funktionen und Plattformanforderungen klären", "Native oder Cross-Platform-Architektur passend auswählen", "In überprüfbaren Schritten entwickeln und auf Geräten testen", "Veröffentlichung und anschließende Pflege berücksichtigen"],
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Appium", "REST APIs"],
    faq: [
      { question: "Entwickelt Quality1st Apps für iOS und Android?", answer: "Ja. Welche Plattformen und Technologien sinnvoll sind, hängt von Zielgruppe, Funktionen, Geräteanforderungen und vorhandener Infrastruktur ab." },
      { question: "Soll die App nativ oder Cross-Platform entwickelt werden?", answer: "Das wird anhand des Produktumfangs, benötigter Plattformfunktionen, Wartungsanforderungen und Projektbedingungen entschieden. Es gibt keine pauschal passende Variante für alle Apps." },
    ],
  },
  {
    slug: "quality-engineering",
    title: "Software Testing & Quality Engineering",
    navTitle: "Quality Engineering",
    description: "Manuelle und technische Qualitätssicherung, die Risiken sichtbar macht und Entwicklungsteams unterstützt.",
    metaDescription: "Quality Engineering von Quality1st: funktionale, explorative, Regression-, API-, UI-, Mobile-, Performance- und Security-Tests passend zu Ihrem Produkt.",
    intro: "Quality Engineering betrachtet Qualität über den gesamten Entwicklungsprozess. Wir kombinieren fachliche Prüfung und technische Tests passend zu Produkt, Risiko und vorhandener Release-Praxis.",
    scope: ["Funktionale und explorative Tests", "Regression und Abnahmetests", "API-, UI- und Mobile-Testing", "Performance- und Security-Checks"],
    approach: ["Kritische Nutzerpfade und Fehlerszenarien priorisieren", "Testfälle nachvollziehbar dokumentieren", "Befunde mit klaren Reproduktionsschritten teilen", "Ergebnisse in die nächsten Entwicklungsentscheidungen einordnen"],
    tools: ["Postman", "Playwright", "Cypress", "Selenium", "Appium", "JUnit"],
    faq: [
      { question: "Welche Arten von Softwaretests sind möglich?", answer: "Je nach System kommen funktionale, explorative, Regression-, API-, UI-, Mobile-, Performance- oder Security-Tests infrage." },
      { question: "Kann Quality Engineering auch einzelne Releases unterstützen?", answer: "Ja. Die Zusammenarbeit kann auf einen konkreten Testbedarf zugeschnitten sein oder Qualität dauerhaft in Entwicklungsabläufe integrieren." },
    ],
  },
  {
    slug: "testautomatisierung",
    title: "Testautomatisierung",
    navTitle: "Testautomatisierung",
    description: "Wiederholbare UI-, API- und Regressionstests, die zu Ihrer Anwendung und Delivery-Pipeline passen.",
    metaDescription: "Quality1st plant und implementiert Testautomatisierung für UI, APIs und Regression – mit Playwright, Cypress, Selenium oder Appium im passenden CI/CD-Kontext.",
    intro: "Automatisierte Tests lohnen sich dort, wo Prüfungen regelmäßig wiederkehren und verlässliche Rückmeldung wichtig ist. Wir helfen, passende Testebenen zu wählen und die Pflegekosten von Anfang an mitzudenken.",
    scope: ["UI- und End-to-End-Tests", "API- und Integrationstests", "Regressionstests für kritische Abläufe", "Einbindung in CI/CD und Testreports"],
    approach: ["Wiederkehrende und risikoreiche Abläufe identifizieren", "Testebenen und Erfolgskriterien festlegen", "Automatisierung in kleinen Schritten aufbauen", "Stabilität, Laufzeit und Wartbarkeit regelmäßig bewerten"],
    tools: ["Playwright", "Cypress", "Selenium", "Appium", "Postman", "GitHub Actions", "Jenkins"],
    faq: [
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