//alert("Test");
// Create a Dinner class with attributes dishName, protein,
// veggie, and price. Create a function that prints all of the
// attributes. Create an object of the class.
// class Dinner {
//     constructor(name, protein, veggie, price)
//     {
//         this.namep = name;
//         this.proteinp=protein;
//         this.veggiep=veggie;
//         this.pricep=price;
//     }
//
//     printProps()
//     {
//         console.log(this.namep);
//         console.log(this.proteinp);
//         console.log(this.veggiep);
//         console.log(this.pricep);
//     }
// }
//
// let myDinner = new Dinner("chicken","yes","corn","$5.00");
//
// myDinner.printProps();
//### Problem 1:
//Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an object of the class and use the function.
// Create a Dinner class with attributes dishName, protein,
// veggie, and price. Create a function that prints all of the
// attributes. Create an object of the class.
// class Dinner {
//     constructor(name, protein, veggie, price)
//     {
//         this.namep = name;
//         this.proteinp=protein;
//         this.veggiep=veggie;
//         this.pricep=price;
//     }
//
//     printProps()
//     {
//         console.log(this.namep);
//         console.log(this.proteinp);
//         console.log(this.veggiep);
//         console.log(this.pricep);
//     }
// }
//
// let myDinner = new Dinner("chicken","yes","corn","$5.00");
//
// myDinner.printProps();

// class GitHubRepository {
//     constructor(userName, fileName, descriptionOfRepository, code){
//        this.userName = userName;
//        this.fileName = fileName;
//        this.descriptionOfRepository = descriptionOfRepository;
//        this.code = code;
//     }
//     printProps(){
//         console.log(this.userName);
//          console.log(this.fileName);
//        console.log(this.descriptionOfRepository);
//         console.log(this.code);
//
//
//     }
// }
//  let hub = new GitHubRepository( "marcus", "work", "newRepos", " function()");
// hub.printProps();
// ## Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties. Create an object of the class and use the two methods you created.

class Movie {
    constructor( movieName, rating, yearReleased) {
        this.movieName = movieName;
        this.rating =rating;
        this.yearReleased = yearReleased;
    }
    printProps(){
        console.log(this.movieName);
        console.log(this.rating);
        console.log(this.yearReleased);
    }
    someChanges(rating ){
        this.rating = rating;

    }
    someChanges2(yearReleased){
        this.yearReleased = yearReleased
    }
}

let movieMaid = new Movie("rush hour", "R", "1998");
movieMaid.printProps();
movieMaid.someChanges("pg-13");
movieMaid.someChanges2("1979");
movieMaid.printProps();