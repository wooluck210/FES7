class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector('.cola-list');
  }

  // 콜라 객체를 초기화한다.
  async setup() {
    const response = await this.loadData();
    this.colaFactory(response);
  }
  
  // 콜라 관련 데이터를 로드한다.
  async loadData() {
    try {
      const response = await fetch('./items.json');
      if(!response.ok) {
        throw new Error("HTTP ERROR: ", response.status);
      }
      return await response.json();
    }
    catch (error) {
      console.log('콜라데이터를 로딩하는 중 문제:', error);
    }
  }

  // 콜라의 템플릿 코드
  colaFactory(data) {
    const docFrag = new DocumentFragment();
    // const docFrag = document.DocumentFragment();
    data.forEach((el) => {
      const item = document.createElement('li');
      const itemTemplate = `
      <button type="button" class="btn-cola on" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
      <img src="./img/${el.img}" alt="" />
      <span class="cola-name">${el.name}</span>
      <strong class="cola-price">${el.cost}원</strong>
      </button>`;
      item.innerHTML = itemTemplate;
      docFrag.append(item);
    });
    this.itemList.append(docFrag);
  }
}

// 하나의 모듈을 수출한다. 밖으로 뺀다.
// 여러 개의 클래스, 함수가 있다면 빼줄 클래스, 함수의 앞에 export를 적는다.
export default ColaGenerator;