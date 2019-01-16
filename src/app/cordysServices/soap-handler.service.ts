import {
    Injectable
  } from '@angular/core';
  import {
    Router
  } from '@angular/router';
  import {
    HttpClient,
    HttpHeaders
  } from '@angular/common/http';
  import {
    Observable
  } from 'rxjs';
  
  
  declare var jQuery: any;
  
  @Injectable()
  export class SOAPHandlerService {
    public static GATEWAY_URL: string = "/home/RandstadNew/com.eibus.web.soap.Gateway.wcp?organization=o=RandstadNew,cn=cordys,cn=defaultInst,o=muraai.com";
    public static ERROR = false;
    constructor(private _http: HttpClient) {}
  
  
    public static setGateWayURL(url) {
      SOAPHandlerService.GATEWAY_URL = url;
    }
  
    public static getGateWayURL() {
      return SOAPHandlerService.GATEWAY_URL;
    }
  
    public callCordysSoapService(methodname: string, namespace: string, parameters: any, successHandler, errorHandler, isAsync, extraParams) {
      let response = null;
      jQuery.cordys.json.defaults.removeNamespacePrefix = true;
      var compRef = this;
      if (SOAPHandlerService.getGateWayURL() != null && SOAPHandlerService.getGateWayURL() != "")
        response = this.fireCordysSoapService(methodname, namespace, parameters, successHandler, errorHandler, isAsync, extraParams, compRef);
      return response;
    }
  
  
    public responseResolver(data: any, businessObject: string) {
      return jQuery.map(jQuery.makeArray(data.tuple), function (tuple, index) {
        return tuple.old[businessObject];
      });
    }
  
    public httpget(url: string) {
      return this._http.get(url).pipe((res: any) => res.json());
    }
  
    public httppost(url: string, request, contentType: string) {
      let headers = new HttpHeaders({
        'Content-Type': contentType
      });
      let options = {
        headers: headers
      };
      return this._http.post(url, request, options).pipe((res: any) => res.json());
  
    }
  
    public httpPostRequest(url: string, request, contentType: string) {
      let headers = new HttpHeaders({
        'enctype': contentType
      });
      let options = {
        headers: headers,
      };
      return this._http.post(url, request, options);
  
    }
  
    public httpGetRequest(url: string) {
      return this._http.get(url);
    }
  
    public callOTPSSoapService(methodname: string, namespace: string, parameters: any, extraParams, successHandler = null, failureHandler = null) {
      let response = null;
      alert("Entered");
      jQuery.cordys.json.defaults.removeNamespacePrefix = true;
      var compRef = this;
      if (SOAPHandlerService.getGateWayURL() != null && SOAPHandlerService.getGateWayURL() != "")
        return Observable.create((observer) => {
          let promise = this.fireCordysSoapService(
            methodname,
            namespace,
            parameters,
            successHandler,
            failureHandler,
            true,
            extraParams,
            compRef);
          promise.success((data) => {
            console.log("success");
            if (extraParams != null)
              data['extraParams'] = extraParams;
            observer.next(data)
            console.log("successData"+data);
          });
          promise.error((error) => {
            console.log("failed");
            observer.error(error);
          });
        });
    }
    public fireCordysSoapService(methodname: string, namespace: string, parameters: any, successHandler, failureHandler, isAsync, extraParams, compRef) {
      return jQuery.cordys.ajax({
        method: methodname,
        namespace: namespace,
        url: SOAPHandlerService.getGateWayURL(),
        async: isAsync,
        parameters: parameters,
        success: function (data) {
          if (successHandler) successHandler("Service Failure: " + methodname + " failed. Contact System Administrator", extraParams);
        },
        error: function (response, status, errorText) {
          if (failureHandler) failureHandler(response, status, "Service Failure: " + methodname + " failed. Contact System Administrator", extraParams);
        }
      });
    }
    public UserDetailsFromCordys(data:any){
      let request = {
        userid: data
      };
      return this.callOTPSSoapService(
        "GetLMSUserDetails",
        "http://schemas.cordys.com/RandstadLMS",
        request,
        null
        );
      }
   

  }
  