// Italian boundaries
var boundaryDatasets = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
var italianBoundaries = boundaryDatasets.filter(ee.Filter.eq('country_na', 'Italy'));

// Nitrogen dioxide median concentration in troposphere for March 2019 & 2020
var no2Concentration = ee.ImageCollection("COPERNICUS/S5P/NRTI/L3_NO2");

var no2Concentration2019 = no2Concentration
  .filterDate("2019-03-14", "2019-03-25") // Filter date
  .select("tropospheric_NO2_column_number_density") // Select band
  .median() // Median reducer
  .clip(italianBoundaries); // Clip to desired geometry

var no2Concentration2020 = no2Concentration
  .filterDate("2020-03-14", "2020-03-25") // filter date
  .select("tropospheric_NO2_column_number_density") // Select band
  .median() // Median reducer
  .clip(italianBoundaries); // Clip to desired geometry

// Difference between 2019-2020
var difference = no2Concentration2019.subtract(no2Concentration2020);

// Visualization settings
var visualization = { min: 0, max: 0.0002, palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red'] };

// Function to add layers to the map and export the result to Google Drive
var produceVisualization = function (image, description) {
  var imageFinal = image.visualize(visualization);
  Map.addLayer(imageFinal, {}, description);
  Export.image.toDrive({
    image: imageFinal,
    description: description.replace(/\s+/g, ''),
    scale: 1000,
    region: italianBoundaries,
    crs: "EPSG:4326",
    folder: "gee_output"
  });
};

// Execute visualizations
Map.addLayer(italianBoundaries, {}, 'Italy');
produceVisualization(no2Concentration2019, "Nitrogen Dioxide Concentration-Italy 2019");
produceVisualization(no2Concentration2020, "Nitrogen Dioxide Concentration-Italy 2020");
produceVisualization(difference, "Nitrogen Dioxide Concentration-Italy Difference 2019-2020");
Map.centerObject(italianBoundaries, 5); // Center view above Italy
