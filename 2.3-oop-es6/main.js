class Weapon {
    constructor(name, attack, durability, range) {
      this.name = name;
      this.attack = attack;
      this.durability = durability;
      this.range = range;
    };
  
    takeDamage(damage) {
      this.durability = this.durability - damage;
      if (this.durability < 0) {
        this.durability = 0;
      };
    };
  
    getDamage() {
      if (this.durability >= 0.3 * Object.getPrototypeOf(this).durability) {
        return this.attack;
      } else if (this.durability < 0.3 * Object.getPrototypeOf(this).durability && this.durability > 0) {
        return this.attack / 2;
      } else if (this.durability === 0) {
        return 0;
      };
    };
  
    isBroken() {
      if (this.durability > 0) {
        return false;
      } else if (this.durability === 0) {
        return true;
      };
    };
  };
  
  class Arm extends Weapon {
    constructor() {
      super('Рука',	1,	Infinity,	1)
      Arm.prototype.durability = Infinity;
    };
  };
  
  class Bow extends Weapon {
    constructor() {
      super('Лук',	10,	200,	3)
      Bow.prototype.durability = 200;
    };
  };
  
  class Sword extends Weapon {
    constructor() {
      super('Меч',	25,	500,	1)
      Sword.prototype.durability = 500;
    };
  };
  
  class Knife extends Weapon {
    constructor() {
      super('Нож',	5,	300,	1)
      Knife.prototype.durability = 300;
    };
  };
  
  class Staff extends Weapon {
    constructor() {
      super('Посох', 8, 300, 2);
      Staff.prototype.durability = 300;
    };
  };
  
  class ImprovedBow extends Bow {
    constructor() {
      super(200);
      this.name = 'Длинный лук';
      this.attack = 15;
      this.range = 4;
      ImprovedBow.prototype.durability = 200;
    };
  };
  
  class ImprovedSword extends Sword {
    constructor() {
      super(1);
      this.name = 'Секира';
      this.attack = 27;
      this.durability = 800;
      ImprovedSword.prototype.durability = 800;
    };
  };
  
  class ImprovedStaff extends Staff {
    constructor() {
      super(300);
      this.name = 'Посох Бури';
      this.attack = 10;
      this.range = 3;
      ImprovedStaff.prototype.durability = 300;
    };
  };
  
  const arm = new Arm();
  const bow = new Bow();
  const sword = new Sword();
  const knife = new Knife();
  const staff = new Staff();
  const improvedBow = new ImprovedBow();
  const improvedSword = new ImprovedSword();
  const improvedStaff = new ImprovedStaff();
  
  
  console.log(knife);
  knife.takeDamage(800);
  console.log(knife);
  console.log(knife.getDamage());
  console.log(knife.isBroken());

  //Задача 3

  class StudentLog {
    constructor(name) {
      this.name = name;
    };
  
    getName() {
      console.log(this.name);
    };
  
    addGrade(grade, subject) {
      if (this[subject] === undefined) {
      this[subject] = [] ;
      };
  
      if (grade >= 1 && grade <=5) {
        this[subject].push(grade);
      } else {
        console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
      };
      return this[subject].length
    };
  
    getAverageBySubject(subject) {
      if (this[subject] === undefined) {
        return 0;
      };
    
      let sum = 0;
      for (let i = 0; i < this[subject].length; i++) {
          sum += this[subject][i];
      };
  
      return sum/this[subject].length;
    };
  
    getTotalAverage() {
      let totalMarks = [];
  
      for (let key in this) {
        if (key != 'name') {
        totalMarks.push(this[key]);
        };
      };
  
      if (totalMarks.length === 0) {
        return 0;
      };
  
      const allMarksList = totalMarks.join(',');
      const marksListForCount = allMarksList.split(',');
  
      let sum = 0;
      for (let i = 0; i < marksListForCount.length; i++) {
          sum += parseInt(marksListForCount[i]);
      };
      return sum/marksListForCount.length;
    }
  
  };
  
  const log = new StudentLog('Олег Никифоров');
  // console.log(log);
  // console.log(log.getName());
  console.log(log.addGrade(4, 'algebra'));
  console.log(log.addGrade(5, 'geometry'));
  console.log(log.addGrade(3, 'algebra'));
  console.log(log.addGrade(4, 'geometry'));
  console.log(log.addGrade(2, 'geometry'));
  console.log(log);
  console.log(log.getAverageBySubject('geometry'));
  console.log(log.getAverageBySubject('algebra'));
  console.log(log.getAverageBySubject('math'));
  console.log(log.getTotalAverage());