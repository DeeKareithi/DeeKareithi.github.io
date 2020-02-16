var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoiZG9yY2thciIsImEiOiJjazZueHkwamIweDNuM21xc2w3bjdtcjhmIn0.eUutJYaZX6zulW6zti9T2Q',
    showMarkers: true,
    theme: 'dark',
    alignment: 'right',
    title: 'Access to Healthcare after an Accident in Lagos - CcHUB Design Lab Showcase',
	    subtitle: 'How easy it to access healthcare after getting an accident in Lagos?',
    byline: 'By Dorcas Kareithi and Steven Karera',
    footer: 'Data Source: WorldBank Data, Nigeria Watch data and Grid3 Data <a href https://grid3.gov.ng/datasets. /a>',
    chapters: [
        {
            id: 'Lagos Showcase Map',
            title: 'Road Accidents in Lagos (2016 to 2020)',
            image: 'https://github.com/DeeKareithi/DeeKareithi.github.io/blob/master/images/Road%20Accidents%20Lagos%20(2006-2019).png?raw=true',

            description: 'Over the past 4 years, road accidents in Lagos have been on the increase. THis has subsequently led to an increase in deaths in the State, as shown below.',
			
            location: {
				center: [8, 8.4], // starting position
				zoom: 5.9, // starting zoom
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'lagos_boundaries',
                    opacity: 1
                }
            ],
            onChapterExit: [
                 {
                     layer: 'lagos_boundaries',
                     opacity: 0.25
                }
            ]
        },
        {
            id: 'Lagos Hospitals',
            title: 'Health Facilities in Lagos',
            image: 'https://thewillnigeria.com/news/wp-content/uploads/2017/10/hospital3-655x420.jpg',
            description: 'After getting an accident in Lagos, we ask ourselves, what are the closest health facilities that those injured can access? What Options do they have?',
            location: {
                center: [3.4, 6.4],
                zoom: 8.5,
                pitch: 60,
                bearing: 45
            },
            onChapterEnter: [
                {
                    layer: 'health-facilities-in-lagos',
                    opacity: 1
                }
            ],
            onChapterExit: [
                 {
                     layer: 'health-facilities-in-lagos',
                     opacity: 0.25
                }
            ]
        },
        {
            id: 'Traffic_volumes_Lagos',
            title: 'Traffic in Lagos',
            image: '',
            description: 'The accident victim needs to be taken to the nearest health facility to recieve firts aid. What is the fastest way to get there? Which routes should they avoid?',
            location: {
                center: [3.4, 6.4],
                zoom: 12.5,
                pitch: 60,
                bearing: 12
            },
            onChapterEnter: [
                {
                    layer: 'traffic',
                    opacity: 1
                }
            ],
            onChapterExit: [
                 {
                     layer: 'traffic',
                     opacity: 0.25
                }
            ]
        }
    ]
};
