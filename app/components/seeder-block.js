import Component from '@ember/component';
import Ember from 'ember';

const MAX_VALUE = 100;
const { computed } = Ember;

export default Component.extend({

  counter: null,

  isCounterValid: computed.lte('counter', MAX_VALUE),
  isCounterNotValid: computed.not('isCounterValid'),
  placeholder: `Max ${MAX_VALUE}`,

  generateReady: false,
  deleteReady: false,

  generateInProgress: false,
  deleteInProgress: false,

  generateIsDisabled: computed.or('isCounterNotValid', 'generateInProgress', 'deleteInProgress'),
  deleteIsDisabled: computed.or('generateInProgress', 'deleteInProgress'),

  actions: {

    generateAction() {
      if (this.get('isCounterValid')) {
        this.sendAction('generateAction', this.get('counter'));
      }
    },

    deleteAction() {
      this.sendAction('deleteAction');
    }
  }
});
