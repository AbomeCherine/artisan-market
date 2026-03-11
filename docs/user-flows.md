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

    graph TD
    A[Home Page] --> B[Click 'Browse Gallery']
    B --> C[View all flyers]
    C --> D[Click on a flyer]
    D --> E[See product details]
    E --> F[Click 'Contact Artisan']
    F --> G[Redirected to Login / Register]

    graph TD
    A[Login as Artisan] --> B[Go to Dashboard]
    B --> C[Scroll to 'Messages' section]
    C --> D[View all messages]
    D --> E{Unread messages?}
    E -->|Yes| F[Highlighted in blue]
    E -->|No| G[Normal view]
    F --> H[Click 'Delete' to remove]
    G --> H

    graph LR
    A[Hears about platform] --> B[Registers as Artisan]
    B --> C[Logs in]
    C --> D[Posts first flyer: Jewelry]
    D --> E[Next day: receives message]
    E --> F[Reads and replies]
    F --> G[Makes a sale!]

    graph LR
    A[Wants unique gift] --> B[Registers as Buyer]
    B --> C[Logs in]
    C --> D[Browses Gallery]
    D --> E[Searches 'necklace']
    E --> F[Finds Fatou's jewelry]
    F --> G[Sends message]
    G --> H[Receives reply]
    H --> I[Buys product]

    