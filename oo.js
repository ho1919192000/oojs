      function Person(first, last, age, gender, interests) {
          this.name = {
              first,
              last
          };
          this.age = age;
          this.gender = gender;
          this.interests = interests;
          this.bio = function () {
              // First define a string, and make it equal to the part of
              // the bio that we know will always be the same.
              var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
              // define a variable that will contain the pronoun part of
              // the second sentence
              var pronoun;

              // check what the value of gender is, and set pronoun
              // to an appropriate value in each case
              if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
                  pronoun = 'He likes ';
              } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
                  pronoun = 'She likes ';
              } else {
                  pronoun = 'They like ';
              }

              // add the pronoun string on to the end of the main string
              string += pronoun;
              // use another conditional to structure the last part of the
              // second sentence depending on whether the number of interests
              // is 1, 2, or 3
              if (this.interests.length === 1) {
                  string += this.interests[0] + '.';
              } else if (this.interests.length === 2) {
                  string += this.interests[0] + ' and ' + this.interests[1] + '.';
              } else {
                  // if there are more than 2 interests, we loop through them
                  // all, adding each one to the main string followed by a comma,
                  // except for the last one, which needs an and & a full stop 
                  for (var i = 0; i < this.interests.length; i++) {
                      if (i === this.interests.length - 1) {
                          string += 'and ' + this.interests[i] + '.';
                      } else {
                          string += this.interests[i] + ', ';
                      }
                  }
              }
              // finally, with the string built, we alert() it
              alert(string);
          };
          this.greeting = function () {
              alert('Hi! I\'m ' + this.name.first + '.');
          };
      };
      var person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

      //Defining a Teacher() constructor function
      function Teacher(first, last, age, gender, interests, subject) {
          Person.call(this, first, last, age, gender, interests); //Inheriting the properties from Person()

          this.subject = subject;
      }

      //Setting Teacher()'s prototype and constructor reference
      Teacher.prototype = Object.create(Person.prototype);
      Teacher.prototype.constructor = Teacher;


      //Giving Teacher() a new greeting() function
      Teacher.prototype.greeting = function () {
          var prefix;

          if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
              prefix = 'Mr.';
          } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
              prefix = 'Mrs.';
          } else {
              prefix = 'Mx.';
          }

          alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
      };

      var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
      teacher1.name.first;
      teacher1.interests[0];
      teacher1.subject;
      teacher1.greeting();

      //Student class
      function Student(first, last, age, gender, interests, subject, major) {
          Person.call(this, first, last, age, gender, interests);

          this.major = major;
      }

      Student.prototype = Object.create(Person.prototype);
      Student.prototype.constructor = Student;

      Student.prototype.greeting = function () {
          alert('Hi! My name is' + this.name.first + '. Nice to meet you!')
      }

      var student1 = new Student('Peter', 'John', 21, 'male', ['basketball', 'video game'], 'computer science')
      student1.name.first;
      student1.interests[0];
      student1.subject;
      student1.greeting();


      //Inheriting from a constructor with no parameters
      function Brick() {
          this.width = 10;
          this.height = 20;
      }

      function BlueGlassBrick() {
          Brick.call(this);

          this.opacity = 0.5;
          this.color = 'blue';
      }