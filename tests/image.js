define([
  'intern!bdd',
  'intern/chai!expect',

  'dojo/Deferred',
  'dojo/dom-construct',

  'esri/map',
  'esri/layers/ArcGISImageServiceLayer',
  'esri/layers/ImageServiceParameters',

  'extras/map-cereal'
], function (
  bdd, expect,
  Deferred, domConstruct,
  Map, ArcGISImageServiceLayer, ImageServiceParameters,
  Cereal
) {
  bdd.describe('image servies', function () {
    var map;
    var layer;
    var cereal;
    var webmap;

    // add map to page and add layer to map
    // when layer loads, serialize webmap
    bdd.before(function () {
      var dfd = new Deferred();
      var mapDiv = domConstruct.place('<div id="map"></div>', document.body);
      map = new Map(mapDiv, {
        basemap: "topo",
        center: [-79.40, 43.64],
        zoom: 12
      });
      var params = new ImageServiceParameters();
      params.noData = 0;
      layer = new ArcGISImageServiceLayer("http://sampleserver6.arcgisonline.com/arcgis/rest/services/Toronto/ImageServer", {
        id: 'image-service',
        imageServiceParameters: params,
        opacity: 0.75
      });
      layer.on('load', function(e) {
        dfd.resolve(layer);
      });
      map.addLayer(layer);
      cereal = new Cereal({
        map: map
      });
      webmap = cereal._serialize(map);
      return dfd.promise;
    });

    // bdd.beforeEach(function() {
    // });

    bdd.after(function () {
      cereal = null;
      map.destroy();
      layer = null;
      webmap = null;
      domConstruct.empty(document.body);
    });

    bdd.it('should have exactly 1 operationalLayers', function () {
      expect(webmap.operationalLayers).to.be.ok;
      expect(webmap.operationalLayers.length).to.equal(1);
    });

    bdd.describe('layer JSON', function() {
      var layerJson;

      bdd.before(function() {
        layerJson = webmap.operationalLayers[0];
      });

      bdd.it('should have same id', function () {
        expect(layerJson.id).to.equal(layer.id);
      });

      bdd.it('should have same url', function () {
        expect(layerJson.url).to.equal(layer.url);
      });

      bdd.it('should have same opacity', function () {
        expect(layerJson.opacity).to.equal(layer.opacity);
      });

      bdd.it('should have same visibility', function () {
        expect(layerJson.visibility).to.equal(layer.visible);
      });

      bdd.it('should not have a renderingRule unless defined', function () {
        if (layer.renderingRule) {
          expect(layerJson.renderingRule).to.equal(layer.renderingRule.toJson());
        } else {
          expect(layerJson.renderingRule).to.not.be.ok;
        }
      });
    });
  });
});