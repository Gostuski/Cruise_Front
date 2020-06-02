<template>
	<div>
		<link
			href="https://fonts.googleapis.com/icon?family=Material+Icons"
			rel="stylesheet"
		/>
		<NavBar />
		<h2 class="mt-5">Settings</h2>
		<b-container class="mt-5">
			<b-row cols="2" cols-md="4" align-h="center">
				<b-col sm="0" class="col-md-4 mt-5">
					<b-button
						to="/settings/phone"
						size="lg"
						v-b-hover="mobileHov"
						variant="outline-success"
					>
						<b-icon
							v-if="mobile"
							class="icon"
							animation="throb"
							icon="phone"
						></b-icon>
						<b-icon v-else class="icon" icon="phone"></b-icon>
					</b-button>
					<br />
					<span class="badge badge-pill badge-success"
						><em style="font-size:14px">Phone number</em></span
					>
				</b-col>
				<b-col sm="0" class="col-md-4 mt-5">
					<b-button
						to="/settings/mail"
						size="lg"
						v-b-hover="mailHov"
						variant="outline-success"
					>
						<b-icon
							v-if="mail"
							class="icon"
							animation="throb"
							icon="envelope-open"
						></b-icon>
						<b-icon v-else class="icon" icon="envelope-open"></b-icon>
					</b-button>
					<br />
					<span class="badge badge-pill badge-success"
						><em style="font-size:14px">Mail</em></span
					>
				</b-col>
				<b-col sm="0" class="col-md-4 mt-5">
					<b-button size="lg" variant="outline-success">
						<i style="font-size:50px" class="material-icons">accessible</i>
						<div class="custom-control custom-switch">
							<input
								type="checkbox"
								class="custom-control-input"
								id="customSwitch1"
							/>
							<label class="custom-control-label" for="customSwitch1"></label>
						</div>
					</b-button>
					<br />
					<span class="badge badge-pill badge-success"
						><em style="font-size:14px">wheelchair access</em></span
					>
				</b-col>
				<b-col sm="0" class="col-md-4 mt-5">
					<b-button
						to="/settings/home"
						size="lg"
						v-b-hover="homeHov"
						variant="outline-success"
					>
						<b-icon
							v-if="home"
							class="icon"
							animation="throb"
							icon="house"
						></b-icon>
						<b-icon v-else class="icon" icon="house"></b-icon>
					</b-button>
					<br />
					<span class="badge badge-pill badge-success"
						><em style="font-size:14px">Home</em></span
					>
				</b-col>
				<b-col sm="0" class="col-md-4 mt-5">
					<b-button
						to="settings/work"
						size="lg"
						v-b-hover="workHov"
						variant="outline-success"
					>
						<b-icon
							v-if="work"
							class="icon"
							animation="throb"
							icon="building"
						></b-icon>
						<b-icon v-else class="icon" icon="building"></b-icon>
					</b-button>
					<br />
					<span class="badge badge-pill badge-success"
						><em style="font-size:14px">Work</em></span
					>
				</b-col>
				<b-col sm="0" class="col-md-4 mt-5">
					<b-button
						to="settings/shortcuts"
						size="lg"
						v-b-hover="shortcutHov"
						variant="outline-success"
					>
						<b-icon
							v-if="shortcut"
							class="icon"
							animation="throb"
							icon="geo-alt"
						></b-icon>
						<b-icon v-else class="icon" icon="geo-alt"></b-icon>
					</b-button>
					<br />
					<span class="badge badge-pill badge-success"
						><em style="font-size:14px">Manage all shortcuts</em></span
					>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>
<style scoped>
.my-buttons .active {
	color: #fff !important;
	background-color: #28a745 !important;
	border-color: #28a745 !important;
}
.icon {
	height: 50px;
	width: 50px;
}
</style>
<script>
import NavBar from './NavBar';
export default {
	components: {
		NavBar,
	},
	data() {
		return {
			mobile: false,
			mail: false,
			wheelchair: false,
			home: false,
			work: false,
			shortcut: false,
			selected: [],
			options: [{ text: '1 week', value: '1 week' }],
		};
	},
	methods: {
		mobileHov(hovered) {
			this.mobile = hovered;
		},
		mailHov(hovered) {
			this.mail = hovered;
		},
		wheelchairHov(hovered) {
			this.wheelchair = hovered;
		},
		homeHov(hovered) {
			this.home = hovered;
		},
		workHov(hovered) {
			this.work = hovered;
		},
		shortcutHov(hovered) {
			this.shortcut = hovered;
		},
	},
};
</script>
