class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  
  get title() {
    return this._title;
  }
  
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  
  set isCheckedOut(newValue) {
    this._isCheckedOut = newValue;
  }

  get ratings() {
    return this._ratings;
  }
  
  getAverageRating() {
    const sumOfRatings = this._ratings.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    const averageRating = sumOfRatings / this._ratings.length;
    return averageRating.toFixed(1);
  }
  
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  
  addRating(newRating) {
    if (
      Number.isInteger(newRating) &&
      newRating <= 5 &&
      newRating >= 1
    ) {
      this._ratings.push(newRating);
    } else {
      console.log('Please enter a valid rating');
    }
    
  }

}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  
  get author() {
    return this._author;
  }
  
  get pages() {
    return this._pages;
  }
  
}

class Movie extends Media {
  constructor(title, director, runtime, movieCast) {
    super(title);
    this._director = director;
    this._runtime = runtime;
    this._movieCast = movieCast;
  }
  
  get director() {
    return this._director;
  }
  
  get runtime() {
    return this._runtime;
  }
  
  get movieCast() {
    return this._movieCast;
  }
}

class CD extends Media {
  constructor(title, artist, trackListing) {
    super(title);
    this._artist = artist;
    this._trackListing = trackListing;
  }
  
  get artist() {
    return this._artist;
  }
  
  get trackListing() { 
    return this._trackListing;
  }
  
  shuffle() {
    let shufflePlaylist = this._trackListing;

    for (let i = shufflePlaylist.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [shufflePlaylist[i], shufflePlaylist[j]] = [shufflePlaylist[j], shufflePlaylist[i]]; // swap elements
    }
    return shufflePlaylist;
  }  
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)

const speed = new Movie('Speed', 'Jan de Bont', 116);

const evilEmpire = new CD('Evil Empire', 'Rage Against the Machine', ['Bulls on Parade', 'Killing in the Name Of', 'Freedom', 'Vietnow']);

historyOfEverything.toggleCheckOutStatus()

console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())

speed.toggleCheckOutStatus()

console.log(speed.isCheckedOut)

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating())

console.log(evilEmpire)

console.log(evilEmpire.shuffle())