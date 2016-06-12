import Ember from 'ember';

export default Ember.Route.extend({
  shouldReloadAll: function() { return true; },
  model() {
   return this.store.findAll('video');
  }
});
