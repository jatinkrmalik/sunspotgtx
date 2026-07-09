# Sunspot — Deepak Electrical Industries (India)

Static website for [sunspotgtx.com](https://sunspotgtx.com)

## About

Deepak Electrical Industries (India) is a manufacturer of ISI-marked electrical appliances established in 1986. Operating under the brand **Sunspot**, we produce room heaters, exhaust fans, table fans, cooler fans, pumps, and heating elements from our factory in Bawana Industrial Area, Delhi.

## Products

- Electric Room Heaters (Heat Converters & Fan Heaters) — ISI Marked
- Exhaust Fans (Axial, Fresh Air, Trans Air) — ISI Marked
- Table Fans & Wall Fans
- Cooler Fans / Climatizer Fans
- Industrial & Heavy Duty Exhaust Fans
- Immersion Water Heaters
- Fountain Pumps & Cooler Pumps
- Flexi Fans
- Heating Elements (Strip, Cartridge, Band, Finned)

## Contact

- **Address:** E-206, Sector-4, DSIIDC Industrial Area, Bawana, North West Delhi, Delhi – 110039
- **Phone:** +91-9313555700 | 011-27762250
- **Email:** info@sunspotgtx.com
- **Proprietor:** Mr. Deepak Kumar Malik
- **GST:** 07AAKPM3211D1Z6

## Tech Stack

- Pure HTML5, CSS3, Vanilla JavaScript
- No frameworks or dependencies
- Mobile-first responsive design
- SEO optimized with JSON-LD structured data
- GitHub Pages deployment with custom domain
- Contact form via [FormSubmit](https://formsubmit.co) (AJAX) with WhatsApp fallback

## Local preview

```bash
# From repo root
python3 -m http.server 8080
# open http://localhost:8080
```

## Contact form setup

Enquiries POST to `info@sunspotgtx.com` through FormSubmit. On first use, open that inbox and confirm the FormSubmit activation email. If the email service is unavailable, the form opens WhatsApp with a prefilled message so leads are not lost.

Product “Enquire Now” links pass `?product=…` and the contact page prefills the product dropdown.

## Deploy (GitHub Pages)

1. Merge `feature/website` into `main`
2. Repo **Settings → Pages → Deploy from branch `main` / root**
3. Point `sunspotgtx.com` DNS (A/AAAA or CNAME) at GitHub Pages
4. Keep the `CNAME` file (`sunspotgtx.com`) in the repo

---

© 2026 Deepak Electrical Industries (India). All rights reserved.
