// // CODE here for your Lambda Classes
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(Persattributes) {
        this.name = Persattributes.name;
        this.age = Persattributes.age;
        this.location = Persattributes.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
};

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(Inattributes) {
        super(Inattributes);
        this.specialty = Inattributes.specialty;
        this.favLanguage = Inattributes.favLanguage;
        this.catchPhrase = Inattributes.catchPhrase;
    }
        demo(subject){
           return `Today we are learning about ${subject}.`     
        }
        grade(student, subject){
            return `${student} receives a perfect score on ${subject}.`
        }
        changeGrade(student){
            return student.grade + (Math.random() < 0.5 ? -1 : 1) * Math.floor((Math.random()*50)+1);
        }
}

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor(Sattributes) {
        super(Sattributes);
        this.previousBackground = Sattributes.previousBackground;
        this.className = Sattributes.className;
        this.favSubjects = Sattributes.favSubjects;
        this.grade = Sattributes.grade;
    }
        listsSubjects(){
            return `${this.name}'s favorite subjects are  ${this.favSubjects}.`
        }
        PRAssignment(subject){
            return `${this.name} has submitted a PR for ${subject}.`
        }
        sprintChallenge(subject){
            return `${this.name} has begun sprint challenge on ${subject}.`
        }
        graduate(student){
            if (student.grade >70){
                console.log(`Congrats ${this.name}, you graduated!`)
            } else {
                console.log(`Sorry, ${this.name}, better luck next time!`)
            }
        }
}


// #### Project Manager

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor(PMattributes) {
        super(PMattributes);
        this.gradClassName = PMattributes.gradClassName;
        this.favInstructor = PMattributes.favInstructor;
    }
        standUp(channel){
            return `${this.name} announces to ${channel}, @channel standy times!`
        }
        debugsCode(student, subject){
            return `${this.name} debugs ${student}'s code on ${subject}.`
        }
}


const ken = new Instructor({
    name: 'ken',
    age: 35,
    location: 'Cincinatti',
    specialty: 'statistics',
    favLanguage: 'R',
    catchPhrase: 'Im the kid' 
});

const griffey = new Instructor({
    name: 'Griffey',
    age: '30',
    location: 'Pittsburgh',
    specialty: 'Web Development',
    favLanguage: 'Javascript',
    catchPhrase: 'Do as I do'
});

const junior = new Instructor({
    name: 'Junior',
    age: 25,
    location: 'Seattle',
    specialty: 'Instructing',
    favLanguage: 'Java',
    catchPhrase: 'This is awesome'
});

const barry = new Student({
    name: 'Barry',
    age: 27,
    location: 'San Francisco',
    previousBackground: 'Baseball Player',
    className: 'Web22',
    favSubjects: ['baseball', 'statistics','Web Development'],
    grade: 65
});

const bonds = new Student({
    name: 'Bonds',
    age: 32,
    location: 'Florida',
    previousBackground: 'Lawyer',
    className: 'iOS10',
    favSubjects: ['math', 'science', 'Biology'],
    grade: 70
});

const joe = new Student({
    name: 'Joe',
    age: 17,
    location: 'Minnesota',
    previousBackground: 'Garbage man',
    className: 'Data Science 5',
    favSubjects: ['history', 'music', 'art'],
    grade: 75
});

const madison = new ProjectManager({
    name: 'Madison',
    age: 29,
    location: 'Oakland',
    specialty: 'Pitching',
    favLanguage: 'Spanish',
    catchPhrase: 'Go big or go home',
    gradClassName: 'Class of 22',
    favInstructor: 'Brad the bad'
});

const buster = new ProjectManager({
    name: 'Buster',
    age: 21,
    location: 'Annapolis',
    specialty: 'Explaining',
    favLanguage: 'Python',
    catchPhrase: 'That assignment was a homerun',
    gradClassName: 'Da Bees',
    favInstructor: 'Bruce Bochie'
});

const jordan = new ProjectManager({
    name: 'Jordan',
    age: 38,
    location: 'Kansas City',
    specialty: 'Debuging',
    favLanguage: 'C++',
    catchPhrase: 'Long hair dont care',
    gradClassName: 'Who Dem Boys',
    favInstructor: 'Cal Ripken'
});

console.log(griffey.demo('baseball and computers'));
console.log(ken.grade(joe.name, 'Computer Science'));
console.log(junior.speak());

console.log(barry.listsSubjects());
console.log(bonds.PRAssignment('friendship'));
console.log(joe.sprintChallenge('javascript'));

console.log(madison.standUp('Cohort 99'));
console.log(buster.debugsCode(joe.name, 'VS code'));
console.log(jordan.speak());

console.log(griffey.changeGrade(barry));
console.log(barry.graduate(barry));


// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.