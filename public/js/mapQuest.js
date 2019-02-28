function initMap() {
	// add your code here
	L.mapquest.key = 'DqCGUjEhsaWxKB8TWwRjK1GxW3oofJ7a';

	var map = L.mapquest.map('map',{
		center:[32.879029, -117.235901],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false

	});

	L.marker([32.879029, -117.235901]).addTo(map);
}