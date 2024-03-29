import Route from '@ember/routing/route';
import Ember from 'ember';

const { RSVP } = Ember;

export default Route.extend({

  model() {
    return RSVP.hash({
      libraries: this.store.findAll('library'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('author')
    });
  },

  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);

    this._super(controller, model);
  }
});
