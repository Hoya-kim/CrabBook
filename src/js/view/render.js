import { createLinkCard } from '../components/Kanban';

export default (() => {
  const $sidebarCardList = document.querySelector('.sidebar__card-list');

  const renderSidebar = cards => {
    const $domFramgment = document.createDocumentFragment();

    cards.forEach($card => $domFramgment.appendChild($card));

    [...$sidebarCardList.children].forEach(($linkCard, index) => {
      if (index > 0) $linkCard.remove();
    });

    $sidebarCardList.appendChild($domFramgment);
  };

  const renderCategory = (categories, cards) => {
    const $domFramgment = document.createDocumentFragment();

    categories.forEach(($category, index) => {
      cards[index].forEach($card =>
        $category.querySelector('ul').appendChild($card)
      );
      $domFramgment.appendChild($category);
    });

    // Append category button
    const $addbutton = document.createElement('button');
    $addbutton.classList.add('kanban__add-button');
    $addbutton.innerHTML = `<i class="bx bx-plus-circle"></i>`;
    $domFramgment.appendChild($addbutton);

    document.querySelector('.kanban').innerHTML =
      '<h2 class="kanban__title a11y-hidden">칸반 보드</h2>';

    document.querySelector('.kanban').appendChild($domFramgment);
  };

  const renderMypage = (cards, chartDatas) => {
    const $cards = document.createDocumentFragment();
    cards.forEach(cardData => {
      $cards.appendChild(cardData);
    });

    document.querySelector('.links__ul').appendChild($cards);
    // chartDatas.forEach(({ canvas, data }) => {
    //   new Chart(canvas, data);
    // });
  };

  const renderRecommend = async $recommendSiteCard => {
    // TODO: 스피너만들기
    document.querySelector('.recommend').innerHTML = '';
    document.querySelector('.recommend').appendChild($recommendSiteCard);
  };

  return {
    mainPage(categories, cards) {
      renderSidebar(cards[0]);
      renderCategory(categories.slice(1), cards.slice(1));
    },

    myPage(chartDatas, cards) {
      // renderSidebar(cards && cards[0]);
      renderMypage(chartDatas);
    },

    renderTest($recommendSiteCard) {
      renderRecommend($recommendSiteCard);
    }
  };
})();
