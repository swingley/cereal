cereal
======

Attempt at creating classes to serialize and write a JS API map to arcgis.com.

extras/map-cereal.js:  toJSON method returns a JSON string with baseMap and operationalLayers properties. Currently supports the following:
* feature layers created from a map service or feature service
* graphics layers
* dynamic map service layers (partial)
* image service layers (partial)

Support for additional layer types is...coming...soon. Maybe.

extras/map-writer.js:  simple class to create an item in arcgis.com from a web map JSON.

extras/feature-collection-shell.js:  JSON template for creating a feature collection from a graphics layer.

See index.html for links to demos. This repo isn't set up for gh-pages since the useful demos require https.

Tested in Chrome. No IE support as it relies on CORS to do a cross-domain POST to arcgis.com.

To run unit tests, first run `npm install` at the command line. Then open a browser and enter the following URL:

http://host/path/to/cereal/node_modules/intern/client.html?config=tests/intern

Test results will appear in the console window.