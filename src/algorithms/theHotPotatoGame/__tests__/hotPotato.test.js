const hotPotato = require('../hotPotato')

describe('The Hot Potato Game', () => {
  it('Should eliminate the right person', () => {
    const nameList = ['Bruce', 'Josh', 'Julia']
    const winner = hotPotato(nameList, 4)
    expect(winner).toBe('Bruce')
  })
})
