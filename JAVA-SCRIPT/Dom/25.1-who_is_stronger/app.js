const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
whoIsStronger(hero.getStrength);

// 1.
// the function whoIsStronger get a parmeter hero.getStrength whice will be invoke inside the whoIsStronger function but the this keyword refer to nothing and for result its undifiend

// 2.
const bindHero = hero.getStrength;
whoIsStronger(bindHero.bind(hero));
