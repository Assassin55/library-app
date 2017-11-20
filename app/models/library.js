import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import Ember from 'ember';
import Faker from 'faker';

const { computed } = Ember;

export default Model.extend({
  name: attr('string'),
  address: attr('string'),
  phone: attr('string'),
  books: hasMany('book', { inverse: 'library', async: true }),

  isValid: computed.notEmpty('name'),

  randomize() {
    this.set('name', `${Faker.company.companyName()} Library`);
    this.set('address', this._fullAddress());
    this.set('phone', Faker.phone.phoneNumber());

    return this;
  },

  _fullAddress() {
    return `${Faker.address.streetAddress()}, ${Faker.address.city()}`;
  }
});
