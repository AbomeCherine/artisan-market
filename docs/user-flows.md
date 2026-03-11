# 🔁 User Flows — Artisan Market

---

## 1. Artisan Flow — Post a Flyer

```mermaid
graph TD
    A[Home Page] --> B[Register / Login]
    B --> C{Choose Role}
    C -->|Artisan| D[Artisan Dashboard]
    D --> E[Click 'Post New Flyer']
    E --> F[Fill Form: Name, Description, Price, Category, Image]
    F --> G[Click 'Publish']
    G --> H[Flyer appears in 'My Flyers']
    H --> I[Visible to all buyers in Gallery]
```

---

## 2. Buyer Flow — Discover and Contact

```mermaid
graph TD
    A[Home Page] --> B[Register / Login]
    B --> C{Choose Role}
    C -->|Buyer| D[Buyer Dashboard]
    D --> E[Click 'Browse Products Gallery']
    E --> F[Browse all flyers]
    F --> G[Use search or category filter]
    G --> H[Click on a flyer]
    H --> I[Click 'Contact Artisan']
    I --> J[Fill contact form]
    J --> K[Send message]
    K --> L[Artisan receives message]
```

---

## 3. Guest Flow — Browse Without Account

```mermaid
graph TD
    A[Home Page] --> B[Click 'Browse Gallery']
    B --> C[View all flyers]
    C --> D[Click on a flyer]
    D --> E[See product details]
    E --> F[Click 'Contact Artisan']
    F --> G[Redirected to Login / Register]
```

---

## 4. Artisan Flow — Receive and Manage Messages

```mermaid
graph TD
    A[Login as Artisan] --> B[Go to Dashboard]
    B --> C[Scroll to 'Messages' section]
    C --> D[View all messages]
    D --> E{Unread messages?}
    E -->|Yes| F[Highlighted in blue]
    E -->|No| G[Normal view]
    F --> H[Click 'Delete' to remove]
    G --> H
```

---

## 5. Complete User Journey — Fatou (Artisan)

```mermaid
graph LR
    A[Hears about platform] --> B[Registers as Artisan]
    B --> C[Logs in]
    C --> D[Posts first flyer: Jewelry]
    D --> E[Next day: receives message]
    E --> F[Reads and replies]
    F --> G[Makes a sale!]
```

---

## 6. Complete User Journey — Mamadou (Buyer)

```mermaid
graph LR
    A[Wants unique gift] --> B[Registers as Buyer]
    B --> C[Logs in]
    C --> D[Browses Gallery]
    D --> E[Searches 'necklace']
    E --> F[Finds Fatou's jewelry]
    F --> G[Sends message]
    G --> H[Receives reply]
    H --> I[Buys product]
```