<template>
	<div>
		<NavBar />
		<h2 class="mt-5">Profile</h2>

		<b-container class="mt-4">
			<b-row align-h="center">
				<b-col sm="0">
					<b-card
						title="User Useric"
						img-src="https://picsum.photos/300/200"
						img-alt="Image"
						img-top
						tag="article"
						style="max-width: 20rem;"
						class="mb-2"
					>
						<b-row cols="1">
							<b-col class="mt-2">
								<b-button pill variant="outline-success"
									>Change username</b-button
								>
							</b-col>
							<b-col class="mt-3">
								<input type="file" ref="file" style="display: none" />
								<b-button
									@click="$refs.file.click()"
									pill
									variant="outline-info"
									>Change image</b-button
								>
							</b-col>
						</b-row>
					</b-card>
				</b-col>
			</b-row>
			<b-row cols="1" cols-md="4" align-h="center" class="">
				<b-col class="mt-4">
					<b-button size="lg" variant="outline-light" class="mb-2">
						<b-icon icon="link" aria-hidden="true"></b-icon> Linked accounts
					</b-button>
				</b-col>
				<b-col class="mt-4">
					<b-button
						to="/settings/shortcuts"
						size="lg"
						variant="outline-light"
						class="mb-2"
					>
						<b-icon icon="geo" aria-hidden="true"></b-icon> Menage shortcuts
					</b-button>
				</b-col>
				<b-col class="mt-4">
					<b-button
						to="/profile/billing"
						size="lg"
						variant="outline-light"
						class="mb-2"
					>
						<b-icon icon="credit-card" aria-hidden="true"></b-icon> Billing info
					</b-button>
				</b-col>
			</b-row>
			<b-row cols="1" cols-md="4" align-h="center" class="">
				<b-col class="mt-4">
					<router-link to="/">
						<b-button size="lg" variant="outline-danger" class="mb-2">
							<b-icon icon="door-closed" aria-hidden="true"></b-icon>Log out
						</b-button>
					</router-link>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>
<script>
import NavBar from './NavBar';
export default {
	name: 'Profile',
	components: {
		NavBar,
	},
};
</script>
