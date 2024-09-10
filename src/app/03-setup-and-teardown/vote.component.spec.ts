import { VoteComponent } from './vote.component';

// we pass the VoteComponent inside describe method
describe('VoteComponent', () => {
  let component: VoteComponent;

  // in testing terms this beforeEach method of testing is known as setup.
  // this beforeEach method is run before each test case.
  beforeEach(() => {
    component = new VoteComponent();
  });

  // this method is run before all the test cases.
  // beforeAll(() => {});

  // in testing terms this afterEach method of testing is known as teardown.
  // this afterEach method is run after each test case.
  // afterEach(() => {});

  // this method is run after all the test cases.
  // afterAll(() => {});

  it('it should upvote the total vote by 1', () => {
    component.upVote();
    expect(component.totalVotes).toBe(1);
  });

  it('it should downvote the total vote by 1', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  });
});
