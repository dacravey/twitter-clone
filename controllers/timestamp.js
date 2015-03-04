Twitter.TimestampController = Ember.ObjectController.extend({
  timestampShowing: true,
  showTimestamp: function() {
    this.set('timestampShowing', true);
  },

  hideTimestamp: function() {
    this.set('timestampShowing', false);
  }
});
