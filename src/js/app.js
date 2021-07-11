export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Такой персонаж уже есть!');
    } this.members.add(member);
  }

  addAll(...member) {
    member.forEach((el) => this.members.add(el));
  }

  toArray() {
    const finishMembers = [];
    this.members.forEach((el) => finishMembers.push(el));
    return finishMembers;
  }
}
