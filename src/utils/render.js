export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

// Создает и возвращает элемент DOM с переданным содержимым
export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

// Функция рендера элемента
export const render = (container, component, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.getElement());
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.getElement());
      break;
  }
};

export const replace = (parent, newElement, oldElement) => {
  parent.replaceChild(newElement, oldElement);
};

export const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};
