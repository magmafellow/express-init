export class ParrotService {
  findOneById(id) {
    return `Parrot #${id}`
  }

  findAll() {
    return `Parrots all`
  }

  create(parrot) {
    return `Parrot created`
  }
}
