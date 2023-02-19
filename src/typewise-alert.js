
import { sendToController } from "./alertViaEmail_controller.js";
import { sendToEmail } from "./alertViaEmail_controller.js";
import { classifyTemperatureBreach } from "./classifyBreach.js";

export function checkAndAlert(alertTarget, batteryChar, temperatureInC) {
  const breachType = classifyTemperatureBreach(batteryChar, temperatureInC);
  return alert(breachType, alertTarget);
}

export function alert(breachType, alertTarget) {
  if (alertTarget == 'TO_CONTROLLER') {
    return sendToController(breachType);
  } else if (alertTarget == 'TO_EMAIL') {
    return sendToEmail(breachType);
  }
}


