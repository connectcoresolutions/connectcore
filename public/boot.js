(function () {
  var locationRef = window.location;
  var isLocalHost = /^(localhost|127\.0\.0\.1)$/.test(locationRef.hostname);

  if (locationRef.protocol === "http:" && !isLocalHost) {
    window.location.replace("https://" + locationRef.host + locationRef.pathname + locationRef.search + locationRef.hash);
    return;
  }

  if (window.top !== window.self) {
    try {
      window.top.location = window.self.location;
    } catch {
      window.self.location = window.location;
    }
  }

  if (locationRef.search[1] === "/") {
    var decoded = locationRef.search
      .slice(1)
      .split("&")
      .map(function (segment) {
        return segment.replace(/~and~/g, "&");
      });

    window.history.replaceState(
      null,
      "",
      locationRef.pathname.slice(0, -1) + decoded[0] + (decoded[1] ? "?" + decoded[1] : "") + locationRef.hash,
    );
  }
})();