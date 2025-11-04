# URL Shortener Project

A modern, responsive URL shortener built with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**. Users can shorten URLs with custom aliases, see success/error messages directly in the UI, and get a generated link to share.

---

## Features

- Shorten URLs with custom aliases.
- Input validation: both URL and alias are required.
- Smooth animations with **Framer Motion**.
- Responsive design using **Tailwind CSS**.
- Display generated links and error/success messages without using `alert`.
- Easy integration with a backend API (`/api/generate`) to handle URL shortening.

---

## Demo

Add your hosted project link or screenshot here.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_HOST=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

---

## Usage

1. Enter a URL in the "Enter Your URL" field.
2. Enter a custom alias in the "Enter an Alias" field.
3. Click **Shorten It**.
4. If successful, your shortened link will appear below the form.
5. If inputs are missing or an error occurs, an error message will display.

---

## Technologies Used

- [Next.js](https://nextjs.org/) – React framework for production.
- [React](https://reactjs.org/) – UI library.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework.
- [Framer Motion](https://www.framer.com/motion/) – Animations and transitions.
- Node.js & Fetch API – Backend communication.

---

## File Structure

```
/pages
  /api
    generate.js       # API route for URL shortening
/components         # Components Used 
  Hero.js
  Navbar.js
  Stats.js
  Footer.js             
/public
  hero_img.svg        # Hero image
  shorten_bg.svg      # Background for shortener card
```

---

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes.
4. Commit changes: `git commit -m "Add feature"`
5. Push to branch: `git push origin feature-name`
6. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## Notes

- Ensure your backend `/api/generate` endpoint correctly handles alias collisions.
- Customize Tailwind classes to match your branding.
- Future improvements can include analytics for shortened URLs.