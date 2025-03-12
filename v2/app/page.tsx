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
      <nav className='flex justify-around flex-wrap items-center'>
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
          // href='https://raw.githubusercontent.com/hoangdesu/hoangdesu/refs/heads/main/resume/HoangNguyen_Resume_Nov2024.pdf'
          href='/assets/Hoang Nguyen (Brian) CV.pdf'
          target='_blank'
        >
          Resume
        </a>
      </nav>

      <main>
        <h1>{names[index]}</h1>

        <h3>
          I&rsquo;m a software engineer.
          <br className='block lg:hidden' />I build things with ❤️ and
          <div className='relative inline-block ml-1 text-xl text-red-400'>
            <span>☕</span>
            <span className='absolute bottom-[8px] left-0 opacity-70'>♨</span>
          </div>
        </h3>
      </main>
    </div>
  );
}
