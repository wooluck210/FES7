class VendingMachineFunc {
  // 필요한 UI를 가져오는 작업
  constructor() {
    // section 1 요소 선택 - 판매 음료
    const vMahine = document.querySelector('.section1');
    this.balance = vMahine.querySelector('.bg-box p');
    this.itemList = vMahine.querySelector('.cola-list');
    this.inputCostEl = vMahine.querySelector('#input-money');
    this.btnPut = vMahine.querySelector('#input-money+.btn');
    this.btnReturn = vMahine.querySelector('.bg-box+.btn');
    this.btnGet = vMahine.querySelector('.btn-get');
    this.stagedList = vMahine.querySelector('.get-list');

    // section 2 요소 선택 - 소지금
    const myInfo = document.querySelector(`.section2`);
    this.myMoney = myInfo.querySelector('.bg-box p');

    // section3 요소 선택 - 획득한 음료
    const getInfo = document.querySelector('.section3');
    this.getList = getInfo.querySelector('.get-list');
    this.txtTotal = getInfo.querySelector('.total-price');
  }

  setup() {
    this.bindEvents();
  }
  
  // 장바구니에 선택한 콜라 목록 생성
  stagedItemGenerator(target) {
    const stagedItem = document.createElement('li');
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.img = target.dataset.img;
    stagedItem.dataset.price = target.dataset.price;
    stagedItem.innerHTML = 
    `<img src="./img/${target.dataset.img}" alt="" />
    ${target.dataset.item}
    <strong>
      1
      <span class="a11y-hidden">개</span>
    </strong>`;
    this.stagedList.append(stagedItem);
  }

  // 이벤트 붙이기
  bindEvents() {
    /**
     * 1. 입금 버튼 기능
     * 소지금 === 소지금 - 입금액
     * 잔액 === 잔액 + 입금액
     * 입금액이 소지금보다 많으면 "소지금이 부족합니다." 경고창 띄우기
     * 입금액 인풋창은 초기화하기
     */
    this.btnPut.addEventListener('click', (event) => {
      // 사용자 입력 값
      const inputCost = parseInt(this.inputCostEl.value);
      // 현재 사용자 돈
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));
      // 현재 자판기 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));
      
      // 입금액이 있고, 소지금보다 적거나 같다면
      if (inputCost) {
        if (inputCost <= myMoneyVal && inputCost > 0) {
          // Intl 객체를 통해 사용자 국가에서 사용하는 포맷으로 숫자를 변경한다.
          this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost)+ '원' ;
  
          console.log(balanceVal)
          this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost)+ '원' ;
        } else {
          alert("소지금이 부족합니다.")
        }
        //  사용자가 입력한 입금액을 초기화 한다.
        this.inputCostEl.value = null;
      }
    });

    /**
     * 2. 거스름돈 반환 기능
     * 반환 버튼 누르면 소지금 === 소지금 + 잔액
     * 잔액창은 초기화 된다.
     */
    this.btnReturn.addEventListener('click', () => {
      // 현재 사용자 돈
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));
      // 현재 자판기 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));
      
      if(balanceVal) {
        this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal + balanceVal) + "원" ;
        this.balance.textContent = null;
      }
    })

    /**
     * 3. 자판기 메뉴 기능
     * 콜라를 누르면 잔액 === 잔액 - 콜라 가격
     * 콜라 가격보다 잔액이 적다면 "잔액이 부족합니다." 경고창 출력
     * 콜라가 장바구니에 등록 되어야 한다.
     * 콜라의 data-count 값을 -1 한다.
     * 만약 콜라의 data-count 값이 0이라면 button 요소에 disabled 속성이 추가되고, 콜라 템플릿에 strong 태그가 추가되어야 한다.
    */
    const colaBtns = this.itemList.querySelectorAll('button');
    // this.itemList는 버튼의 이미지, span, strong을 누르면 클릭이 되지 않는다. 버튼의 영역을 덮어서.
    colaBtns.forEach((colaBtn) => {
      colaBtn.addEventListener('click', (event) => {
        // 현재 잔액
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
        // 클릭한 콜라의 가격
        const targetElPrice = parseInt(colaBtn.dataset.price);
        const stagedListItem = this.stagedList.querySelectorAll('li');
        let isStaged = false;

        // 잔액이 콜라 가격보다 많거나 동일하다면
        if(balanceVal >= targetElPrice) {
          this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + "원";

          // forEach는 모든 요소를 다 돌아서 비효율적이다.
          for (const item of stagedListItem) {
            // 선택한 콜라가 이미 장바구니에 존재하는 경우
            if(item.dataset.item === colaBtn.dataset.item) {
              const itemTxt = item.querySelector('strong');
              // 장바구니 콜라의 카운트를 1 증가
              itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + 1;
              isStaged = true;
              break;
            }
          }

          // 콜라를 장바구니에 담기
          // this : 클래스 안의 함수이기 때문에 인스턴스 인식을 위해
          // 만약 처음 선택한 콜라라면 콜라를 장바구니에 담기
          if (!isStaged) {
            this.stagedItemGenerator(colaBtn)
          }

          colaBtn.dataset.count--;
          
          // 만약 콜라의 카운트가 0이라면
          if (parseInt(colaBtn.dataset.count) === 0) {
            // disabled 속성 추가, strong 품절 태그 추가
            colaBtn.disabled = true;
            colaBtn.insertAdjacentHTML('afterbegin', '<strong class="soldout">품절</strong>');
          }

        } else {
          alert("잔액이 부족합니다. give me money.");
        }
      })
    })

    /**
     * 4. 획득 버튼 기능
     * 획득 버튼을 누르면 선택한 음료수 목록이 획득한 음료 목록으로 이동
     * 획득한 음료의 금액을 모두 합하여 총 금액을 업데이트
     */
    this.btnGet.addEventListener('click', () => {
      const itemStagedList = this.stagedList.querySelectorAll('li');
      const itemGetList = this.getList.querySelectorAll('li');
      let totalPrice = 0;

      // 장바구니 아이템을 획득 목록으로 이동하기
      // const docFrag = new DocumentFragment();
      // this.getList.append(...itemStagedList);

      for (const itemStaged of itemStagedList) {
        let isStaged = false;
        for (const itemGet of itemGetList) {
          // 장바구니의 콜라가 이미 획득리스트에 있다면
          if (itemStaged.dataset.item === itemGet.dataset.item) {
            const itemTxt = itemGet.querySelector('strong');
            // 획득 목록의 콜라의 카운트를 고른 개수만큼 증가
            itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + parseInt(itemStaged.querySelector('strong').firstChild.textContent);
            isStaged = true;
            break;
          }
        }
        if (!isStaged) {
          this.getList.append(itemStaged);
        }
      }
      // 장바구니 목록 비우기
      this.stagedList.innerHTML = null;

      // 획득한 음료 리스트를 순환하면서 총 금액을 계산
      this.getList.querySelectorAll('li').forEach((itemGet) => {
        totalPrice += parseInt(itemGet.dataset.price) * parseInt(itemGet.querySelector('strong').firstChild.textContent);
      });
      this.txtTotal.textContent = `총 금액: ${new Intl.NumberFormat().format(totalPrice)}원`;
    })
    
  }
}

export default VendingMachineFunc;