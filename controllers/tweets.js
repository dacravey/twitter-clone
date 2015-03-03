Twitter.TweetsController = Ember.ArrayController.extend({
  isAdding: false,
  actions: {
    addTweet: function() {
      this.set('isAdding', true);
    },

    saveTweet: function() {
      tweets.addObject({message: this.newMessage, hashtag: this.newHashtag, timestamp: this.newTimestamp});
      this.set('newMessage', null);
      this.set('newHashtag', null);
      this.set('newTimestamp', null);      
      this.set('isAdding', false);
    }
  }
});
