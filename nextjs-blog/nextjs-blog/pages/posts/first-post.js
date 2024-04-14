import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Hello, I'm Yewon!</h1>
      <h2>I'm majoring in Information Systems at Hanyang University. </h2>
      <h3> I like green, so I enjoy the lush summer with dense trees</h3>
      <h4>
        <Link href="/">Back to home</Link>
      </h4>
      <img src="/images/profile.jpg" alt="Your Name" />
    </>
  );
}
