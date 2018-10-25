# PeopleCollector


People Collector is an app that allows you to enter people's name and stock them locally in a collection. You can also see your collection, wich display you peoples and contains clickable buttons for each of them. They permit you to delete them or being redirect to the people's Wikipedia page.

#### Git clone of this repository:
```
$ git clone https://github.com/michaeldeloris/people-collector
```

## Prerequisites

This app is using Angular Material : https://material.angular.io/guide/getting-started.

And also the local storage package for Angular: https://www.npmjs.com/package/@ngx-pwa/local-storage.

## Functioning

When you add a name, the app will create an object People, give him an random and unique ID and the resume matching with his name on the wiki app. The People is pushed in an array wich is stocked locally in your browser.
Then the array is recovered asynchronously by the Collection and displayed on his page.

## Demonstration

![peopleCollector](frontend/ressources/demonstrations/peopleCollectorDemo.gif)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Informations

This project was generated with Angular CLI version 6.2.2.