import Component from '@ember/component';
import Ember from 'ember';

const { observer, run } = Ember;

export default Component.extend({
  tagName: 'span',

  classNames: ['label label-success label-fade'],
  classNameBindings: ['isShowing:label-show'],

  isShowing: false,
  isShowingChanged: observer('isShowing', function() {
    this._runLater = run.later(() => this.set('isShowing', false), 3000);
  }),

  resetRunLater() {
    this.set('isShowing', false);
    run.cancel(this._runLater);
  },

  willDestroy() {
    this.resetRunLater();
    this._super(...arguments);
  }
});
