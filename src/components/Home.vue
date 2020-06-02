<template>
	<div>
		<NavBar />
		<b-container class="mt-4 mb-3 box">
			<b-row class="mb-3" cols-md="12">
				<b-col class="mb-4 cols-xs-12 text-center">
					<GoogleMap />
				</b-col>
			</b-row>
			<b-row class="mt-3" cols="1" cols-md="4" style="padding 0 0;">
				<b-col class="col-md-4 mt-3">
					<b-form-radio-group
						id="btn-radios-2"
						v-model="selected"
						:options="options"
						buttons
						button-variant="outline-primary"
						size="lg"
						name="radio-btn-outline"
					></b-form-radio-group>
				</b-col>
				<b-col class="col-md-4 mt-3">
					<b-button size="lg" variant="danger">
						<b-icon icon="geo-alt"></b-icon>
						Pin location
					</b-button>
				</b-col>
				<b-col class="col-md-4 mt-3">
					<b-button
						v-b-modal.modal-prevent-closing
						size="lg"
						variant="outline-success"
					>
						<b-icon icon="tag"></b-icon>
						Promo code
					</b-button>
				</b-col>
			</b-row>
		</b-container>

		<b-modal id="modal-prevent-closing" ref="modal" title="Enter promocode">
			<form ref="form" @submit.stop.prevent="handleSubmit">
				<b-form-group
					:state="nameState"
					label="Promocode"
					label-for="name-input"
					invalid-feedback="Name is required"
				>
					<b-form-input
						id="name-input"
						v-model="name"
						:state="nameState"
						type="number"
						required
					></b-form-input>
				</b-form-group>
			</form>
		</b-modal>
	</div>
</template>
<script>
import GoogleMap from './GoogleMap';
import NavBar from './NavBar';
export default {
	data() {
		return {
			selected: 'Economy class',
			options: [
				{ text: 'Luxury class', value: 'Luxury class' },
				{ text: 'Economy class', value: 'Economy class' },
			],
			name: '',
			nameState: null,
			submittedNames: [],
		};
	},
	name: 'Home',
	components: {
		NavBar,
		GoogleMap,
	},
};
</script>

<style scoped>
.social-box .box {
	border-radius: 10px;
	padding: 40px 10px;
	margin: 20px 0px;
	cursor: pointer;
	transition: all 0.5s ease-out;
}
</style>
