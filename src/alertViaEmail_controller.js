export function sendToController(breachType) {
    const header = 0xfeed;
    console.log(`${header}, ${breachType}`);
    return `${breachType}-${alertMessage.viaController}`
}

export function sendToEmail(breachType) {
    const recepient = 'a.b@c.com';
    const toReceiver = `To: ${recepient}`;
    if (breachType == 'TOO_LOW') {
        console.log(toReceiver);
        console.log('Hi, the temperature is too low');
    } else if (breachType == 'TOO_HIGH') {
        console.log(toReceiver);
        console.log('Hi, the temperature is too high');
    }
    return `${breachType}-${alertMessage.viaEmail}`
}

export const alertMessage={
    viaController:'Alert via Controller',
    viaEmail:'Alert via Email'
}