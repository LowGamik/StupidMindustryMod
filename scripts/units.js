const centurion = extend(TankUnitType,"centurion-mk-i",{
    localizedName: "Centurion Mk. I",
    health: 800,
    armor: 20,
    targetAir: false,
    speed: 0.5,
    range: 120,
    rotateSpeed: 2,
    itemCapacity: 0,
    hitSize: 20
});
centurion.constructor = () => extend(TankUnit,{});