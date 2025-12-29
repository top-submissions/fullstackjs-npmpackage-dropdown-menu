# @top-submissions/dropdown-menu

[![npm version](https://img.shields.io/npm/v/@top-submissions/dropdown-menu.svg)](https://www.npmjs.com/package/@top-submissions/dropdown-menu)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Issues](https://img.shields.io/github/issues/top-submissions/fullstackjs-npmpackage-dropdown-menu.svg)](https://github.com/top-submissions/fullstackjs-npmpackage-dropdown-menu/issues)

A lightweight, reusable dropdown menu component built with vanilla JavaScript. Zero dependencies, fully customizable, and easy to integrate into any project.

## ✨ Features

- 🎯 **Zero dependencies** - Pure vanilla JavaScript
- 🖱️ **Multiple trigger modes** - Click or hover activation
- ⌨️ **Keyboard accessible** - Escape key to close
- 🎨 **Fully customizable** - Easy to style and configure
- 📦 **Lightweight** - Minimal footprint
- 🔄 **Reusable** - Initialize multiple dropdowns with one function call
- 🎭 **Theme variants** - Built-in dark theme and alignment options
- ♿ **Accessible** - ARIA attributes for screen readers

## 📦 Installation

### Via npm

```bash
npm install @top-submissions/dropdown-menu
```

### Via CDN (coming soon)

```html
<script type="module" src="https://unpkg.com/@top-submissions/dropdown-menu"></script>
```

## 🚀 Quick Start

### 1. HTML Structure

Create your dropdown with this basic structure:

```html
<div class="dropdown">
  <button class="dropdown-button">Menu</button>
  <div class="dropdown-menu">
    <ul>
      <li><a href="#profile">Profile</a></li>
      <li><a href="#settings">Settings</a></li>
      <li><a href="#logout">Logout</a></li>
    </ul>
  </div>
</div>
```

### 2. Import Styles

```javascript
import '@top-submissions/dropdown-menu/src/css/styles.css';
```

Or in your HTML:

```html
<link rel="stylesheet" href="node_modules/@top-submissions/dropdown-menu/src/css/styles.css">
```

### 3. Initialize JavaScript

```javascript
import initDropdowns from '@top-submissions/dropdown-menu';

// Initialize all dropdowns on the page
initDropdowns();
```

That's it! Your dropdown is ready to use. 🎉

## 📖 Usage Examples

### Basic Click Dropdown

```html
<div class="dropdown">
  <button class="dropdown-button">Actions</button>
  <div class="dropdown-menu">
    <ul>
      <li><button onclick="handleEdit()">✏️ Edit</button></li>
      <li><button onclick="handleCopy()">📋 Copy</button></li>
      <li><button onclick="handleDelete()">🗑️ Delete</button></li>
    </ul>
  </div>
</div>
```

```javascript
import initDropdowns from '@top-submissions/dropdown-menu';

// Initialize with default click trigger
initDropdowns('.dropdown', { trigger: 'click' });
```

### Hover-Triggered Dropdown

Perfect for navigation menus:

```html
<div class="dropdown">
  <button class="dropdown-button">Products</button>
  <div class="dropdown-menu">
    <ul>
      <li><a href="#product1">Product 1</a></li>
      <li><a href="#product2">Product 2</a></li>
      <li><a href="#product3">Product 3</a></li>
    </ul>
  </div>
</div>
```

```javascript
import initDropdowns from '@top-submissions/dropdown-menu';

// Initialize with hover trigger
initDropdowns('.dropdown', { trigger: 'hover' });
```

### Multiple Dropdowns with Different Triggers

```javascript
import initDropdowns from '@top-submissions/dropdown-menu';

// Click-triggered dropdowns
initDropdowns('.dropdown-click', { trigger: 'click' });

// Hover-triggered dropdowns for navigation
initDropdowns('.dropdown-hover', { trigger: 'hover' });
```

### Using Dividers

Separate menu items visually:

```html
<div class="dropdown">
  <button class="dropdown-button">Options</button>
  <div class="dropdown-menu">
    <ul>
      <li><a href="#edit">Edit</a></li>
      <li><a href="#copy">Copy</a></li>
      <li class="divider"></li>
      <li><a href="#delete">Delete</a></li>
    </ul>
  </div>
</div>
```

### Advanced: Individual Dropdown Instance

For more control, create individual dropdown instances:

```javascript
import { Dropdown } from '@top-submissions/dropdown-menu';

const container = document.querySelector('#my-dropdown');
const dropdown = new Dropdown(container, {
  trigger: 'click',
  buttonSelector: '.dropdown-button',
  menuSelector: '.dropdown-menu',
  activeClass: 'visible'
});

// Programmatic control
dropdown.open();
dropdown.close();
dropdown.toggle();
dropdown.destroy(); // Clean up when done
```

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `trigger` | `string` | `'click'` | Trigger type: `'click'` or `'hover'` |
| `buttonSelector` | `string` | `'.dropdown-button'` | CSS selector for dropdown button |
| `menuSelector` | `string` | `'.dropdown-menu'` | CSS selector for dropdown menu |
| `activeClass` | `string` | `'visible'` | Class added when menu is visible |

## 🎨 Styling & Theming

### Default Styles

The package includes default styles that work out of the box:

```javascript
import '@top-submissions/dropdown-menu/src/css/styles.css';
```

### Dark Theme

Add the `dropdown-dark` class for a dark-themed dropdown:

```html
<div class="dropdown dropdown-dark">
  <button class="dropdown-button">Dark Menu</button>
  <div class="dropdown-menu">
    <!-- menu items -->
  </div>
</div>
```

### Right-Aligned Dropdown

Align the menu to the right:

```html
<div class="dropdown dropdown-right">
  <button class="dropdown-button">Options ▼</button>
  <div class="dropdown-menu">
    <!-- menu items -->
  </div>
</div>
```

### Custom Styles

Override the default styles by defining your own CSS:

```css
/* Custom button style */
.dropdown-button {
  background-color: #your-color;
  padding: 15px 30px;
  border-radius: 8px;
}

/* Custom menu style */
.dropdown-menu {
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Custom hover effects */
.dropdown-menu a:hover {
  background-color: #your-hover-color;
}
```

## 🔧 API Reference

### `initDropdowns(containerSelector, options)`

Initializes all dropdowns matching the selector.

**Parameters:**

- `containerSelector` (string, optional): CSS selector for dropdown containers. Default: `'.dropdown'`
- `options` (object, optional): Configuration options

**Returns:** Array of Dropdown instances

**Example:**

```javascript
const dropdowns = initDropdowns('.dropdown', { trigger: 'click' });
console.log(`Initialized ${dropdowns.length} dropdowns`);
```

### `Dropdown` Class

#### Constructor

```javascript
new Dropdown(container, options)
```

**Parameters:**

- `container` (HTMLElement): The dropdown container element
- `options` (object, optional): Configuration options

#### Methods

##### `open()`

Opens the dropdown menu.

```javascript
dropdown.open();
```

##### `close()`

Closes the dropdown menu.

```javascript
dropdown.close();
```

##### `toggle()`

Toggles the dropdown menu state.

```javascript
dropdown.toggle();
```

##### `destroy()`

Cleans up the dropdown instance.

```javascript
dropdown.destroy();
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📱 Responsive Design

The dropdown automatically adapts to different screen sizes. For mobile devices, consider using click triggers instead of hover for better touch support.

## ♿ Accessibility

This component follows accessibility best practices:

- Uses `aria-expanded` attribute to indicate dropdown state
- Supports keyboard navigation (Escape key to close)
- Proper focus management
- Semantic HTML structure

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

Built as part of [The Odin Project](https://www.theodinproject.com/) - Full Stack JavaScript path.

## 📞 Support

- 📧 [Report Issues](https://github.com/top-submissions/fullstackjs-npmpackage-dropdown-menu/issues)
- 💬 [Discussions](https://github.com/top-submissions/fullstackjs-npmpackage-dropdown-menu/discussions)
- 📖 [Documentation](https://github.com/top-submissions/fullstackjs-npmpackage-dropdown-menu#readme)

## 🔗 Links

- [npm Package](https://www.npmjs.com/package/@top-submissions/dropdown-menu)
- [GitHub Repository](https://github.com/top-submissions/fullstackjs-npmpackage-dropdown-menu)
- [Report Bug](https://github.com/top-submissions/fullstackjs-npmpackage-dropdown-menu/issues)
- [Request Feature](https://github.com/top-submissions/fullstackjs-npmpackage-dropdown-menu/issues)

---

Made with ❤️ by [top-submissions](https://github.com/top-submissions)
