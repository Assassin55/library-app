import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('library', params.library_id);
  },

  actions: {
    saveLibrary(library) {
      library.save().then(() => this.transitionTo('libraries'));
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm('You have unsaved changes! Would you really like to live this form?');

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
