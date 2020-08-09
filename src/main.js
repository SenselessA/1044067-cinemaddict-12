import {createUserRankTempalte} from "./view/user-rank.js";
import {createSiteMenuTempalte} from "./view/site-menu.js";
import {createSortTemplate} from "./view/sort.js";
/* import {createFilmsContainerTemplate} from "./view/films-container.js"; */
import {createFilmsListTemplate} from "./view/films-list.js";
import {createFilmCardTempalte} from "./view/film-card.js";
import {createLoadMoreButtonTemplate} from "./view/load-more-button.js";
/* import {createFilmDetailsTemplate} from "./view/film-details.js"; */
import {createTopRatedFilmsTempalte} from "./view/top-rated-films.js";
import {createFooterStatistics} from "./view/footer-statistics.js";
import {createMostCommentedFilmsTemplate} from "./view/most-commented-films.js";

function renderTemplateComponentInDom(container, component) {
  container.insertAdjacentHTML(`beforeend`, component);
}

/* const bodyElement = document.querySelector(`body`); */
const headerElement = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);

renderTemplateComponentInDom(headerElement, createUserRankTempalte());

renderTemplateComponentInDom(mainContainer, createSiteMenuTempalte());

renderTemplateComponentInDom(mainContainer, createSortTemplate());

renderTemplateComponentInDom(mainContainer, createFilmsListTemplate());

const filmsContainer = document.querySelector(`.films`);
/* const filmsListContainer = document.querySelector(`.films-list`); */
const filmsListCardContainer = document.querySelector(`.films-list__container`);
const footerStatistics = document.querySelector(`.footer__statistics`);

renderTemplateComponentInDom(filmsListCardContainer, createFilmCardTempalte());
renderTemplateComponentInDom(filmsListCardContainer, createFilmCardTempalte());
renderTemplateComponentInDom(filmsListCardContainer, createFilmCardTempalte());
renderTemplateComponentInDom(filmsListCardContainer, createFilmCardTempalte());
renderTemplateComponentInDom(filmsListCardContainer, createFilmCardTempalte());

renderTemplateComponentInDom(filmsContainer, createLoadMoreButtonTemplate());

renderTemplateComponentInDom(filmsContainer, createTopRatedFilmsTempalte());

renderTemplateComponentInDom(filmsContainer, createMostCommentedFilmsTemplate());

const filmsExtraContainers = document.querySelectorAll(`.films-list--extra`);

filmsExtraContainers.forEach((element) => {
  const filmsExtraListContainer = element.querySelector(`.films-list__container`);
  renderTemplateComponentInDom(filmsExtraListContainer, createFilmCardTempalte());
  renderTemplateComponentInDom(filmsExtraListContainer, createFilmCardTempalte());
});


renderTemplateComponentInDom(footerStatistics, createFooterStatistics());

/* renderTemplateComponentInDom(bodyElement, createFilmsDetails()); */
