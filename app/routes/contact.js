import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findRecord('contact','57530e6d5758a45be6ec7171');
	}
});
