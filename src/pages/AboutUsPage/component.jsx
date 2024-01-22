import styles from "./styles.module.css";
import expirienced from "../../pictures/svg/expirienced.svg";
import certified from "../../pictures/svg/certified.svg";
import educated from "../../pictures/svg/educated.svg";
import idea from "../../pictures/svg/idea.svg";
import steril from "../../pictures/photos/steril.jpg";
import cn from "classnames";
import { useRef } from "react";
import { useElementWasInView } from "../../hooks/useElementWasInView";

export const AboutUsPage = () => {
  const { state, refs } = useElementWasInView(4);

  return (
    <article>
      <div className={styles.root}>
        <div className={styles.me}>
          <h1>Я - Марина Харченко</h1>
        </div>
        <div className={styles.achievements}>
          <div className={styles.achievement}>
            <div className={styles.image}>
              <img src={educated} />
            </div>
            <div>
              <h1>Cпециалист подолог с медицинским образованием</h1>
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles.image}>
              <img src={expirienced} />
            </div>
            <div>
              <h1>Общий стаж в медицине 25 лет</h1>
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles.image}>
              <img src={certified} />
            </div>
            <div>
              <h1>Сертифицированный подолог</h1>
            </div>
          </div>
        </div>
        <div
          className={cn(styles.targets, { [styles.hidden]: !state.s0 })}
          ref={refs[0]}
        >
          <div className={styles.header}>
            <h1>Работаю со сложными стопами</h1>
          </div>
          <div className={styles.items}>
            <div>Бородавки</div>
            <div>Мозоли</div>
            <div>Натоптыши</div>
            <div>Трещины</div>
            <div>Гиперкератоза</div>
            <div>Грибок</div>
            <div>Возрастные ногти и стопы</div>
          </div>
          <div>При необходимости выезжаю на дом</div>
        </div>
        <div
          className={cn(styles.steril, { [styles.hidden]: !state.s1 })}
          ref={refs[1]}
        >
          <div className={styles.info}>
            В работе применяю профессиональную косметику. Инструменты и
            оборудование подвергаются стерилизации согласно
            санитарно-эпидемиологическим требованиям.
          </div>
          <div className={cn(styles.image, styles.container)}>
            <img src={steril} />
            <div className={styles.overlay}></div>
          </div>
        </div>
        <div
          className={cn(styles.first_visit, { [styles.hidden]: !state.s2 })}
          ref={refs[2]}
        >
          <div className={styles.svg}>
            <img src={idea} />
          </div>
          <div className={styles.text}>
            При первичном приеме проводится консультация, на которой объясняю
            причину возникновения проблем на стопе, методы решения проблем, план
            дальнейшей совместной работы и ее стоимость.
          </div>
        </div>
        <div
          className={cn(styles.conclusion, { [styles.hidden]: !state.s3 })}
          ref={refs[3]}
        >
          В своей практике предпочитаю индивидуальный подход к каждому клиенту
        </div>
      </div>
    </article>
  );
};
