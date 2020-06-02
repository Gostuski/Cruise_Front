<template>
	<div>
		<NavBar />
		<h2 class="mt-5">Phone settings</h2>
		<b-row align-h="center" align-v="center" class="mt-5">
			<b-col sm="0">
				<b-form-group
					id="input-group-1"
					label="New phone number:"
					label-for="input-1"
					description="We'll never share your phone number with anyone else."
					style="text-align:center"
				>
					<b-form-input
						id="input-1"
						type="email"
						required
						placeholder="New phone number(with country dial)"
						style="text-align:center"
					></b-form-input>
				</b-form-group>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="0" class="mt-2">
				<b-button size="lg" variant="success">Send verification code</b-button>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="0" class="mt-5" lg="0">
				<div role="group">
					<b-form-input
						id="input-live"
						v-model="digits"
						:state="numberOfDigits"
						:invalid-feedback="invalidFeedback"
						:valid-feedback="validFeedback"
						aria-describedby="input-live-help input-live-feedback"
						placeholder="Enter code:"
						style="text-align:center"
						trim
					></b-form-input>

					<!-- This will only be shown if the preceding input has an invalid state -->
					<b-form-invalid-feedback
						id="input-live-feedback"
						style="text-align:center"
					>
						Enter 4 digit code sent to your phone number
					</b-form-invalid-feedback>
				</div>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="0" class="mt-5">
				<b-button variant="light">Resend code</b-button>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="0" class="mt-5">
				<b-button
					to="/settings"
					:disabled="!numberOfDigits"
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
	components: {
		NavBar,
	},
	data() {
		return {
			disabled: 0,
			digits: '',
		};
	},
	computed: {
		numberOfDigits() {
			return this.digits.length === 4;
		},
	},
	methods: {
		enable() {
			if (this.digits.length === 4) {
				this.btnE = 0;
			}
		},
	},
};
</script>
