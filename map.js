// ---------- MAP ----------
const map = L.map('map').setView([50.8503, 4.3517], 12);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// ---------- DEMO HEAT-RISK ZONES ----------
const colors = {
  'Very high': '#d7191c',
  'High': '#fd8d3c',
  'Moderate': '#ffd92f',
  'Lower / cooling': '#1a9641'
};

const zones = [
  { name: 'City centre (Pentagon)', lat: 50.8467, lng: 4.3525, r: 1100, level: 'Very high', score: 9.2 },
  { name: 'Cureghem / Anderlecht',  lat: 50.8365, lng: 4.3255, r: 1000, level: 'Very high', score: 8.9 },
  { name: 'Molenbeek',              lat: 50.8556, lng: 4.3167, r: 1000, level: 'High',      score: 8.0 },
  { name: 'Schaerbeek',             lat: 50.8676, lng: 4.3733, r: 1100, level: 'High',      score: 7.6 },
  { name: 'Ixelles',                lat: 50.8270, lng: 4.3690, r: 1000, level: 'Moderate',  score: 6.0 },
  { name: 'Etterbeek',              lat: 50.8330, lng: 4.3880, r: 900,  level: 'Moderate',  score: 5.8 },
  { name: 'Forest',                 lat: 50.8100, lng: 4.3140, r: 1000, level: 'Moderate',  score: 5.5 },
  { name: 'Parc du Cinquantenaire', lat: 50.8410, lng: 4.3930, r: 600,  level: 'Lower / cooling', score: 2.5 },
  { name: 'Bois de la Cambre',      lat: 50.7970, lng: 4.3870, r: 1300, level: 'Lower / cooling', score: 1.8 },
  { name: 'Parc de Laeken',         lat: 50.8790, lng: 4.3600, r: 800,  level: 'Lower / cooling', score: 2.2 }
];

zones.forEach(z => {
  L.circle([z.lat, z.lng], {
    radius: z.r,
    color: colors[z.level],
    weight: 1,
    fillColor: colors[z.level],
    fillOpacity: 0.45
  })
  .bindPopup(`<strong>${z.name}</strong><br>Risk: ${z.level}<br>Demo score: ${z.score}/10`)
  .addTo(map);
});

// ---------- FEEDBACK FORM ----------
const form = document.getElementById('feedbackForm');
const msg = document.getElementById('formMessage');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    msg.textContent = 'Thank you! Your observation has been recorded (demo).';
    form.reset();
  });
}