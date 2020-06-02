<template>
	<div>
		<b-row class="mt-5" align-h="center">
			<h2 class="demoFont">Cruise</h2>
		</b-row>
		<hr style="border-top: 0.2px solid maroon;" />
		<h2 class="mt-5">Phone verification</h2>

		<b-row align-h="center" class="mt-5">
			<b-col sm="auto">
				<h5 class="text-success">
					Verification code is sent to your phone number
				</h5>
			</b-col>
		</b-row>
		<b-row align-h="center">
			<b-col sm="0" class="mt-5" lg="0">
				<div role="group">
					<b-form-input
						id="input-live"
						v-model="digits"
						:state="nameState"
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
					:disabled="!nameState"
					to="/signupCard"
					size="lg"
					variant="outline-success"
					>Submit</b-button
				>
			</b-col>
		</b-row>
	</div>
</template>
<script>
export default {
	computed: {
		nameState() {
			return this.digits.length === 4;
		},
	},
	data() {
		return {
			digits: '',
		};
	},
};
</script>
