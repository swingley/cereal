define({
  "layerDefinition": {
    "currentVersion": 10.3,
    "id": 1,
    "name": "Hurricane Tracks",
    "type": "Feature Layer",
    "serviceItemId": "d179e85fe04c47faaec0eaa9437f1156",
    "displayField": "NAME",
    "description": "",
    "copyrightText": "",
    "defaultVisibility": true,
    "editingInfo": {
      "lastEditDate": 1439933406200
    },
    "relationships": [],
    "isDataVersioned": false,
    "supportsCalculate": true,
    "supportsAttachmentsByUploadId": true,
    "supportsRollbackOnFailureParameter": true,
    "supportsStatistics": true,
    "supportsAdvancedQueries": true,
    "supportsValidateSql": true,
    "supportsCoordinatesQuantization": true,
    "supportsApplyEditsWithGlobalIds": false,
    "advancedQueryCapabilities": {
      "supportsPagination": true,
      "supportsQueryWithDistance": true,
      "supportsReturningQueryExtent": true,
      "supportsStatistics": true,
      "supportsOrderBy": true,
      "supportsDistinct": true,
      "supportsQueryWithResultType": true,
      "supportsSqlExpression": true,
      "supportsReturningGeometryCentroid": false
    },
    "useStandardizedQueries": false,
    "geometryType": "esriGeometryPolyline",
    "minScale": 0,
    "maxScale": 0,
    "extent": {
      "xmin": -9974226.3751,
      "ymin": 2644116.434,
      "xmax": -8360093.7586,
      "ymax": 4880484.6657,
      "spatialReference": {
        "wkid": 102100,
        "latestWkid": 3857
      }
    },
    "drawingInfo": {
      "renderer": {
        "type": "uniqueValue",
        "field1": "CAT",
        "field2": null,
        "field3": null,
        "fieldDelimiter": ", ",
        "defaultSymbol": null,
        "defaultLabel": null,
        "uniqueValueInfos": [
          {
            "value": "H5",
            "symbol": {
              "color": [
                177,
                0,
                38,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "Category 5 Hurricane"
          },
          {
            "value": "H4",
            "symbol": {
              "color": [
                227,
                26,
                28,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "Category 4 Hurricane"
          },
          {
            "value": "H3",
            "symbol": {
              "color": [
                252,
                78,
                42,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "Category 3 Hurricane"
          },
          {
            "value": "H2",
            "symbol": {
              "color": [
                253,
                141,
                60,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "Category 2 Hurricane"
          },
          {
            "value": "H1",
            "symbol": {
              "color": [
                254,
                178,
                76,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "Category 1 Hurricane"
          },
          {
            "value": "TS",
            "symbol": {
              "color": [
                254,
                217,
                118,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "Tropical Storm"
          },
          {
            "value": "SS",
            "symbol": {
              "color": [
                255,
                255,
                212,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "SubTropical Storm"
          },
          {
            "value": "TD",
            "symbol": {
              "color": [
                255,
                255,
                212,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "Tropical Depression"
          },
          {
            "value": "SD",
            "symbol": {
              "color": [
                115,
                223,
                255,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "SubTropical Depression"
          },
          {
            "value": "E",
            "symbol": {
              "color": [
                255,
                255,
                246,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "Extratropical Storm"
          },
          {
            "value": "ET",
            "symbol": {
              "color": [
                156,
                156,
                156,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "Extratropical Storm"
          },
          {
            "value": "L",
            "symbol": {
              "color": [
                0,
                0,
                0,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "Tropical Low"
          },
          {
            "value": "W",
            "symbol": {
              "color": [
                177,
                0,
                38,
                255
              ],
              "width": 7.5,
              "type": "esriSLS",
              "style": "esriSLSSolid"
            },
            "label": "Tropical Wave"
          }
        ]
      },
      "transparency": 0
    },
    "allowGeometryUpdates": true,
    "hasAttachments": false,
    "htmlPopupType": "esriServerHTMLPopupTypeAsHTMLText",
    "hasM": false,
    "hasZ": false,
    "objectIdField": "OBJECTID",
    "globalIdField": "",
    "typeIdField": "",
    "fields": [
      {
        "name": "OBJECTID",
        "type": "esriFieldTypeOID",
        "alias": "OBJECTID",
        "sqlType": "sqlTypeOther",
        "nullable": false,
        "editable": false,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "YEAR",
        "type": "esriFieldTypeInteger",
        "alias": "YEAR",
        "sqlType": "sqlTypeOther",
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "MONTH",
        "type": "esriFieldTypeInteger",
        "alias": "MONTH",
        "sqlType": "sqlTypeOther",
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "DAY",
        "type": "esriFieldTypeInteger",
        "alias": "DAY",
        "sqlType": "sqlTypeOther",
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "AD_TIME",
        "type": "esriFieldTypeString",
        "alias": "AD_TIME",
        "sqlType": "sqlTypeOther",
        "length": 10,
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "BTID",
        "type": "esriFieldTypeInteger",
        "alias": "BTID",
        "sqlType": "sqlTypeOther",
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "NAME",
        "type": "esriFieldTypeString",
        "alias": "NAME",
        "sqlType": "sqlTypeOther",
        "length": 12,
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "LAT",
        "type": "esriFieldTypeDouble",
        "alias": "LAT",
        "sqlType": "sqlTypeOther",
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "LONG",
        "type": "esriFieldTypeDouble",
        "alias": "LONG",
        "sqlType": "sqlTypeOther",
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "WIND_KTS",
        "type": "esriFieldTypeDouble",
        "alias": "WIND_KTS",
        "sqlType": "sqlTypeOther",
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "PRESSURE",
        "type": "esriFieldTypeInteger",
        "alias": "PRESSURE",
        "sqlType": "sqlTypeOther",
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "CAT",
        "type": "esriFieldTypeString",
        "alias": "CAT",
        "sqlType": "sqlTypeOther",
        "length": 3,
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "BASIN",
        "type": "esriFieldTypeString",
        "alias": "BASIN",
        "sqlType": "sqlTypeOther",
        "length": 20,
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "Date",
        "type": "esriFieldTypeDate",
        "alias": "Date",
        "sqlType": "sqlTypeOther",
        "length": 8,
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "CAT_Min",
        "type": "esriFieldTypeString",
        "alias": "CAT_Min",
        "sqlType": "sqlTypeOther",
        "length": 2,
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "CAT_Max",
        "type": "esriFieldTypeString",
        "alias": "CAT_Max",
        "sqlType": "sqlTypeOther",
        "length": 2,
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      },
      {
        "name": "CAT_Number",
        "type": "esriFieldTypeInteger",
        "alias": "",
        "sqlType": "sqlTypeOther",
        "nullable": true,
        "editable": true,
        "domain": null,
        "defaultValue": null
      }
    ],
    "indexes": [
      {
        "name": "PK__02_Hurri__F4B70D8560245C70",
        "fields": "OBJECTID",
        "isAscending": false,
        "isUnique": true,
        "description": "clustered, unique, primary key located on "
      },
      {
        "name": "user_878.02_HurricaneKatrina_2005_Hurricane_Tracks_Shape_sidx",
        "fields": "Shape",
        "isAscending": false,
        "isUnique": false,
        "description": "Shape Index"
      }
    ],
    "types": [],
    "templates": [
      {
        "name": "New Feature",
        "description": "",
        "drawingTool": "esriFeatureEditToolNone",
        "prototype": {
          "attributes": {
            "YEAR": null,
            "MONTH": null,
            "DAY": null,
            "AD_TIME": null,
            "BTID": null,
            "NAME": null,
            "LAT": null,
            "LONG": null,
            "WIND_KTS": null,
            "PRESSURE": null,
            "CAT": null,
            "BASIN": null,
            "Date": null,
            "CAT_Min": null,
            "CAT_Max": null,
            "CAT_Number": null
          }
        }
      }
    ],
    "supportedQueryFormats": "JSON",
    "hasStaticData": true,
    "maxRecordCount": 1000,
    "standardMaxRecordCount": 4000,
    "tileMaxRecordCount": 4000,
    "maxRecordCountFactor": 1,
    "capabilities": "Query"
  },
  "featureSet": {
    "geometryType": "esriGeometryPolyline",
    "features": [
      {
        "geometry": {
          "paths": [
            [
              [
                -8360093.3635006435,
                2644116.0262960545
              ],
              [
                -8426885.97208586,
                2680464.55732645
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 1,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 23,
          "AD_TIME": "1800Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 23.1,
          "LONG": -75.1,
          "WIND_KTS": 30,
          "PRESSURE": 1008,
          "CAT": "TD",
          "BASIN": "North Atlantic",
          "Date": 1124820000000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 0
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -8426885.97208586,
                2680464.55732645
              ],
              [
                -8482544.891737033,
                2729055.9128424944
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 2,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 24,
          "AD_TIME": "0000Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 23.4,
          "LONG": -75.7,
          "WIND_KTS": 30,
          "PRESSURE": 1007,
          "CAT": "TD",
          "BASIN": "North Atlantic",
          "Date": 1124841600000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 0
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -8482544.891737033,
                2729055.9128424944
              ],
              [
                -8515940.666861918,
                2814455.116974236
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 3,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 24,
          "AD_TIME": "0600Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 23.8,
          "LONG": -76.2,
          "WIND_KTS": 30,
          "PRESSURE": 1007,
          "CAT": "TD",
          "BASIN": "North Atlantic",
          "Date": 1124863200000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 0
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -8515940.666861918,
                2814455.116974236
              ],
              [
                -8560469.072585395,
                2924955.9213091778
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 4,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 24,
          "AD_TIME": "1200Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 24.5,
          "LONG": -76.5,
          "WIND_KTS": 35,
          "PRESSURE": 1006,
          "CAT": "TS",
          "BASIN": "North Atlantic",
          "Date": 1124884800000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 0
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -8560469.072585395,
                2924955.9213091778
              ],
              [
                -8649524.8256969,
                2999080.6778920246
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 5,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 24,
          "AD_TIME": "1800Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 25.4,
          "LONG": -76.9,
          "WIND_KTS": 40,
          "PRESSURE": 1003,
          "CAT": "TS",
          "BASIN": "North Atlantic",
          "Date": 1124906400000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 0
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -8649524.8256969,
                2999080.6778920246
              ],
              [
                -8727447.948209813,
                3011471.669340674
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 6,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 25,
          "AD_TIME": "0000Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 26,
          "LONG": -77.7,
          "WIND_KTS": 45,
          "PRESSURE": 1000,
          "CAT": "TS",
          "BASIN": "North Atlantic",
          "Date": 1124928000000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 0
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -8727447.948209813,
                3011471.669340674
              ],
              [
                -8794239.49845958,
                3023873.2441438236
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 7,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 25,
          "AD_TIME": "0600Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 26.1,
          "LONG": -78.4,
          "WIND_KTS": 50,
          "PRESSURE": 997,
          "CAT": "TS",
          "BASIN": "North Atlantic",
          "Date": 1124949600000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 0
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -8794239.49845958,
                3023873.2441438236
              ],
              [
                -8861031.048709348,
                3023873.2441438236
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 8,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 25,
          "AD_TIME": "1200Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 26.2,
          "LONG": -79,
          "WIND_KTS": 55,
          "PRESSURE": 994,
          "CAT": "TS",
          "BASIN": "North Atlantic",
          "Date": 1124971200000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 0
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -8861031.048709348,
                3023873.2441438236
              ],
              [
                -8938955.229557708,
                2986700.2697978746
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 9,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 25,
          "AD_TIME": "1800Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 26.2,
          "LONG": -79.6,
          "WIND_KTS": 60,
          "PRESSURE": 988,
          "CAT": "TS",
          "BASIN": "North Atlantic",
          "Date": 1124992800000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 0
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -8938955.229557708,
                2986700.2697978746
              ],
              [
                -9050274.127195504,
                2924955.9213091778
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 10,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 26,
          "AD_TIME": "0000Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 25.9,
          "LONG": -80.3,
          "WIND_KTS": 70,
          "PRESSURE": 983,
          "CAT": "H1",
          "BASIN": "North Atlantic",
          "Date": 1125014400000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 1
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9050274.127195504,
                2924955.9213091778
              ],
              [
                -9128198.308043865,
                2888032.7141294302
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 11,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 26,
          "AD_TIME": "0600Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 25.4,
          "LONG": -81.3,
          "WIND_KTS": 65,
          "PRESSURE": 987,
          "CAT": "H1",
          "BASIN": "North Atlantic",
          "Date": 1125036000000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 1
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9128198.308043865,
                2888032.7141294302
              ],
              [
                -9194989.858293634,
                2863466.631663932
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 12,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 26,
          "AD_TIME": "1200Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 25.1,
          "LONG": -82,
          "WIND_KTS": 75,
          "PRESSURE": 979,
          "CAT": "H1",
          "BASIN": "North Atlantic",
          "Date": 1125057600000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 1
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9194989.858293634,
                2863466.631663932
              ],
              [
                -9272914.039141994,
                2826692.649782635
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 13,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 26,
          "AD_TIME": "1800Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 24.9,
          "LONG": -82.6,
          "WIND_KTS": 85,
          "PRESSURE": 968,
          "CAT": "H2",
          "BASIN": "North Atlantic",
          "Date": 1125079200000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 2
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9272914.039141994,
                2826692.649782635
              ],
              [
                -9350837.161654906,
                2802226.050849437
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 14,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 27,
          "AD_TIME": "0000Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 24.6,
          "LONG": -83.3,
          "WIND_KTS": 90,
          "PRESSURE": 959,
          "CAT": "H2",
          "BASIN": "North Atlantic",
          "Date": 1125100800000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 2
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9350837.161654906,
                2802226.050849437
              ],
              [
                -9428761.342503268,
                2802226.050849437
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 15,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 27,
          "AD_TIME": "0600Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 24.4,
          "LONG": -84,
          "WIND_KTS": 95,
          "PRESSURE": 950,
          "CAT": "H2",
          "BASIN": "North Atlantic",
          "Date": 1125122400000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 2
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9428761.342503268,
                2802226.050849437
              ],
              [
                -9495552.892753035,
                2814455.116974236
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 16,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 27,
          "AD_TIME": "1200Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 24.4,
          "LONG": -84.7,
          "WIND_KTS": 100,
          "PRESSURE": 942,
          "CAT": "H3",
          "BASIN": "North Atlantic",
          "Date": 1125144000000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 3
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9495552.892753035,
                2814455.116974236
              ],
              [
                -9562344.443002801,
                2851199.465462933
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 17,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 27,
          "AD_TIME": "1800Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 24.5,
          "LONG": -85.3,
          "WIND_KTS": 100,
          "PRESSURE": 948,
          "CAT": "H3",
          "BASIN": "North Atlantic",
          "Date": 1125165600000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 3
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9562344.443002801,
                2851199.465462933
              ],
              [
                -9651400.19611431,
                2900330.5720584793
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 18,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 28,
          "AD_TIME": "0000Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 24.8,
          "LONG": -85.9,
          "WIND_KTS": 100,
          "PRESSURE": 941,
          "CAT": "H3",
          "BASIN": "North Atlantic",
          "Date": 1125187200000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 3
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9651400.19611431,
                2900330.5720584793
              ],
              [
                -9762719.093752103,
                2961972.262008526
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 19,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 28,
          "AD_TIME": "0600Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 25.2,
          "LONG": -86.7,
          "WIND_KTS": 125,
          "PRESSURE": 930,
          "CAT": "H4",
          "BASIN": "North Atlantic",
          "Date": 1125208800000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 4
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9762719.093752103,
                2961972.262008526
              ],
              [
                -9862906.419126755,
                3036285.402301473
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 20,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 28,
          "AD_TIME": "1200Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 25.7,
          "LONG": -87.7,
          "WIND_KTS": 145,
          "PRESSURE": 909,
          "CAT": "H5",
          "BASIN": "North Atlantic",
          "Date": 1125230400000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 5
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9862906.419126755,
                3036285.402301473
              ],
              [
                -9929699.027711973,
                3148481.660027322
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 21,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 28,
          "AD_TIME": "1800Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 26.3,
          "LONG": -88.6,
          "WIND_KTS": 150,
          "PRESSURE": 902,
          "CAT": "H5",
          "BASIN": "North Atlantic",
          "Date": 1125252000000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 5
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9929699.027711973,
                3148481.660027322
              ],
              [
                -9974226.3751,
                3274212.9698232748
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 22,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 29,
          "AD_TIME": "0000Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 27.2,
          "LONG": -89.2,
          "WIND_KTS": 140,
          "PRESSURE": 905,
          "CAT": "H5",
          "BASIN": "North Atlantic",
          "Date": 1125273600000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 5
        }
      },
      {
        "geometry": {
          "paths": [
            [
              [
                -9974226.3751,
                3274212.9698232748
              ],
              [
                -9974226.3751,
                3439440.300277936
              ]
            ]
          ],
          "spatialReference": {
            "wkid": 102100,
            "latestWkid": 3857
          }
        },
        "attributes": {
          "OBJECTID": 23,
          "YEAR": 2005,
          "MONTH": 8,
          "DAY": 29,
          "AD_TIME": "0600Z",
          "BTID": 1356,
          "NAME": "KATRINA",
          "LAT": 28.2,
          "LONG": -89.6,
          "WIND_KTS": 125,
          "PRESSURE": 913,
          "CAT": "H4",
          "BASIN": "North Atlantic",
          "Date": 1125295200000,
          "CAT_Min": "E",
          "CAT_Max": "H5",
          "CAT_Number": 4
        }
      }
    ]
  }
});
