import { EventEmitter } from '@angular/core';

export class VoteComponent {
  totalVotes = 0;
  voteChanged = new EventEmitter(); // EventEmitter is an observable to which we can subscribe.

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }
}
