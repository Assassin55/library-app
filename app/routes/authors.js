import Route from '@ember/routing/route';

export default Route.extend({

  authorInEdit: '',

  model() {
    return this.store.findAll('author');
  },

  actions: {
    editAuthor(author) {
      author.set('isEditing', true);
      this.set('authorInEdit', author);
    },

    cancelAuthorEdit(author) {
      if (author != '') {
        author.set('isEditing', false);
        this.set('authorInEdit', '');
        author.rollbackAttributes();
      }
    },

    saveAuthor(author) {
      this.set('authorInEdit', '');
      author.set('isEditing', false);
      author.save();
    },

    willTransition() {
      this.send('cancelAuthorEdit', this.get('authorInEdit'));
    }
  }
});
