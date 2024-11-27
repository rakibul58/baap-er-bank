# Baap-er Bank

[Live Site](https://rakibul58.github.io/baap-er-bank/)

**Baap-er Bank** is a simple banking simulation project. It allows users to log in, view account details, and perform basic banking operations like deposits and withdrawals. The project is built using HTML, Tailwind CSS, and JavaScript.

## Features

### Login
- A secure login interface.
- Validates the user's email and password.
- Redirects to the dashboard upon successful login.

### Dashboard
- Displays the following:
  - Total Deposit
  - Total Withdraw
  - Account Balance
- Interactive input fields for depositing and withdrawing money.

### Deposit Functionality
- Allows users to add deposit amounts.
- Updates the total deposit and account balance in real-time.
- Validates input to ensure only valid numbers are accepted.

### Withdraw Functionality
- Enables users to withdraw amounts.
- Updates the total withdrawn and account balance dynamically.
- Checks if the withdrawal amount exceeds the available balance and displays an error message if true.

## Project Structure

```
/baap-er-bank
│
├── index.html           # Login page
├── dashboard.html       # Dashboard page
├── login.js             # Handles login functionality
├── deposit.js           # Handles deposit functionality
├── withdraw.js          # Handles withdrawal functionality
├── README.md            # Project documentation
└── tailwind.css         # Tailwind CSS for styling (loaded via CDN)
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/rakibul58/baap-er-bank.git
   ```
2. Navigate to the project folder:
   ```bash
   cd baap-er-bank
   ```
3. Open the `index.html` file in your browser to start the application.

## Login Credentials
Use the following credentials for testing:
- **Email**: `rakibul@hasan.com`
- **Password**: `123`

## Screenshots

### Login Page:
![Login Page](./screenshots/login-page.png)

### Dashboard:
![Dashboard](./screenshots/dashboard.png)

## Technologies Used
- **HTML5**: Structure of the web pages.
- **Tailwind CSS**: Responsive and utility-first styling.
- **JavaScript**: Logic for deposit, withdrawal, and login functionalities.

## Validation Rules
- Deposit and withdrawal inputs accept only numbers.
- Withdrawals are restricted to the available account balance.
- Alerts notify users of invalid actions (e.g., insufficient balance or invalid input).

## Contribution
Feel free to fork the repository, submit issues, or make pull requests. Contributions are always welcome!
