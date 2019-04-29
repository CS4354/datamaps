var map = new Datamap({
  element: document.getElementById('pollution-map'),
  scope: 'usa',
  geographyConfig: {
    popupOnHover: false,
    highlightOnHover: false,
    responsive: true,
    borderWidth: 1,
    // dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/canada.topo.json',
  },
});

var airData = [{
    radius: 2,
    latitude: 31.96,
    longitude: -99.90,
    name: "1953-08-12",
  },
  {
    radius: 6,
    latitude: 34.04,
    longitude: -111.09,
    name: "1955-11-22",
  }
];

// draw bubbles for airData
map.bubbles(airData, {
  bubblesConfig: {
    popupOnHover: true,
    popupTemplate: function (geo, data) {
      return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
    }
  }
});

var customResize = function () {
  if (window.matchMedia("(max-width: 440px)").matches) {
    map.resize();
    map.labels({
      fontSize: 6
    });
  } else if (("(max-width: 660px)").matches) {
    map.resize();
    map.labels({
      fontSize: 8
    });
  } else if (window.matchMedia("(max-width: 990px)").matches) {
    map.resize();
    map.labels({
      fontSize: 10
    });
  } else {
    map.resize();
    map.labels({
      fontSize: 12
    });
  }
};

// State labels size
window.addEventListener('resize', customResize());