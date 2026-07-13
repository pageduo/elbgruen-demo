export const company = {
  name: "ELBGRÜN",
  fullName: "ELBGRÜN Gartenmanufaktur",
  founded: 2008,
  city: "Hamburg",
  claim: "Gärten mit Haltung.",
  subline:
    "Landschaftsarchitektur und Gartenbau für anspruchsvolle Privat- und Gewerbeflächen in Hamburg und Umgebung.",
  usp: "Planung und Ausführung aus einer Hand, von der ersten Skizze bis zur letzten Pflanze.",
  phone: "+49 40 736 214 80",
  phoneHref: "tel:+494073621480",
  email: "atelier@elbgruen-demo.de",
  address: {
    street: "Elbchaussee 118",
    zip: "22763",
    city: "Hamburg",
  },
  hours: [
    { day: "Montag – Freitag", time: "8:00 – 18:00 Uhr" },
    { day: "Samstag", time: "10:00 – 14:00 Uhr (nach Vereinbarung)" },
    { day: "Sonntag", time: "geschlossen" },
  ],
  social: [{ label: "Instagram" }, { label: "Pinterest" }, { label: "LinkedIn" }],
};

export const navSections = [
  { id: "start", label: "Start", number: "01" },
  { id: "leistungen", label: "Leistungen", number: "02" },
  { id: "ablauf", label: "Ablauf", number: "03" },
  { id: "verwandlung", label: "Verwandlung", number: "04" },
  { id: "referenzen", label: "Referenzen", number: "05" },
  { id: "preise", label: "Preise", number: "06" },
  { id: "team", label: "Team", number: "07" },
  { id: "stimmen", label: "Stimmen", number: "08" },
  { id: "auszeichnungen", label: "Auszeichnungen", number: "09" },
  { id: "faq", label: "FAQ", number: "10" },
  { id: "journal", label: "Journal", number: "11" },
  { id: "standorte", label: "Standorte", number: "12" },
  { id: "kontakt", label: "Kontakt", number: "13" },
];

export const stats = [
  { value: 17, suffix: "", label: "Jahre Erfahrung" },
  { value: 340, suffix: "+", label: "realisierte Gärten" },
  { value: 98, suffix: "%", label: "Weiterempfehlung" },
  { value: 14, suffix: "", label: "Fachkräfte im Team" },
];

export const services = [
  {
    key: "planung",
    title: "Gartenplanung & Design",
    description:
      "Individuelle Entwürfe, 3D-Visualisierung und Materialkonzepte, abgestimmt auf Architektur, Licht und Nutzung Ihres Grundstücks.",
  },
  {
    key: "pflanzung",
    title: "Bepflanzung & Pflanzkonzepte",
    description:
      "Standortgerechte Stauden-, Gehölz- und Strukturpflanzungen, die über die Jahreszeiten hinweg wachsen und wirken.",
  },
  {
    key: "terrassenbau",
    title: "Terrassen- & Wegebau",
    description:
      "Naturstein, Holz und Feinsteinzeug in sauberer Verlegung, für Flächen, die auch nach zehn Jahren noch überzeugen.",
  },
  {
    key: "pflege",
    title: "Pflege & Instandhaltung",
    description:
      "Regelmäßiger Grünschnitt, Rasenpflege und Saisonvorbereitung durch feste Ansprechpartner statt wechselnder Kolonnen.",
  },
  {
    key: "erdarbeiten",
    title: "Erd- & Modellierarbeiten",
    description:
      "Geländemodellierung, Drainage und Bodenaufbau als solides Fundament für jedes Gartenprojekt.",
  },
  {
    key: "beratung",
    title: "Beratung & Projektleitung",
    description:
      "Ein fester Projektleiter begleitet Sie von der ersten Idee bis zur Übergabe, transparent und verbindlich.",
  },
] as const;

