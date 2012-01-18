# ttycolors

A 4-line wrapper for marak's [colors.js](http://github.com/marak/colors.js) to only apply colors when outputting to the user's shell.

## Usage

The supplied ````example.js```` 

    require('ttycolors')()
    console.log(process.argv[2].red)

behaves like

    > node example 'This will be red'
    > node example 'This will NOT be red' | more
    > node example 'This will also NOT be red' > asd; cat asd; rm asd

## Probably very bad

This currently relies on the ````process.stdout._type```` property, which for all I know is going to vanish in 38 seconds.
