// Maltan boundaries
var boundaryDatasets = ee.FeatureCollection("USDOS/LSIB_SIMPLE/2017");
var maltanBoundaries = boundaryDatasets.filter(ee.Filter.eq('country_na', 'Malta'));

// MODIS Terra vegetation indices - NDVI - EVI max reducers
var modisCollection = ee.ImageCollection("MODIS/006/MOD13Q1");
var ndvi = modisCollection
  .filterDate('2020-01-01', '2021-01-01') // Filter date
  .select('NDVI') // Select ndvi band mix
  .max() // Max reducer
  .multiply(0.0001) // Scale image according to documentation
  .clip(maltanBoundaries);

var evi = modisCollection
  .filterDate('2020-01-01', '2021-01-01')
  .select('EVI') // Select evi band mix
  .max() // Max reducer
  .multiply(0.0001) // Scale image according to documentation
  .clip(maltanBoundaries);

// Visualization settings
var visualization = {
  min: 0.0,
  max: 1.0,
  palette: ['FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901', '66A000', '529400',
    '3E8601', '207401', '056201', '004C00', '023B01', '012E01', '011D01', '011301']
};

// Function to add layers to the map and export the result to Google Drive
var produceVisualization = function (image, description) {
  var imageFinal = image.visualize(visualization)
  Map.addLayer(imageFinal, {}, description);
  Export.image.toDrive({
    image: imageFinal,
    description: description.replace(/\s+/g, ''),
    scale: 50,
    region: maltanBoundaries,
    crs: "EPSG:4326",
    folder: "gee_output"
  });
};

// Execute visualizations
Map.addLayer(maltanBoundaries, {}, 'Malta');
produceVisualization(ndvi, 'Malta NDVI 2020');
produceVisualization(evi, 'Malta EVI 2020');
Map.centerObject(maltanBoundaries, 10);
