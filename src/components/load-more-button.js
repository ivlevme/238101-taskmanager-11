import AbstractComponent from "./abstract-component.js";


const createLoadMoreButtonTemplate = () => {
  return (`
    <button class="load-more" type="button">load more</button>
  `).trim();
};


export default class LoadMoreButton extends AbstractComponent {
  getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
