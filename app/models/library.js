import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

const { computed } = Ember;

export default Model.extend({
  name: attr('string'),
  address: attr('string'),
  phone: attr('string'),

  isValid: computed.notEmpty('name')
});
