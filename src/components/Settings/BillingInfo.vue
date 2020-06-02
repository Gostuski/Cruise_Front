<template>
	<div>
		<NavBar />
		<h2 class="mt-5">Billing information</h2>
		<b-row align-h="center">
			<b-col sm="0" class="mt-3 mb-auto">
				<b-form-group label="Choose your card type:">
					<b-form-radio-group
						id="btn-radios-2"
						v-model="selected"
						:options="options"
						buttons
						button-variant="outline-primary"
						size="lg"
						name="radio-btn-outline"
					></b-form-radio-group>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center" align-v="center" class="mt-3">
			<b-col sm="0">
				<b-form-group
					id="input-group-1"
					label="Card number:"
					label-for="input-1"
					description="We'll never share your card information with anyone else."
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="number"
						required
						placeholder="Enter card number"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center" align-v="center" class="mt-3">
			<b-col sm="0">
				<b-form-group
					id="input-group-1"
					label="Cardholder's name:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="text"
						required
						placeholder="Cardholder's name"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center" align-v="center" class="mt-3">
			<b-col sm="0">
				<b-form-group
					id="input-group-1"
					label="Card expiration date:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="date"
						required
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center" align-v="center" class="mt-3">
			<b-col sm="0">
				<b-form-group
					id="input-group-1"
					label="CVV:"
					label-for="input-1"
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="number"
						placeholder="CCV:"
						required
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="0" class="mt-3">
				<router-link to="/home">
					<b-button
						v-b-modal.modal-prevent-closing
						size="lg"
						variant="outline-success"
						>Submit</b-button
					>
				</router-link>
			</b-col>
		</b-row>
	</div>
</template>
<script>
import NavBar from '../NavBar';
export default {
	components: {
		NavBar,
	},
	data() {
		return {
			selected: 'radio1',
			options: [
				{ text: 'Visa', value: 'radio1' },
				{ text: 'Master card', value: 'radio2' },
				{ text: "Diner's", value: 'radio3' },
				{ text: 'PayPal', value: 'radio4' },
			],
		};
	},
};
</script>
