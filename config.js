var config = {
    style: 'mapbox://styles/dorckar/ck6o1vd1n15os1jlbdt6voyri',
    accessToken: 'pk.eyJ1IjoiZG9yY2thciIsImEiOiJjazZua21jaG4wdjk2M3RsaWp0dGVvdzAxIn0._WwBVT5xalfRp284lwtiEQ',
    showMarkers: false,
    theme: 'dark',
    alignment: 'right',
    title: 'Access to Healthcare after an Accident in Lagos State- CcHUB Design Lab Showcase',
	    subtitle: 'How easy is it to access healthcare after getting in an accident in Lagos State?',
    byline: 'By Dorcas Kareithi',
    footer: 'Data Source: WorldBank Data, Nigeria Watch data and Grid3 Data <a href https://grid3.gov.ng/datasets. /a>',
    chapters: [
        {
            id: 'Lagos Showcase Map',
            title: 'The Big Question',
            image: '',

            description: 'Access to healthcare is one of UN SGDs. In Africa, access to healthcare is one of the many challenges of health systems of many countries.  Road accidents are one of the most frequent cases in the emergency rooms in hospitals in most parts of Nigeria (Ogunmola et al, 2013). Nigeria is no different.  In this showcase, we ask "How easy is it to access healthcare after getting into an accident in Lagos?". We explore the road accident deaths in Lagos, health facilities in the state, routes that are closest to the health facilities and the fastest ways to access the health facilities in the case of an accident.',
			
            location: {
				center: [10.967788, 9.569090],
				zoom: 5.23,
				pitch: 0,
				bearing: 0,

            },
            onChapterEnter: [
                {
                    layer: 'nigeria_layer',
                    opacity: 1
                }
            ],
            onChapterExit: [
                 {
                     layer: 'nigeria_layer',
                     opacity: 1
                }
            ]
        },
        {
            id: 'Lagos Showcase Map',
            title: 'Road Accidents in Lagos (2016 to 2020)',
            image: 'https://github.com/DeeKareithi/DeeKareithi.github.io/blob/master/images/Road%20Accidents%20Lagos%20(2006-2019).png?raw=true',

            description: 'Lagos State, the most economically active state of Nigeria. It also has the highest population density in Nigeria(2,500/km2 (6,600/sq mi)). Over the past 4 years, road accidents in Lagos have been on the increase, subsequently this has led to an increase in deaths in the State, as shown on the graph above.',
			
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
                     opacity: 1
                }
            ]
        },
        {
            id: 'Lagos Hospitals',
            title: 'Health Facilities in Lagos compared to Population',
            image: 'https://github.com/DeeKareithi/DeeKareithi.github.io/blob/master/images/health_facility_to_popolation_ratio.png?raw=true',
            description: 'After getting into an accident in Lagos, we ask ourselves, what are the closest health facilities that those injured can access? What Options do they have? Lagos state has a total of 1,534 health facilities, according to data collected by Grid3. The table above shows the population per health facility in the LGAs.'
			,
            location: {
                center: [3.323377, 6.507874],
                zoom: 12.74,
                pitch: 45,
                bearing: -18.31
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
                    opacity: 1
                }
            ]
        },
        {
            id: 'Lagos Hospitals',
            title: 'Health Facilities Types in Lagos',
            image: 'https://github.com/DeeKareithi/DeeKareithi.github.io/blob/master/images/Health%20Facilities%20in%20Lagos.png?raw=true',
            description: 'Most of these health facilities in Lagos are private owned clinics as shown above and in the map. A close look at the .'
			,
            location: {
                center: [3.323377, 6.507874],
                zoom: 12.74,
                pitch: 45,
                bearing: -18.31
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
                    opacity: 1
                }
            ]
        },
        {
            id: 'Lagos Hospitals',
            title: 'Health Facilities Capacity in Lagos',
            image: '',
            description: 'In 2019, the President of the Nigeria Medical Association (NMA) reported that with at least 3,000 doctors graduating yearly, it would take about 25 years to produce adequate numbers of doctors to cater for the country’s population. It was also reported that a doctor caters for about 10,000 to 22,000 patients, instead of the World Health Organisation recommendation of a doctor to 600 patients.'
			,
            location: {
                center: [3.323377, 6.507874],
                zoom: 12.74,
                pitch: 45,
                bearing: -18.31
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
                    opacity: 1
                }
            ]
        },
        {
            id: 'Lagos',
            title: 'Which is the fastest way to a health facility?',
            image: '',
            description: 'Picture this, there has been an accident . The casualties need to be rushed to the health facility. Which is the fastest route to a health facility in Lagos? Transport data from WorldBank from selected routes in Lagos shows that the longest route within Lagos is CMS-Epe: 77.2819 miles. Moreover, the data shows that the busiest route is  <b> Adeniji Adele Rd - 3rd Mainland Bridge at Osborne Outbound (101,922 traffic volume). </b> ',
            location: {
                center: [3.339344, 6.529654],
                zoom: 12.89,
                pitch: 42,
                bearing: -43.30
            },
            onChapterEnter: [
                {
                    layer: 'nigeria-highway-73n68u',
                    opacity: 1
                }
            ],
            onChapterExit: [
                 {
                     layer: 'nigeria-highway-73n68u',
                     opacity: 1
                }
            ]
        },
		{
            id: 'Lagos',
            title: 'Which modes of transport will you find on your way?',
            image: 'https://github.com/DeeKareithi/DeeKareithi.github.io/blob/master/images/Modes%20of%20transport_whitebg.png?raw=true',
            description: 'Analysis of World Bank transport data ta The mode of transport with the highest traffic Lagos State is  personal cars/taxi (48%) followed by motorcycles (27%). This means on your routes within Lagos State, these are the modes you are likely to come across as you find your way to the nearest health facility.',
            location: {
                center: [3.339344, 6.529654],
                zoom: 12.89,
                pitch: 42,
                bearing: -43.30
            },
            onChapterEnter: [
                {
                    layer: 'nigeria-highway-73n68u',
                    opacity: 1
                }
            ],
            onChapterExit: [
                 {
                     layer: 'nigeria-highway-73n68u',
                     opacity: 1
                }
            ]
        },
		{
		    id: 'Lagos',
            title: 'Traffic in Lagos',
            image: '',
            description: 'With heavy traffic in most routes in Lagos, getting to a health facility (Purple dots) in good time will be difficult. Recent technological advancements have made it possible to track routes with a lot of traffic in real time. Data from Google Maps highlights the areas with the heaviest traffic in Lagos state (red highlight for busy routes) and WorldBank Data shows the time of day with highest traffic in each LGA.',
            location: {
                center: [3.339344, 6.529654],
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
                     opacity: 1
                }
            ]
        },

		 {
            id: 'Lagos Showcase Map',
            title: 'Conclusion',
            image: '',

            description: 'Average time taken to move within Lagos state  is 78.79348 (+54.70) minutes, range[10, 386] minutes. If one were to get an accident in LGAs like Ibeju Lekki with least traffic throughout and high population to health facility ratio (traffic of 21,424 and 3013 residents per health facility) , they would have a higher chance of accessing healthcare than people in LGAs like Agege (traffic of 133,009 and 8,700 residents per health facility).',
		            location: {
				center: [10.967788, 9.569090],
				zoom: 5.23,
				pitch: 0,
				bearing: 0,

            },
            onChapterEnter: [
                {
                    layer: 'nigeria_layer',
                    opacity: 1
                }
            ],
            onChapterExit: [
                 {
                     layer: 'nigeria_layer',
                     opacity: 1
                }
            ]
        },
    ]
};
