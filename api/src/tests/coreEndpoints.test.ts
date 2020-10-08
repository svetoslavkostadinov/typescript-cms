/**
 * Created By: Svet Kostadinov on 06/11/2019
 */
import request from 'supertest';
import app from '../App';

describe('Test Core API Endpoints', () => {
    it ('Test get status of /',  async (done) => {
        const res = await request(app)
            .get('/api');
        expect(res.status).toEqual(200);
        done();
    });

    // it ('Test get status of /login', async (done) => {
    //     const reqBody = {
    //         "username": "admin",
    //         "password": "admin"
    //     };
    //     const res = await request(app)
    //         .post('/login')
    //         .send(reqBody);
    //         // .set('Accept', 'application/json')
    //     expect(res.body).toHaveProperty('token');
    //     expect(res.status).toEqual(200);
    //     done();
    // });
    // it ('Test get status of /change-password', async () => {
    //     const res = await request(app)
    //         .get('/change-password');
    //     expect(res.status).toEqual(200);
    // });
    // it ('Test get status of /admin/add-user', async () => {
    //     const res = await request(app)
    //         .get('/admin/add-user');
    //     expect(res.status).toEqual(200);
    // });
    // it ('Test get status of /admin/users-list', async () => {
    //     const res = await request(app)
    //         .get('/admin/users-list');
    //     expect(res.status).toEqual(200);
    // });

});
