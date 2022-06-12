function requestValidator(obj) {
  const arrWithMethods = ["GET", "POST", "DELETE", "CONNECT"];
  const arrWithVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const objWithProperties = {
    method: "Method",
    uri: "URI",
    version: "Version",
    message: "Message",
  };
  const regExpUri = /(^[\w.]+$)/;
  const regExpMessage = /([<>\\&'"])/;

  if (!obj.method || !arrWithMethods.includes(obj.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  }

  if (!obj.uri || obj.uri == "" || !regExpUri.test(obj.uri)) {
    throw new Error(`Invalid request header: Invalid URI`);
  }

  if (!obj.version || !arrWithVersions.includes(obj.version)) {
    throw new Error(`Invalid request header: Invalid Version`);
  }

  if (!obj.message == undefined || regExpMessage.test(obj.message)) {
    throw new Error(`Invalid request header: Invalid Message`);
  }

  for (let iterator of Object.keys(objWithProperties)) {
    if (!obj.hasOwnProperty(iterator)) {
      throw new Error(`Invalid request header: Invalid ${objWithProperties[iterator]}`);
    }
  }
  return obj;
}
console.log(
  requestValidator({
    method: "GET",
    uri: "svn.public.catalog",
    version: "HTTP/1.1",
    message: "",
  }));
requestValidator({
  method: "OPTIONS",
  uri: "git.master",
  version: "HTTP/1.1",
  message: "-recursive",
})
requestValidator({
  method: "POST",
  uri: "home.bash",
  message: "rm -rf /*",
});
requestValidator({
  method: "POST",
  uri: "home.bash",
  version: "HTTP/2.0",
});
