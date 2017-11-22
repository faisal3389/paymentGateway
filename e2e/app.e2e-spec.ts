import { PaymentGatewayPage } from './app.po';

describe('payment-gateway App', () => {
  let page: PaymentGatewayPage;

  beforeEach(() => {
    page = new PaymentGatewayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
