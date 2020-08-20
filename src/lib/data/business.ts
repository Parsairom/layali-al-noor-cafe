export const businessInfo = {
  name: "Layali Al Noor Café",
  legalName: "Layali Al Noor Café L.L.C.",
  founded: 2019,
  phone: "+971 4 555 0192",
  phoneHref: "tel:+97145550192",
  whatsapp: "+971 50 555 0192",
  whatsappHref: "https://wa.me/971505550192",
  email: "reservations@layalialnoor.ae",
  emailHref: "mailto:reservations@layalialnoor.ae",
  address: {
    line1: "Jumeirah Bay Gate, Al Wasl Road",
    line2: "Jumeirah 1, Dubai, United Arab Emirates",
  },
  coordinates: { lat: 25.2048, lng: 55.2708 },
  mapEmbedSrc:
    "https://www.google.com/maps?q=Jumeirah+1,+Dubai,+United+Arab+Emirates&output=embed",
  mapLink: "https://maps.google.com/?q=Jumeirah+1,+Dubai,+United+Arab+Emirates",
  social: {
    instagram: "https://instagram.com/layalialnoor",
    facebook: "https://facebook.com/layalialnoor",
    tiktok: "https://tiktok.com/@layalialnoor",
    x: "https://x.com/layalialnoor",
  },
  hours: [
    { day: "saturday", open: "08:00", close: "00:00" },
    { day: "sunday", open: "08:00", close: "00:00" },
    { day: "monday", open: "08:00", close: "00:00" },
    { day: "tuesday", open: "08:00", close: "00:00" },
    { day: "wednesday", open: "08:00", close: "01:00" },
    { day: "thursday", open: "08:00", close: "01:00" },
    { day: "friday", open: "10:00", close: "01:00" },
  ] as const,
} as const;

export type WeekDay = (typeof businessInfo.hours)[number]["day"];
