import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('invitation');
  },

  actions: {
    saveInvitation(newInvitation) {
      newInvitation.save().then((response) => {
        this.controller.set('responseMessage', `Thank you! We have just saved your email address with the following id:
          ${response.get('id')}`);
        this.controller.set('emailAddress', '');
      });
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
      this.controller.set('responseMessage', '');
    }
  }

});
