# Community Resource Network Website

This is the official website for Community Resource Network (CRN), a 501(c)(3) non-profit organization serving the greater Puget Sound area.

## 🚀 Local Development

```bash
cd frontend
npm install
npm run dev
```

---

## ✏️ Updating Site Content

All site content is managed through **two JSON files**. To update the website content, edit these files:

### 1. `src/data/content.json`

This file contains all the main site content:

- **Organization info** (name, address, tax ID, etc.)
- **Statistics** (pounds saved, households served)
- **Core values** (resourcefulness, environmental responsibility, etc.)
- **Volunteer information** (tasks, schedule, benefits, requirements)
- **Partner information** (contributing, receiving, financial partners)
- **About page content** (mission, acknowledgements)

### 2. `src/data/testimonials.json`

This file contains all testimonials displayed on the site:

```json
{
  "testimonials": [
    {
      "id": 1,
      "quote": "Your testimonial text here...",
      "author": "Community Recipient",
      "type": "recipient"
    }
  ]
}
```

Each testimonial needs:
- `id` - Unique number
- `quote` - The testimonial text
- `author` - Who said it (e.g., "Community Recipient", "Volunteer")
- `type` - Either `"recipient"` or `"volunteer"`

---

## ⚠️ Important

**Do NOT edit any other files** unless you are a developer making code changes.

All content updates should be made through the two JSON files listed above. Editing other files may break the website.

---

## 🖼️ Updating Images

To update the logo or favicon:

1. Replace the file in `public/assets/img/`
2. Keep the same filename (`favicon.png`)

---

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- React Router
- Framer Motion
- CSS Modules
