const newYears =  '1 Jan 2023';

function coundown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = Math.floor((newYearsDate - currentDate) /  1000);
    const days = Math.floor((totalSeconds / 3600) / 24);
    const hours =  Math.floor(days / 60);
    const minutes =  0;
    
    
    console.log(`${days} : ${hours} : ${minutes} : ${totalSeconds}`);
}

coundown();
setInterval(coundown, 1000);
