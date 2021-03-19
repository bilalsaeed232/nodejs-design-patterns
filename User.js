class User {
  constructor(
    name = "Unknown User",
    occupation,
    taxClass,
    allowedWoringHoursPerWeek = 0
  ) {
    this._name = name;
    this._occupation = occupation;
    this._taxClass = taxClass;
    this._allowedWoringHoursPerWeek = allowedWoringHoursPerWeek;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get occupation() {
    return this._occupation;
  }

  set occupation(value) {
    this._occupation = value;
  }

  get taxClass() {
    return this._taxClass;
  }

  set taxClass(value) {
    this._taxClass = value;
  }

  get allowedWoringHoursPerWeek() {
    return this._allowedWoringHoursPerWeek;
  }

  set allowedWoringHoursPerWeek(value) {
    this._allowedWoringHoursPerWeek = value;
  }
}

module.exports = User;
