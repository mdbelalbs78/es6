class Instructor {
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}

const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);

const soliman = new Instructor('Solaiman Khan ',  'dhaka');
console.log(soliman);

aamir.startSupportSession('9.00');
aamir.createQuiz(60);