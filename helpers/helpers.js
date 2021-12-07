import {utc} from 'moment';

export const locDataModel = {
    Duration: 0,
    WeightReading: '-',
    Address: null,
    Latitude: 0,
    Longitude: 0,
    Direction: 0,
    Speed: 0,
    EngineStatus: -1,
    IgnitionStatus: -1,
    Mileage: 0,
    Temp: 0,
    HUM: 0,
    DoorStatus: '-',
    IsValidRecord: '-',
    RemainingFuel: '-',
    StoppedTime: '-',
    StreetSpeed: '-',
    WeightVolt: -1,
    EngineTotalRunTime: -1,
    RPM: -1,
    AccelPedalPosition: -1,
    MileageMeter: -1,
    TotalMileage: -1,
    FuelLevelPer: -1,
    InstantFuelConsum: -1,
    TotalFuelConsum: -1,
    CoolantTemp: -1
}

export const locConfigModel = {
    SerialNumber: null,
    Serial: null,
    WorkingHours: -1,
    HeadWeight: 0,
    TailWeight: 0,
    TotalWeight: 0,
    MinVoltage: 0,
    MaxVoltage: 0,
    HasSensor: 0,
    Duration: 0,
    WeightReading: '-',
    Address: null,
    RecordDateTime: null,
    Latitude: 0,
    Longitude: 0,
    Direction: 0,
    Speed: 0,
    EngineStatus: -1,
    IgnitionStatus: -1,
    VehicleStatus: -1,
    Mileage: 0,
    Temp: 0,
    HUM: 0,
    DoorStatus: '-',
    IsValidRecord: '-',
    RemainingFuel: '-',
    StoppedTime: '-',
    StreetSpeed: '-',
    WeightVolt: -1,
    EngineTotalRunTime: -1,
    RPM: -1,
    AccelPedalPosition: -1,
    MileageMeter: -1,
    TotalMileage: -1,
    FuelLevelPer: -1,
    InstantFuelConsum: -1,
    TotalFuelConsum: -1,
    CoolantTemp: -1
};

export const Date2KSA = (_date, _zone = 3) => utc(_date).utcOffset(_zone * 60).format('LL hh:mm:ss a')

export const Date2UTC = _date => new Date((_date.indexOf('Date') < 0) ? _date + '+0000' : utc(_date).format('YYYY-MM-DDTHH:mm:ss') + '-0300');

export const isDateExpired = (_locInfo) => {
    _locInfo.RecordDateTime = _locInfo.RecordDateTime ?? Date2KSA(new Date((new Date()).getFullYear(), 0, 1));
    let age = (Date.now() - new Date(_locInfo.RecordDateTime)) / 36e5;
    return (((_locInfo.EngineStatus !== 0) && (age > 0.5)) || (age > 4));
}

export const GetStatusString = (vehicleStatus) => {
    switch (vehicleStatus) {
        case 600 : case 5:
            return "Offline.";
        case 101:
            return "Vehicle is Over Speeding.";
        case 100:
            return "Vehicle is running over street speed.";
        case 0:
            return "Vehicle is Stopped.";
        case 1:
            return "Vehicle is running normally.";
        case 2:
            return "Vehicle in Idle State.";
        default:
            return "Invalid Status";
    }
}

export const isValidAddress = (_address) => !((_address == null) || (_address == 'Address not found') || _address.includes("("));

export const WeightVoltToKG = (_locInfo, _settings) => {
    if (_locInfo.WeightVolt < 0) return _settings.WeightReading;
    if ((_locInfo.WeightVolt < _settings.MinVoltage) || (_settings.MinVoltage == _settings.MaxVoltage)) return "Not Available";

    let weight = (_settings.MaxVoltage == _settings.MinVoltage) ? 0 : (_locInfo.WeightVolt - _settings.MinVoltage) * _settings.TotalWeight / (_settings.MaxVoltage - _settings.MinVoltage);
    weight += _settings.HeadWeight;
    return weight.toFixed(1);
}

export const iconUrl = VehicleStatus => {
    let iconUrl = "/assets/images/cars/";
    switch (VehicleStatus) {
        case 0:
        case 1:
        case 2:
        case 5:
        case 100:
        case 101:
            iconUrl += VehicleStatus + ".png";
            break;
        case 600:
            iconUrl += "5.png";
            break;
        default:
            iconUrl += "201.png";
    }
    return iconUrl;
}

export const getKey = state => {
    // 1 : Running
    // 0 : Stopped
    // 2 : Idling
    // 5 : Offline
    // 101 : Over Speed
    // 100 : Over Street Speed
    // 203 : Invalid location
    switch (state) {
        case 0:
            return 'stopped'
        case 1:
            return 'running'
        case 2:
            return 'idling'
        case 5: case 600:
            return 'offline'
        case 100:
            return 'over_street_speed'
        case 101:
            return 'over_speed'
        case 203: default:
            return 'invalid_location'
    }
}
