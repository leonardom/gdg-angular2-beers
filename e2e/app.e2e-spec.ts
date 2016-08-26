import { GdgAngular2BeersPage } from './app.po';

describe('gdg-angular2-beers App', function() {
  let page: GdgAngular2BeersPage;

  beforeEach(() => {
    page = new GdgAngular2BeersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