export const processSteps = [
  {
    title: "Erstgespräch vor Ort",
    description:
      "Wir besichtigen Ihr Grundstück, besprechen Nutzung, Budget und Wünsche und fotografieren den Bestand als Planungsgrundlage.",
  },
  {
    title: "Entwurf & Planung",
    description:
      "Sie erhalten einen maßstäblichen Entwurf inklusive Material- und Pflanzkonzept, mit Raum für Anpassungen, bis alles passt.",
  },
  {
    title: "Umsetzung vor Ort",
    description:
      "Unser Team setzt den Entwurf mit eigenen Fachkräften um: Erdbau, Pflasterung, Pflanzung, koordiniert aus einer Hand.",
  },
  {
    title: "Übergabe & Pflege",
    description:
      "Bei der Übergabe erklären wir Pflegehinweise im Detail. Auf Wunsch begleiten wir Ihren Garten dauerhaft weiter.",
  },
] as const;

export const beforeAfterProject = {
  title: "Vorgartensanierung in Eppendorf",
  description:
    "Ein einfaches Pflanzbeet am Gartentor wich einer geschwungenen Natursteinmauer mit dichter Heckenpflanzung, umgesetzt vom ersten Entwurf bis zur letzten Pflanze. Derselbe Blick auf das Haus, einmal vor und einmal nach der Umgestaltung.",
};

export const galleryProjects = [
  {
    slug: "villa-am-elbhang",
    title: "Villa am Elbhang",
    category: "Privatgärten",
    year: 2024,
    description:
      "Für eine Villa oberhalb der Elbe entstand ein ruhiger Rückzugsgarten: geschwungene Wege, eine Natursteinmauer als Sichtschutz und ein skulpturales Sitzmöbel als Blickpunkt auf dem Rasen.",
  },
  {
    slug: "gartenlounge-blankenese",
    title: "Gartenlounge Blankenese",
    category: "Privatgärten",
    year: 2023,
    description:
      "Bambus, Naturstein und eine tief hängende Pergola verwandeln eine schmale Restfläche in eine blickdichte Lounge, die auch am Abend durch indirekte Beleuchtung wirkt.",
  },
  {
    slug: "skulpturengarten-nienstedten",
    title: "Skulpturengarten Nienstedten",
    category: "Privatgärten",
    year: 2025,
    description:
      "Inspiriert von japanischer Gartenkunst: ein Kiesbeet mit präzise geharkten Linien, Findlingen und Formgehölzen als ruhender Gegenpol zum Wohnhaus.",
  },
  {
    slug: "dachterrasse-speicherstadt",
    title: "Dachterrasse Speicherstadt",
    category: "Terrassen",
    year: 2024,
    description:
      "Auf einem Staffelgeschoss mit Blick über die Speicherstadt entstand eine winddichte Terrasse mit Sichtschutzelementen, Pflanzkübeln und einer Loungeecke aus Metallmobiliar.",
  },
  {
    slug: "loungeterrasse-winterhude",
    title: "Loungeterrasse Winterhude",
    category: "Terrassen",
    year: 2022,
    description:
      "Eine überdachte Terrasse an einer vielbefahrenen Straße wurde durch dichte Blütenpflanzung und ein Sonnensegel zum privaten Rückzugsort mitten in der Stadt.",
  },
  {
    slug: "buerocampus-hafencity",
    title: "Bürocampus Hafencity",
    category: "Gewerbe",
    year: 2023,
    description:
      "Symmetrische Baumreihen und ein ruhiges Wasserbecken strukturieren den Empfangsbereich eines Bürocampus: reduziert, langlebig und leicht zu unterhalten.",
  },
  {
    slug: "poolanlage-alsterufer",
    title: "Poolanlage Alsterufer",
    category: "Poolanlagen",
    year: 2024,
    description:
      "Zu einer klassischen Villa am Alsterufer entstand ein klar gefasster Pool mit integriertem Whirlpool, geschnittener Hecke und makellosem Rasen: zurückhaltend und zeitlos.",
  },
  {
    slug: "poolgarten-rissen",
    title: "Poolgarten Rissen",
    category: "Poolanlagen",
    year: 2022,
    description:
      "Ein weitläufiges Grundstück in Rissen erhielt eine klassische Poolanlage unter altem Baumbestand, mit großzügigem Rasen und viel Privatsphäre im Grünen.",
  },
] as const;

