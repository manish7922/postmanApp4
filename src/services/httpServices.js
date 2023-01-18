import axios from "axios";

async function getData(request) {
  console.log(request.header);
  try {
    console.log(request.header);
    let url = request.url;
    let method = request.method;
    let body = request.payload;
    const data = await axios({
      url: url,
      method: method,
      data: body,
      headers: request.header ? request.header : "",
    });
    return data;
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      let { status, statusText } = error.response;
      console.log(status, statusText);
      return error.response;
    } else {
      return error;
    }
  }
}
export { getData };
