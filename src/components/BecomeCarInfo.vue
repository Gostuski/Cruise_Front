<template>
	<div>
		<NavBar />
		<b-row cols="1" align-h="center">
			<b-col sm="0">
				<b-icon class="icon" icon="truck"></b-icon>
				<h2 class="mt-2">Car info</h2>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="3">
				<b-form-group
					id="input-group-1"
					label="Car manufacturer:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="username"
						required
						placeholder="Enter manufacturer"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="3">
				<b-form-group
					id="input-group-1"
					label="Car model:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="username"
						required
						placeholder="Enter model"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="0">
				<b-form-group
					id="input-group-1"
					label="Number of seats:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="number"
						required
						placeholder="Number of seats"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="0">
				<b-form-group
					id="input-group-1"
					label="Year of production:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="number"
						required
						placeholder="Year"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center" class="mt-3">
			<b-col sm="0"> </b-col>
		</b-row>
		<b-row align-h="center" class="mt-2">
			<b-col sm="0">
				<b-button to="/becomeadriver/photos" variant="outline-success"
					>Continue</b-button
				>
			</b-col>
		</b-row>
	</div>
</template>
<style scoped>
.icon {
	font-size: 50px;
	margin-top: 10px;
}
</style>
<script>
import NavBar from './NavBar';
export default {
	components: {
		NavBar,
	},
	data() {
		return {};
	},
};
</script>
