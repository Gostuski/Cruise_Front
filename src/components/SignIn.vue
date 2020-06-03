<template>
	<div>
		<b-row class="mt-3" align-h="center">
			<h2 class="demoFont">Cruise</h2>
		</b-row>
		<hr style="border-top: 0.2px solid maroon;" />
		<h2 class="mt-5">Sign in</h2>
		<b-container fluid="center">
			<b-row
				align-v="center"
				align-h="center"
				cols="1"
				class="justify-content-md-center"
			>
				<div class="mt-2">
					<b-form @submit="onSubmit" @reset="onReset" v-if="show">
						<b-row align-h="center" align-v="center" class="mt-5">
							<b-col sm="0">
								<b-form-group
									id="input-group-1"
									label="Username or email:"
									label-for="input-1"
									description="We'll never share your email with anyone else."
									style="text-align:center"
								>
									<b-form-input
										id="input-1"
										v-model="form.email"
										type="email"
										required
										placeholder="Enter username or email"
										style="text-align:center"
									></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
						<b-row align-h="center" align-v="center" class="mt-10">
							<b-col sm="0">
								<b-form-group
									id="input-group-1"
									label="Password:"
									label-for="input-1"
									description="Must be 8-20 character long."
									style="text-align:center"
								>
									<b-form-input
										id="input-1"
										type="password"
										required
										placeholder="Enter password"
										style="text-align:center"
									></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
						<b-row class="mt-2" align-h="center" align-v="center">
							<router-link to="/home">
								<b-button pill class="btn btn-outline-success"
									>Sign in</b-button
								>
							</router-link>
						</b-row>
						<b-row align-h="center" class="mt-3">OR</b-row>

						<b-row class="mt-3" align-h="center" align-v="center">
							<b-button pill type="submit" variant="success"
								>Sign in with Google</b-button
							>
						</b-row>
						<b-row class="mt-5" align-h="center" align-v="center">
							<router-link to="/signup">
								<b-button pill class="btn btn-outline-success"
									>Sign up</b-button
								>
							</router-link>
						</b-row>
					</b-form>
				</div>
			</b-row>
		</b-container>
	</div>
</template>
<style>
.demoFont {
	font-family: 'Times New Roman', serif;
	letter-spacing: 1.4px;
	word-spacing: 1.4px;
	color: #a5001c;
	font-weight: 700;
	text-decoration: none;
	font-style: normal;
	font-variant: normal;
	text-transform: none;
}
</style>
<script>
export default {
	name: 'SignIn',
	data() {
		return {
			form: {},
			show: true,
		};
	},
	methods: {
		redirect: function() {
			this.$router.push('About');
		},
	},
	created: {},
	mounted: {},
};
</script>
