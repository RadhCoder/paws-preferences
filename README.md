# Paws & Preferences 🐾

A fun, mobile-first web application for discovering your favorite cats through swipe gestures! Features a unique polaroid-inspired design with playful animations.

## ✨ Design Philosophy

This app features a **distinctive polaroid camera aesthetic** with:
- 📸 Polaroid-style photo cards with realistic shadows
- ✍️ Handwritten font for a personal, playful touch
- 🎨 Soft pink and cream color palette
- 🐾 Custom paw print cursor
- 🎭 Floating emoji decorations
- 💫 Smooth animations and micro-interactions

Built with **Tailwind CSS** for rapid development while maintaining a unique, non-generic design that stands out from typical AI-generated interfaces.

## 🎯 Features

- 🐱 Browse through 15 adorable cats from [Cataas](https://cataas.com/)
- 👆 Intuitive swipe gestures (left for dislike, right for like)
- 📱 Fully responsive and optimized for mobile devices
- ✨ Smooth animations and visual feedback
- 💝 Polaroid-style results gallery
- 🎨 Beautiful gradient background with subtle patterns
- 💬 Fun randomized captions on each card

## 🚀 Live Demo

[https://radhcoder.github.io/paws-preferences/](#)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - No frameworks, pure performance
- **Google Fonts** - Fredoka & Covered By Your Grace
- **Cataas API** - Cat image source

## ✅ Features Implemented

### Core Requirements
✅ Single-page web application  
✅ Swipe right to like, swipe left to dislike  
✅ Summary page showing liked cats  
✅ Cat images from Cataas API  
✅ Mobile-optimized interface  

### Enhanced Features
- **Polaroid Design**: Unique card style mimicking vintage instant photos
- **Visual Feedback**: On-card indicators show "LIKE" or "NOPE" as you swipe
- **Smooth Animations**: Card swipe animations with rotation effects
- **Desktop Support**: Mouse drag functionality for desktop users
- **Loading State**: Spinner while cats are loading
- **Custom Cursor**: Paw print cursor for extra charm
- **Floating Emojis**: Animated background decorations
- **Dynamic Captions**: Each cat has a fun caption
- **Responsive Grid**: Beautiful gallery view for liked cats
- **Empty State**: Friendly message if no cats are liked
- **No Scrolling**: Fixed viewport prevents accidental scrolling

## 📦 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/paws-and-preferences.git
   cd paws-and-preferences
   ```

2. **Open locally**
   - Simply open `index.html` in your browser
   - No build process or dependencies required!
   - Tailwind CSS loads from CDN

3. **Or use a local server** (optional)
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

## 🌐 Deployment to GitHub Pages

1. **Create a new repository** on GitHub

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Polaroid cat swiper"
   git branch -M main
   git remote add origin https://github.com/yourusername/paws-and-preferences.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Under "Source", select `main` branch
   - Click Save
   - Your site will be live at `https://yourusername.github.io/paws-and-preferences/`

## 🎮 How to Use

1. **View a cat** - A random cat appears in a polaroid frame
2. **Swipe or click**:
   - Swipe/drag right or click ❤️ to like
   - Swipe/drag left or click ✕ to pass
3. **See your results** - After 15 cats, view your favorites in a gallery
4. **Start over** - Click "Start Over" to try again

## 📁 Project Structure

```
paws-and-preferences/
├── index.html          # Main HTML with Tailwind CSS
├── script.js           # Application logic and swipe handling
└── README.md           # This file
```

## 🎨 Design Choices

### Typography
- **Fredoka**: Rounded, friendly font for UI elements
- **Covered By Your Grace**: Handwritten font for titles and captions

### Color Palette
- Background: Soft cream with pink diagonal stripes
- Primary: Pink (#ff6b9d, #ec4899)
- Accents: Green (likes), Red (dislikes)
- Neutral: White cards, gray text

### Why Tailwind?
Tailwind CSS was chosen because:
- ✅ Rapid prototyping with utility classes
- ✅ Consistent spacing and sizing
- ✅ Easy responsive design
- ✅ Small bundle size via CDN
- ✅ No build step needed for simple projects
- ✅ Still allows for custom unique design

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔮 Future Enhancements

Potential features to add:
- [ ] Share results on social media
- [ ] Save preferences to localStorage
- [ ] Filter cats by tags (cute, funny, grumpy)
- [ ] Add undo functionality
- [ ] Keyboard shortcuts (← →) for desktop
- [ ] PWA support for offline use
- [ ] Sound effects on swipe
- [ ] Confetti animation when you like a cat

## 📄 License

MIT License - feel free to use this project for learning or personal use!

## 🙏 Acknowledgments

- Cat images provided by [Cataas](https://cataas.com/)
- Fonts from Google Fonts
- Inspired by vintage polaroid cameras and dating apps
- Built as a coding exercise with love for cats 🐱

---

Made with 💜 and ☕ by a cat lover