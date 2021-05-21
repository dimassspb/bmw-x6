import { accordeon } from './accordeon';
import { smoothScroll } from './smoothScroll';
import { tabs } from './tabs';
import { modal } from './modal';
import { burgerMenu } from './burgerMenu';
import { sendForm } from './sendForm';

const init = () => {
  accordeon();
  smoothScroll();
  tabs();
  modal();
  burgerMenu();
  sendForm();
};
init();
