const request = require('supertest');
const express = require('express');

// const app = express();

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'johnjohnjohnjohn' });
// });

// request(app)
//   .get('/user')
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '15')
//   .expect(200)
//   .end(function(err, res) {
//     if (err) throw err;
//   });

// describe('GET /user', function() {
//     it('responds with json', function(done) {
//       request(app)
//         .get('/user')
//         .auth('username', 'password')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
//   });

const app = require('../app')

require('should');
request
    .get('/api')
    .expect(200)
    .end((err, res) => {
        if (err) throw err;
    })