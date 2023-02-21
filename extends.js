class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedBack() {
        console.log(`${this.name} thank your provide`);
    }
}
class Instructor extends TeamMember {
    name;
    designation = 'Web Course Instructor'
    team = 'web team'

    constructor(name, location) {
        supper(name, location);
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
    provideFeedBack() {
        console.log(`${this.name} thank your provide`);
    }
}

class Developer extends TeamMember {
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech) {
        super(name, location)
        this.tech = tech;
    }
    developerFeature(feature) {
        console.log(`Please develop the feature ${feature}`);
    }
    release(version) {
        console.log(`Please release the version ${version}`);
    }

}
class JobPlacement extends TeamMember {
    designation = 'Job placement Commandos'
    team = 'Job Placement'
    region;
    constructor(name, location, region) {
        super(name, location)
        this.region = region;
    }
    provideResume(feature) {
        console.log(`Please develop the feature ${feature}`);
    }
    release(version) {
        console.log(`Please release the version ${version}`);
    }
}

const alia = new Developer('Alia Bhat', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedBack();

const bipsha = new JobPlacement('bipasha', 'kolkata', 'India');
console.log(bipsha);
bipsha.provideFeedBack();
bipsha.release();