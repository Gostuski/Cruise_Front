<template>
	<gmap-map :center="center" :zoom="12" style="height:300px; width:100%;">
		<gmap-marker
			:key="index"
			v-for="(m, index) in markers"
			:position="m.position"
			@click="center = m.position"
		></gmap-marker>
	</gmap-map>
</template>

<script>
export default {
	name: 'GoogleMap',
	data() {
		return {
			center: { lat: 45.508, lng: -73.587 },
			markers: [],
			places: [],
			currentPlace: null,
		};
	},

	mounted() {
		this.geolocate();
	},

	methods: {
		setPlace(place) {
			this.currentPlace = place;
		},
		addMarker() {
			if (this.currentPlace) {
				const marker = {
					lat: this.currentPlace.geometry.location.lat(),
					lng: this.currentPlace.geometry.location.lng(),
				};
				this.markers.push({ position: marker });
				this.places.push(this.currentPlace);
				this.center = marker;
				this.currentPlace = null;
			}
		},
		geolocate: function() {
			navigator.geolocation.getCurrentPosition((position) => {
				this.center = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
			});
		},
	},
};
</script>
