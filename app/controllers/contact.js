import Controller from '@ember/controller';
import Ember from 'ember';

const { computed } = Ember;

export default Controller.extend({
  emailAddress: '',
  message: '',
  responseMessage: '',

  isValidEmail: computed.match('emailAddress', /^.+@.+\..+$/),
  isValidMessage: computed.gte('message.length', 5),
  isTrue: computed.and('isValidEmail', 'isValidMessage'),
  disabled: computed.not('isTrue'),

  actions: {
    sendContact() {
      this.set('responseMessage', 'We got your message and we’ll get in touch soon');
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
