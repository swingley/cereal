define(null, [], function() {
  var shell = {
    "id": "to_be_replaced_by_an_app_developer",
    "title": "fill_in_the_blank",
    "featureCollection": {
      "layers": [{
          "layerDefinition": {
            "objectIdField": "OBJECTID",
            "type": "Feature Layer",
            "drawingInfo": {
              "renderer": {
                "field1": "OBJECTID",
                "type": "uniqueValue",
                "uniqueValueInfos": []
              }
            },
            "displayField": "OBJECTID",
            "visibilityField": "VISIBLE",
            "name": "Polygons",
            "hasAttachments": false,
            "capabilities": "Query,Editing",
            "geometryType": "esriGeometryPolygon",
            "fields": [{
                "alias": "OBJECTID",
                "name": "OBJECTID",
                "type": "esriFieldTypeOID",
                "editable": false
              }
            ]
          },
          "popupInfo": {
            "title": "{OBJECTID}",
            "description": "{*}"
          },
          "featureSet": {
            "geometryType": "esriGeometryPolygon",
            "features": []
          },
          "nextObjectId": 0
        }, {
          "layerDefinition": {
            "objectIdField": "OBJECTID",
            "type": "Feature Layer",
            "drawingInfo": {
              "renderer": {
                "field1": "OBJECTID",
                "type": "uniqueValue",
                "uniqueValueInfos": []
              }
            },
            "displayField": "OBJECTID",
            "visibilityField": "VISIBLE",
            "name": "Lines",
            "hasAttachments": false,
            "geometryType": "esriGeometryPolyline",
            "fields": [{
                "alias": "OBJECTID",
                "name": "OBJECTID",
                "type": "esriFieldTypeOID",
                "editable": false
              }
            ]
          },
          "popupInfo": {
            "title": "{OBJECTID}",
            "description": "{*}"
          },
          "featureSet": {
            "geometryType": "esriGeometryPolyline",
            "features": []
          },
          "nextObjectId": 0
        }, {
          "layerDefinition": {
            "objectIdField": "OBJECTID",
            "templates": [],
            "type": "Feature Layer",
            "drawingInfo": {
              "renderer": {
                "field1": "OBJECTID",
                "type": "uniqueValue",
                "uniqueValueInfos": []
              }
            },
            "displayField": "OBJECTID",
            "visibilityField": "VISIBLE",
            "name": "Points",
            "hasAttachments": false,
            "capabilities": "Query,Editing",
            "geometryType": "esriGeometryPoint",
            "fields": [{
                "alias": "OBJECTID",
                "name": "OBJECTID",
                "type": "esriFieldTypeOID",
                "editable": false
              }
            ]
          },
          "popupInfo": {
            "title": "{OBJECTID}",
            "description": "{*}"
          },
          "featureSet": {
            "geometryType": "esriGeometryPoint",
            "features": []
          },
          "nextObjectId": 0
        }
      ],
      "showLegend": false
    },
    "opacity": 1,
    "visibility": true
  };

  return shell;
});