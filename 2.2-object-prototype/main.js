function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = Number(new Date());
    let birthdayDate = Number(new Date(birthday));
    let diff = now - birthdayDate;
    let age = diff /31536000000;
    console.log(age);
    
    if (age > 18) {
        return 'Да';
    } else if (age < 18) {
        return 'Нет';
    };
};

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
};

function getAnimalSound(animal) {
    if (typeof animal == undefined) {
        return null;
    };    
    let sound = animal.sound;
    return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++){
        sum += marks[i] * 1;
    };

    let average = sum/marks.length;
    let roundedAverage = Math.round(average);
    
    return roundedAverage;
};