import { Component, OnInit } from '@angular/core';

import { AirQualityService } from './air-quality.service';
import { AirQuality } from './air-quality'
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css']
})
export class AirQualityComponent implements OnInit {
  //存放HTTP头信息
  headers:string[];
  error:any;//错误信息

  airQuality:AirQuality;
  //注入AirQualityService服务
  constructor(private airQualityService:AirQualityService) { }

  ngOnInit(): void {
  }

  //显示空气质量数据
  //没有指定参数类型
  // showAirQualityData(){
  //   this.airQualityService.getAirData().subscribe(
  //     (airQualityData:AirQuality) => {
  //       this.airQuality = {
  //         status:airQualityData['status'],
  //         data:{
  //           aqi:airQualityData['data']['aqi'],
  //           time:airQualityData['data']['time']['s']
  //         }
  //       };
  //       console.log(airQualityData);
  //       console.log(this.airQuality);
  //     }
  //   );
  // }
  //指定参数类型AirQuality
  showAirQualityData(){
    this.airQualityService.getAirData().subscribe(
      (airQualityData:AirQuality) => {
        this.airQuality = airQualityData,//响应成功
        console.log(airQualityData);
        console.log(this.airQuality);
      },
      //相应失败
      error => this.error = error
    );
  }

  //显示HTTP头
  showAirQualityResponse(){
    //resp的类型是'HttpResponse<AirQuality>'
    this.airQualityService.getAirDataResponse().subscribe(
      resp => {
        //显示HTTP头
        const keys = resp.headers.keys();
        this.headers = keys.map(
          key => `${key}:${resp.headers.get(key)}`
        );
        //访问HTTP消息体，并转换为AirQuality类型
        this.airQuality = resp.body;
      }
    );
  }



}
