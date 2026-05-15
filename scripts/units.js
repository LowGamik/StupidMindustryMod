const centurion = extend(TankUnitType,"centurion",{
    health: 800,
    armor: 20,
    targetAir: false
});
centurion.constructor = () => extend(TankUnit,{});