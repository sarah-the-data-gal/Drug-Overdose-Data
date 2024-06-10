document.addEventListener('DOMContentLoaded', function() {
   // Load CSV data
d3.csv('filtered_crime_data.csv').then(function(crimeData) {
    d3.csv('national_od.csv').then(function(odData) {
        // Combine data and create map
        let combinedData = combineData(crimeData, odData);
        createMap(combinedData);
    });
});

// Function to combine crime and overdose data
function combineData(crimeData, odData) {
    let combined = [];

    // Loop through crime data
    crimeData.forEach(function(crime) {
        // Find corresponding overdose data for the state and year
        let overdose = odData.find(function(od) {
            return od.state === crime.state && od.year === selectedYear;
        });

        // Calculate crime rate
        let crimeRate = crime.crime_rate / crime.population;

        // Push combined data to array
        combined.push({
            state: crime.state,
            population: +crime.population,
            overdoseDeaths: +overdose.deaths,
            crimeRate: crimeRate
        });
    });

    return combined;
}

// Function to create choropleth map using Leaflet
function createMap(data) {
    // Initialize Leaflet map
    const map = L.map('map').setView([37.8, -96], 4);
    var map = L.map('map').setView([37.8, -96], 4);

    var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    L.geoJson(statesData).addTo(map);
    // Load GeoJSON data for US states 
    fetch('us-states.json')
        .then(response => response.json())
        .then(geojson => {
            L.geoJSON(geojson, {
                style: function(feature) {
                    
                    let stateData = data.find(item => item.state === feature.properties.name);
                    let value = stateData ? stateData.dataValue : 0;
                    return {
                        fillColor: getColor(value),
                        weight: 1,
                        opacity: 1,
                        color: 'white',
                        dashArray: '3',
                        fillOpacity: 0.7
                    };
                },
                onEachFeature: function(feature, layer) {
                    // Add tooltip on hover
                    let stateData = data.find(item => item.state === feature.properties.name);
                    layer.bindTooltip(`<strong>${feature.properties.name}</strong><br>Data Value: ${stateData ? stateData.dataValue : 'N/A'}`);
                }
            }).addTo(map);
        });

    // Define color scale (customize as needed)
    function getColor(value) {
        // color scale
        return value > 1000 ? '#800026' :
               value > 500  ? '#BD0026' :
               value > 200  ? '#E31A1C' :
               value > 100  ? '#FC4E2A' :
               value > 50   ? '#FD8D3C' :
               value > 20   ? '#FEB24C' :
               value > 10   ? '#FED976' :
                              '#FFEDA0';
    }
}

// Function to display data
function displayData(stateData) {
    const infoDiv = document.getElementById("state-info");
    infoDiv.innerHTML = `
        <h3>${stateData.state}</h3>
        <p>Population: ${stateData.population}</p>
        <p>Overdose Deaths: ${stateData.overdoseDeaths}</p>
        <p>Crime Rate: ${stateData.crimeRate}</p>
    `;
}

// Event listener for year selection
const yearSelect = document.getElementById("year-select");
let selectedYear = yearSelect.value; // Default selected year

yearSelect.addEventListener('change', function() {
    selectedYear = yearSelect.value;
    // Recalculate data and update map/display
});