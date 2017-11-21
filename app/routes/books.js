import Route from '@ember/routing/route';

export default Route.extend({

  bookInEdit: '',

  model() {
    return this.store.findAll('book');
  },

  actions: {
    editBook(book) {
      book.set('isEditing', true);
      this.set('bookInEdit', book);
    },

    saveBook(book) {
      book.save();
      book.set('isEditing', false);
      this.set('bookInEdit', '');
    },

    cancelBookEdit(book) {
      if (this.get('bookInEdit') != '') {
        book.rollbackAttributes();
        book.set('isEditing', false);
        this.set('bookInEdit', '');
      }
    },

    willTransition() {
      this.send('cancelBookEdit', this.get('bookInEdit'));
    }
  }
});
