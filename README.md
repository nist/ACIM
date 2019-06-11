# ACIM : A Course in Miracles Chrome extension

## What is A Course in Miracles ?

A Course in Miracles – often abbreviated ACIM or simply called the Course – is a complete self-study spiritual thought system. A three-volume curriculum consisting of a Text, Workbook for Students, and Manual for Teachers, it teaches that the way to universal love and peace is by undoing guilt through forgiving others.

## What is this extension ?

The Workbook for Students contains 365 lessons, one for each day of the year. Most of those lessons must be repeated through the day. This extension help the student by giving a notification each time a lesson must be done and follow the progress through the year.

## Features

- In 7 languages ()
- Toolbar icon with current lesson
- Follow the progress through the Workbook
- Jump to any specific lesson
- Configurable notification
- Open source software

## Screenshots

![](assets/screenshots/lesson.png)

## Developer Setup

The extension was developped under Linux. But you should be able to modify the code under Windows and MacOS too.

It was tested with Chrome, Chromium, Brave and Firefox.

To be able to modify the code, you will need some software.

### Node.js

The extension relies on [Node.js](https://node.io/) to manage package.

See [instructions]() on how to install it on your computer.

Once installed, you can install the required packages by typing :

```bash
    npm install
```

### Webpack

To bundle the code, the extension use [Webpack]().

To build the extension :

```bash
    npm build
```

The compressed extension will be in ``/dist`` folder.

### JavaScript standard

The JavaScript respect the `standard`.


[![JavaScript Style Guide](/assets/badge.svg)](https://github.com/standard/standard)

The standard can be tested with :

```bash
    npm standard
```

### Tape test

A complete suite of tests is implemented usign Tape. You will find them in `/test` folder.

To execute the tests :

```bash
    npm test
```

[NYC]() is used for code coverage.

[Travis]() continuous integration is also used. See ``travis.yml``.

## License

Copyright &copy; 2019 Foundation for Inner Peace  
MIT License. See [LICENSE](LICENSE) for details.
