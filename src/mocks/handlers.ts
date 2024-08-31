import {http, HttpResponse} from 'msw'

export const handlers = [
    http.post('/api/login', () => {
        return HttpResponse.json({
            userId: 1,
                nickname: '5hjae',
                id: 'jsoh07',
                image: '/bucheon.png',
        }, {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
            }
        })
    }),
    http.post('/api/logout', () => {
        return new HttpResponse(null, {
            headers: {
                'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
            }
        })
    }),
];