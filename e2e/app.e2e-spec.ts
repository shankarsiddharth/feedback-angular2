import { FeedbackAngular2Page } from './app.po';

describe('feedback-angular2 App', function() {
  let page: FeedbackAngular2Page;

  beforeEach(() => {
    page = new FeedbackAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
