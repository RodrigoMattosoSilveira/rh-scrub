import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
	let page: AppPage;
	
	beforeEach(() => {
		page = new AppPage();
	});
	
	describe('workspace-project App', () => {
		
		it('should display welcome message', () => {
			page.navigateTo();
			expect(page.getTitleText()).toEqual('rh-scrub app is running!');
		});
		
		afterEach(async () => {
			// Assert that there are no errors emitted from the browser
			const logs = await browser.manage().logs().get(logging.Type.BROWSER);
			expect(logs).not.toContain(jasmine.objectContaining({
				level: logging.Level.SEVERE,
			} as logging.Entry));
		});
	});
	
	describe('Rolling Hills website', () => {
		describe('is there and have the MEMBER LOGIN button', () => {
			beforeAll(() => {
				browser.waitForAngularEnabled(false);
				page.navigateToRh();
			});
			it('should find RH Contact Us', () => {
				expect(page.getContactUsText()).toEqual('CONTACT US');
			});
			it('should find MEMBER LOGIN button', () => {
				expect(page.getMemberLogInButton()).toEqual('MEMBER LOGIN');
			});
			// xdescribe('log in', () => {
			// 	beforeAll(() => {
			// 		page.navigateToRhLogin();
			// 	});
			// 	it('should find RH Contact Us', () => {
			// 		expect(page.getContactUsText()).toEqual('CONTACT US');
			// 	});
			// 	it('should find MEMBER LOGIN button', () => {
			// 		expect(page.getMemberLogInButton()).toEqual('MEMBER LOGIN');
			// 	});
			//
			// 	afterAll(async () => {
			// 		browser.waitForAngularEnabled(true);		});
			// });
			afterAll(async () => {
				browser.waitForAngularEnabled(true);
			});
			
		});
	});
});
