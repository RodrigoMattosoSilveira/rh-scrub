import {browser, by, element, protractor} from 'protractor';

export class AppPage {
  	navigateTo = (): Promise<unknown> => {
		return browser.get(browser.baseUrl) as Promise<unknown>;
	}

	getTitleText = (): Promise<string> => {
		return element(by.css('app-root .content span')).getText() as Promise<string>;
	}
	
	navigateToRh = (): Promise<unknown> => {
		return  browser.get('https://www.rollinghillsclub.com/') as Promise<unknown>;
	}
	
	getContactUsText = (): Promise<string> => {
		return element(by.xpath('/html[1]/body[1]/div[1]/footer[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]')).getText() as Promise<string>
	}
	
	getMemberLogInButton = (): Promise<string> => {
		return Promise.resolve(element(by.xpath("/html[1]/body[1]/div[1]/header[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h4[1]/a[1]")).getText());
	}
	//
	// navigateToRhLogin = (): Promise<string> => {
  	// 	// click on the MEMBER LOGIN button
 	// 	return element(by.xpath("/html[1]/body[1]/div[1]/header[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h4[1]/a[1]")).click()
	// 		.then((el: any) => {
	// 			element(by.cssSelector("body")).sendKeys(protractor.Key.ENTER, protractor.Key.PAGE_DOWN).then((v2: any) => {
	// 				return element(by.xpath('/html[1]/body[1]/div[3]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/h1[1]/span[1]')).getText() as Promise<string>;
	// 			});
	// 		})
	// }
	//
	// navigateToRhLoginPage = (): Promise<unknown> => {
 	// 	// find the MEMBER LOGIN button
	// 	// Click on the MEMBER LOGIN button
	// 	// Navivate to the next tab
	// 	// Ensure we have the 'Rolling Hills Club - Online Member & Guest Services' page
	//
	// }
}
