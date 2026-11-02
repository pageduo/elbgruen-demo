# Medien-Audit — ELBGRÜN

Stand: 31.10.2026 · Branch `legal/medien-audit` · Prüfer: Claude Opus 5 im Auftrag von PageDuo

Geprüft wurden alle Bilder, Videos, Grafiken, Schriften und Icon-Bibliotheken
dieses Repositorys auf Herkunft, Lizenzlage und Kennzeichnungspflicht nach
Art. 50 Abs. 4 EU AI Act (in Kraft seit 02.08.2026).

**Grundregel dieses Dokuments: Es wird nichts geraten.** Wo die Herkunft nicht
belegbar ist, steht „unklar" — nicht die wahrscheinlichste Vermutung.

---

## Überblick

| Ampel | Anzahl | |
|---|---|---|
| 🟢 GRÜN | 7 | Gerüstgrafiken aus der Next.js-Vorlage, Favicon, die Schriften |
| 🟡 GELB | 34 | Unsplash-Motive: Quelle belegt, Lizenz und KI-Status nicht |
| 🔴 ROT | 2 | zwei Fotos ohne jeden Herkunftsnachweis in einem öffentlichen Repo |

Kein Medium wurde gekennzeichnet, gelöscht oder ausgetauscht. Das war in
diesem Schritt so vorgesehen.

---

## Der eine Befund, der alles andere trägt

Die Unsplash-Fotoseiten sind **nicht erreichbar**. Die lange Zahlenkette in
`images.unsplash.com/photo-1600880292203-757bb62b4baf` ist die Kennung des
Bildservers, nicht der Adressteil der Fotoseite; `unsplash.com/photos/<diese ID>`
antwortet mit 404. Ohne die Fotoseite lässt sich je Bild nicht feststellen:

- wer es aufgenommen hat,
- ob die freie Unsplash-Lizenz oder die abweichende **Unsplash+**-Lizenz gilt,
- ob Unsplash es als **KI-generiert** ausweist.

Der Dateikopf von `src/lib/images.ts` nennt die Unsplash-Lizenz und hält fest, die Motive seien
visuell geprüft worden. Das ist eine Angabe im Repo und zählt als Hinweis —
aber nicht als Nachweis gegenüber einem Rechteinhaber. Deshalb stehen alle
Unsplash-Motive auf 🟡, nicht auf 🟢.

**Was 🟢 daraus machen würde:** je Motiv die Fotoseite über die Bildersuche von
Unsplash auflösen und Fotograf, Lizenzart und KI-Kennzeichnung notieren. Oder
die Motive durch eigene beziehungsweise beauftragte Fotografie ersetzen — was
der Dateikopf für den echten Kundenbetrieb ohnehin vorsieht.

---

## Inventar

### Extern eingebundene Fotos (Unsplash)

Alle 34 Motive werden vom Bildserver `images.unsplash.com` geladen und liegen
**nicht** im Repository. Für sie gilt durchgehend: Quelle Unsplash (durch den
Auslieferungshost belegt), Fotograf **unklar**, Lizenzart **unklar**, KI
**unklar**, fotorealistisch ja, Ampel 🟡, keine Kennzeichnung gesetzt.

