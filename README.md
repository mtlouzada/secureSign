# Google OAuth Authentication - Christmas Eve Project

![googleapis](https://github.com/user-attachments/assets/7e873ba2-b80b-4415-b6d5-4d036797e540)

_Read this in other languages:_ 🇧🇷 [_Português_](./src/translations/README-ptBR.md) 🟢🟡

This is a simple project developed to implement user authentication using Google OAuth. It was created during free time on Christmas Eve as a way to practice concepts of integrating external APIs and responsive styling with SASS.

## Features

- Login with a Google account.
- Display of user information (name, email, and profile picture).
- Logout with removal of stored user information from the browser.
- Clean and centralized styling using SASS.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Google OAuth**: Secure authentication with the `@react-oauth/google` library.
- **SASS**: Dynamic CSS styling with reusable components.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to:
   ```
   http://localhost:5173
   ```

## Project Structure

```
/
├── src/
│   ├── App.tsx           # Main component
│   ├── main.tsx          # Application entry point
│   ├── index.scss        # Main styles
│   └── assets/           # Images and other resources
├── package.json          # Project configuration and dependencies
└── README.md             # Project documentation
```

## Demonstration

On the homepage, the user can:

1. Log in by clicking the "Continue with Google" button.
2. View the information returned by the Google API (name, email, and profile picture).
3. Log out, removing data from the browser and returning to the homepage.

## Learnings

- Implementation of authentication using Google OAuth.
- Managing states in React to store user data.
- Using `localStorage` for temporary data persistence.
- Responsive and accessible styling with SASS.

## Reflection

This project was a great opportunity to explore Google OAuth and improve skills in React and SASS. Additionally, creating something on Christmas Eve added a special touch to the learning experience, making the moment even more meaningful.

## License

This project is free to use. Feel free to use it as a base for your studies or projects.

---
