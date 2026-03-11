# 🛡️ Threat Model — Artisan Market

---

## 1. Overview

This document identifies potential security threats to the Artisan Market platform and outlines mitigation strategies.

---

## 2. Threat List

| # | Threat | Description | Impact | Likelihood | Mitigation |
|---|--------|-------------|--------|------------|------------|
| 1 | **Fake payments** | Buyer pays artisan directly outside platform | 🔴 Critical | Medium | Escrow system, payment verification, warnings |
| 2 | **Account takeover** | Attacker gains access to user account | 🔴 High | Medium | Strong passwords, 2FA, email verification |
| 3 | **Fake artisans** | Scammers create fake artisan accounts | 🟠 Medium | High | Phone/email verification, review system |
| 4 | **Payment fraud** | Buyer claims they paid but didn't | 🔴 Critical | Medium | Payment gateway integration, transaction logs |
| 5 | **Data breach** | User data exposed | 🔴 High | Low | Encryption, secure localStorage, HTTPS |
| 6 | **Fake messages** | Spam or phishing messages | 🟡 Low | High | Rate limiting, message reporting |
| 7 | **Image abuse** | Offensive or fake product images | 🟡 Low | Medium | Moderation, reporting system |
| 8 | **Session hijacking** | Attacker steals user session | 🔴 High | Low | Session timeout, secure cookies |

---

## 3. Risk Matrix

```mermaid
quadrantChart
    title Risk Assessment Matrix
    x-axis Low Impact --> High Impact
    y-axis Low Probability --> High Probability
    quadrant-1 "Critical (Act Now)"
    quadrant-2 "High Priority"
    quadrant-3 "Monitor"
    quadrant-4 "Low Priority"
    "Fake payments": [0.9, 0.6]
    "Account takeover": [0.8, 0.5]
    "Fake artisans": [0.6, 0.8]
    "Payment fraud": [0.9, 0.4]
    "Data breach": [0.8, 0.2]
    "Fake messages": [0.3, 0.7]
    "Image abuse": [0.2, 0.6]
    "Session hijacking": [0.7, 0.2]