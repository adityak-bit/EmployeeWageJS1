{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == IS_ABSENT){
        console.log("Employee is ABSENT");
        return;
    }else{
        console.log("Employee is PRESENT");
    }
}

{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;

    function getWorkingHours(empCheck){
        switch(empCheck){
            case IS_PART_TIME:
                return PART_TIME_HOURS;
                break;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
                break;
            default:
                return 0;        
        }

    }

    function calcDailyWage(empHrs){
        return empHrs * WAGE_PER_HOUR;
    }
    
    let empHrs = 0;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empWageArray = new Array();
    while(totalEmpHrs <= MAX_HRS_IN_MONTH &&
          totalWorkingDays <= NUM_OF_WORKING_DAYS){
              totalWorkingDays++;
              let empCheck = Math.floor(Math.random() * 10) % 3;
              empHrs = getWorkingHours(empCheck);
              totalEmpHrs += getWorkingHours(empCheck);
              empWageArray.push(calcDailyWage(empHrs));
        }
   
    let empWage = calcDailyWage(totalEmpHrs);
    console.log("UC6 - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage);
    
    //Array Helper Functions
    //UC 7A - Calc total wage using Array forEach traversal or reduce method
    let totEmpWage = 0;
    function sum(dailyWage){
        totEmpWage += dailyWage
    }

    empWageArray.forEach(sum);
    console.log("UC7A - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+totEmpWage);

    function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage;
    }
    console.log("UC7A - Emp Wage with reduce: "+empWageArray.reduce(totalWages, 0))

    //UC7B - Show the day along with daily wage using Array Map Helper function
    let dailyCounter = 0;
    function mapDayWithWage(dailyWage){
        dailyCounter++;
        return dailyCounter + " = " + dailyWage;
    }

    let mapDayWithWageArray = empWageArray.map(mapDayWithWage);
    console.log("UC7B - Daily Wage Map");
    console.log(mapDayWithWageArray);

    //UC7C - Show Days when Full time wages of 160 were earned
    function fullTimeWages(dailyWage){
        return dailyWage.includes("160");
    }

    let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWages);
    console.log("UC7C - Daily Wage Filter When FullTime Wage Earned");
    console.log(fullDayWageArray);

    //UC7D - Find the first occurrence when Full Time Wage was earned using Find Function
    function findFullTimeWages(dailyWage){
        return dailyWage.includes("160");
    }

    console.log("UC7D - First day when Full Time Wage was Earned: "+mapDayWithWageArray.find(findFullTimeWages));

    //UC7E - Check if Every Element of Full Time Wage is truly holding Full Time Wage
    function isAllFullTimeWage(dailyWage){
        return dailyWage.includes("160");
    }

    console.log("UC7E - Check all element have Full Time Wage: "+fullDayWageArray.every(isAllFullTimeWage));

    //UC7F - Check if there is any Part Time Wage
    function isAnyPartTimeWage(dailyWage){
        return dailyWage.includes("80");
    }

    console.log("UC7F - Check if any Part Time Wage: "+mapDayWithWageArray.some(isAnyPartTimeWage));

    //UC7G - Find the number of days the Employee worked
    function totalDayaWorked(numOfDays, dailyWage){
        if(dailyWage > 0) return numOfDays + 1;
        return numOfDays;
    }

    console.log("UC7G - Number of days employee worked: "+empWageArray.reduce(totalDayaWorked, 0));
}