<template>
	<div>
		<NavBar />
		<b-row cols="1" align-h="center">
			<b-col sm="0">
				<b-icon class="icon" icon="person-circle"></b-icon>
				<h2 class="mt-2">Driver info</h2>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="3">
				<b-form-group
					id="input-group-1"
					label="Full name:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="username"
						required
						placeholder="Enter full name"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="3">
				<b-form-group
					id="input-group-1"
					label="Country:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="username"
						required
						placeholder="Enter country"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="3">
				<b-form-group
					id="input-group-1"
					label="City:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="username"
						required
						placeholder="Enter city"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="0">
				<b-form-group
					id="input-group-1"
					label="Area code:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="username"
						required
						placeholder="Enter code"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="0">
				<b-form-group
					id="input-group-1"
					label="Years driving:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="number"
						required
						placeholder="Enter years driving"
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
				<b-button to="/becomeadriver/carinfo" variant="outline-success"
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
