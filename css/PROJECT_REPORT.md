# Sahaay Project Report: Catalogue Page

This report provides a detailed and technical overview of the **Sahaay** project, specifically focusing on **Catalogue Page** made by "Jashanpreet Bawa", Roll No. 7353. The project aims to create a transparent bridge between donors and non-profit organizations.

## 1. HTML (`catalogue.html`)
The HTML structure is designed for clarity and semantic organization, serving as the skeletal framework for the catalogue's interactive features.

- **Navigation Bar**: A sticky header containing the "Sahaay" logo, navigation links (Home, Catalogue, About, etc.), and a prominent "Donate Now" call-to-action button.
- **Search & Filter Section**: 
  - A search bar with an integrated search icon.
  - Quick-sort buttons for "Relevance" and "All Origins," allowing users to refine their search. (work in progress)
- **Featured Cause Grid**: A high-impact grid showcasing primary categories (e.g., AAPI-led, Climate, Animals). Each card uses semantic tags like `<h1>`, `<h3>`, and `<p>` to present meta-information and includes custom inline SVGs for unique icons.
- **Dynamic Browse Section**: Uses a `<fieldset>` with a legend ("Browse all Causes") to house a container (`.causes-grid-all`). The use of fieldset was only to make inline *line* in the heading of the section. The elements are created dynamically using JavaScript.
- **Overlay System**: A dedicated section that appears when a category is selected, providing a focused view of specific organizations.
- **Footer**: A multi-column layout providing platform links, legal information, and social connectivity.

## 2. CSS Styling Strategy (`catalogue.css`, `colors.css`, `style.css`)
The project employs a modern CSS approach prioritizing modularity and visual hierarchy.

- **Use of CSS Variables (`colors.css`)**: The project tried (but did not succeed) to define a color palette using a separate colors file which defines variable like `--primary-green`, `--accent-gold`, `--bg-light` which would have helped in giving the whole website a unified look.
- **Advanced Grid Layouts**: 
  - The `cause-type-grid` uses `grid-template-areas` for a complex, non-uniform layout that highlights specific causes like "Housing" and "Climate" across multiple rows/columns.
  - A 6-column grid is used for the "Browse all Causes" section.
- **Interactivity & Animations**:
  - **Transitions**: Smooth scaling effects (`transform: scale(1.01)`) on card hover and active states.
  - **Keyframes**: Custom `@keyframes` for `popup` (entry) and `fadeout` (exit) animations to provide a polished feel to the category overlays.
- **Responsiveness**: Media queries are implemented to adapt the 4-column desktop grid into a 2-column layout for mobile devices, ensuring accessibility across all screen sizes.

## 3. JavaScript Logic (`catalogue.js`) 
While JavaScript is not in the evaluation, It was necessary to set framework to add features in the future. Also the overlay (which appears when clicking on the cards or the categories) required the use of JS and without it webpage would have been empty (mostly). 
The JavaScript layer brings the catalogue to life through dynamic data fetching and DOM manipulation.

- **API Integration**: Connects to the `Every.org` API (`v0.2/browse/`) to fetch real-time non-profit data based on selected categories. It includes error handling to retry requests if the API returns null data.
- **Dynamic Category Generation**: The `addCategories()` function iterates through a comprehensive list of 60+ cause categories, creating and appending buttons to the UI automatically.
- **Overlay & Skeleton Logic**: 
  - The `Overlay(search)` function manages state by locking body scroll and injecting a modal-like interface into the DOM.
  - It dynamically creates cards for each non-profit returned by the API, including their name, description, and website URL.
- **Modular Functions**: Clean separation of concerns with dedicated functions for closing modals (`closeButton`), creating cards (`createCard`), and category initialization.

## 4. Project Status & Future Scope
As of now, the **Catalogue Page** is the primary functional component of the Sahaay project. It successfully demonstrates:
1.  Dynamic content loading from external APIs.
2.  A robust, responsive UI/UX.
3.  Modular code structure for both styling and logic.

- While some most of the page works the search and sorting doesn't and this is what I have in mind for the next evaluation.
