import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/default-profile-photo.png"
          alt="default-profile-photo"
          height={300}
          width={300}
        />
      </div>
      <h1>Merhaba ben Neslihan</h1>
      <p>Psikoloji ve rehberlik gibi alanlarda yazılar yazıyorum.</p>
    </section>
  );
};

export default Hero;
