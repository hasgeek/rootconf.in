function initLeaflets(){return window.L===void 0?(window.setTimeout(initLeaflets,5e3),void 0):($(".leaflet-map").each(function(){var e,t,a,o,r=$(this),n={zoom:5,marker:[12.9833,77.5833],label:null,maxZoom:18,attribution:'<a href="http://open.mapquest.co.uk" target="_blank">MapQuest</a>, <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> and contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC-BY-SA</a>',subdomains:["a","b","c"],scrollWheelZoom:!1};r.empty(),e=r.data(),e.marker&&(e.marker=e.marker.split(",")),t=$.extend({},n,e),a=new L.Map(r[0],{center:t.center||t.marker,zoom:t.zoom,scrollWheelZoom:t.scrollWheelZoom}),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:t.maxZoom,attribution:t.attribution,subdomains:t.subdomains}).addTo(a),o=new L.marker(t.marker).addTo(a),t.label&&o.bindPopup(t.label).openPopup()}),void 0)};