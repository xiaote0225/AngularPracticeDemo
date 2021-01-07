import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AirQuality } from './air-quality';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {

  //空气质量数据资源地址-right
  // airQualityUrl = 'http://api.waqi.info/feed/guangzhou/?token=0e609829c81121cc05daf37b45d62b82725cd521';

  //空气质量数据资源地址-error
  airQualityUrl = 'http://api.waqi132.info/feed/guangzhou132/jfla/?token=0e609829c81121cc05daf37b45d62b82725cd521';

  constructor(private http:HttpClient) { }
  //没有指定参数类型
  // getAirData(){
  //   return this.http.get(this.airQualityUrl);
  // }

  // 指定参数类型AirQuality
  /*
  getAirData() {
    return this.http.get<AirQuality>(this.airQualityUrl);
  }

  // 带错误处理器
  /*
  getAirData() {
    return this.http.get<AirQuality>(this.airQualityUrl)
    .pipe(
      catchError(this.handleError)
    );
  }
  */

  //带重试功能
  getAirData(){
    return this.http.get<AirQuality>(this.airQualityUrl).pipe(
      retry(5),//重试5次
      catchError(this.handleError)
    );
  }

  //显示完整的相应信息
  getAirDataResponse():Observable<HttpResponse<AirQuality>>{
    return this.http.get<AirQuality>(this.airQualityUrl,{observe:'response'});
  }

  //错误处理器
  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      //当客户端或者网络发生错误时，处理错误
      console.error('发生错误:',error.error.message);
    }else{
      //后端返回一个不成功的响应代码
      //响应体可能包包含出错的信息
      console.error(
        `错误状态码:${error.status}, ` +
        `响应体是:${error.error}`
      );
    }
    //返回带有提示用户的错误消息的Observable对象
    return throwError('有错误，请重试!');
  }



}
