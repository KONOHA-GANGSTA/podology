import styles from "./styles.module.css";
import MainImage from "../../pictures/photos/main.jpg";
import MainImage2 from "../../pictures/photos/main2.JPG";
import { useRef } from "react";
import cn from "classnames";
import { useElementWasInView } from "../../hooks/useElementWasInView";
import { PAGES_ROUTES } from "../../constants/PAGES_ROUTES";
import { Link } from "react-router-dom";

export const MainPage = () => {
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();

  const pageState = useElementWasInView([
    section3,
    section4,
    section5,
    section6,
  ]);

  return (
    <article>
      <div className={styles.root}>
        <section className={styles.section1}>
          <div>
            <h1>
              Добро пожаловать в наш медицинский кабинет, где забота о{" "}
              <span className={styles.green}>ваших</span> ногах —{" "}
              <span className={styles.red}>наш</span> приоритет!
            </h1>
          </div>
        </section>
        <section className={styles.section2}>
          <div className={styles.image}>
            <img src={MainImage} />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.info}>
            <div>
              <h1>Квалифицированный подолог</h1>
              <p>Оказание качественного профессионального ухода за стопой</p>
              <div className={styles.button_container}>
                <Link
                  to={PAGES_ROUTES["Контакты"].slice(
                    PAGES_ROUTES["Главная"].length
                  )}
                >
                  <button className={styles.button}>Записаться</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={section3}
          className={cn(styles.section3, { [styles.hidden]: !pageState.s0 })}
        >
          <div>
            <h1>
              Подология – наука, посвященная изучению и лечению различных
              заболеваний стопы
            </h1>
            <div className={styles.tripleTile}>
              <div>
                <h1>Микоз</h1>
                <p>
                  Поражение тканей паразитическими грибками. Кожа стоп
                  шелушится, и зудит.
                </p>
              </div>
              <div>
                <h1>Онихолизис</h1>
                <p>
                  Отслоение ногтя от мягких тканей пальца. Образуется пустота,
                  над которой ногтевая пластина меняет свой цвет.
                </p>
              </div>
              <div>
                <h1>Онихогрифоз</h1>
                <p>
                  Дистрофия ногтя, при которой ноготь, чаще большого пальца
                  ноги, становится утолщенным и искривленным.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={section4}
          className={cn(styles.section4, { [styles.hidden]: !pageState.s1 })}
        >
          <div className={styles.info}>
            <div>
              <h1>Диагностика. Лечение. Профилактика</h1>
              <p>
                От мозолей и натоптышей до серьезных деформаций. Мы уделяем
                внимание не только лечению существующих проблем, но и
                предупреждению их возникновения.
              </p>
            </div>
          </div>
          <div className={styles.image}>
            <img src={MainImage2} />
            <div className={styles.overlay}></div>
          </div>
        </section>
        <section
          ref={section5}
          className={cn(styles.section5, { [styles.hidden]: !pageState.s2 })}
        >
          <div>
            <h1>Обращайтесь к нам к нам</h1>
            <p>
              Насладитесь персонализированным подходом к вашим потребностям. Мы
              обеспечим вас не только профессиональным лечением, но и заботой,
              направленной на улучшение общего состояния ваших ног.
            </p>
          </div>
        </section>
        <section
          ref={section6}
          className={cn(styles.section6, { [styles.hidden]: !pageState.s3 })}
        >
          <div>
            <h1>
              Обратитесь к нам <span className={styles.red}>сегодня</span>, и
              дарите своим ногам заботу, которую они
              <span className={styles.green}> заслуживают!</span>
            </h1>
            <div className={styles.button_container}>
              <Link
                to={PAGES_ROUTES["Контакты"].slice(
                  PAGES_ROUTES["Главная"].length
                )}
              >
                <button className={styles.button}>Записаться</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};
