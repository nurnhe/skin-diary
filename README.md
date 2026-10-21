# Skin Diary

A weekly skincare calendar: plan morning and evening products for each day, tick off or skip each step, rate how your skin feels, keep notes, and see how your skin responds with and without each product.

Open `index.html` in a browser. It's a single file with no build step.

## Features

- **Today:** numbered morning and evening steps with a checkbox and a Skip button for each step. A day is marked completed once every step is ticked or skipped.
- **Week view:** seven day cards that fill in from a repeating weekly template. Any single day can be edited.
- **Weekly template:** a default routine for each weekday, for example retinol nights, an exfoliation night and recovery nights.
- **Products:** your shelf with exact product names, a step for each product and an icon. You can add, edit and remove products. Warnings flag risky combinations, for example retinol and an acid in the same routine.
- **How your skin responds:** your average skin rating on days with and without each product.

## Data

When the page runs as a Claude artifact, data is saved in the artifact's database and syncs across devices. Opened anywhere else, it saves to the browser's `localStorage`. That data stays on one device only, and the page starts empty.

## Credits

Icons are inlined SVG from:

- [IconPark](https://github.com/bytedance/IconPark) (Apache License 2.0)
- [Phosphor Icons](https://github.com/phosphor-icons/core) (MIT License)
- [Tabler Icons](https://github.com/tabler/tabler-icons) (MIT License)

Fonts: Instrument Serif and Outfit, from Google Fonts (SIL Open Font License).
