# User Dashboard

A React-based user dashboard application that displays a list of users fetched from the JSONPlaceholder API. The app features a search functionality to filter users by name, a responsive design using Material-UI, and a dark mode toggle with glassmorphism effects.

## Features

- Fetch and display user data from JSONPlaceholder API
- Search users by name in real-time
- Responsive grid layout (desktop, tablet, mobile)
- Material-UI components for modern, accessible UI
- Dark mode toggle with localStorage persistence
- Glassmorphism card effects with hover animations
- Loading spinner and error handling
- Custom gradient backgrounds and typography

## Technologies Used

- React 18
- Material-UI (MUI) for components and theming
- JavaScript (ES6+)
- CSS for custom styling and animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd user-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production Build

For production testing:
```bash
npm run build
npx serve -s build
```

## Project Structure

```
src/
├── App.js                 # Main app component with state management and theming
├── App.css                # Custom styles for backgrounds, animations, and overrides
├── index.js               # React entry point
├── components/
│   ├── SearchBar.js       # Search input component
│   ├── UserCard.js        # Individual user card component
│   └── ThemeToggle.js     # Dark/light mode toggle button
└── public/
    └── index.html         # HTML template
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner in interactive watch mode
- `npm run eject` - Ejects from Create React App (irreversible)

## API

The app uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) API to fetch mock user data, including names, emails, addresses, and company info.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
