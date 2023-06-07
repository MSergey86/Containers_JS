export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Этот герой уже существует в команде');
    }
    this.members.add(character);
    return this.members;
  }

  addAll(characters) {
    characters.forEach((element) => {
      this.members.add(element);
    });
    return this.members;
  }

  toArray() {
    const arr = [];
    for (const element of this.members) {
      arr.push(element);
    }
    return arr;
  }
}
