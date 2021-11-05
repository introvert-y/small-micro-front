import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/example"],
});

registerApplication({
  name: "@study/app1",
  app: () => System.import("@study/app1"),
  activeWhen: ["/app1"]
});
registerApplication({
  name: "@study/app2",
  app: () => System.import("@study/app2"),
  activeWhen: ["/app2"]
});
// registerApplication({
//   name: "@vue-mf/navbar",
//   app: () => System.import("@vue-mf/navbar"),
//   activeWhen: ["/navbar"]
// });

start({
  urlRerouteOnly: true,
});
