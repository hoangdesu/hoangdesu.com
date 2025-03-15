'use client';

import { useEffect, useState } from 'react';

const names = ['Hi 👋', 'I am Hoàng', 'Tớ tên Hoàng', '僕はホアンです'];

const links = [
  {
    href: 'https://www.linkedin.com/in/hoangdesu/',
    text: 'LinkedIn',
  },
  {
    href: '/resume/Hoang Nguyen (Brian) CV.pdf',
    text: 'Resume',
  },
  {
    href: 'https://github.com/hoangdesu',
    text: 'Github',
  },
  {
    href: 'https://leetcode.com/u/hoangdesu/',
    text: 'LeetCode',
  },
  {
    href: 'https://www.facebook.com/Hoangdayo/',
    text: 'Facebook',
  },
  {
    href: 'mailto:hoangdesu@gmail.com',
    text: 'Email',
  },
  {
    href: 'https://www.instagram.com/hoang.desu/',
    text: 'Instagram',
  },
];

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
        {links.map(({ href, text }) => (
          <a key={href} href={href} target='_blank'>
            {text}
          </a>
        ))}
      </nav>

      <main>
        <h1>{names[index]}</h1>

        <h3>
          I&rsquo;m a software engineer.
          <br className='block lg:hidden' /> I build things with ❤️ and
          <div className='relative inline-block ml-1 text-xl text-red-400'>
            <span>☕</span>
            <span className='absolute bottom-[8px] left-0 opacity-70'>♨</span>
          </div>
        </h3>
      </main>
    </div>
  );
}
