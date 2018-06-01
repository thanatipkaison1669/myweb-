import { MywebPage } from './app.po';

describe('myweb App', function() {
  let page: MywebPage;

  beforeEach(() => {
    page = new MywebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
