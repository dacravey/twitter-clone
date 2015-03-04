Twitter.TweetsController = Ember.ArrayController.extend({
  itemController: 'timestamp',
  sortProperties: ['timestamp'],
  sortAscending: false,
  isAdding: false,
  actions: {
    addTweet: function() {
      this.set('isAdding', true);
    },

    saveTweet: function() {
      this.set('timestamp', new Date());
      tweets.addObject({message: this.newMessage, hashtag: this.newHashtag, timestamp: this.timestamp});
      this.set('newMessage', null);
      this.set('newHashtag', null);
      this.set('isAdding', false);
    }
  }
});
