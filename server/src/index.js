const app = require('./app');

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`server is running http://localhost:${app.get('port')}`);
});
