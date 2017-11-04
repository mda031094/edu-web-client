import { EduWebClientPage } from './app.po';

describe('edu-web-client App', () => {
  let page: EduWebClientPage;

  beforeEach(() => {
    page = new EduWebClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
