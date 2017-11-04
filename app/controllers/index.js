import Controller from '@ember/controller';
import Ember from 'ember';

const { computed } = Ember;

export default Controller.extend({

  isValid: computed.match('model.email', /^.+@.+\..+$/),
  isDisabled: computed.not('isValid'),
  responseMessage: ''
});
