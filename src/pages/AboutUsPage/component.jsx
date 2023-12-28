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
  const targets = useRef();
  const sterilRef = useRef();
  const first_visit = useRef();
  const conclusion = useRef();
  const pageState = useElementWasInView([
    targets,
    sterilRef,
    first_visit,
    conclusion,
  ]);


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
          className={cn(styles.targets, { [styles.hidden]: !pageState.s0 })}
          ref={targets}
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
          className={cn(styles.steril, { [styles.hidden]: !pageState.s1 })}
          ref={sterilRef}
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
          className={cn(styles.first_visit, { [styles.hidden]: !pageState.s2 })}
          ref={first_visit}
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
          className={cn(styles.conclusion, { [styles.hidden]: !pageState.s3 })}
          ref={conclusion}
        >
          В своей практике предпочитаю индивидуальный подход к каждому клиенту
        </div>
      </div>
    </article>
  );
};
