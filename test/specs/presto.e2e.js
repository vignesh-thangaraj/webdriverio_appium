const find = require('appium-flutter-driver');
const wdio = require('webdriverio');
const assert = require('assert');
const { config } = require('../../wdio.conf');
const driver = null;

describe('My sample workflow test', async () =>{



    it('Getting started and moving to maps screen', async () =>{

        driver = await wdio.remote({
            capabilities: config.capabilities,
            port: config.port,
            path: config.baseUrl
        });

        
        await driver.execute('flutter:checkHealth');
        await driver.execute('flutter:clearTimeline');
        await driver.execute('flutter:forceGC');

        const counterTextFinder = find.byValueKey('counter');
        const buttonFinder = find.byValueKey('increment');
        assert.strictEqual(await driver.getElementText(counterTextFinder), '0');
        //Long Press using TouchAction with wait
        await driver.touchAction([{action: 'longPress',element: { elementId: buttonFinder }},{action: 'wait', ms: 10000},{action: 'release'}]);
        assert.strictEqual(await driver.getElementText(counterTextFinder), '1');
        await driver.deleteSession();
        // await driver.execute('flutter:waitFor', flutterDriver.byText('Get started'));
        // await driver.elementClick(flutterDriver.byText('Get started'))
    })


    
})