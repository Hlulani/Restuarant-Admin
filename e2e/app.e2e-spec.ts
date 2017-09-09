import { RestuarantAdminPage } from './app.po';

describe('restuarant-admin App', () => {
  let page: RestuarantAdminPage;

  beforeEach(() => {
    page = new RestuarantAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
