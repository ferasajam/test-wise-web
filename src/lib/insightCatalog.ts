export type InsightSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  code?: string;
};

export type Insight = {
  slug: string;
  title: string;
  summary: string;
  readingTime: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "angular-fuer-webanwendungen",
    title: "Angular für Webseiten und Webanwendungen: Wann passt es?",
    summary: "Angular eignet sich besonders für umfangreiche, langlebige Webanwendungen mit klaren Strukturen. Für einfache Websites ist ein kleinerer Ansatz oft passender.",
    readingTime: "5 Min. Lesezeit",
    sections: [
      {
        heading: "Website oder Webanwendung?",
        paragraphs: [
          "Eine inhaltsorientierte Website braucht oft vor allem schnelle Auslieferung, gute Auffindbarkeit und ein einfach zu pflegendes Redaktionssystem. Eine Webanwendung enthält dagegen typischerweise angemeldete Bereiche, komplexe Formulare, rollenabhängige Ansichten oder umfangreiche Interaktionen.",
          "Angular ist ein vollständiges Frontend-Framework für solche Anwendungen. Es bringt unter anderem ein Komponentenmodell, Routing, Formulare und Werkzeuge für HTTP-Kommunikation mit. Das hilft, wenn mehrere Bereiche nach gemeinsamen Konventionen entwickelt und über längere Zeit gepflegt werden.",
        ],
      },
      {
        heading: "Wann Angular eine gute Wahl sein kann",
        bullets: [
          "Die Webanwendung besteht aus mehreren fachlichen Bereichen und komplexen Nutzerabläufen.",
          "Ein Team möchte gemeinsame Konventionen für Komponenten, Formulare, Routing und Tests nutzen.",
          "Die Anwendung soll langfristig wachsen und von mehreren Entwicklern weitergeführt werden.",
          "Server-seitige Darstellung oder statische Seitengenerierung sind Anforderungen, die in der Architektur berücksichtigt werden sollen.",
        ],
      },
      {
        heading: "Wann ein einfacherer Ansatz genügt",
        paragraphs: [
          "Für eine kleine Unternehmenswebsite mit wenigen Seiten kann ein CMS oder ein schlankes Frontend die passendere Lösung sein. Ein umfangreiches Framework bringt Struktur, aber auch zusätzliche Konzepte, Abhängigkeiten und Wartungsaufwand mit.",
          "Die Entscheidung sollte sich an Interaktion, Inhaltsmodell, Team und geplantem Lebenszyklus orientieren. Eine bekannte Technologie allein ist noch kein Grund, sie für jedes Projekt einzusetzen.",
        ],
      },
      {
        heading: "Vor der technischen Wahl klären",
        bullets: [
          "Wer aktualisiert Inhalte und wie oft ändern sich Seitenstrukturen?",
          "Welche Funktionen benötigen Anmeldung, Formulare, Rollen oder Echtzeitdaten?",
          "Welche Anforderungen gelten für Ladezeit, Barrierefreiheit und Suchmaschinen?",
          "Wer entwickelt und wartet die Anwendung nach dem ersten Release?",
        ],
      },
    ],
  },
  {
    slug: "native-oder-cross-platform-app",
    title: "Native oder Cross-Platform-App: Wie wählt man den Ansatz?",
    summary: "Native Entwicklung und Cross-Platform-Frameworks haben unterschiedliche Stärken. Plattformfunktionen, Nutzung und langfristige Pflege sollten die Wahl bestimmen.",
    readingTime: "5 Min. Lesezeit",
    sections: [
      {
        heading: "Die Unterschiede kurz erklärt",
        paragraphs: [
          "Native Apps werden mit den jeweiligen Plattformtechnologien entwickelt, zum Beispiel Swift für iOS und Kotlin für Android. Cross-Platform-Frameworks wie React Native oder Flutter ermöglichen, wesentliche Teile der Anwendung gemeinsam für mehrere Plattformen umzusetzen.",
          "Cross-Platform bedeutet nicht, dass jede Funktion automatisch identisch oder ohne plattformspezifische Arbeit verfügbar ist. Gerätefunktionen, Bedienmuster und Store-Vorgaben müssen weiterhin für iOS und Android geprüft werden.",
        ],
      },
      {
        heading: "Native Entwicklung passt häufig, wenn …",
        bullets: [
          "die App stark auf plattformspezifische Funktionen oder besonders enge Systemintegration angewiesen ist.",
          "das Produkt sehr spezifische Interaktionen oder hohe Anforderungen an Grafik und Laufzeit hat.",
          "für iOS und Android jeweils eigene Produktentscheidungen oder Teams vorgesehen sind.",
        ],
      },
      {
        heading: "Cross-Platform kann sinnvoll sein, wenn …",
        bullets: [
          "iOS und Android weitgehend dieselben Funktionen und Abläufe anbieten sollen.",
          "gemeinsame Entwicklungsteile und ein abgestimmter Release-Prozess zum Projekt passen.",
          "das Team die gewählte Technologie sicher betreiben und bei Bedarf native Module ergänzen kann.",
        ],
      },
      {
        heading: "Entscheidung anhand eines konkreten Funktionsumfangs",
        paragraphs: [
          "Erstellen Sie eine Liste der benötigten Gerätefunktionen, Integrationen und plattformspezifischen Anforderungen. Ein kleiner technischer Prototyp kann kritische Punkte wie Anmeldung, Push-Mitteilungen, Kamera oder Offline-Verhalten früh prüfen.",
          "Vergleichen Sie anschließend nicht nur die erste Umsetzung, sondern auch Tests auf echten Geräten, Store-Veröffentlichung, Betriebssystem-Updates und langfristige Pflege. So wird sichtbar, welcher Ansatz über den gesamten Produktlebenszyklus passt.",
        ],
      },
    ],
  },
  {
    slug: "playwright-oder-cypress",
    title: "Playwright oder Cypress: Welches Tool passt zum Projekt?",
    summary: "Beide Werkzeuge automatisieren Browser-Tests. Entscheidend sind Browserabdeckung, Testarchitektur, bestehende Erfahrung und die CI-Umgebung.",
    readingTime: "5 Min. Lesezeit",
    sections: [
      {
        heading: "Beide lösen ähnliche, aber nicht identische Aufgaben",
        paragraphs: [
          "Playwright und Cypress werden für End-to-End- und Browser-Tests von Webanwendungen eingesetzt. Mit beiden lassen sich Nutzerabläufe automatisiert prüfen, Fehler in Builds sichtbar machen und Tests in eine Delivery-Pipeline integrieren.",
          "Die Wahl sollte nicht an einer einzelnen Funktionsliste hängen. Architektur der Anwendung, Browserziele, CI-Laufzeit und Erfahrung im Team bestimmen, welches Werkzeug sich im Alltag gut betreiben lässt.",
        ],
      },
      {
        heading: "Worauf es im Vergleich ankommt",
        bullets: [
          "Browser und Geräte: Playwright unterstützt Chromium, Firefox und WebKit sowie Mobile-Emulation. Cypress bietet ebenfalls breite Browserunterstützung; die benötigten Browser und Testumgebungen sollten konkret geprüft werden.",
          "Testisolation: Playwright arbeitet mit Browser-Kontexten, die voneinander getrennt werden können. Cypress stellt einen interaktiven Testlauf mit engem Bezug zur Anwendung bereit.",
          "Team und Betrieb: Debugging, Testdaten, Parallelisierung und CI-Integration wirken sich oft stärker auf den Aufwand aus als die Syntax einzelner Tests.",
          "Wartbarkeit: Selektoren, Testdaten und klare Zuständigkeiten sind für beide Werkzeuge wichtiger als möglichst viele Tests.",
        ],
      },
      {
        heading: "Eine pragmatische Entscheidung",
        paragraphs: [
          "Erstellen Sie einen kleinen Vergleich mit zwei oder drei kritischen Nutzerabläufen. Führen Sie ihn in der Umgebung aus, in der die Tests später laufen sollen. Messen Sie dabei nicht nur die Laufzeit, sondern auch Fehlersuche, Stabilität und Aufwand beim Einrichten.",
          "Wenn mehrere Browser oder isolierte Nutzerkontexte wichtig sind, ist Playwright häufig ein guter Kandidat. Wenn das Team bereits Cypress produktiv nutzt und die benötigten Browser abdeckt, kann der Wechsel mehr Aufwand als Nutzen verursachen. Die Anwendung und die konkreten Anforderungen entscheiden.",
        ],
      },
    ],
  },
  {
    slug: "wann-testautomatisierung-sinnvoll-ist",
    title: "Wann lohnt sich Testautomatisierung?",
    summary: "Automatisierung spart nicht automatisch Zeit. Sie rechnet sich, wenn wiederkehrende Prüfungen verlässlich und schnell Rückmeldung geben.",
    readingTime: "4 Min. Lesezeit",
    sections: [
      {
        heading: "Wiederholung ist ein guter Startpunkt",
        paragraphs: [
          "Ein Testfall eignet sich besonders dann für Automatisierung, wenn er häufig ausgeführt wird, klare Ergebnisse hat und einen wichtigen Ablauf absichert. Beispiele sind Anmeldung, Checkout oder ein wiederkehrender API-Vertrag. Die konkrete Priorität hängt davon ab, wie kritisch der Ablauf für das jeweilige Produkt ist.",
          "Ein seltener Test mit stark wechselnden Erwartungen kann dagegen mehr Pflege erzeugen als Nutzen. Explorative Tests bleiben dort wertvoll, wo menschliche Beobachtung und fachliches Urteil gefragt sind.",
        ],
      },
      {
        heading: "Kosten über den ganzen Lebenszyklus betrachten",
        paragraphs: [
          "Zum Aufwand gehören nicht nur das Schreiben des Tests, sondern auch Testdaten, Laufzeit, Infrastruktur, Fehlersuche und Pflege bei Produktänderungen. Dem stehen vermiedene manuelle Wiederholungen und frühere Rückmeldung im Entwicklungsprozess gegenüber.",
          "Eine einfache Bestandsaufnahme hilft: Wie oft wird die Prüfung wiederholt? Wie lange dauert sie manuell? Wie teuer wäre ein übersehener Fehler? Wie stabil sind Ablauf und Testumgebung? Daraus lässt sich eine sinnvolle Reihenfolge ableiten, ohne eine unrealistische Einsparquote zu versprechen.",
        ],
      },
      {
        heading: "Klein beginnen und Ergebnisse beobachten",
        bullets: [
          "Mit wenigen geschäftskritischen Abläufen starten.",
          "Tests bevorzugt auf der passenden Ebene automatisieren: API oder Integration, wenn kein vollständiger Browser nötig ist.",
          "Fehlerursachen unterscheidbar halten: Produktfehler, Testfehler und instabile Umgebung getrennt betrachten.",
          "Pflegeaufwand und Aussagekraft regelmäßig überprüfen; wenig hilfreiche Tests überarbeiten oder entfernen.",
        ],
      },
      {
        heading: "Die kurze Antwort",
        paragraphs: [
          "Testautomatisierung lohnt sich, wenn verlässliche Wiederholung einen konkreten Wert hat und das Team die Tests dauerhaft betreiben kann. Ein kleiner, stabiler Satz aussagekräftiger Prüfungen ist meist nützlicher als eine große, fragile Testsammlung.",
        ],
      },
    ],
  },
  {
    slug: "api-tests-in-ci-cd",
    title: "API-Tests in CI/CD: Was sollte ein Build prüfen?",
    summary: "Ein kompakter Einstieg in Statuscodes, Datenverträge, Fehlerfälle und die Einordnung von API-Tests in eine Pipeline.",
    readingTime: "5 Min. Lesezeit",
    sections: [
      {
        heading: "Schnelle Rückmeldung statt vollständiger Systemprüfung",
        paragraphs: [
          "API-Tests prüfen Schnittstellen direkt und können viele fachliche Regeln ohne Browserlauf absichern. In einer CI/CD-Pipeline eignen sie sich für schnelle Rückmeldung nach Änderungen an Services oder Datenverträgen.",
          "Ein sinnvoller Start prüft erreichbare Kernfunktionen, erwartete Statuscodes, wichtige Antwortfelder und definierte Fehlerfälle. Tests sollten isoliert und mit kontrollierbaren Daten laufen, damit ein Fehlschlag nachvollziehbar bleibt.",
        ],
      },
      {
        heading: "Ein kleines Beispiel mit Playwright",
        paragraphs: ["Das Beispiel prüft einen erfolgreichen Abruf und ein fachlich wichtiges Antwortfeld. URL und Feldnamen müssen an die eigene API angepasst werden."],
        code: `import { test, expect } from "@playwright/test";\n\ntest("returns an active account", async ({ request }) => {\n  const response = await request.get("/api/accounts/42");\n\n  expect(response.status()).toBe(200);\n  await expect(response).toBeOK();\n  expect(await response.json()).toMatchObject({\n    id: "42",\n    status: "active",\n  });\n});`,
      },
      {
        heading: "Nicht nur den Erfolgsfall prüfen",
        bullets: [
          "Authentifizierung: fehlende oder ungültige Zugangsdaten führen zum vorgesehenen Verhalten.",
          "Validierung: ungültige Eingaben werden kontrolliert abgelehnt.",
          "Berechtigung: Nutzer erhalten nur Daten, für die sie autorisiert sind.",
          "Vertrag: notwendige Felder, Datentypen und relevante Antwortcodes bleiben nachvollziehbar.",
        ],
      },
      {
        heading: "In der Pipeline richtig einordnen",
        paragraphs: [
          "Schnelle, deterministische API-Tests können bei jedem Pull Request laufen. Prüfungen mit externen Abhängigkeiten oder längerer Laufzeit lassen sich getrennt ausführen. Wichtig sind verständliche Fehlermeldungen, reproduzierbare Testdaten und der Schutz von Zugangsdaten über die Secret-Verwaltung der CI-Plattform.",
          "API-Tests ersetzen weder UI-Tests noch manuelle Prüfung. Sie ergänzen diese dort, wo Schnittstellenverhalten direkt und mit weniger Laufzeit abgesichert werden kann.",
        ],
      },
    ],
  },
  
];