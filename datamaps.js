var map = new Datamap({
  element: document.getElementById('pollution-map'),
  scope: 'usa',
  geographyConfig: {
    popupOnHover: false,
    highlightOnHover: false,
    responsive: true,
    borderWidth: 1,
  },
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

window.addEventListener('resize', customResize());