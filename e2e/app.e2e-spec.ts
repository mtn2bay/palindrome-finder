import { PalindromeFinderPage } from './app.po';

describe('palindrome-finder App', function() {
  let page: PalindromeFinderPage;

  beforeEach(() => {
    page = new PalindromeFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
