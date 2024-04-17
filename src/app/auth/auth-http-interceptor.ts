import { Injectable } from "@angular/core";
import { 
    HttpEvent, 
    HttpRequest, 
    HttpInterceptor,
    HttpHandler,
    HttpEventType
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedReq = req.clone({
            withCredentials: true
        })
        return next.handle(modifiedReq);
    }
}
