const request = require('supertest');
const app = require('../../src/app');
const truncate = require('../utils/truncate');

describe('Prescription', () => {
    it('should prescription persist on database', (done) => {
        return request(app)
        .post('/v2/prescriptions')
        .send({
            clinic: {
                id: 1
            },
            physician: {
                id: 1
            },
            patient: {
                id: 1
            },
            text: 'Dipirona 1x ao dia'
        })
        .expect(200, done);
    });

    it('should prescription get error with incorrect body', (done) => {
        return request(app)
        .post('/v2/prescriptions')
        .send({
            clinic: {
                id: null
            },
            physician: {
                id: null
            },
            patient: {
                id: null
            },
            text: ''
        })
        .expect(400, done);
    });
});