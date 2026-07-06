// Kuratierte, lizenzfreie Unsplash-Motive (Unsplash-Lizenz: kostenlose kommerzielle Nutzung).
// Jede Bild-ID wird auf der gesamten Seite nur genau einmal verwendet (keine Dopplungen).
// Für den echten Kundenbetrieb durch eigene / beauftragte Fotografie ersetzen.
function unsplash(id: string, w = 1600) {
  return `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;
}

export const img = {
  hero: unsplash("1643063231577-959abf98b59c", 2000),

  services: {
    planung: unsplash("1773387708943-ca6b3696a1d4"),
    pflanzung: unsplash("1622383563227-04401ab4e5ea"),
    terrassenbau: unsplash("1777948775832-589eaee53889"),
    pflege: unsplash("1782038522398-a0bcd5993bdc"),
    erdarbeiten: unsplash("1611843467160-25afb8df1074"),
    beratung: unsplash("1780369569424-05d980acf841"),
  },

  process: [
    unsplash("1782551203780-3a0973ce274e"),
    unsplash("1631401551847-78450ef649d8"),
    unsplash("1783141568615-10b89718918f"),
    unsplash("1768508087655-e1b21b247bbd"),
  ],

  gallery: [
    { src: unsplash("1764512179331-58c02fa08346"), category: "Privatgärten" },
    { src: unsplash("1758450399245-0e1c5d4c2536"), category: "Privatgärten" },
    { src: unsplash("1715734865682-3824ae6de6a0"), category: "Privatgärten" },
    { src: unsplash("1765097732474-973a92d6fb4c"), category: "Terrassen" },
    { src: unsplash("1769168375647-843e2e822035"), category: "Terrassen" },
    { src: unsplash("1778553243958-e7ad49a81f39"), category: "Gewerbe" },
    { src: unsplash("1743167548878-6069e48779c1"), category: "Poolanlagen" },
    { src: unsplash("1635122212082-c4b6f108f36a"), category: "Poolanlagen" },
  ],

  beforeAfter: {
    before: unsplash("1738197382285-a17ccf5d1daf"),
    after: unsplash("1738193830098-2d92352a1856"),
  },

  team: [
    unsplash("1500648767791-00dcc994a43e", 800),
    unsplash("1580489944761-15a19d654956", 800),
    unsplash("1568602471122-7832951cc4c5", 800),
    unsplash("1494790108377-be9c29b29330", 800),
  ],

  testimonialAvatars: [
    unsplash("1560250097-0b93528c311a", 200),
    unsplash("1556157382-97eda2d62296", 200),
    unsplash("1507003211169-0a1dd7228f2d", 200),
  ],

  blog: [
    unsplash("1740409283994-4bcd7a5c8775", 1200),
    unsplash("1762423780932-0099d366f6c4", 1200),
    unsplash("1764212515604-d64c5049704f", 1200),
  ],

  locations: [
    unsplash("1755428823294-ad028bb4a933", 1200),
    unsplash("1604509617431-deaeb6d0b5aa", 1200),
    unsplash("1740129569313-c83a89a3b5fa", 1200),
    unsplash("1645037058619-3e49b1d07b14", 1200),
  ],

  about: unsplash("1684951697977-8696813afc19", 1400),
};
