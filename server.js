const app = require('./config/app');
const { Sequelize }= require('./models/index');

try{
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`)
});