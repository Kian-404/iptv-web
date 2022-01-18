import request from "../utils/request";

export function getChannel() {
  return request({
    url: "/api/list",
    method: "get",
  });
}

export function getChannel1() {
  return request({
    url: "/api/list1",
    method: "get",
  });
}