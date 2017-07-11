import { FBFrontendPage } from './app.po';

describe('fbfrontend App', () => {
  let page: FBFrontendPage;

  beforeEach(() => {
    page = new FBFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
