# Quality1st SEO Assets und Performance

## Technischer Stack

React 18, TypeScript, Vite 5, React Router, Tailwind CSS und shadcn/ui.

## Social Preview Briefing

Erstelle ein Social-Preview-Bild im Format 1200x630 Pixel auf dunklem Hintergrund (#0f172a). Platziere das Quality1st-Logo links oben, darunter die Tagline "Softwaretests, KI-Agenten, Webentwicklung und Penetrationstests" sowie eine kurze Leistungsuebersicht als vier klar lesbare Chips oder Zeilen.

Das Motiv muss auch ohne Klick sofort verstaendlich sein: B2B-Tech-Look, viel Kontrast, keine ueberladenen Details, klare Typohierarchie. Unten rechts kann dezent die URL quality-1st.de oder ein kurzer CTA wie "Jetzt Beratung anfragen" stehen.

## Performance-Checkliste fuer SPA Core Web Vitals

1. Hero-Bild fuer LCP optimieren: korrekt skalieren, moderne Formate nutzen, `fetchpriority="high"` und keine uebergrossen Assets laden.
2. Kritische Inhalte servernah oder statisch ausliefern: fuer Landingpages moeglichst prerendern oder SSR/SSG einsetzen statt nur Client-Rendering.
3. JavaScript-Bundles verkleinern: Route-Splitting, Lazy Loading und ungenutzte Bibliotheken entfernen, um INP und LCP zu verbessern.
4. Render-blockierende Ressourcen reduzieren: nur wirklich kritisches CSS frueh laden, alles andere aufteilen und spaeter nachladen.
5. Third-Party-Skripte begrenzen: Consent, Analytics, Captcha und Widgets nur bei Bedarf laden, damit Main-Thread-Blockaden sinken.
6. Layout-Stabilitaet sichern: Bild- und Komponenten-Groessen vorab definieren, damit kein CLS durch spaet geladene Inhalte entsteht.
7. Schriftarten optimieren: lokale oder vorab geladene Fonts nutzen, Subsetting anwenden und `font-display: swap` setzen.
8. Interaktionspfade entlasten: teure Re-Renders, grosse Effekte und synchronen Code in Event-Handlern abbauen, um INP zu senken.
9. Datenabrufe priorisieren: Above-the-fold-Daten zuerst laden, Hintergrunddaten spaeter per Prefetch oder nach Interaktion holen.
10. Caching und Kompression absichern: Brotli/Gzip, lange Cache-Header fuer Assets und stabile Dateihashes fuer wiederkehrende Besuche nutzen.