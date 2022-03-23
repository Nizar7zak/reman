const userCases = {
  successUser: { name: 'nizar', email: 'nizar123@gmail.com', password: '12341234123' },
  invaildUserName: {
    name: 'nzz', password: '123123123', confirmPassword: '123123123', email: 'nizar123@gmail.com',
  },
  invalidPassword: {
    name: 'nizar', password: '123', confirmPassword: '123123123', email: 'nizar123@gmail.com',
  },
  notMatchPassword: {
    name: 'nizar', password: '123123123', confirmPassword: '12312', email: 'nizar123@gmail.com',
  },
  invalidEmail: {
    name: 'nizar', password: '123123123', confirmPassword: '123123123', email: 'invalidEmail',
  },
};

const loginUserCases = {
  successUser: { email: 'nizar123@gmail.com', password: '12341234123' },
  invalidEmail: { email: 'invalidEmail', password: '123123123' },
  invalidPassword: { email: 'nizar123@gmail.com', password: '123' },
};

module.exports = { userCases, loginUserCases };
