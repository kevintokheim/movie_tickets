function Ticket(movieTitle, movieTime, age, price){
  this.movieTitle = movieTitle;
  this.movieTime = movieTime;
  this.age = age;
  this.price = price;
}

var firstRelease = ["Humpty Dumpty's Revenge", "Dances with Avatar", "Braveheart: the Musical", "Lethal Weapon:the Musical","Adventures with Jaba the Hut"];


Ticket.prototype.ticketPrice = function() {
  for(var i = 0; 0 <= firstRelease.length; i++) {
    if (this.movieTitle == firstRelease[i]) {
      this.price = 15;
    } else if (this.movieTime < "5:00pm") {
      this.price = 10;
    }
    return this.price;
  }
};

// Ticket.prototype.ticketPrice = function(){
//   return this.movieTitle + this.movieTime + this.age;
// }
