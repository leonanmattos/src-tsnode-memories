import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Leonan'

  expect(user.name).toEqual('Leonan')
})