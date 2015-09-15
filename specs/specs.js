describe("Ticket", function(){
  it("creates a new ticket price with the given specifications", function(){
    var testTicket = new Ticket("Terminator", "7:00pm", "15", 10);
    expect(testTicket.movieTitle).to.equal("Terminator");
    expect(testTicket.movieTime).to.equal("7:00pm");
    expect(testTicket.age).to.equal("15");
    expect(testTicket.price).to.equal(10);
  });

  it("returns the price of a first-release movie ticket", function(){
    var testTicket = new Ticket("Humpty Dumpty's Revenge", "7:00pm", "15", 10);
    expect(testTicket.ticketPrice()).to.equal(15);
  });

  it("returns the price of a movie before 5:00pm", function(){
    var testTicket = new Ticket("Terminator", "4:30pm", "15", 5);
    expect(testTicket.ticketPrice()).to.equal(10);
  });
});
