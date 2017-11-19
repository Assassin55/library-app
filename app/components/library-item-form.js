import Component from '@ember/component';

export default Component.extend({

  actions: {
    buttonClicked(param) {
      this.sendAction('action', param);
    }
  }
});
