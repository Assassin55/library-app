import Controller from '@ember/controller';

export default Controller.extend({

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  emailAddress: '',
  responseMessage: '',

  // actualEmailAddress: Ember.computed('emailAddress', function() {
  //   console.log('Computed is called: ', this.get('emailAddress'));
  // }),
  // emailAddressChanged: Ember.observer('emailAddress', function() {
  //   console.log('Observer is called: ', this.get('emailAddress'));
  // })
  actions: {

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }
});
