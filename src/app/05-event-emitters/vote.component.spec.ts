import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes: any = null;
    component.voteChanged.subscribe((tVotes) => (totalVotes = tVotes));
    component.upVote();
    expect(totalVotes).toBe(1);
  });
});
