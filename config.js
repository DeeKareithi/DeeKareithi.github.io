var config = {
    style: 'mapbox://styles/dorckar/ck6nyrdnk1fvv1jn3ryegowfb',
    accessToken: 'sk.eyJ1IjoiZG9yY2thciIsImEiOiJjazZwdDJoNmIxN3FkM2xseXFtOGhuMHpoIn0.QOonnNPUEQCYvI_D2DQZ7A',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    title: 'Access to Healthcare after an Accident in Lagos - CcHUB Design Lab Showcase',
	    subtitle: 'How easy is it to access healthcare after getting an accident in Lagos?',
    byline: 'By Dorcas Kareithi and Steven Karera',
    footer: 'Data Source: WorldBank Data, Nigeria Watch data and Grid3 Data <a href https://grid3.gov.ng/datasets. /a>',
    chapters: [
        {
            id: 'Lagos Showcase Map',
            title: 'The Big Question',
            image: '',

            description: 'Access to healthcare is one of UN SGDs. In Africa, access to healthcare is one of the challenges facing health systems of many countries. Nigeria is also one of them. Road accidents cases are one of the most frequent in emergency rooms in our hospitals. In this showcase, we ask "How easy is it to access healthcare after getting an accident in Lagos?". We explore the road accident deaths in Lagos, health facilities in the state, routes that are closest to the health facilities and the fastest ways to access the health facilities in the case of an accident.',
			
            location: {
				center: [8.67739, 9.06327],
				zoom: 5.91,
				pitch: 0,
				bearing: -0,

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
                     opacity: 0
                }
            ]
        },
        {
            id: 'Lagos Showcase Map',
            title: 'Road Accidents in Lagos (2016 to 2020)',
            image: 'https://github.com/DeeKareithi/DeeKareithi.github.io/blob/master/images/Road%20Accidents%20Lagos%20(2006-2019).png?raw=true',

            description: 'Lagos State, the most economically active state of Nigeria, also has the highest population density in Nigeria(2,500/km2 (6,600/sq mi)). The state is also home to one of the most active cities in Nigeria. Over the past 4 years, road accidents in Lagos have been on the increase. THis has subsequently led to an increase in deaths in the State, as shown on the graph above.',
			
            location: {
				center: [3.37822, 6.54319], // starting position
				zoom: 10.0, // starting zoom
                pitch: 45,
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
                     opacity: 0
                }
            ]
        },
        {
            id: 'Lagos Hospitals',
            title: 'Health Facilities in Lagos',
            image: 'https://github.com/DeeKareithi/DeeKareithi.github.io/blob/master/images/Health%20Facilities%20in%20Lagos.png?raw=true',
            description: 'After getting an accident in Lagos, we ask ourselves, what are the closest health facilities that those injured can access? What Options do they have? Lagos state has a total of 1,438 human health facilities, according to data collected by Grid3. Most of these are private owned clinics as shown above'
			,
            location: {
                center: [3.93338, 6.46770],
                zoom: 12.57,
                pitch: 45,
                bearing: -0
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
                    opacity: 0
                }
            ]
        },
        {
            id: 'Lagos',
            title: 'Which is the fastest way to a health facility?',
            image: 'https://github.com/DeeKareithi/DeeKareithi.github.io/blob/master/images/Modes%20of%20transport_whitebg.png?raw=true',
            description: 'Picture this, there has been an accident. The casualties need to be rushed to the health facility. Which is the fastest way to a health facility in Lagos? Transport data from WorldBank from selected routes in Lagos shows that the longest route within Lagos is CMS-Epe: 77.2819 miles. Moreover, the data shows that the busiest route is  <b> Adeniji Adele Rd - 3rd Mainland Bridge at Osborne Outbound (101,922 traffic volume) </b>. <br> <br> The mode of trnsport with the highest traffic Lagos State is  personal cars/taxi (48%) followed by motorcycles (27%) ',
            location: {
                center: [3.339344, 6.529654],
                zoom: 12.31,
                pitch: 42,
                bearing: -43.30
            },
            onChapterEnter: [
                {
                    layer: 'road',
                    opacity: 1
                }
            ],
            onChapterExit: [
                 {
                     layer: 'road',
                     opacity: 0
                }
            ]
        },
		{
		            id: 'Lagos',
            title: 'Traffic in Lagos',
            image: '',
            description: 'Lagos is the stage with a busy city, Lagos mainland and island. With heavy traffic in most routes in Lagos, getting to a health facility in good time may not be very easy, unless one uses the route with minimum traffic. Recent technological advancements have made it possible to track routes with alot of traffic real time. Data from Google Maps highlighst the areas with the heaviest traffic in Lagos state (red highlight) and WorldBank Data shows the time of day with highest traffic in each LGA.',
            location: {
                center: [3.395472, 6.456084],
                zoom: 14.20,
                pitch: 0,
                bearing: 83.26
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
                     opacity: 0
                }
            ]
        },

		 {
            id: 'Lagos Showcase Map',
            title: 'Conclusion',
            image: '',

            description: 'Average time taken to move within Lagos state  is 78.79348 (+54.70) minutes, range[10, 386] minutes. In addition, traffic data shows that there is less traffic in rural areas than urban areas like Lagos and Lekki. If one were to get an accident in LGAs like Ibeju Lekki with least traffic throughout and high population to health facility ratio (traffic of 21,424 and 3013 residents per health facility) , they would have a higher chance of accessing healthcare than people in LGAs like Agege (traffic of 133,009 and 8,700 residents per health facility).',
			
            location: {
				center: [8.67739, 9.06327],
				zoom: 5.91,
				pitch: 0,
				bearing: -0,

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
                     opacity: 0
                }
            ]
        },

    ]
};
