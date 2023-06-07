export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(5456, 'Oшибка входных данных');
    this.errors.set(10, 'Неправильный адрес');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }

    return 'Unknown error';
  }
}
