const stripUnicode = require('./')

test('it strips 🍆', () => {
  expect(stripUnicode('this is an eggplant 🍆')).toBe('this is an eggplant ')
})

test('it strips BOM', () => {
  expect(stripUnicode('byte order mark \uFEFF')).toBe('byte order mark ')
})

test('it strips mͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍a̴̵̜̰͔͗͢r̠ͧͩ͘k̴̻͈͍͔̹̎̅͛́š̵̨̹̻̝̳̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞', () => {
  expect(stripUnicode('it strips mͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍a̴̵̜̰͔͗͢r̠ͧͩ͘k̴̻͈͍͔̹̎̅͛́š̵̨̹̻̝̳̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞')).toBe('it strips marks!')
})

test('it strips random unicode', () => {
  expect(stripUnicode('r⌘a➿n¹d🤟o🔚m🗑 ↑u🦍n😱i🐸͔̹c👽o⎃d☠︎e')).toBe('random unicode')
})
