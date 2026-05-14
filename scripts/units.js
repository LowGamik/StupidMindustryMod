const centurion_mark_iii = extend(UnitType, "centurion_mark_iii",{
    update(unit){
        this.super$update(unit);

        Units.nearbyEnemies(unit.team, unit.x, unit.y, 80, other => {
            if(other.shield > 0){
                other.shield -= 5;
                unit.apply(StatusEffects.overclock, 60);
            }
        })
    }
})

centurion_mark_iii.constructor = () => extend(UnitEntity, {});

centurion_mark_iii.health = 2000;
centurion_mark_iii.armor = 18;
centurion_mark_iii.hitSize = 22;
centurion_mark_iii.speed = 2;
centurion_mark_iii.rotateSpeed = 1.2;
centurion_mark_iii.omniMovement = false;