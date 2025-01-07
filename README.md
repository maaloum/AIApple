# AIApple-API

Appel is a modern web application built with React, Redux, and Tailwind CSS. This project showcases a responsive and feature-rich data visulazation with some custom filters, among other functionalities. The app is deployed on Vercel and can be accessed via [Appel Live App](https://ai-apple-hwn2n3smc-maaloums-projects.vercel.app/).

## Features

- **Responsive Navbar**: Includes links, sign-up and sign-in buttons, and a collapsible menu for mobile devices.
- **Dynamic Styling**: Tailwind CSS is used for easy and consistent styling across the app.
- **State Management**: Utilizes Redux Toolkit for efficient state management.
- **Environment Configuration**: API keys and other sensitive information are managed using `dotenv`.

## Installation

To get started with Appel locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/maaloum/AIApple.git
   cd AIApple
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your API key:

   ```env
   REACT_APP_API_KEY=your_api_key_here
   ```

4. **Start the Development Server**:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Deployment

The app is deployed on Vercel. For deploying your own version, follow these steps:

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy the app:

   ```bash
   vercel
   ```

## Project Structure

```
AIappel/
├── src/
│   ├── components/
│   │   ├── navbar/
│   │   │   └── Navbar.jsx
│   │   ├── screens/
│   │   │   └── Error.jsx
│   │   │   └── FinancialTable.jsx
│   │   │   └── Loading.jsx
│   ├── feature/
│   │   ├── data/
│   │   │   └── data.jsx
│   │   ├── store/
│   ├── utils/
│   │   ├── applyFilters.jsx
│   │   ├── urls.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles/
│       └── tailwind.css
├── public/
│   ├── index.html
│   └── favicon.ico
├── .env
├── package.json
├── tailwind.config.js
└── README.md
```

## Tech Stack

- **Frontend**:
  - React (v19.0.0)
  - Redux Toolkit (v2.5.0)
  - Tailwind CSS (v3.4.17)
  - Heroicons (v2.2.0)
- **HTTP Client**: Axios (v1.7.9)
- **Environment Variables**: Dotenv (v16.4.7)
- **Build Tool**: React Scripts (v5.0.1)
- **Deployment**: Vercel

## Usage

- Open the live app [here](https://ai-apple-hwn2n3smc-maaloums-projects.vercel.app/).
- Interact with the navbar to explore features like links, buttons, and the collapsible menu.
- Customize the app by modifying components in the `src/components` directory.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests on GitHub.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

**Author**: Maaloum's Projects
