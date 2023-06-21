class Clock {
  constructor() {
    // 1. Create a Date object.
    this.date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getMinutes();
    this.milliseconds = this.date.getMilliseconds();
    
    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    this._tick();
  }

  printTime() {
    let timeString
    // Format the time in HH:MM:SS
    if (this.milliseconds > 99) {
        timeString = `${this.hours}:${this.minutes}:${this.seconds}.${this.milliseconds}`;
    } else if (this.milliseconds > 9) {
        timeString = `${this.hours}:${this.minutes}:${this.seconds}.0${this.milliseconds}`;
    } else {
        timeString = `${this.hours}:${this.minutes}:${this.seconds}.00${this.milliseconds}`;
    }
    // Use console.log to print it.
    console.log(timeString);
  }

  _tick() { 
    // 1. Increment the time by one second.
    // while (b === 0) {
    setInterval(() => {
            if(this.seconds=== 59 && this.minutes=== 59 && this.hours === 23 && this.milliseconds === 999){
                [this.milliseconds,this.seconds,this.minutes,this.hours] = [0,0,0,0];
            } else if (this.seconds=== 59 && this.minutes=== 59 && this.milliseconds === 999) {
                [this.milliseconds,this.seconds,this.minutes] = [0,0,0];
                this.hours++;
            } else if (this.seconds=== 59  && this.milliseconds === 999) {
                this.milliseconds = 0;
                this.seconds = 0;
                this.minutes++;
            } else if (this.milliseconds === 999) {
                this.milliseconds = 0;
                this.seconds++;
            } else {
                this.milliseconds++;
            }
            
            this.printTime()
        }
         ,1);
        
    

    }
  
}


const clock = new Clock();