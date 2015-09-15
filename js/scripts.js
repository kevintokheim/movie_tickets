function Ticket(movieTitle, movieTime, age, price){
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.age = age;
  this.price = price;
}

var firstRelease = ["Humpty Dumpty's Revenge", "Dances with Avatar", "Braveheart: the Musical", "Lethal Weapon:the Musical","Adventures with Jaba the Hut"];

//Tests are passing, but may not be working like we intend them to
//Do Specific-to-General-
Ticket.prototype.ticketPrice = function() {
  for(var i = 0; 0 <= firstRelease.length; i++) {
    if (this.movieTitle == firstRelease[i]) {
      this.price = 15;
    } else if (this.movieTime < "5:00pm") { // "5:00pm" is not working
      this.price = 10;
    } else if (this.age < 13 || this.age > 60) {
      this.price = 10;
    } else if (this.movieTitle == firstRelease[i] && this.movieTime < "5:00pm") {
      this.price = 10;
    } else if (this.movieTitle == firstRelease[i] && this.age < 13){
      this.price = 10;
    } else if (this.movieTitle == firstRelease[i] && this.age > 60){
      this.price = 10;
    }
    return this.price;
  }
};

// Ticket.prototype.ticketPrice = function(){
//   return this.movieTitle + this.movieTime + this.age;
// }
