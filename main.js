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
    this._ratings.push(newRating);
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
  constructor(title, director, runtime) {
    super(title);
    this._director = director;
    this._runtime = runtime;
  }
  
  get director() {
    return this._director;
  }
  
  get runtime() {
    return this._runtime;
  }
}

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
  }
  
  get artist() {
    return this._artist;
  }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544)

historyOfEverything.toggleCheckOutStatus()

console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus()

console.log(speed.isCheckedOut)

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating())