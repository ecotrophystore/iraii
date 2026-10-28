import {useState} from 'react';

const notices = [
  'Made-to-order sacred art, crafted with care in India.',
  'Festival gifting and delivery guidance will appear here from Shopify content.',
];

export function AnnouncementBar() {
  const [activeNotice, setActiveNotice] = useState(0);

  function move(direction: -1 | 1) {
    setActiveNotice((current) =>
      (current + direction + notices.length) % notices.length,
    );
  }

  return (
    <aside className="announcement-bar" aria-label="Store announcements">
      <button aria-label="Previous announcement" onClick={() => move(-1)}>
        ←
      </button>
      <p aria-live="polite">{notices[activeNotice]}</p>
      <button aria-label="Next announcement" onClick={() => move(1)}>
        →
      </button>
    </aside>
  );
}