export const galleryFilters = ["Alle", "Privatgärten", "Terrassen", "Gewerbe", "Poolanlagen"] as const;

export const pricingCalculator = {
  gardenSizes: [
    { label: "bis 100 m²", multiplier: 0.6 },
    { label: "100 – 300 m²", multiplier: 1 },
    { label: "300 – 600 m²", multiplier: 1.8 },
    { label: "über 600 m²", multiplier: 2.8 },
  ],
  services: [
    { label: "Gartenplanung & Design", base: 2400 },
    { label: "Terrassen- & Wegebau", base: 6200 },
    { label: "Komplettumbau (Planung + Ausführung)", base: 14800 },
  ],
  extras: [
    { label: "Bewässerungssystem", price: 1800 },
    { label: "Gartenbeleuchtung", price: 1400 },
    { label: "Sichtschutz / Einfriedung", price: 2200 },
    { label: "Pflegevertrag (jährlich)", price: 980 },
  ],
};

export const team = [
  {
    name: "Jonas Ahrend",
    role: "Gründer & Geschäftsführer",
    bio: "Landschaftsarchitekt mit Stationen in Hamburg und Rotterdam, führt ELBGRÜN seit 2008.",
  },
  {
    name: "Merle Tönnies",
    role: "Leitung Gartenplanung",
    bio: "Verantwortet Entwurf und Materialkonzepte, vom ersten Skizzenblatt bis zur Pflanzliste.",
  },
  {
    name: "Rasmus Kolb",
    role: "Bauleitung & Ausführung",
    bio: "Koordiniert alle Gewerke vor Ort und sorgt für saubere Übergaben im vereinbarten Zeitrahmen.",
  },
  {
    name: "Alina Petersen",
    role: "Kundenberatung & Projektsteuerung",
    bio: "Ihr fester Ansprechpartner während der gesamten Projektlaufzeit.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Von der ersten Skizze bis zur Übergabe hat alles auf den Tag gepasst. Unser Garten wirkt, als hätte es ihn schon immer gegeben.",
    name: "Familie Reimers",
    context: "Privatgarten, Othmarschen",
  },
  {
    quote:
      "Professionelle Planung, saubere Ausführung, verbindliche Termine. Genau das, was wir uns für unseren Bürocampus gewünscht haben.",
    name: "T. Wallmann",
    context: "Facility Management, Hafencity",
  },
  {
    quote:
      "Der Pflegevertrag nimmt uns die Sorge komplett ab. Der Garten sieht das ganze Jahr über aus wie frisch angelegt.",
    name: "Dr. S. Brandt",
    context: "Poolanlage, Rissen",
  },
] as const;

export const awards = [
  { label: "Deutscher Landschaftsgärtner-Preis", detail: "Auszeichnung 2023" },
  { label: "Hamburger Unternehmerpreis", detail: "Finalist 2022" },
  { label: "Mitglied Bundesverband Garten-, Landschafts- und Sportplatzbau", detail: "seit 2009" },
  { label: "„Beste Adressen Hamburg“", detail: "Presse-Empfehlung 2024" },
];

