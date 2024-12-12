# Ngx Typewriter Component

<a href="https://ngxui.com" target="_blank" style="display: flex;gap: .5rem;align-items: center;cursor: pointer; padding: 0 0 0 0; height: fit-content;">
  <img src="https://ngxui.com/assets/img/ngxui-logo.png" style="width: 64px;height: 64px;">
  <p style="font-weight: bold; padding: 0; margin: 0; font-size: 4rem">NGXUI</p>
</a>

This Library is part of the NGXUI ecosystem. <br>
View all available components at https://ngxui.com

`@omnedia/ngx-typewriter` is a lightweight and easy-to-use angular library for creating typewriter effects in your web applications. <br>
It uses RxJS to manage the typewriting effect, ensuring smooth and customizable animations. <br>

## Installation

You can install the library via npm:

```bash
npm install @omnedia/ngx-typewriter
```

## Usage

First, import the Component class from the library:

```typescript
import {NgxTypewriterComponent} from '@omnedia/ngx-typewriter';

@Component({
  ...
    imports:
[
  ...
    NgxTypewriterComponent,
],
...
})
```

Then, create an DOM Element of the TypeWriter:

```typescript
words: string[] = ['Im', 'typed', 'one', 'after', 'another'];
```

```html

<om-typewriter
  [words]="words"
></om-typewriter>
```

## API

```html

<om-typewriter
  [words]="words"
  [disableLoop]="true"
  [writeSpeed]="writeSpeed in Ms"
  [deleteDelay]="deleteDelay in Ms"
  [writeDelay]="writeDelay in Ms"
  styleClass="your-custom-class"
></om-typewriter>
```

Starts the typewriter effect.

- `words`: An array of strings to be typed.
- `disableLoop`: (optional): If set to true, the last word in the words array will stay.
- `writeSpeed` (optional): The speed of typing each character in milliseconds. Default is 40.
- `deleteDelay` (optional): The delay before starting to delete the typed word in milliseconds. Default is 3500.
- `writeDelay` (optional): The delay before starting to type the next word after deleting the current word in milliseconds. Default is 50.
- `styleClass` (optional): Add a class to the `<p>` Tag.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- RxJS for providing powerful reactive programming tools.
- All the contributors who have helped in improving this project.

## Contact

For any questions or suggestions, please open an issue or reach out to me at [markus.block@omnedia.com](mailto:markus.block@omnedia.com).
