# vue-music-notation

This is a set of components for rendering different forms of musical notations.

Here is a [demo](https://jherr.github.io/vue-music-notation/) if you don't want to clone this and run it for yourself.

## Installation

In the terminal:

```bash
yarn add vue-music-notation
```

Then in your application:

```js
import music from 'vue-music-notation';
import 'vue-music-notation/dist/vue-music-notation.css';

Vue.use(music);
```

## Keyboard

The `Keyboard` component displays specified notes on a piano keyboard:

```html
<Keyboard
  :notes="[60,64,67]"
/>
```

And that looks like this:

![Keyboard image](https://github.com/jherr/vue-music-notation/blob/master/images/keyboard.png?raw=true)

You can change the number of keys (`length`) on the keyboard as well as the starting note (`start`) using properties.

## Tabulature

For you guitarists there is a `Tabulature` component you can use to show guitar or bass tab (or really tab with any number of strings):

```js
<Tabulature
  :chords="[ [ 0, 2, 2, 1, 0, 0 ], [ -1, -1, -1, 1, 2, 1 ] ]"
/>
```

Looks like this:

![Tabulature](https://github.com/jherr/vue-music-notation/blob/master/images/tabulature.png?raw=true)

You can change the tuning by setting the `tuning` prompt with an array of note names.

## Notation (Western Musical Notation)

The most complex component in this collection is the `Notation` component that's used to display notes, intervals, and chords on a staff with clefs.

Here is some example code:

```js
<Notation
  :showTrebleClef="true"
  :showBassClef="true"
>
  <Staff
    :notes="[60,64,67]"
  />
</Notation>
```

This would give you this:

![Notation with C Major](https://github.com/jherr/vue-music-notation/blob/master/images/staff-with-chord.png?raw=true)

You can use multiple `Staff` components in the slot to give a long series of notes, like so:

![Notation with notes](https://github.com/jherr/vue-music-notation/blob/master/images/staff-with-notes.png?raw=true)

And you can also show a selection by setting the `active` property on a `Staff` element.

![Notation with active items](https://github.com/jherr/vue-music-notation/blob/master/images/staff-with-active.png?raw=true)

## TODO

* Key signatures in the notation
* Horizontal Fretboard
* Vertical Freboard
