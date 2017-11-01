import Controller from '@ember/controller';
import Ember from 'ember';

const { computed } = Ember;

export default Controller.extend({

  isValid: computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: computed.not('isValid'),
  emailAddress: '',
  responseMessage: '',

  actions: {

    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We have just saved your email address with the following id:
          ${response.get('id')}`);
        this.set('emailAddress', '');
      });
    }
  }
});
