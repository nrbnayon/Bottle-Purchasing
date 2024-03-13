
# Bottle-Purchasing

Bottle-Purchasing is a React-based web application for managing a shopping cart of bottles.

## Live: https://react-bottles.netlify.app/

## Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/nrbnayon/bottle-purchasing.git
```

2. Navigate to the project directory:

```bash
cd bottle-purchasing
```

3. Install dependencies using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

## Usage

To run the application in development mode, use:

```bash
npm start
```

or

```bash
yarn start
```

This will start the development server and open the application in your default web browser.

## Components

### Bottles

The `Bottles` component displays a list of bottles available for purchase. It fetches data from a JSON file and renders each bottle as a component.

### Cart

The `Cart` component shows the items added to the shopping cart. It receives a `cart` array as a prop and displays the cart items with their images.

## Folder Structure

```
bottle-purchasing/
│
├── src/
│   ├── components/
│   │   ├── Bottles.js
│   │   ├── Cart.js
│   │   └── Bottle.js
│   │
│   ├── App.js
│   ├── index.js
│   └── bottles.json
│
├── public/
│   └── index.html
│
├── package.json
├── README.md
└── .gitignore
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


