## 📝 Website Creation Task: Community Resource Hub

### **Objective**
Create a multi-page HTML website called **Community Resource Hub**. This site will serve as a centralized platform for discovering local tech services, events, and resources in Tallinn. The project should demonstrate strong HTML/CSS skills, responsive design, and basic UI/UX principles.

---

### **Requirements**

#### **1. Pages & Structure**
- Create the following HTML pages:
  - `index.html` (Homepage)
  - `about.html` (About the project/community)
  - `services.html` (Directory of tech services/resources)
- Organize assets in an `/assets` folder with subfolders for `css/`, `js/`, and `images/`.
- Include a `/docs` folder for documentation and a `/wireframes` folder for design files.

#### **2. Core Features**
- **Homepage:** Welcome message, project purpose, and navigation to other sections.
- **Interactive Map:** (Placeholder or real) showing local resource pins.
- **Directory:** Filterable list of tech services and community resources.
- **Events Calendar:** List or calendar view of upcoming tech events in Tallinn.
- **Multi-language Support:** Provide at least basic navigation/content in Estonian, English, and Russian.
- **Accessibility:** Use semantic HTML, alt text for images, and ensure keyboard navigation.

#### **3. Design & UX**
- Use a consistent, soft pastel color palette (see `main.css` for reference).
- Apply anti-design principles for fonts and visual style (Comic Sans, Papyrus, Impact, etc.).
- Ensure responsive layout for mobile and desktop.
- Use Google Fonts and icon libraries as needed.
- Reference Figma wireframes (if available) for layout guidance.

#### **4. Collaboration & Documentation**
- Use Git for version control and collaboration.
- Document user flows, personas, and design decisions in `/docs`.
- Write a user guide for navigating the site.
- Include accessibility and user testing notes.

#### **5. Bonus (Optional)**
- Add simple JavaScript interactivity (e.g., filter directory, switch languages, highlight map pins).
- Implement a basic feedback form.

### **Additional Task: Student Success Stories Component**

#### **Objective**
Create an anti-design inspired "Student Success Stories" component for the education center website, adapting the testimonials section from the anti-design example.

#### **Requirements**

1. **Component Structure**
   - Create a new HTML file `success-stories.html`
   - Implement the component in the existing website structure
   - Use semantic HTML5 elements (`<section>`, `<article>`, etc.)

2. **Visual Design**
   - Maintain the anti-design aesthetic with:
     - Comic Sans MS font
     - Bright, clashing colors
     - Rotating and wobbling animations
     - Multiple borders and shadows
     - Star bullet points
   - Each testimonial should have:
     - Student photo (placeholder allowed)
     - Name and course
     - Success story text
     - Achievement metrics
     - Random rotation on hover

3. **Content Requirements**
   - Include at least 5 student success stories
   - Each story should have:
     - Course completed
     - Skills learned
     - Current position/achievement
     - Personal quote
   - Use emojis and exaggerated formatting

4. **Interactive Elements**
   - Add hover effects that:
     - Rotate the testimonial card
     - Change background color
     - Add sparkle animations
   - Include a "Load More Stories" button with:
     - Rainbow gradient
     - Blinking text
     - Shake animation on hover

5. **Accessibility Considerations**
   - Ensure the component is keyboard navigable
   - Add proper ARIA labels
   - Maintain readability despite anti-design
   - Include alt text for images

6. **Responsive Design**
   - Make the component work on mobile devices
   - Stack testimonials vertically on small screens
   - Maintain anti-design elements at all breakpoints

#### **Example Structure**
```html
<section class="success-stories" aria-label="Student Success Stories">
    <h2 class="blink">🌟 AMAZING STUDENT SUCCESS STORIES! 🌟</h2>
    <div class="testimonials-grid">
        <article class="testimonial-card" style="transform: rotate(-2deg)">
            <img src="placeholder.jpg" alt="Student photo">
            <h3>John Doe</h3>
            <p class="course">Web Development Bootcamp</p>
            <p class="achievement">Now working at: <span class="highlight">Google</span></p>
            <blockquote>"This course changed my life! 💪"</blockquote>
        </article>
        <!-- More testimonials -->
    </div>
    <button class="load-more">LOAD MORE INSPIRING STORIES! 🚀</button>
</section>
```

#### **Evaluation Criteria**
- Successfully implements anti-design principles
- Maintains accessibility standards
- Responsive across all devices
- Proper semantic HTML structure
- Engaging and motivating content
- Smooth animations and transitions

#### **Bonus Points**
- Add a "Share Your Story" form
- Implement a random testimonial generator
- Create a "Success Story of the Day" feature
- Add achievement badges with animations

---

### **Deliverables**
- All HTML, CSS, JS, and image files in the correct folder structure.
- A working, visually consistent website viewable in a browser.
- Documentation and wireframes in their respective folders.
- A short user guide in `/docs` or as `README.md`.

---

### **Evaluation Criteria**
- Fulfills all required features and structure.
- Consistent anti-design pastel style.
- Responsive and accessible.
- Clear documentation and code organization.

