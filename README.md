# Google Earth Engine - environmental projects
Environmental mini projects implemented with Google Earth Engine platform, Javascript and machine learning algorithms.

<br>

## [Effect of the lockdown imposed due to COVID-19 on the average concentration of nitrogen dioxide - NO<sub>2</sub> in the troposphere of Italy](italy-no2-covid.js)
A comparison of the average concentration of NO<sub>2</sub> between the periods 14-25 March 2020 and March 2019 is performed 
and the relevant maps are exported to the EPSG:4326 coordinate reference system.

The difference of nitrogen dioxide concentration in the troposphere between the two time periods is evident. A sharp decrease in the concentration of NO2 is observed in Italy during the lockdown in March 2020. Particularly in northern Italy (Milan, Bergamo, Brescia, Bologna, etc.) as well as in the Rome area, the biggest change is observed, as they are big cities, where the use of thousands-millions of cars as well as the action of industrial units was drastically reduced during quarantine.

<br>

![NO2-concentration-2019](img/NitrogenDioxideConcentration-Italy2019.png)*Nitrogen dioxide concentration in Italy for 2019*

<br>

![NO2-concentration-2020](img/NitrogenDioxideConcentration-Italy2020.png)
*Nitrogen dioxide concentration in Italy for 2020*

<br>

![NO2-concentration-2019](img/NitrogenDioxideConcentration-ItalyDifference2019-2020.png)
*Nitrogen dioxide concentration difference in Italy between 2019-2020*

<br>

Google Earth Engine execution [here](https://code.earthengine.google.com/98921f18cbfbb3d129abbdd2cd5cd9de)

<br>
<br>

## [NDVI and EVI vegetation indices comparison in Malta for 2020](malta-ndvi-evi-2020.js)
The spatial distribution of the maximum value of [NDVI](https://en.wikipedia.org/wiki/Normalized_difference_vegetation_index) and [EVI](https://en.wikipedia.org/wiki/Enhanced_vegetation_index) vegetation indices for Malta is projected for the year 2020, along with the export of relevant maps to coordinate reference system EPSG:4326. The EVI - Enhanced Vegetation Index is proposed as an alternative to the NDVI index and uses an adjustment factor for the soil as well as correction factors for atmospheric effects in the blue and red part of the electromagnetic spectrum.

It is noticed that in Malta there is very little vegetation in the (comparatively large) area occupied by the capital city of Valletta. Also, the image produced based on the EVI index seems more accurate than the NDVI counterpart, especially if we notice that it correctly recognizes the coastal areas as non-vegetation areas, in contrast to the NDVI image.

<br>

![NDVI-malta-2020](img/MaltaNDVI2020.png)
*NDVI index projection in Malta for 2020*

<br>

![EVI-malta-2020](img/MaltaEVI2020.png)
*EVI index projection in Malta for 2020*

<br>

Google Earth Engine execution [here](https://code.earthengine.google.com/86258a0410bc00b5bb3e1d961aa3822b)

<br>
<br>

## [Time series of NDVI index for the fire-stricken greek region of Ilia](ndvi-forest-fire-timeline.js)
Time series extraction of the NDVI index for the region of Ilia (using a point with longitude 21.6 and latitude 37.75) from 2005 to 2010, which was heavily damaged by forest fires in August 2007.

It is clear that during the period of summer and especially August 2007 the NDVI vegetation index drops rapidly at the study point reaching the lowest level of the five years we are studying. It is therefore directly connected to the fire in the area during that period that burned large areas of forests, one of the well-known fires in Greece in recent years that affected the Peloponnese.

<br>

![NDVI-ilia-timeseries](img/ee-chart.png)
*NDVI timeseries in Ilia region of Greece between 2005-2010*

<br>

Google Earth Engine execution [here](https://code.earthengine.google.com/7f112af11035f043af75c950a5114b03)

<br>
<br>

## [Land coverage classification in Attica region of Greece](attica-supervised-land-classification.js)
Supervised classification of the land coverage for the Attica region using Landsat 8 satellite images for the period May 2020 to September 2020.

Training data are provided by the trainer, based on knowledge of the actual surface of areas. Image filtering is performed to ensure as little cloudiness as possible and subsequently a composite image is generated by applying the median value function per pixel. The vegetation (NDVI) and building (NDBI) indices are calculated and added to the existing channels of the image. Finally, classification is implemented using a [random forest](https://en.wikipedia.org/wiki/Random_forest) classifier.

The classification is repeated two times for different set of classes defined.
- First execution using the following land classes:
    - built environment
    - vegetation
    - bare ground 
    - water
- Afterwards, the classification is repeated by introducing additional categories where it will be possible to distinguish the land cover in:
    - built environment
    - central road arteries
    - dense vegetation
    - sparse vegetation
    - bare soil
    - water

In the second process we can draw more detailed conclusions about the characteristics of each area. Especially in relation to the vegetation, it is evident that most of it is of a low/sparse nature (if we exclude a few large parks in Athens and some more peripheral forests). The major road arteries of the city are also clearly visible.

<br>

![Land-coverage-classification-Athens](img/Attica_LandCover.png)
*Land coverage classification of Athens*

<br>

![Land-coverage-extended-classification-Athens](img/Attica_extended_LandCover.png)
*Land coverage "extended" classification of Athens*

<br>

Google Earth Engine execution [here](https://code.earthengine.google.com/509e230a38cab60a639782482c0f036f)