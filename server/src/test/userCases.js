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

module.exports = userCases;
