import React from "react";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero">
      <h2>Hi, I'm Moe Kyaw Aung</h2>
      <p>Android Developer | Kotlin • Jetpack • React • Go</p>
      <img src={profile} alt="Profile" className="profile-img" />
    </section>
  );
}
