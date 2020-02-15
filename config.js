var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoiZG9yY2thciIsImEiOiJjazZueHkwamIweDNuM21xc2w3bjdtcjhmIn0.eUutJYaZX6zulW6zti9T2Q',
    showMarkers: true,
    theme: 'dark',
    alignment: 'right',
    title: 'Access to Healthcare after an Accident in Lagos - CcHUB Design Lab Showcase',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Dorcas Kareithi and Steven Karera',
    footer: 'Source: source of data- https://grid3.gov.ng/datasets.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Road Accidents in Lagos (2016 to 2020)',
            image: './path/to/image/source.png',
            description: 'Over the past 4 years, road accidents in Lagos have been on the increase. THis has subsequently led to an increase in deaths in the State, as shown below.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 13.5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Health Facilities in Nigeria',
            image: './path/to/image/source.png',
            description: 'After getting an accident in Lagos, we ask ourselves, what are the closest health facilities that those injured can access? What Options do they have?',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
