/**
 * Dropdown Menu Module
 * A reusable dropdown menu component that can be triggered by click or hover
 * 
 * @module dropdown-menu
 */

class Dropdown {
  /**
   * Create a dropdown instance
   * @param {HTMLElement} container - The container element with dropdown button and menu
   * @param {Object} options - Configuration options
   * @param {string} options.trigger - Trigger type: 'click' or 'hover' (default: 'click')
   * @param {string} options.buttonSelector - CSS selector for the dropdown button (default: '.dropdown-button')
   * @param {string} options.menuSelector - CSS selector for the dropdown menu (default: '.dropdown-menu')
   * @param {string} options.activeClass - Class to add when menu is visible (default: 'visible')
   */
  constructor(container, options = {}) {
    this.container = container;
    this.options = {
      trigger: options.trigger || 'click',
      buttonSelector: options.buttonSelector || '.dropdown-button',
      menuSelector: options.menuSelector || '.dropdown-menu',
      activeClass: options.activeClass || 'visible',
    };

    this.button = this.container.querySelector(this.options.buttonSelector);
    this.menu = this.container.querySelector(this.options.menuSelector);
    this.isOpen = false;

    if (!this.button || !this.menu) {
      console.error('Dropdown: Button or menu not found in container', this.container);
      return;
    }

    this.init();
  }

  /**
   * Initialize the dropdown functionality
   */
  init() {
    if (this.options.trigger === 'click') {
      this.setupClickTrigger();
    } else if (this.options.trigger === 'hover') {
      this.setupHoverTrigger();
    }
  }

  /**
   * Set up click-based dropdown trigger
   */
  setupClickTrigger() {
    this.button.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.container.contains(e.target)) {
        this.close();
      }
    });

    // Close dropdown when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (this.isOpen && e.key === 'Escape') {
        this.close();
      }
    });
  }

  /**
   * Set up hover-based dropdown trigger
   */
  setupHoverTrigger() {
    this.container.addEventListener('mouseenter', () => {
      this.open();
    });

    this.container.addEventListener('mouseleave', () => {
      this.close();
    });
  }

  /**
   * Toggle dropdown visibility
   */
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   * Open the dropdown menu
   */
  open() {
    this.menu.classList.add(this.options.activeClass);
    this.button.setAttribute('aria-expanded', 'true');
    this.isOpen = true;
  }

  /**
   * Close the dropdown menu
   */
  close() {
    this.menu.classList.remove(this.options.activeClass);
    this.button.setAttribute('aria-expanded', 'false');
    this.isOpen = false;
  }

  /**
   * Destroy the dropdown instance (remove event listeners)
   */
  destroy() {
    // Remove event listeners would require storing references
    // For simplicity, this is a placeholder for cleanup
    this.close();
  }
}

/**
 * Initialize all dropdowns on the page
 * @param {string} containerSelector - CSS selector for dropdown containers (default: '.dropdown')
 * @param {Object} options - Configuration options to pass to each Dropdown instance
 * @returns {Array<Dropdown>} Array of Dropdown instances
 */
function initDropdowns(containerSelector = '.dropdown', options = {}) {
  const containers = document.querySelectorAll(containerSelector);
  const dropdowns = [];

  containers.forEach(container => {
    dropdowns.push(new Dropdown(container, options));
  });

  return dropdowns;
}

// Export for use in different module systems
export { Dropdown, initDropdowns };
export default initDropdowns;