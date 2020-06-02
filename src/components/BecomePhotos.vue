<template>
	<div>
		<NavBar />
		<b-row cols="1" align-h="center">
			<b-col class="col-md-4" cols="12">
				<b-col sm="0">
					<b-icon class="icon" icon="camera"></b-icon>
					<h2 class="mt-2">Photos</h2>
				</b-col>
			</b-col>
		</b-row>
		<b-row cols="1" cols-md="2" class="mt-3">
			<b-col class="mt-2">
				<h4 class="mt-2">Photo of your ID</h4>
				<input type="file" ref="file" style="display: none" />
				<b-button @click="$refs.file.click()" pill variant="outline-info"
					><b-icon icon="card-heading"></b-icon> Upload ID</b-button
				>
			</b-col>
			<b-col class="mt-2">
				<h4 class="mt-4">Photo of your liscence</h4>
				<input type="file" ref="file" style="display: none" />
				<b-button @click="$refs.file.click()" pill variant="outline-info"
					><b-icon icon="card-heading"></b-icon> Upload liscence</b-button
				>
			</b-col>
			<b-col class="mt-2">
				<h4 class="mt-4">Photo of you</h4>
				<input type="file" ref="file" style="display: none" />
				<b-button @click="$refs.file.click()" pill variant="outline-info"
					><b-icon icon="card-heading"></b-icon> Upload your photo</b-button
				>
			</b-col>
			<b-col class="mt-2">
				<h4 class="mt-4">Photo your car</h4>
				<input type="file" ref="file" style="display: none" />
				<b-button @click="$refs.file.click()" pill variant="outline-info"
					><b-icon icon="card-heading"></b-icon> Upload car photo</b-button
				>
			</b-col>
		</b-row>
		<b-row align-h="center" class="mt-3">
			<b-col>
				<b-row align-h="center" class="mt-2">
					<b-col sm="0">
						<b-button
							pill
							to="/home"
							@click="makeToast('success')"
							variant="outline-success"
							>Submit application</b-button
						>
					</b-col>
				</b-row>
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
	methods: {
		makeToast(variant = null) {
			this.$bvToast.toast('Application submited successfully', {
				title: 'Become a driver application',
				variant: variant,
				solid: true,
			});
		},
	},
};
</script>
