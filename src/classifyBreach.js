let inferBreach = require('./inferBreach.js');

function classifyTemperatureBreach(coolingType, temperatureInC) {
    let limit = getCoolingType(coolingType);
    return inferBreach.inferBreach(temperatureInC, limit.lowerLimit, limit.upperLimit);
}

function getCoolingType(coolingType) {
    let limitOfCoolingType = COOLING_TYPE[coolingType];
    if (limitOfCoolingType) {
        return { lowerLimit: limitOfCoolingType[0], upperLimit: limitOfCoolingType[1] };
    }
    return { lowerLimit: 0, upperLimit: 0 }
}

const COOLING_TYPE = {
    'PASSIVE_COOLING': [0, 35],
    'HI_ACTIVE_COOLING': [0, 45],
    'MED_ACTIVE_COOLING': [0, 40]
}

module.exports = { classifyTemperatureBreach }