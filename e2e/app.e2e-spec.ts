import { CraigslistClonePage } from './app.po';

describe('craigslist-clone App', () => {
  let page: CraigslistClonePage;

  beforeEach(() => {
    page = new CraigslistClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
