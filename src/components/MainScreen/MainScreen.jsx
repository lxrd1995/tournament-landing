/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Faq from "../Faq/Faq";
import GameSchedule from "../GameSchedule/GameSchedule";
import "./MainScreen.scss";
import hero_text from "../../static/hero_text.svg";
import { HandySvg } from "handy-svg";

const MainScreen = () => {
  return (
    <div className="root">
      <section className="main-screen outer">
        <div className="container">
          <div className="main-screen__offer offer">
            <h1>
              Добро пожаловать на
              <HandySvg src={hero_text} className="main-hero__icon" />
            </h1>
            <h2>
              Платформа для проведения киберспортивных сезонных онлайн турниров.
              Среди учащихся колледжей и школ.
            </h2>
            <div className="offer__actions">
              <button className="button button_primary">Принять участие</button>
              <button className="button button_border">Сезоны</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="my__container">
          <div className="live__container">
            <h1 className="heading__title">Прямая трансляция</h1>
            <div className="live__stream">
              Трансляция в данный момент не доступна.
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="my__container faq__main__container">
          <h1 className="heading__title heading__title__faq">F.A.Q.</h1>
          <div className="faq__container">
            <Faq
              faq_a="Как принять участие в турнире?"
              faq_p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit nulla sit amet sem dignissim, ut convallis orci ultricies. Sed ut congue dolor. Vivamus a vestibulum eros, ut mattis velit. Fusce faucibus congue augue eget viverra. Nulla at scelerisque quam. Praesent efficitur libero vel augue porttitor, in sodales lorem aliquet. Nam turpis sapien, dapibus ac augue ut, vestibulum convallis massa. Quisque non nulla enim. Suspendisse gravida aliquet tristique. Suspendisse potenti. Morbi malesuada id mauris sed blandit. Duis vestibulum, nunc id posuere pharetra, justo odio tempor metus, et venenatis enim massa ac dui. Integer vel lacinia turpis. Sed aliquam ut ipsum ac malesuada. Proin felis lorem, rhoncus eu libero in, posuere molestie diam."
            />
            <Faq
              faq_a="Как принять участие в турнире?"
              faq_p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit nulla sit amet sem dignissim, ut convallis orci ultricies. Sed ut congue dolor. Vivamus a vestibulum eros, ut mattis velit. Fusce faucibus congue augue eget viverra. Nulla at scelerisque quam. Praesent efficitur libero vel augue porttitor, in sodales lorem aliquet. Nam turpis sapien, dapibus ac augue ut, vestibulum convallis massa. Quisque non nulla enim. Suspendisse gravida aliquet tristique. Suspendisse potenti. Morbi malesuada id mauris sed blandit. Duis vestibulum, nunc id posuere pharetra, justo odio tempor metus, et venenatis enim massa ac dui. Integer vel lacinia turpis. Sed aliquam ut ipsum ac malesuada. Proin felis lorem, rhoncus eu libero in, posuere molestie diam."
            />
            <Faq
              faq_a="Как принять участие в турнире?"
              faq_p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit nulla sit amet sem dignissim, ut convallis orci ultricies. Sed ut congue dolor. Vivamus a vestibulum eros, ut mattis velit. Fusce faucibus congue augue eget viverra. Nulla at scelerisque quam. Praesent efficitur libero vel augue porttitor, in sodales lorem aliquet. Nam turpis sapien, dapibus ac augue ut, vestibulum convallis massa. Quisque non nulla enim. Suspendisse gravida aliquet tristique. Suspendisse potenti. Morbi malesuada id mauris sed blandit. Duis vestibulum, nunc id posuere pharetra, justo odio tempor metus, et venenatis enim massa ac dui. Integer vel lacinia turpis. Sed aliquam ut ipsum ac malesuada. Proin felis lorem, rhoncus eu libero in, posuere molestie diam."
            />
            <Faq
              faq_a="Как принять участие в турнире?"
              faq_p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit nulla sit amet sem dignissim, ut convallis orci ultricies. Sed ut congue dolor. Vivamus a vestibulum eros, ut mattis velit. Fusce faucibus congue augue eget viverra. Nulla at scelerisque quam. Praesent efficitur libero vel augue porttitor, in sodales lorem aliquet. Nam turpis sapien, dapibus ac augue ut, vestibulum convallis massa. Quisque non nulla enim. Suspendisse gravida aliquet tristique. Suspendisse potenti. Morbi malesuada id mauris sed blandit. Duis vestibulum, nunc id posuere pharetra, justo odio tempor metus, et venenatis enim massa ac dui. Integer vel lacinia turpis. Sed aliquam ut ipsum ac malesuada. Proin felis lorem, rhoncus eu libero in, posuere molestie diam."
            />
          </div>
        </div>
      </section>
      <section>
        <div className="my__container game_schedule__container">
          <h1 className="heading__title heading__title__game-schedule">Расписание матчей</h1>
          <div className="game__schedules">
            <GameSchedule/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainScreen;
