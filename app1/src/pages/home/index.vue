<template>
  <div>
    i'M HOME
    <div>
      <a href="#" @click="toPage('http://localhost:9000/app2#/login')"
        >router to app 2</a
      >
    </div>
  </div>
</template>

<script>
function parseUri(str) {
  var anchor = document.createElement("a");
  anchor.href = str;
  return anchor;
}
export default {
  methods: {
    toPage(url) {
      this.consoleInfo(url);
      window.singleSpaNavigate(url);
      // location.href=url;
    },
    consoleInfo(url) {
      var current = parseUri(window.location.href);
      var destination = parseUri(url);
      console.log("current", current);
      console.log("destination", destination);
      console.log("current.host ", current.host);
      console.log("destination.host ", destination.host);
      console.log("current.pathname ", current.pathname);
      console.log("destination.pathname ", destination.pathname);
    },
  },
};
</script>

<style></style>
