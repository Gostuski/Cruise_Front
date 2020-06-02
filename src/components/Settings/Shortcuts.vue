<template>
	<div>
		<NavBar />
		<h2 class="mt-5">Manage shortcuts</h2>

		<b-row align-h="center" align-v="center" class="mt-5">
			<b-col sm="0">
				<b-dropdown
					text="All shortcuts"
					block
					variant="primary"
					class="m-2"
					menu-class="w-100"
				>
					<b-dropdown-item href="#">Address 1</b-dropdown-item>
					<b-dropdown-item href="#">Address 2</b-dropdown-item>
					<b-dropdown-item href="#">Address 3</b-dropdown-item>
				</b-dropdown>
			</b-col>
		</b-row>
		<b-row align-h="center" align-v="center" class="mt-5">
			<b-col sm="0">
				<b-form-group
					id="input-group-1"
					label="Enter new shortcut:"
					label-for="input-1"
					style="text-align:center"
					v-model="address"
				>
					<b-form-input
						id="input-1"
						type="email"
						v-model="address"
						required
						placeholder="New shortcut"
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
	components: {
		NavBar,
	},
	data() {
		return {
			address: '',
		};
	},
	computed: {
		addressFilled() {
			return this.address.length > 0;
		},
	},
};
</script>