export const faqs = [
  {
    question: "Wie läuft die erste Beratung ab und was kostet sie?",
    answer:
      "Das Erstgespräch vor Ort ist unverbindlich und kostenfrei. Wir sichten das Grundstück, besprechen Ihre Wünsche und geben eine erste Preiseinschätzung.",
  },
  {
    question: "Wie lange dauert die Umsetzung eines Gartenprojekts?",
    answer:
      "Je nach Umfang zwischen zwei Wochen für Teilprojekte und drei bis vier Monaten für komplette Neuanlagen inklusive Erdarbeiten und Pflanzung.",
  },
  {
    question: "Übernehmen Sie auch die laufende Pflege nach Fertigstellung?",
    answer:
      "Ja, wir bieten saisonale Pflegeverträge an, vom gelegentlichen Rückschnitt bis zur vollständigen Gartenpflege im Jahresverlauf.",
  },
  {
    question: "Arbeiten Sie auch für Gewerbekunden und Verwaltungen?",
    answer:
      "Wir betreuen neben Privatgärten auch Außenanlagen für Bürocampus, Hotellerie und Wohnungsbaugesellschaften in Hamburg und Umgebung.",
  },
  {
    question: "In welchem Umkreis von Hamburg sind Sie tätig?",
    answer:
      "Unser Kerngebiet umfasst Hamburg und die Elbvororte, weitere Standorte finden Sie im Abschnitt „Standorte“ weiter unten.",
  },
];

