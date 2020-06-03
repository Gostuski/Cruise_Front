<template>
	<div>
		<NavBar />
		<b-row cols="1" align-h="center">
			<b-col sm="0">
				<b-icon class="icon" icon="truck"></b-icon>
				<h2 class="mt-2">Terms and services</h2>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="4">
				<b-form-textarea
					id="textarea-rows"
					placeholder="Tall textarea"
					rows="8"
					disabled="disabled"
					v-model="text"
				></b-form-textarea>
			</b-col>
		</b-row>
		<b-row align-h="center" class="mt-3">
			<b-col sm="0">
				<b-form-checkbox
					id="checkbox-1"
					v-model="status"
					name="checkbox-1"
					value="Accepted"
					unchecked-value="not_accepted"
				>
					I accept the terms and services
				</b-form-checkbox>

				<div>
					State: <strong class="text-danger">{{ status }}</strong>
				</div>
			</b-col>
		</b-row>
		<b-row align-h="center" class="mt-5">
			<b-col sm="0">
				<b-button to="/becomeadriver/driverinfo" variant="outline-success"
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
		return {
			text: '.....',
			status: 'Not accepted',
		};
	},
};
</script>
