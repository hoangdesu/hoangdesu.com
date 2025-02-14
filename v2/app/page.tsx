// import Image from "next/image";

export default function HomePage() {
  // const title = document.querySelector("h1");
  // let names = ["I am Hoang", "Tớ tên Hoàng", "僕はホアンです"];
  // let index = 0;

  // setInterval(() => {
  //   if (index > names.length - 1) {
  //     index = 0;
  //   }
  //   title.textContent = names[index];
  //   // console.log(index);
  //   index++;
  // }, 3000);

  return (
    <div>
      <nav>
        <a href="https://www.linkedin.com/in/hoangdesu/" target="_blank">
          Linkedin
        </a>
        <a href="https://github.com/hoangdesu" target="_blank">
          Github
        </a>
        <a href="https://www.facebook.com/Hoangdayo/" target="_blank">
          Facebook
        </a>
        <a href="mailto:hoangdesu@gmail.com">Email</a>
        <a href="./resume/HoangNguyen_Resume_Oct2022.pdf" target="_blank">
          Resume
        </a>
      </nav>
      <main>
        <h1>Hi 👋</h1>
        <h3>
          I&rsquo;m a software engineer. I build things with ❤️ and ☕️{" "}
          <span id="smoke">♨️</span>
          <span id="sign">!</span>
        </h3>
      </main>
    </div>
  );
}
