const map=L.map('map').setView([50.8467,4.3525],12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
const zones=[
['Central Brussels',50.8467,4.3525,'Very high',9,'Demo hotspot: dense built-up environment and limited shade in selected locations.'],
['European Quarter',50.8430,4.3810,'High',8,'Demo hotspot: investigate shade and green infrastructure.'],
['Canal Zone',50.8560,4.3370,'High',7,'Demo hotspot: compare hard surfaces, vegetation and cooling corridors.'],
['Anderlecht example area',50.8350,4.3000,'Moderate',5,'Demo area: verify with satellite-derived indicators.'],
['Large green-space example',50.8150,4.3800,'Lower / cooling',2,'Demo cooling area: vegetation and open space can support local cooling.']
];
const colors={'Very high':'#8e2f2f','High':'#d06c32','Moderate':'#e0b23f','Lower / cooling':'#4e8b68'};
zones.forEach(z=>L.circleMarker([z[1],z[2]],{radius:10,color:'#fff',weight:2,fillColor:colors[z[3]],fillOpacity:.9}).addTo(map).bindPopup(`<strong>${z[0]}</strong><br>Prototype risk: <strong>${z[3]}</strong><br>Demo score: ${z[4]}/10<br><small>${z[5]}</small>`));
const form=document.getElementById('feedbackForm'),msg=document.getElementById('formMessage');
form.addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value.trim();msg.textContent=`Thank you, ${n||'observer'}! Your prototype observation has been recorded locally for this demonstration.`;form.reset();});
form.addEventListener('reset',()=>{msg.textContent='';});
