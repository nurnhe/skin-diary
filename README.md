# Skin Diary

A weekly skincare calendar: plan morning and evening products for each day, tick off or skip each step, rate how your skin feels, keep notes, and see how your skin responds with and without each product.

**Use it as a phone app:** open the GitHub Pages address in Chrome on Android, then tap ⋮ → **Install app** (or **Add to Home screen**). It opens full screen with its own icon and works offline.

## Files

- `skin-diary.html` is the page itself. The same file is published as a Claude artifact.
- `build.py` wraps it into `index.html` with the app manifest and offline support. Run `python3 build.py` after editing `skin-diary.html`.
- `manifest.webmanifest`, `sw.js` and `icons/` make it installable and work offline.

## Features

- **Phone layout:** a bottom tab bar with Today, Week, Routine and Shelf.
- **Today:** numbered morning and evening steps with a checkbox and a Skip button for each step. A day is marked completed once every step is ticked or skipped.
- **Other days:** arrows and a date picker on Today open any day to log it. Yesterday stays open for logging, and after midnight a hint offers to log last night's evening routine.
- **Week view:** seven day cards that fill in from a repeating weekly template. Any single day can be edited.
- **Weekly template:** a default routine for each weekday, for example retinol nights, an exfoliation night and recovery nights.
- **Products:** your shelf with exact product names, a step for each product and an icon. You can add, edit and remove products. Warnings flag risky combinations, for example retinol and an acid in the same routine.
- **Import my routine:** new diaries start empty. Paste a product list, or import an Excel or CSV spreadsheet (`routine-template.xlsx` is a ready-made template) or a Skin Diary routine file.
- **Finished products:** mark a product as finished, then Repurchase or Won't repurchase. Your routine tags it (Rebuy or Replace), and for products you won't buy again the Shelf suggests alternatives you can add or swap into your weekly routine.
- **Add to routine:** every shelf card shows where the product is used and has Add to routine (morning/evening, every day or chosen weekdays, or just today).
- **One-off products:** add a sample or a product you're trying once to a single morning or evening. It's logged on that day only and stays off the shelf.
- **To buy:** Want to buy on alternatives and Picked for you, plus Repurchase, fill a To buy list on the Shelf. Bought it moves an item onto the shelf (or restocks a finished product).
- **Name suggestions:** start typing a brand or product name in Add a product or a one-off and pick from a built-in list of about 110 popular products (plus your To buy list). Picking fills the brand, exact name, step and SPF/actives. Everything runs offline; nothing is sent anywhere.
- **How your skin responds:** your average skin rating on days with and without each product.

## Data

When the page runs as a Claude artifact, data is saved in the artifact's database and syncs across devices. Anywhere else, including the installed app, it saves to the browser's `localStorage` on that device. It starts with a sample routine, and **Shelf → Backup** saves or restores a backup file, for example to move to a new phone.

## Credits

Icons are inlined SVG from:

- [SheetJS](https://sheetjs.com) 0.18.5, loaded from cdnjs only when a spreadsheet is imported (Apache License 2.0)
- [IconPark](https://github.com/bytedance/IconPark) (Apache License 2.0)
- [Phosphor Icons](https://github.com/phosphor-icons/core) (MIT License)
- [Tabler Icons](https://github.com/tabler/tabler-icons) (MIT License)

Fonts: Instrument Serif and Outfit, from Google Fonts (SIL Open Font License).
