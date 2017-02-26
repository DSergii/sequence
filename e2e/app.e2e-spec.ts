import { StreamPage } from './app.po';

describe('stream App', function() {
  let page: StreamPage;

  beforeEach(() => {
    page = new StreamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
