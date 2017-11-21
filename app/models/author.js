import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';
import Faker from 'faker';

const { computed } = Ember;

export default Model.extend({
  name: attr('string'),
  books: hasMany('book', { inverse: 'author', async: true }),

  isNotValid: computed.empty('name'),

  isEditing: false,

  randomize() {
    this.set('name', Faker.name.findName());
    return this;
  }
});
