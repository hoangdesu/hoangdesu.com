'use client';

import { useEffect, useState } from 'react';

const names = ['Hi 👋', 'I am Hoàng', 'Tớ tên Hoàng', '僕はホアンです'];

export default function V1HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < names.length - 1) {
        setIndex((i) => i + 1);
      } else {
        setIndex(1);
      }
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [index]);

  return (
    <div>
      <nav>
        <a href='https://www.linkedin.com/in/hoangdesu/' target='_blank'>
          LinkedIn
        </a>
        <a href='https://github.com/hoangdesu' target='_blank'>
          Github
        </a>
        <a href='https://www.facebook.com/Hoangdayo/' target='_blank'>
          Facebook
        </a>
        <a href='mailto:hoangdesu@gmail.com'>Email</a>
        <a
          href='https://raw.githubusercontent.com/hoangdesu/hoangdesu/refs/heads/main/resume/HoangNguyen_Resume_Nov2024.pdf'
          target='_blank'
        >
          Resume
        </a>
      </nav>

      <main>
        <h1>{names[index]}</h1>

        <h3>
          I&rsquo;m a software engineer. I build things with ❤️ and ☕️{' '}
          <span id='smoke'>♨️</span>
          <span id='sign'>!</span>
        </h3>
      </main>
    </div>
  );
}
