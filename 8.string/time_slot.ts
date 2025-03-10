// 1️⃣ crete a time schedule for a Doctor who available for 10 to 3;

function getAllSlot(time: string) {
    //step 1: - remove all unnecessary space
    time = time.toLowerCase()
        .replaceAll(' am ', 'am')
        .replaceAll(' pm ', 'pm')
        .replaceAll(' - ', '-');
    
    //step 2: - after removing space split the string in half
    let parts: string[] = time.split('-');
    //step 3: - check it's divided two equal part or not
    if (parts.length != 2) {
        console.log('Invalid time range format');
        return;
    }


    //step 4: - change 24 hour format
    function convartin24Hour(timeStr:string):number {
        timeStr = timeStr.trim();
        
        let isPm: boolean = timeStr.includes('pm');
        let hour: number  = parseInt(timeStr.split(' ')[0]);

        

        if (isPm == true && hour != 12) {
            hour = hour + 12;
        } 

        if (isPm == false && hour == 12) {
            hour = 0;
        }
        return hour;
    }

    let start: number = convartin24Hour(parts[0]);
    let end: number = convartin24Hour(parts[1]);

    if (start >= end) {
        console.log('Invalid Time range');
        return;
    }

    let slots: string[] = [];

    let currentHour:number = start;

    let nextHour:number = start + 1;

    let suffix1 = '';
    let suffix2 = '';

    for (let i = start + 1 ; i <= end; i++) {
        if ((i - 1) % 12 == 0) {
            currentHour = 12
        }else {
            currentHour = (i - 1) % 12;
        }

        if (i%12 == 0) {
            nextHour = 12;
        } else {
            nextHour = i % 12;
        }

        if ((i-1) < 12) {
            suffix1 = 'AM';
        } else {
            suffix1 = 'PM';
        }

        if (i < 12) {
            suffix2 = 'AM';
        } else {
            suffix2 = 'PM';
        }

        slots.push(`${currentHour} ${suffix1} - ${nextHour} ${suffix2}`);
    }
    console.log(slots);    
}

getAllSlot('10am - 3pm');