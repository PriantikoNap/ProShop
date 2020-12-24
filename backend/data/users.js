import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Monkey',
    email: 'monkey@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Tiger',
    email: 'tiger@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
