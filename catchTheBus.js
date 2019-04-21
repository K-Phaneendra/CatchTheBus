buses = {
	regNo: String,
	code: String
};

drivers = {
	name: String,
	contact: {
		mobile: Number
	}
};

locations = {
	name: String
};

Note: routeMap is created by the admin after creating locations
Note: people key inside stops {}, will be turned to empty after the journey is completed
routeMaps = {
	name: { type: String, format: source - destination },
	stops: {
		locationId: {
		Note: data in people array is set by the person who is going to travel()
			people: [
				{ identification: String }
			]
		}
	}
}


journies = {
	bus: bus collection
	source: location collection,
	destination: location collection,
	routeMap: routemap collection
	startTime: number,
	endTime: number,
	startDate: date,
	endDate: date,
	driver: driver collection
};

=======
frontend flow

fetch journies based on startDate
user will select a journey
and then, he will enter his identification
total no. of people who are going to board the bus will be displayed
