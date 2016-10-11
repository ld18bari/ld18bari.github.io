var marker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([16.88181, 41.10937]))
});

var markerIcon = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: 'images/university.png'
    }))
});

var map = new ol.Map({
    target: 'map-canvas',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),
        new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [marker]
            }),
            style: markerIcon
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([16.880042, 41.109263]),
        zoom: 14
    })
});
