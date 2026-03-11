# 🎨 Design Documentation — Artisan Market

---

## 1. Color Palette

| Color | Usage | Hex Code |
|-------|-------|----------|
| **Primary Blue** | Buttons, links, headers | `#3b82f6` |
| **Success Green** | Success messages, confirmations | `#10b981` |
| **Danger Red** | Delete buttons, errors | `#ef4444` |
| **Warning Yellow** | Alerts, cautions | `#f59e0b` |
| **Background Gray** | Page backgrounds | `#f9fafb` |
| **Text Dark** | Main text | `#111827` |
| **Text Light** | Secondary text | `#6b7280` |
| **Border Gray** | Card borders, dividers | `#e5e7eb` |

---

## 2. Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| **Headings** | Inter | 24-36px | Bold |
| **Body text** | Inter | 16px | Normal |
| **Labels** | Inter | 14px | Medium |
| **Buttons** | Inter | 16px | Semibold |
| **Small text** | Inter | 12px | Normal |

All text uses the system font stack for simplicity:

---

## 3. Components

### Icons (Font Awesome)
```html

<i class="fas fa-plus"></i>  <!-- Add icon -->
<i class="fas fa-trash"></i> <!-- Delete icon -->
<i class="fas fa-edit"></i>  <!-- Edit icon -->
<i class="fas fa-user"></i>  <!-- User icon -->

```

### Buttons
```css
.btn-primary {
background-color: #3b82f6;
color: white;
padding: 0.5rem 1rem;
border-radius: 0.375rem;
font-weight: 500;
}

.btn-primary:hover {
background-color: #2563eb;
}

.btn-danger {
background-color: #ef4444;
color: white;
padding: 0.5rem 1rem;
border-radius: 0.375rem;
}

.btn-danger:hover {
background-color: #dc2626;
}
```

### Navigation Bar

```css
.navbar {
background: white;
border-bottom: 1px solid #e5e7eb;
padding: 1rem 2rem;
position: sticky;
top: 0;
z-index: 50;
}
```
### Dashboard Card
```css
.dashboard-card {
background: white;
border: 1px solid #e5e7eb;
border-radius: 0.5rem;
padding: 1rem;
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
transition: box-shadow 0.3s ease;
}

.dashboard-card:hover {
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### Flyer Card
```css
.flyer-card {
background: white;
border: 1px solid #e5e7eb;
border-radius: 0.5rem;
overflow: hidden;
}

.flyer-card img {
width: 100%;
height: 12rem;
object-fit: cover;
}

.flyer-card .content {
padding: 1rem;
}

```
## 4. Layout

### Grid System
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns

### Spacing
- **Small**: 0.5rem (8px)
- **Medium**: 1rem (16px)
- **Large**: 2rem (32px)
- **XLarge**: 4rem (64px)

### Container max widths
- **Mobile**: 100%
- **Tablet**: 640px
- **Desktop**: 1024px
- **Large Desktop**: 1280px

---

## 5. Responsive Breakpoints

| Device | Screen Width | Columns |
|--------|--------------|---------|
| Mobile | < 640px | 1 |
| Tablet | 640px - 1024px | 2 |
| Desktop | > 1024px | 3 |

---

## 6. Design Principles

1. **Simplicity** — Clean, uncluttered interfaces
2. **Consistency** — Same components work the same everywhere
3. **Accessibility** — Good contrast, readable text
4. **Mobile First** — Design for small screens first
5. **Feedback** — Clear visual feedback for actions

---

## 7. Animation Guidelines

- **Hover effects**: 0.3s ease transition
- **Modal popups**: Fade in/out
- **Button clicks**: Instant feedback
- **Page transitions**: None (Vue Router instant)