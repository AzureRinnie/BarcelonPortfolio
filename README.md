# Student Developer Portfolio Template

A clean, modern, and responsive portfolio template for 1st year BSIT students at Cebu Institute of Technology - University.

## 📁 Project Structure

```
├── index.html       # Main HTML file - contains all sections
├── style.css        # Styling for the portfolio
├── script.js        # JavaScript for interactivity
└── README.md        # This file
```

## 🎨 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI** - Clean, professional gradient design with smooth animations
- **Easy to Customize** - Simple structure, easy to understand and modify
- **Smooth Scrolling** - Smooth navigation between sections
- **Hover Effects** - Interactive elements with hover animations
- **Mobile Optimized** - Mobile-first responsive design

## 📝 Customization Guide

### 1. **Basic Info**
   - Replace `Your Name` with your actual name in:
     - Line 6: `<title>` tag
     - Line 38: `.nav-brand`
     - Line 57: `<h1>` tag
   - Update your email in the Contact section
   - Update social media links (GitHub, LinkedIn, Twitter)

### 2. **Hero Section**
   - Modify the subtitle and description to match your journey
   - Adjust the gradient colors in `style.css` (lines 123-125):
     ```css
     background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
     ```

### 3. **Skills Section**
   - Add/remove skill categories as needed
   - List the technologies and tools you're currently learning
   - Examples: HTML5, CSS3, JavaScript, Python, Java, Git, VS Code, etc.

### 4. **Projects Section**
   - Add your class projects, personal projects, or practice work
   - For each project card:
     - Replace placeholder images (update the `src` attribute)
     - Update project title and description
     - Modify technology tags
     - Update project links (View Project & GitHub Repo)
   - You can duplicate the `.project-card` div to add more projects

### 5. **Education Section**
   - Update with your actual program details
   - Change start year (2023) if different
   - Add relevant coursework if desired

### 6. **Contact Section**
   - Add your actual email
   - Link to your GitHub profile
   - Link to your LinkedIn profile
   - Add any other social profiles

## 🚀 How to Use

1. **Open in Browser:**
   - Simply open `index.html` in your web browser
   - Or use VS Code's Live Server extension

2. **Local Testing:**
   ```bash
   # If you have Python installed, you can run a local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Deploy:**
   - **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
   - **Netlify**: Drag and drop your folder into Netlify
   - **Vercel**: Connect your repository to Vercel
   - **Other**: Any static hosting service (000webhost, Hostinger, etc.)

## 🎨 Color Scheme

Current colors used:
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple) 
- **Accent**: `#fbbf24` (Amber)
- **Text Dark**: `#1f2937` (Dark Gray)
- **Text Light**: `#6b7280` (Light Gray)
- **Background**: `#f9fafb` (Off-white)

You can customize these in `style.css` under the `:root` CSS variables (lines 1-10).

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

The template includes media queries for all breakpoints.

## ✅ Checklist Before Publishing

- [ ] Replace "Your Name" with your actual name
- [ ] Update your email address
- [ ] Add your GitHub link
- [ ] Add your LinkedIn link
- [ ] Add at least 1-3 projects with descriptions
- [ ] Update skills list with what you know
- [ ] Add project images (or create thumbnails)
- [ ] Replace social media links with yours
- [ ] Test on mobile devices
- [ ] Deploy to a hosting service

## 💡 Tips for Success

1. **Projects Matter**: Even school projects count! Show what you've built.
2. **Descriptions**: Write meaningful project descriptions that explain:
   - What problem it solves
   - Technologies used
   - What you learned
3. **Keep It Updated**: Regularly add new projects and skills as you learn
4. **Professional Look**: Use good project images/screenshots
5. **Mobile First**: Always test on mobile devices

## 🔧 Future Enhancements

- Add a blog section
- Add testimonials/recommendations
- Add a dark mode toggle
- Add more interactive features
- Add a newsletter signup
- Add animations with libraries like AOS or GSAP

## 📚 Resources

- [HTML/CSS/JavaScript Docs](https://developer.mozilla.org/en-US/)
- [GitHub Pages Hosting](https://pages.github.com/)
- [Netlify Hosting](https://www.netlify.com/)
- [Web Design Inspiration](https://dribbble.com/)

## 📞 Need Help?

- Check the comments in the HTML and CSS files
- Review the responsive design breakpoints
- Test in different browsers and devices

---

**Happy Building! 🚀**

Good luck with your portfolio and your BSIT studies at CIT-U!
