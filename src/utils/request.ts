/*
 * @Version:
 * @Company: Venus
 * @Date: 2021-04-08 16:47:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-02 17:47:55
 */

import axios, { AxiosRequestConfig } from "axios";
import { useMessage } from "naive-ui";
import qs from "querystring";
(window as any).$message = useMessage();
// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map();
/**
 * 添加请求
 * @param {Object} config
 */
const addPending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    config.params,
    config.data
  ].join("&");
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, cancel);
      }
    });
};
/**
 * 移除请求
 * @param {Object} config
 */
const removePending = (config: AxiosRequestConfig) => {
  const url = [
    config.method,
    config.url,
    config.params,
    config.data
  ].join("&");
  console.log(url);
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url);
    cancel(url);
    pending.delete(url);
  }
};
/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = (): void => {
  for (const [url, cancel] of pending) {
    cancel(url);
  }
  pending.clear();
};

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    removePending(config); // 在请求开始前，对之前的请求做检查取消操作
    addPending(config); // 将当前请求添加到 pending 中
    // do something before request is sent
    // if (UserModule.token) {
    //   //   // let each request carry token
    //   //   // ['X-Token'] is a custom headers key
    //   //   // please modify it according to the actual situation
    //   // config.headers["X-Token"] = getToken();
    // }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    removePending(response); // 在请求结束后，移除本次请求
    const res = response.data;
    console.log(res);
    // if the custom code is not 20000, it is judged as an error.
      return res;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 602:
          error.message = "用户登录超时，请重新登录!";
          (window as any).$message.error(error.message || "Error", {
            duration: 5000,
            closable: true,
          });
          if (process.env.NODE_ENV === "production") {
            window.location.href = "/app/login";
          } else {
            window.location.href = "/login";
          }
          break;
        case 400:
          error.message = "错误请求";

          break;

        case 401:
          error.message = "未授权，请重新登录";

          break;

        case 403:
          error.message = "拒绝访问";

          break;

        case 404:
          error.message = "请求错误,未找到该资源";

          break;

        case 405:
          error.message = "请求方法未允许";

          break;

        case 408:
          error.message = "请求超时";

          break;

        case 500:
          error.message = "服务器端出错";
          break;

        case 501:
          error.message = "网络未实现";

          break;

        case 502:
          error.message = "网络错误";

          break;

        case 503:
          error.message = "服务不可用";

          break;

        case 504:
          error.message = "网络超时";

          break;

        case 505:
          error.message = "http版本不支持该请求";

          break;
        case -999:
          error.message = "授权无效,请重新导入授权文件";

          break;
        case "Cancel":
          error.message = "重复请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      error.message = "请求接口超时,请重新加载";
      console.log(error instanceof axios.Cancel);
      if (error instanceof axios.Cancel) {
        return;
      }
    }
    console.log("err" + error); // for debug
    (window as any).$message.error(error.message || "Error", {
      duration: 5000,
      closable: true,
    });
    return Promise.reject(error);
  }
);

export default service;