| Einsatzort im Code | Unsplash-ID | Motiv laut Repo |
|---|---|---|
| `hero` | `1781438150201-50aae7557825` | *(im Repo nicht beschrieben)* |
| `services.planung` | `1773387708943-ca6b3696a1d4` | *(im Repo nicht beschrieben)* |
| `services.pflanzung` | `1622383563227-04401ab4e5ea` | *(im Repo nicht beschrieben)* |
| `services.terrassenbau` | `1777948775832-589eaee53889` | *(im Repo nicht beschrieben)* |
| `services.pflege` | `1782038522398-a0bcd5993bdc` | *(im Repo nicht beschrieben)* |
| `services.erdarbeiten` | `1611843467160-25afb8df1074` | *(im Repo nicht beschrieben)* |
| `services.beratung` | `1780369569424-05d980acf841` | *(im Repo nicht beschrieben)* |
| `process` | `1782551203780-3a0973ce274e` | *(im Repo nicht beschrieben)* |
| `process` | `1631401551847-78450ef649d8` | *(im Repo nicht beschrieben)* |
| `process` | `1783141568615-10b89718918f` | *(im Repo nicht beschrieben)* |
| `process` | `1768508087655-e1b21b247bbd` | *(im Repo nicht beschrieben)* |
| `gallery` | `1764512179331-58c02fa08346` | *(im Repo nicht beschrieben)* |
| `gallery` | `1758450399245-0e1c5d4c2536` | *(im Repo nicht beschrieben)* |
| `gallery` | `1715734865682-3824ae6de6a0` | *(im Repo nicht beschrieben)* |
| `gallery` | `1765097732474-973a92d6fb4c` | *(im Repo nicht beschrieben)* |
| `gallery` | `1769168375647-843e2e822035` | *(im Repo nicht beschrieben)* |
| `gallery` | `1778553243958-e7ad49a81f39` | *(im Repo nicht beschrieben)* |
| `gallery` | `1743167548878-6069e48779c1` | *(im Repo nicht beschrieben)* |
| `gallery` | `1635122212082-c4b6f108f36a` | *(im Repo nicht beschrieben)* |
| `team` | `1500648767791-00dcc994a43e` | *(im Repo nicht beschrieben)* |
| `team` | `1580489944761-15a19d654956` | *(im Repo nicht beschrieben)* |
| `team` | `1568602471122-7832951cc4c5` | *(im Repo nicht beschrieben)* |
| `team` | `1494790108377-be9c29b29330` | *(im Repo nicht beschrieben)* |
| `testimonialAvatars` | `1560250097-0b93528c311a` | *(im Repo nicht beschrieben)* |
| `testimonialAvatars` | `1556157382-97eda2d62296` | *(im Repo nicht beschrieben)* |
| `testimonialAvatars` | `1507003211169-0a1dd7228f2d` | *(im Repo nicht beschrieben)* |
| `blog` | `1740409283994-4bcd7a5c8775` | *(im Repo nicht beschrieben)* |
| `blog` | `1762423780932-0099d366f6c4` | *(im Repo nicht beschrieben)* |
| `blog` | `1764212515604-d64c5049704f` | *(im Repo nicht beschrieben)* |
| `locations` | `1755428823294-ad028bb4a933` | *(im Repo nicht beschrieben)* |
| `locations` | `1604509617431-deaeb6d0b5aa` | *(im Repo nicht beschrieben)* |
| `locations` | `1740129569313-c83a89a3b5fa` | *(im Repo nicht beschrieben)* |
| `locations` | `1645037058619-3e49b1d07b14` | *(im Repo nicht beschrieben)* |
| `about` | `1684951697977-8696813afc19` | *(im Repo nicht beschrieben)* |

### Dateien im Repository

| Datei | Größe | Quelle | Beleg | KI | Ampel |
|---|---|---|---|---|---|
| `public/images/vorher-nachher-nachher.jpg` | 254 KB | **unklar** | keiner — Datei trägt keine Metadaten, kein Eintrag in README oder Kommentar | unklar | 🔴 |
| `public/images/vorher-nachher-vorher.jpg` | 231 KB | **unklar** | keiner — Datei trägt keine Metadaten, kein Eintrag in README oder Kommentar | unklar | 🔴 |
| `src/app/favicon.ico` | 25 KB | eigene Grafik | im Projekt erstellt | nein | 🟢 |

### Gerüstgrafiken aus `create-next-app`

| Datei | Quelle | Lizenz | Ampel |
|---|---|---|---|
| `public/file.svg` | Next.js-Projektvorlage | MIT (Vercel, Inc.) | 🟢 |
| `public/globe.svg` | Next.js-Projektvorlage | MIT (Vercel, Inc.) | 🟢 |
| `public/next.svg` | Next.js-Projektvorlage | MIT (Vercel, Inc.) | 🟢 |
| `public/vercel.svg` | Next.js-Projektvorlage | MIT (Vercel, Inc.) | 🟢 |
| `public/window.svg` | Next.js-Projektvorlage | MIT (Vercel, Inc.) | 🟢 |

### Schriften

Eingebunden über `next/font/google`. Next.js lädt die Schriftdateien zur
Bauzeit herunter und liefert sie von der eigenen Domain aus; beim Seitenaufruf
entsteht **kein Aufruf an Google**. Google Fonts stehen unter der SIL Open
Font License. 🟢

### Icon-Bibliotheken

Keine. Die Symbole sind Inline-SVG im Quelltext. 🟢

---

## Zusätzliche Prüfungen

### Nachtrag vom 02.11.2026

Drei Punkte aus dem Prüfauftrag waren im ersten Durchgang nicht ausdrücklich
abgearbeitet. Hier nachgeholt:

**CSS-Hintergrundbilder.** Keine. Die Flächen sind Farbverläufe, keine Bilder. 🟢

