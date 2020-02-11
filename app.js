var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
const fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

let templateData ={ 
fname: 'Hu',
lname: 'Qibin',
aptName: 'In Gassen 16 / Airhome216',
city: 'Zurich',
checkIn: 'July 24, 2019',
checkOut: 'July 27, 2019',
currentDate: 'July 8, 2019',
numberOfGuests: 1,
street: 'In Gassen 16',
postalCode: '8001',
country: 'Switzerland',
bookingFee: 756,
noNightsGuest: 3,
noNights: 3,
serviceFee: 35,
serviceCharge: true,
cityTaxCharge: true,
cityTax: 2.5,
total: 868.5,
extBookingID: 123456,
securityCharge: false,
chargedAmount: 0,
multipleCharge: undefined,
bookingCharge: true,
LatestChargedAmount: 868.5,
isExpediaCollect: false,
checkinAfterTwoDays: true,
serviceFeeVAT: 1.25,
bookingFeeVAT: 26.97,
subTotal: 868.5,
showHotLineText: false,
daysToCheckin: 16.036120740740742,
serviceTaxPercent: 3.7,
bookingVATPercent: 3.7,
securityDeposit: 200,
filename:
 '/Volumes/Backup_data/Lebijou/qBooking/templates/airhome/invoice/html.ejs' }

 const template = fs.readFileSync('./views/email.ejs','utf-8');
 const compiledTemplate = ejs.render(template,templateData);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/preview',(req,res)=>{
  res.send(compiledTemplate);
});
app.get('/preview2',(req,res)=>{
  res.render('email2');
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
