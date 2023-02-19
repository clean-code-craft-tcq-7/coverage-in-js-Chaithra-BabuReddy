import { expect } from 'chai';
import { alertMessage } from '../src/alertViaEmail_controller.js';
import * as myLib from '../src/typewise-alert.js';

describe('test to check PASSIVE_COOLING', () => {
  it('test to check alert via controller', () => {
    const alertType = 'TO_CONTROLLER';
    const coolingType = 'PASSIVE_COOLING';
    let res = myLib.checkAndAlert(alertType, coolingType, -1);
    expect(res).equals(`TOO_LOW-${alertMessage.viaController}`);

    let res1 = myLib.checkAndAlert(alertType, coolingType, 37);
    expect(res1).equals(`TOO_HIGH-${alertMessage.viaController}`);

    let res2 = myLib.checkAndAlert(alertType, coolingType, 10);
    expect(res2).equals(`NORMAL-${alertMessage.viaController}`);
  });

  it('test to check alert via Email',()=>{
    const alertType = 'TO_EMAIL';
    const coolingType = 'PASSIVE_COOLING';
    let res = myLib.checkAndAlert(alertType, coolingType, -1);
    expect(res).equals(`TOO_LOW-${alertMessage.viaEmail}`);

    let res1 = myLib.checkAndAlert(alertType, coolingType, 37);
    expect(res1).equals(`TOO_HIGH-${alertMessage.viaEmail}`);

    let res2 = myLib.checkAndAlert(alertType, coolingType, 10);
    expect(res2).equals(`NORMAL-${alertMessage.viaEmail}`);
  })

});
describe('test to check HI_ACTIVE_COOLING', () => {
  it('test to check alert via controller', () => {
    const alertType = 'TO_CONTROLLER';
    const coolingType = 'HI_ACTIVE_COOLING';
    let res = myLib.checkAndAlert(alertType, coolingType, -10);
    expect(res).equals(`TOO_LOW-${alertMessage.viaController}`);

    let res1 = myLib.checkAndAlert(alertType, coolingType, 100);
    expect(res1).equals(`TOO_HIGH-${alertMessage.viaController}`);

    let res2 = myLib.checkAndAlert(alertType, coolingType, 40);
    expect(res).equals(`NORMAL-${alertMessage.viaController}`);
  });

});
describe('test to check MED_ACTIVE_COOLING', () => {
  it('test to check alert via controller', () => {
    const alertType = 'TO_CONTROLLER';
    const coolingType = 'MED_ACTIVE_COOLING';
    let res = myLib.checkAndAlert(alertType, coolingType, -20);
    expect(res).equals(`TOO_LOW-${alertMessage.viaController}`);

    let res1 = myLib.checkAndAlert(alertType, coolingType, 70);
    expect(res1).equals(`TOO_HIGH-${alertMessage.viaController}`);

    let res2 = myLib.checkAndAlert(alertType, coolingType, 30);
    expect(res).equals(`NORMAL-${alertMessage.viaController}`);
  });

});
