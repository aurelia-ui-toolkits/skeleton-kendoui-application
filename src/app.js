export class App {
  configureRouter(config, router) {
    config.title = 'KendoUI skeleton app';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',   moduleId: 'welcome/welcome',   nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',     moduleId: 'users/users',       nav: true, title: 'Github Users' },
      { route: 'listview',      name: 'listview',  moduleId: 'listview/listview', nav: true, title: 'Listview' }
    ]);

    this.router = router;
  }
}
