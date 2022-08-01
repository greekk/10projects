const newYears =  `1st Jan 2022`;

function coundown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    console.log(newYearsDate - currentDate);
}