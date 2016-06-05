import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()

    .plugin('aurelia-kendoui-bridge', (kendo) => kendo.core())

    .plugin('aurelia-api', config => {
      config
        .registerEndpoint('github', 'https://api.github.com/')
        .registerEndpoint('auth', 'https://auth.example.io/')
        .setDefaultEndpoint('github');
    });

  aurelia.start().then(() => aurelia.setRoot());
}
