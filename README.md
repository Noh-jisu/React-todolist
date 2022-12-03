# React-todolist(velopert강의 react강의 참고)

# 12/02
UI구성
1. TodoTemplete
  - todoList의 레이아웃
2. TodoHead
  - 오늘날짜 및 요일
  - 남은 할일 개수
3. Todolist
  - 해야할 일 리스트 표기
  - TodoItem(각 항목)
    - 좌측 원을 통해 할일 완료여부
    - 우측 아이콘을 통해 항목 삭제
4. TodoCreate
  - 새로운 할 일 추가기능
  <br>
  
☆ point
1. styled-components를 활용한 compnent의 스타일링
2. react-icons를 활용

# 12/03
1. context API를 활용한 component간의 데이터 다루기.
  - 불필요한 렌더링 방지를 위한 context 분리<br>
  ![image](https://user-images.githubusercontent.com/61276416/205440062-b7a8d259-e54a-4871-8eb5-43271d0135dc.png)
  
  <br>
 
 2. useReducer를 활용한 상태관리 로직 분리<br>
  ![image](https://user-images.githubusercontent.com/61276416/205440101-14fbfc39-199a-4b82-b711-32db8e8d68ae.png)

3. React.memo를 활용한 component 최적화<br>
  ![image](https://user-images.githubusercontent.com/61276416/205440589-69951463-50ed-4600-8efe-aafe77097a27.png)

  - 다음 렌더링이 일어날 때, 분리된 context로 인하여 한가지 항목이 변경되더라도 나머지 list들은 리렌더링 되지 않는다.<br>    -> dispatch만 가져오고있기 때문.<br>![image](https://user-images.githubusercontent.com/61276416/205440482-2de607cb-f387-4dc2-bdaf-40da1324eb98.png)
<br>(만약 하나의 context에 state와 dispatch가 한번에 작성됐다면, 한가지 항목만 변경되더라도 모든 list를 리렌더링 한다.)
  
