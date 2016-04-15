define([
  "dojo/_base/declare",
  "dojo/_base/lang",
  "dojo/string",

  "esri/request",
  "esri/arcgis/Portal"
], function(
  declare, lang, string, 
  esriRequest, esriPortal
) {
  var writer = declare(null, {

    addItemTemplate: "/sharing/content/users/${0}/addItem",
    currentWebmap: null,
    map: null,
    portal: null,
    portalUrl: null,
    portalUser: null,
    title: null,
    tags: "cereal",
    snippet:"",
    itemSaved:function(result){},

    constructor: function(options) {
      if ( !options.map ) {
        console.log("map-writer::no map provided.");
        return;
      }

      if ( !options.portalUrl ) {
        console.log("map-writer::no portalUrl provided.");
        return;
      }

      this.map = options.map;

      this.portalUrl = options.portalUrl;
      this.portal = new esriPortal.Portal(this.portalUrl);
      
      // ensure methods called after a deferred is resolved have proper context
      // if hitch isn't used, this will be window instead of the instance of this class
      // alternatively could use the (ugly) var this = that; trick
      // yes, ugliness is subjective.
      this.save = lang.hitch(this, this.save);
      this._save = lang.hitch(this, this._save);
    },

    // sign in, then push to arcgis.com
    save: function(webmap) {
      // console.log("map-writer::save webmap", this.portalUser);
      this.currentWebmap = webmap;
      if ( !this.portalUser ) {
        // need to sign in
        this.portal.signIn().then(this._save, this._error);
      } else {
        // already signed in
        this._save();
      }
    },

    _save: function() {
      console.log("map-writer::_save");
      this.portalUser = this.portal.getPortalUser();
      var path = string.substitute(this.addItemTemplate, [this.portalUser.username]);
      var ge = this.map.geographicExtent;
      var extent = [ge.xmin, ge.ymin, ge.xmax, ge.ymax].join(",");
          
      // 
      return esriRequest({
        url: this.portalUrl + path,
        content: {
          title: this.title,
          tags: this.tags,
          extent: extent,
          text: this.currentWebmap,
          snippet: this.snippet,
          type: "Web Map",
          typeKeywords: "Web Map, Derek",
          f: "json"
        }
      }, { usePost: true }).then(lang.hitch(this,this._saveSuccessful), this._error);
    },

    _saveSuccessful: function(result) {
      // no longer need to keep track of the web map
      if ( result.success ) {
        this.currentWebmap = null;
        console.log("map-writer::_saveSuccessful", result);
        //Alert the caller that the map has been saved successfully
        this.itemSaved(result);
      } else {
        console.log("map-writer::_saveSuccessful request succeeded but result.success is not true...", result);
      }
    },

    _error: function(error) {
      console.log("map-writer::error", error);
    }
  });

  return writer;
});
