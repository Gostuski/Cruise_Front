<template>
	<b-navbar toggleable="lg" type="dark" variant="dark">
		<div class="container">
			<b-navbar-brand to="/home">Cruise</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item to="/profile">Profile</b-nav-item>
					<b-nav-item to="/settings">Settings</b-nav-item>
					<b-nav-item to="/becomeadriver/terms">Become a driver</b-nav-item>
					<b-nav-item to="/"> <p class="text-danger">Log out</p></b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</div>
	</b-navbar>
</template>
<style scoped>
.navbar-brand {
	font-family: 'Times New Roman', serif;
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
	name: 'NavBar',
};
</script>

<style scoped>
/* div {
	text-align: center;
} */
</style>
