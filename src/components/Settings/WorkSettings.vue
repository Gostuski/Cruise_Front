<template>
	<div>
		<NavBar />
		<h2 class="mt-5">Work address</h2>
		<b-row align-h="center" align-v="center" class="mt-5">
			<b-col sm="0">
				<b-form-group
					id="input-group-1"
					label="Enter work address:"
					label-for="input-1"
					description="We'll never share your address with anyone else."
					style="text-align:center"
					v-model="address"
				>
					<b-form-input
						id="input-1"
						type="email"
						v-model="address"
						required
						placeholder="Work address"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="0" class="mt-5">
				<b-button
					to="/settings"
					:disabled="!addressFilled"
					size="lg"
					variant="outline-success"
					>Save</b-button
				>
			</b-col>
		</b-row>
	</div>
</template>
<script>
import NavBar from '../NavBar';
export default {
	data() {
		return {
			address: '',
		};
	},
	components: {
		NavBar,
	},
	computed: {
		addressFilled() {
			return this.address.length > 0;
		},
	},
};
</script>