**`og:image`.** Die `metadata.openGraph` dieser Demo enthält **keinen** `images`-Eintrag, und
es liegt weder `opengraph-image.*` noch `twitter-image.*` im Projekt. Beim
Teilen entsteht also eine Vorschau **ohne Bild**. Kein Medium, kein Befund —
aber ein Hinweis fürs Marketing, falls die Demos je geteilt werden sollen.

**Git-Historie je Medium.** Die Datei-Historie wurde für jede im Repo liegende Bilddatei abgefragt
(`git log --diff-filter=A --follow`). Sie nennt Datum und Commit-Nachricht des
Hinzufügens, aber in keinem Fall eine Quelle.

Für die beiden roten Fotos ist das Ergebnis: beide kamen am 13.07.2026 mit
Commit `c2f917f` herein, Nachricht „Refresh hero and before/after imagery,
reduce AI writing tells“. Das ist **kein** Herkunftsnachweis. Der zweite Teil
der Nachricht betrifft Texte, nicht Bilder — er lässt die Frage, ob die Bilder
selbst KI-erzeugt sind, eher offener als vorher. Einstufung bleibt 🔴.

### Öffentliches Repository und Weitergabe der Originaldateien

`pageduo/elbgruen-demo` ist auf GitHub **öffentlich**. Jede im Repository liegende
Bilddatei wird damit als Originaldatei zum Download angeboten.

**Das ist hier ein Problem.** `public/images/vorher-nachher-vorher.jpg` und
`…-nachher.jpg` haben keine belegbare Herkunft. Erlaubt eine Stock-Lizenz die
freie Weitergabe der Datei nicht — und viele tun das nicht —, verstößt das
öffentliche Repository dagegen, unabhängig davon, was die Website selbst tut.

**Empfehlung: Repository auf privat stellen oder die beiden Bilder ersetzen.**
Die Sichtbarkeit wurde hier nicht geändert.

### Externe Aufrufe beim Seitenaufruf

Beim Laden der Live-Seite werden die Motive von `images.unsplash.com` geholt.
Dabei erfährt Unsplash die **IP-Adresse jedes Besuchers**, dazu Zeitpunkt,
Browser und die verweisende Seite. Eine Einwilligung wird nicht eingeholt, und
die Datenschutzerklärung der Demo verweist auf PageDuo, deren Erklärung sagt:
„Beim Aufruf werden keine Inhalte von Drittanbietern geladen."

**Das deckt sich nicht.** Entweder die Bilder wandern ins Repository (sofern die
Lizenz das erlaubt — siehe oben, derzeit ungeklärt), oder die Datenschutz-
erklärung muss den Abruf benennen. Hier wurde nichts umgebaut.

---

## KI-Kennzeichnung

**Es wurde keine gesetzt.** Art. 50 Abs. 4 EU AI Act verlangt die Offenlegung bei
KI-erzeugten Medien, die echt wirken. Ob eines der Motive KI-erzeugt ist, lässt
sich ohne die Unsplash-Fotoseiten nicht feststellen — und die Regel aus dem
Prüfauftrag lautet: Bei „unklar" **nicht** kennzeichnen, sondern melden.

Eine Kennzeichnung auf Verdacht wäre nicht die sichere Seite, sondern eine
falsche Angabe über ein möglicherweise von Hand fotografiertes Bild.

## Bildnachweise

Keine erforderlich. Die Unsplash-Lizenz verlangt keine Namensnennung. Sollte sich
bei der Klärung herausstellen, dass ein Motiv unter Unsplash+ steht, ist dessen
Lizenz gesondert zu prüfen.

---

## Klärung nötig

| Was | Wie viele | Warum offen |
|---|---|---|
| KI-Status der Unsplash-Motive | 34 | Fotoseite nicht erreichbar |
| Lizenzart (frei oder Unsplash+) | 34 | dito |
| Herkunft der beiden Vorher-Nachher-Fotos | 2 | keine Metadaten, kein Repo-Hinweis |

---

## Werkzeuge und Methode

`exiftool`, `ffprobe` und ImageMagick stehen auf diesem Rechner nicht zur
Verfügung. Die Metadaten wurden deshalb direkt aus den Dateien gelesen: JPEG-
Segmente (EXIF, XMP, IPTC, Kommentar, C2PA), PNG-Textkammern und die Kopf-Atome
von MP4. Gesucht wurde nach `Software`, `Artist`, `Creator`, `Credit`,
`Copyright`, `DigitalSourceType` sowie nach Spuren bekannter KI-Werkzeuge.

Dazu: Git-Historie der Dateien, Kommentare und Dokumente im Repo, Sichtprüfung,
und für die externen Aufrufe eine Aufzeichnung aller Netzwerk-Anfragen der
Live-Seite.
