// Задача 1

function getSolutions(a,b,c) {
    let D = b**2 - 4*a*c;
    
    if (D < 0) {
        let result = {
            D : D
        };
        return result;
    } else if (D == 0) {
        let x1 = -b/2*a;
        let result = {
            roots :  x1,
            D : D,
        };
        return result;
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D))/2*a;
        let x2 = (-b - Math.sqrt(D))/2*a;
        let result = {
            roots : [x1, x2],
            D : D
        };
        return result;
    };
};

function showSolutionsMessage(a,b,c) {
    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    };
};

showSolutionsMessage(2,4,2);

//Задача 2

let data = {
    english : [ 5, 5, 3, 4, 3 ],
    algebra : [4, 4, 5, 5, 2],
    russian : [4, 4, 3, 2, 4],
    geometry : [3, 5, 2, 4, 4],
    physics : [3, 3, 4, 4, 2],
    chemistry : [3, 3, 3, 3],
    literature : [5, 5, 4, 4, 3],
    biology : [4, 4, 3, 3, 3],
};


 function averageMark( marks ) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    };
    return sum/marks.length;
  };

function getAverageScore(data) {
  if (Object.keys(data).length > 10) {
    return 'Уменьшите количество предметов до 10'
  };

  let newData = {};

  for (let key in data) {
  let average = averageMark(data[key]);
  newData[key] = average;
  };

  let totalAverage = new Array;

  for (let key in newData) {
  totalAverage.push(newData[key]);
  };

  newData.average = averageMark(totalAverage);
  
  return newData;
};

console.log (getAverageScore(data));

// Задача 3

secretData = {
    aaa : 0,
    bbb : 1,
};

function getPersonData(secretData) {
    let result = {};
    result.firstName = getName(secretData.aaa);
    result.LastName = getName(secretData.bbb);
    return result;
};

function getName(code) {
    if (code === 0) {
        return 'Родриго';
    } else if (code === 1) {
        return 'Эмильо';
    };
}

getPersonData(secretData);