export const blogPosts = [
  {
    slug: "bepflanzungstrends-spaetsommer",
    title: "Bepflanzungstrends für den Spätsommer",
    excerpt: "Welche Stauden jetzt gepflanzt werden sollten, um im nächsten Jahr früh zu blühen.",
    date: "12. Juni 2026",
    author: "Merle Tönnies",
    readingTime: "4 Min. Lesezeit",
    content: [
      "Der Spätsommer wird in vielen Gärten unterschätzt. Dabei ist genau jetzt der richtige Moment, um die Weichen für das kommende Gartenjahr zu stellen. Die Böden sind nach den Sommermonaten warm, die Niederschläge nehmen wieder zu, und Stauden können bis zum ersten Frost noch kräftig einwurzeln.",
      "Besonders bewährt haben sich in unseren Projekten Präriestauden wie Rudbeckia, Sonnenhut und Ziergräser. Sie verzeihen unregelmäßiges Gießen, bringen Struktur bis in den Winter hinein und ziehen Bestäuber an, wenn viele andere Pflanzen bereits verblüht sind.",
      "Wer im nächsten Frühjahr eine möglichst frühe Blüte erleben möchte, sollte jetzt zusätzlich Blumenzwiebeln wie Krokusse, Narzissen und kleine Wildtulpen einplanen. Wir setzen sie bevorzugt in lockeren Gruppen unter Gehölzen, wo sie im Frühjahr Licht bekommen, bevor sich das Laub der Bäume schließt.",
      "Ein letzter Praxistipp aus unserem Atelier: Nach der Pflanzung im Spätsommer lohnt sich eine dünne Mulchschicht aus Laubkompost. Sie hält die Feuchtigkeit im Boden, unterdrückt Unkraut und liefert bis zum Frühjahr zusätzliche Nährstoffe für einen kräftigen Austrieb.",
    ],
  },
  {
    slug: "pflegeleichte-stauden-urbane-gaerten",
    title: "Pflegeleichte Stauden für urbane Gärten",
    excerpt: "Robuste Pflanzkonzepte für kleine Stadtgärten und Dachterrassen mit wenig Pflegeaufwand.",
    date: "28. April 2026",
    author: "Alina Petersen",
    readingTime: "3 Min. Lesezeit",
    content: [
      "Kleine Stadtgärten und Dachterrassen stellen andere Anforderungen als ein weitläufiges Grundstück: begrenzter Wurzelraum, mehr Wind, stärkere Aufheizung durch umliegende Fassaden. Wer hier dauerhaft Freude an seiner Bepflanzung haben möchte, sollte robuste, trockenheitsverträgliche Arten bevorzugen.",
      "In unseren Hamburger Projekten setzen wir häufig auf Lavendel, Fetthenne, Gräser wie das Federborstengras sowie mediterrane Kräuter. Sie kommen mit sommerlicher Trockenheit zurecht und benötigen deutlich weniger Schnitt- und Gießaufwand als klassische Beetstauden.",
      "Für schattigere Innenhöfe empfehlen wir Funkien, Farne und Waldgräser in Kombination mit immergrünen Gehölzen wie Kirschlorbeer oder Eibe. Sie sorgen auch im Winter für ein grünes Grundgerüst, wenn die Terrasse sonst kahl wirken würde.",
      "Ein Pflegevertrag mit zwei bis drei Terminen im Jahr reicht bei dieser Pflanzenauswahl in der Regel aus, um ein gepflegtes Bild über alle Jahreszeiten zu erhalten, ideal für Berufstätige und Gewerbeflächen ohne eigenes Pflegepersonal.",
    ],
  },
  {
    slug: "herbstpflanzung-gehoelze",
    title: "So gelingt die Herbstpflanzung",
    excerpt: "Warum der Herbst die beste Pflanzzeit für Gehölze ist und worauf es dabei ankommt.",
    date: "3. März 2026",
    author: "Rasmus Kolb",
    readingTime: "5 Min. Lesezeit",
    content: [
      "Viele Gartenbesitzer pflanzen instinktiv im Frühjahr. Dabei ist der Herbst für die meisten Gehölze der deutlich bessere Zeitpunkt. Der Boden ist noch warm genug für Wurzelwachstum, während die kühlere Luft den Wasserbedarf der Pflanze senkt. Das Ergebnis: Bäume und Sträucher wurzeln bis zum Frühjahr bereits kräftig ein und starten mit einem klaren Vorsprung in die Saison.",
      "Besonders wurzelnackte Gehölze, etwa Hecken- und Obstpflanzen, sollten ausschließlich im Herbst oder zeitigen Frühjahr gepflanzt werden, solange sie sich in der sogenannten Vegetationsruhe befinden. Containerware ist zwar ganzjährig pflanzbar, entwickelt sich im Herbst gesetzt aber erfahrungsgemäß robuster.",
      "Bei der Pflanzung selbst kommt es auf ein ausreichend großes Pflanzloch, aufgelockerten Untergrund und einen stabilen Dreibock zur Stützung an, gerade an windexponierten Hamburger Standorten ein wichtiger Faktor, damit sich frisch gesetzte Bäume nicht lockern.",
      "Bis zum ersten Frost sollte regelmäßig gewässert werden, auch wenn die Pflanze noch keine Blätter trägt: Die Wurzeln wachsen weiter, solange der Boden nicht gefroren ist. Eine Mulchschicht schützt zusätzlich vor Kahlfrösten und hält die Feuchtigkeit im Wurzelbereich.",
    ],
  },
] as const;

export const locations = [
  {
    name: "Atelier Elbchaussee",
    area: "Hamburg-Othmarschen",
    isMain: true,
    description:
      "Unser Hauptsitz mit Planungsatelier, Materiallager und Gärtnerei liegt zwischen den Villen am Elbhang. Hier laufen alle Projekte zusammen.",
  },
  {
    name: "Standort Winterhude",
    area: "Hamburg-Nord",
    isMain: false,
    description:
      "Ein kleines Team betreut von hier aus laufende Pflegeverträge rund um Außenalster und Stadtpark.",
  },
  {
    name: "Standort Bergedorf",
    area: "Hamburg-Bergedorf",
    isMain: false,
    description:
      "Unser Außenlager für Erd- und Pflasterarbeiten liegt nahe Schloss Bergedorf im Hamburger Osten, samt eigenem Maschinenpark.",
  },
  {
    name: "Einsatzgebiet Umland",
    area: "Pinneberg · Stormarn · Harburg",
    isMain: false,
    description:
      "Für größere Privat- und Gewerbeprojekte sind wir regelmäßig auch in den weiten Feldern und Dörfern des Hamburger Umlands im Einsatz.",
  },
] as const;
