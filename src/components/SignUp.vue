<template>
	<div>
		<b-row class="mt-4" align-h="center">
			<h2 class="demoFont">Cruise</h2>
		</b-row>
		<hr style="border-top: 0.2px solid maroon;" />
		<h2 class="mt-2">Sign up</h2>

		<b-row align-v="center" align-h="center">
			<div class="mt-2">
				<b-form @submit="onSubmit" @reset="onReset" v-if="show">
					<b-row align-h="center" align-v="center" class="mt-2">
						<b-col sm="0">
							<b-form-group
								id="input-group-1"
								label="Username:"
								label-for="input-1"
								style="text-align:center"
							>
								<b-form-input
									id="input-1"
									type="username"
									required
									placeholder="Enter username"
									style="text-align:center"
								></b-form-input>
							</b-form-group>
						</b-col>
					</b-row>
					<b-row align-h="center" align-v="center" class="mt-2">
						<b-col sm="0">
							<b-form-group
								id="input-group-1"
								label="Email:"
								label-for="input-1"
								description="We'll never share your email with anyone else."
								style="text-align:center"
							>
								<b-form-input
									id="input-1"
									type="email"
									required
									placeholder="Enter email"
									style="text-align:center"
								></b-form-input>
							</b-form-group>
						</b-col>
					</b-row>
					<b-row align-h="center" align-v="center" class="mt-2">
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
					<b-row align-h="center" align-v="center" class="mt-2">
						<b-col sm="0">
							<b-form-group
								id="input-group-1"
								label="Confirm Password:"
								label-for="input-1"
								description="Must be 8-20 character long."
								style="text-align:center"
							>
								<b-form-input
									id="input-1"
									type="password"
									required
									placeholder="Enter password again"
									style="text-align:center"
								></b-form-input>
							</b-form-group>
						</b-col>
					</b-row>
					<b-row align-h="center" align-v="center" class="mt-10">
						<b-col sm="0">
							<b-form-group
								id="input-group-1"
								label="Phone number:"
								label-for="input-1"
								description="We'll never share your phone number with anyone else."
								style="text-align:center"
							>
								<b-form-input
									id="input-1"
									v-model="form.email"
									type="email"
									required
									placeholder="Enter phone number(with country dial)"
									style="text-align:center"
								></b-form-input>
							</b-form-group>
						</b-col>
					</b-row>

					<b-row class="mt-3" align-h="center" align-v="center">
						<router-link to="/signupVerify">
							<b-button pill type="submit" variant="success">Sign up</b-button>
						</router-link>
					</b-row>
				</b-form>
			</div>
		</b-row>
	</div>
</template>
<style>
.navbar-brand {
	font-family: 'Comic Sans MS', cursive, sans-serif;
	letter-spacing: 1.4px;
	word-spacing: 1.4px;
	color: #a5001c !important;
	font-weight: 700;
	text-decoration: none;
	font-style: normal;
	font-variant: normal;
	text-transform: none;
	font-size: 40px !important;
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
			// this.$router.push('/about')
		},
	},
	created: {},
	mounted: {},
};
</script>
