<div>
  <h1>House Hub</h1>

  <p>
    <strong>About the Project:</strong>
    HouseHub is a modern real estate platform built with vanilla JavaScript and Tailwind CSS. It allows users to browse, buy, sell, and rent properties without agents or commissions — designed with a clean UI and smooth user experience.
  </p>

  <p>
    <strong>Key Highlights:</strong>
    Features a fully functional property search card, a responsive six-property listing grid, and a modular component-based JavaScript architecture built without any framework.
  </p>
</div>

<details open>
  <summary><h2>Project Details</h2></summary>

  <details>
    <summary><h4>What's Inside</h4></summary>
    <ul>
      <li><strong>Header</strong> — Fixed navigation bar with animated mobile menu toggle.</li>
      <li><strong>Hero</strong> — Full-screen banner with a property search card and filter tabs.</li>
      <li><strong>About</strong> — Platform overview with a feature list and image with play button.</li>
      <li><strong>Services</strong> — Three-step guide explaining how HouseHub works.</li>
      <li><strong>Properties</strong> — Grid of six featured property cards with ratings and pricing.</li>
      <li><strong>Contact</strong> — Call-to-action section with an email newsletter subscription form.</li>
      <li><strong>Footer</strong> — Site links, contact details, and social media icons.</li>
      <li><strong>Back to Top</strong> — Scroll-triggered floating button for quick page navigation.</li>
    </ul>
  </details>

  <details>
    <summary><h4>Key Features</h4></summary>
    <ul>
      <li><strong>Property Search Card</strong> — Filter properties by category, min price, and max price.</li>
      <li><strong>Buy / Sell / Rent Tabs</strong> — Interactive tab switching with active state highlighting.</li>
      <li><strong>Property Listings Grid</strong> — Six cards showing area, beds, baths, price, and rating.</li>
      <li><strong>Responsive Design</strong> — Fully responsive layout built with Tailwind CSS utility classes.</li>
      <li><strong>Mobile Navigation</strong> — Animated hamburger menu that closes automatically on link click.</li>
      <li><strong>Newsletter Form</strong> — Inline email subscription form with a rounded submit button.</li>
      <li><strong>Back to Top Button</strong> — Smooth scroll button that appears after scrolling 300px.</li>
      <li><strong>Component Architecture</strong> — Each section is a separate JS module for clean code structure.</li>
    </ul>
  </details>

  <details>
    <summary><h4>Technologies Used</h4></summary>
    <ul>
      <li><strong>HTML5</strong> — Semantic markup with modular root mount points for each section.</li>
      <li><strong>Tailwind CSS (CDN)</strong> — Utility-first CSS framework for all layout and styling.</li>
      <li><strong>Vanilla JavaScript (ES Modules)</strong> — Component-based architecture without any framework.</li>
      <li><strong>Ionicons</strong> — Icon library used throughout for UI and navigation icons.</li>
      <li><strong>League Spartan (Google Fonts)</strong> — Clean, modern typeface used across the entire site.</li>
    </ul>
  </details>

  <details>
    <summary><h4>Project Structure</h4></summary>
    <pre>
house-hub/
│
├── index.html                 # Main HTML with component mount points
│
├── assets/
│   ├── js/
│   │   ├── app.js             # Main entry point importing all components
│   │   ├── header.js          # Header component with mobile menu
│   │   ├── hero.js            # Hero section with search card
│   │   ├── about.js           # About section with feature list
│   │   ├── service.js         # Services cards component
│   │   ├── property.js        # Property listings grid
│   │   ├── contact.js         # Contact and newsletter section
│   │   ├── footer.js          # Footer component
│   │   └── backTop.js         # Back to top button
│   │
│   └── images/                # Hero background, property photos, about image
│
└── README.md                  # Project documentation
    </pre>
  </details>

  <details>
    <summary><h4>Quick Start</h4></summary>
    <ol>
      <li>
        <strong>Clone the repository:</strong>
        <pre><code>git clone https://github.com/nawazdevx/house-hub.git</code></pre>
      </li>

      <li>
        <strong>Open the project:</strong>
        <ul>
          <li>Open <code>index.html</code> directly in your browser</li>
          <li>Or run a local server:</li>
        </ul>
        <pre><code>python -m http.server 3000</code></pre>
        Then visit <code>http://localhost:3000</code>
      </li>

      <li>
        <strong>Start Customizing:</strong>
        <ul>
          <li>Update property listings and details in <code>property.js</code></li>
          <li>Edit navigation links and brand name in <code>header.js</code></li>
          <li>Change hero text, tabs, and search options in <code>hero.js</code></li>
          <li>Update contact info and footer links in <code>footer.js</code></li>
          <li>Modify about section content and features in <code>about.js</code></li>
        </ul>
      </li>
    </ol>

  </details>
</details>

<p>
  <strong>License:</strong>
  This project is licensed under the <a href="https://choosealicense.com/licenses/mit/">MIT License</a>.
</p>

<p>
  <strong>Contact:</strong>
  Connect with me on <a href="https://www.linkedin.com/in/nawazdevx">LinkedIn</a> or visit my <a href="https://nawazdevx.vercel.app/">Portfolio</a>.
</p>

<p>
  <strong>Support:</strong>
  Found this helpful? Give it a ⭐ on GitHub! Thank you.
</p>

<br />

<div>
  <h2>Project Preview</h2>

  <p>
    <strong>Live project ➜</strong>
    <a href="https://nawazdevx.github.io/house-hub/" target="_blank">
      <strong>Live Demo</strong>
    </a>
  </p>

  <img src="./assets/images/readme-image.png" alt="Desktop Preview" />
</div>
