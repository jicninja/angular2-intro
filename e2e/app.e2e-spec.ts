import { VenzeePage } from './app.po';

describe('venzee App', function() {
  let page: VenzeePage;

  beforeEach(() => {
    page = new VenzeePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
