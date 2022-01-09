var math=require("../math")

var assert = require('assert')

describe('测试 math.js', ()=>{
    describe('测试 add',()=>{
        it('2+3',()=>{
            assert.equal(math.add(2,3),5)
        })
        it('4+3',()=>{
            assert.equal(math.add(4,3),7)
        })
    })
    describe('测试 minus',()=>{
        it('2-2',()=>{
            assert.equal(math.minus(2,3),-1)
        })
        it('4-3',()=>{
            assert.equal(math.minus(3,4),-1)
        })
    })
})


// const request = require('supertest');
// const express = require('express');

// const app = express();

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// request(app)
//   .get('/user')
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '15')
//   .expect(200)
//   .end(function(err, res) {
//     if (err) throw err;
//   });

