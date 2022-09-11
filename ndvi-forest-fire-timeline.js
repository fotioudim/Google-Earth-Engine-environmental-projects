// Point of interest
var point = ee.Geometry.Point([21.6, 37.75]);

// MODIS Terra vegetation indices - NDVI 2005-2010
var modisCollection = ee.ImageCollection("MODIS/006/MOD13Q1");
var ndvi = modisCollection
    .filterDate('2005-01-01', '2011-01-01') // Filter date
    .filterBounds(point) // Filter bounds, keep images containing this point
    .select('NDVI') // Select ndvi band mix
    .map(function (image) {
        return image // Configure image properties
            .multiply(0.0001)
            .copyProperties(image, ['system:time_start']);
    });

// Time-Series Charts
var chart = ui.Chart.image.series({
    imageCollection: ndvi,
    region: point,
    reducer: ee.Reducer.mean()
})
    .setOptions({
        title: 'NDVI variation between 2005-2010',
        vAxis: { title: 'NDVI' },
        hAxis: { format: 'YYYY-MM', viewWindowMode: 'pretty', gridlines: { color: '#333' } },
        trendlines: { // Add a linear trend line
            0: {
                type: 'linear',
                color: 'red',
                lineWidth: 4,
                opacity: 0.2,
                visibleInLegend: true,
                labelInLegend: 'NDVI linear trend'
            }
        }
    })

print(chart);

Map.centerObject(point, 11);