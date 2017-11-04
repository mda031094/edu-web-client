import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
 
export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    const MOCK_USERNAME = "test";
    const MOCK_PASSWORD = "test";
    const MOCK_FIRST_NAME = "Natasha";
    const MOCK_LAST_NAME = "Belyaeva";
    const MOCK_TOKEN = "fake-jwt-token";

    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {

            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                let params = JSON.parse(connection.request.getBody());
 
                if (MOCK_USERNAME === params.username && MOCK_PASSWORD === params.password) {
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            id: 1,
                            username: MOCK_USERNAME,
                            firstName: MOCK_FIRST_NAME,
                            lastName: MOCK_LAST_NAME,
                            token: MOCK_TOKEN,
                        }
                    })));
                } else {
                    connection.mockError(new Error('Username or password is incorrect'));
                }
 
                return;
            }
 
            // pass through any requests not handled above
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });
 
        }, 500);
 
    });
 
    return new Http(backend, options);
};
 
export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};