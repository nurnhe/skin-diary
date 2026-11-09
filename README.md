# Skin Diary

A weekly skincare calendar: plan morning and evening products for each day, tick off or skip each step, rate how your skin feels, keep notes, and see how your skin responds with and without each product.

**Use it as a phone app:** open the GitHub Pages address in Chrome on Android, then tap ⋮ → **Install app** (or **Add to Home screen**). It opens full screen with its own icon and works offline.

## Files

- `skin-diary.html` is the page itself. The same file is published as a Claude artifact.
- `build.py` wraps it into `index.html` with the app manifest and offline support. Run `python3 build.py` after editing `skin-diary.html`.
- `manifest.webmanifest`, `sw.js` and `icons/` make it installable and work offline.

## Features

- **Phone layout:** a bottom tab bar with Today, Week, Routine, Shelf and Skin. On phones every panel (a day, a product, Add a product) slides up from the bottom.
- **Today:** on phones a Morning / Evening switch opens on the routine for right now (morning before 2 pm). Tap a step to tick it, swipe it left to skip it. When every step is ticked or skipped, a done card shows how many of the last 7 mornings or evenings you did.
- **Other days:** a week strip on Today (swipe it or use the arrows for other weeks) and a date picker open any day to log it. Dots under each day show a logged morning and evening. Yesterday stays open for logging, and after midnight a hint offers to log last night's evening routine.
- **Week view:** seven day cards that fill in from a repeating weekly template. Any single day can be edited.
- **Weekly template:** a default routine for each weekday, for example retinol nights, an exfoliation night and recovery nights.
- **Products:** your shelf as a grid of tiles with filters (All, In routine, Hair, To buy, Finished), exact product names, a step for each product and an icon. Tap a tile to rate it (1 to 5 stars, also after you finish it), add it to your routine, edit, change its icon or remove it. Warnings flag risky combinations, for example retinol and an acid in the same routine.
- **Import my routine:** new diaries start empty. Paste a product list, or import an Excel or CSV spreadsheet (`routine-template.xlsx` is a ready-made template) or a Skin Diary routine file.
- **Finished products:** mark a product as finished, then Repurchase or Won't repurchase. Your routine tags it (Rebuy or Replace), and for products you won't buy again the Shelf suggests alternatives you can add or swap into your weekly routine.
- **Your own order:** hold the dotted handle on a step and drag it to reorder the morning or evening routine. The order is kept for every day.
- **Add to routine:** every product shows where it is used and has Add to routine (morning/evening, every day, chosen weekdays, every few days, or just today).
- **One-off products:** add a sample or a product you're trying once to a single morning or evening. It's logged on that day only and stays off the shelf.
- **To buy:** Want to buy on alternatives and Picked for you, plus Repurchase, fill a To buy list on the Shelf. Bought it moves an item onto the shelf (or restocks a finished product).
- **Name suggestions:** start typing a brand or product name in Add a product or a one-off and pick from a built-in list of about 110 popular products (plus your To buy list). Picking fills the brand, exact name, step and SPF/actives. Everything runs offline; nothing is sent anywhere.
- **Hair:** a Hair step and section on the Shelf, including Wash hair as a step. Hair is left out of the face skin insights.
- **Every few days:** Add to routine can repeat a product or step every 2 to 8 days from a chosen start day, for example Wash hair every 3 days, or two shampoos each every 6 days, 3 days apart.
- **Lips and Feet & body steps:** two steps that come last in the evening (lips, then feet & body). They are logged like any other step but kept out of the face skin insights.
- **Add-products link:** a link ending in `#add=…` shows the products it carries and, after you tap Add, puts them on your shelf and into every morning or evening in step order. An item can also carry a repeat (every n days from a date). Nothing changes until you confirm.
- **Colour scheme:** Auto (follows your device), Light or Dark, switched at the top of the page. The choice is saved on this device under `nurnhe-theme`, a setting shared with the other apps on nurnhe.github.io, so switching in one switches them all.
- **Skin tab:** a month calendar coloured by how your skin felt each day (tap a day to open it), tiles with the month's average, days rated, the states you felt most often and the product your best days line up with, and a card per face product comparing days with and without it (lips, feet & body and hair are left out).
- **Time of day:** the background glow and phone status bar turn warm in the morning and cool after 2 pm.

## Data

When the page runs as a Claude artifact, data is saved in the artifact's database and syncs across devices. Anywhere else, including the installed app, it saves to the browser's `localStorage` on that device. It starts with a sample routine, and **Shelf → Backup** saves or restores a backup file, for example to move to a new phone.

## Credits

Icons are inlined SVG from:

- [SheetJS](https://sheetjs.com) 0.18.5, loaded from cdnjs only when a spreadsheet is imported (Apache License 2.0)
- [IconPark](https://github.com/bytedance/IconPark) (Apache License 2.0)
- [Phosphor Icons](https://github.com/phosphor-icons/core) (MIT License)
- [Tabler Icons](https://github.com/tabler/tabler-icons) (MIT License)

Fonts: Instrument Serif and Outfit, from Google Fonts (SIL Open Font License).
