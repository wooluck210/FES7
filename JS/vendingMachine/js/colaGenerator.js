class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector('.cola-list');
  }

  async setup() {
    const response = await this.loadData();
    this.colaFactory(response);
  }
  
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

  // <li>
            // <button type="button" class="btn-cola on">
            //   <img src="./img/cola-original.png" alt="" />
            //   <span class="cola-name">Original Cola</span>
            //   <strong class="cola-price">1000원</strong>
            // </button>
  //         </li>
  colaFactory(data) {
    const docFrag = new DocumentFragment();
    // const docFrag = document.DocumentFragment();
    data.forEach((el) => {
      const item = document.createElement('li');
      const itemTemplate = `<button type="button" class="btn-cola on">
      <img src="./img/cola-original.png" alt="" />
      <span class="cola-name">Original Cola</span>
      <strong class="cola-price">1000원</strong>
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