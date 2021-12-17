const dark = [
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#444444',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [
      {
        color: '#f2f2f2',
      },
    ],
  },
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        color: '#f70000',
      },
    ],
  },
  {
    featureType: 'landscape.natural.landcover',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape.natural.terrain',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'landscape.natural.terrain',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'landscape.natural.terrain',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.attraction',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#a9f07e',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'on',
      },
      {
        hue: '#2dff00',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'all',
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 45,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'simplified',
      },
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'simplified',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#666464',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#4d4d4d',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#acacac',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#393939',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'all',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      {
        color: '#aad2e3',
      },
      {
        visibility: 'on',
      },
    ],
  },
]

// [

//   {
//     featureType: "landscape.natural",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         visibility: "on",
//       },
//       {
//         color: "#e0efef",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     elementType: "labels",

//     stylers: [{
//       visibility: "off"
//     }]
//   },
//   {
//     featureType: "poi",
//     elementType: "geometry.fill",
//     stylers: [
//       {
//         visibility: "off",
//       },
//       {
//         hue: "#1900ff",
//       },
//       {
//         color: "#c0e8e8",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "geometry",
//     stylers: [
//       {
//         lightness: 100,
//       },
//       {
//         visibility: "simplified",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     elementType: "labels",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "transit.line",
//     elementType: "geometry",
//     stylers: [
//       {
//         visibility: "on",
//       },
//       {
//         lightness: 700,
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     elementType: "all",
//     stylers: [
//       {
//         color: "#7dcdcd",
//       },
//     ],
//   },
// ];

export default dark
