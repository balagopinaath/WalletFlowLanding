# WalletFlow

An offline-first personal finance manager for Android. No account, no login, no network required — every rupee lives on the device, and every transaction belongs to a real account so your balances are always exact.

Built with **Kotlin**, **Jetpack Compose**, **Material 3**, **Room**, **Navigation Compose**, **DataStore**, **Glance** (widget), and **androidx.biometric** (app lock).

## The core idea

Most expense trackers record what you spent but never subtract it from where the money actually came from, so they can't tell you how much you really have left. WalletFlow fixes this:

- Every transaction **belongs to an account**.
- An **expense** reduces its account; **income** increases it.
- A **transfer** moves money between two accounts and never counts as income or expense.
- Balances are always **derived from transactions** — never edited by hand.
- Money is stored as integer **minor units** (paise/cents), so balances never drift from floating-point rounding.

## What's included

- **Accounts** — create, edit, archive; realistic bank/wallet card art; multi-currency
- **Transactions** — expense, income, transfer; categories, notes, search, grouped history, trash
- **Reports** — period presets, custom range, line/bar/heatmap trend charts, category breakdown, streak heatmap
- **Widget** — 5-size Glance widget with quick-add and refresh
- **Security** — optional biometric lock, re-engages off-foreground
- **Backup** — CSV and .xlsx export/import; PDF statement generation
- **Categories** — two-level hierarchy, 30+ groups, ~190 presets
- **Recurring** — daily/weekly/monthly/yearly, month-end-safe date math
- **Tags & Receipts** — chip-based tags, photo attachments
- **Goals & Budgets** — savings targets, monthly + per-category budgets
- **Onboarding** — first-launch carousel + contextual spotlights
- **Personalization** — light/dark/system, 6 accents, AMOLED, glassmorphism

## Running it

Standard Gradle Android app. Open in **Android Studio** (Koala / 2024.1+) or:

```bash
gradle wrapper --gradle-version 8.9
./gradlew assembleDebug
```

- Min SDK: 28 (Android 9.0)
- Target/Compile SDK: 37
- JDK: 17

## Architecture

```
ui/            Compose screens + WalletViewModel (StateFlow-driven)
domain/        BalanceEngine, RecurrenceEngine, SmsTransactionParser, Money model
data/          Room entities/DAOs, FinanceRepository, SettingsStore, CSV/.xlsx/PDF export
util/          Date helpers, AppHaptics, TagUtils, ReceiptStore
notification/  Daily reminder, recurring check, goal celebration
widget/        Glance home-screen widget — 5 size-aware layouts
```

No DI framework — manual wiring via `AppContainer`. Balances derived in SQL, exposed as reactive `Flow`.

## Verified

Pure-domain logic passes a test suite covering the headline balance-engine scenario — Bank ₹20,000 dropping to ₹19,151 after three expenses, transfers moving money without affecting income/expense totals, and validation rejecting bad input.

## Roadmap

Carry-forward month rollover, cloud sync, OCR receipt scanning, and a net-worth dashboard.
