
let sendToController = require("./alertViaEmail_controller.js");
let sendToEmail = require("./alertViaEmail_controller.js");
let classifyBreach = require("./classifyBreach.js");

function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
  const breachType = classifyBreach.classifyTemperatureBreach(batteryChar, temperatureInC);
  return alert(breachType, alertTarget);
}

function alert(breachType, alertTarget) {
  if (alertTarget == 'TO_CONTROLLER') {
    return sendToController.sendToController(breachType);
  } else if (alertTarget == 'TO_EMAIL') {
    return sendToEmail.sendToEmail(breachType);
  }
}
module.exports = { checkAndAlert }

