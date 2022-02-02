// DOM 타입 선언을 활성화했으면 다음처럼 안전하게 DOM과 브라우저 API를 사용할 수 있다. 

// 전역 window 객체에서 프로퍼티 읽기
let modal = {
  url: window.location.href,
};

// input 요소 만들기
let input = document.createElement("input");

// input 요소에 css 클래스 추가
input.classList.add("Input", "URLInput");

// 사용자가 내용을 입력하면 모델 갱신
input.addEventListener("change", () => (modal.url = input.value.toUpperCase()));

// input을 DOM 에 주입
document.body.appendChild(input)

// React 에서 TSX 사용

import React from 'react' // 1

type Props = { // 2
    isDisabled?: boolean
    size: 'Big' | 'Small'
    text:string
    onClick(event:React.MouseEvent<HTMLButtonElement>): void // 3
}

export function FancyButton(props:Props){ // 4
    const [toggled, setToggled] = React,useState(false) // 5
    return <button 
    className = {'Size-' + props.size}
        disabled = {props.isDisabled || false}
        onClick = {event => {
            setToggled(!toggled)
            props.onClick(event)
        }}
        >{props.text}</button>
}

let button = <FancyButton // 6
    size='Big'
    text='Sign Up Now'
    onClick={()=> console.log('Clicked!')}
/>

/*
1. React 에서 TSX 를 사용하려면 현재 유효범위에서 React 변수를 사용할 수 있도록 가져와야 한다. TSX는 React.createElement 함수 호출로 컴파일 될 것이므로 React를 임포트해 런타임에 정의되도록 한다. 
2. FancyButton 컴포넌트에 전달할 수 있는 프로퍼티 집합을 선언한다. Props는 항상 객체 타입이며 이름은 Props로 짓는 것이 규칙이다. FancyButton 컴포넌트에서 isDisabled 만 선택형이며 나머지는 필수이다. 
3. React는 DOM 이번트들을 위한 고유의 래퍼 타입 집합을 제공한다, React 이벤트를 사용할 때 일반 DOM 이벤트 타입 대신 링ㄱ트의 이밴트 타입을 사용해야 한다. 
4. 함수 컴포넌트는 일반 함수로, 최대 1개의 매개변수(Props객체)를 받으며 리액트가 렌더링할 수 있는 타입을 반환한다. 리액트는 관대하게 TSX, 문자열, 숫자, 불, null, undefinded 등 다양한 타입을 렌더링 할 수 있다. 
5. 리엑트의 useState 후크를 이용해 함수 컴포넌트의 로컬 상태를 선언한다. UseState는 React 에서 제공하는 여러 후크 중 하나로, 이를 이용해 자신의 커스텀 후크를 만들 수 있다. useState 에 초깃값 false를 전달했으므로 타입스크립트는 상태 정보가 boolean 이라는 사실을 추론할 수 있다. 만약 타입스크립트가 추론할 수 없는 타입(배열 같은)을 사용한다면 타입을 명시해야된다. (EX: useState<number[]>([]))
6. TSX 문법으로 FancyButton 의 인스턴스를 만든다.<FancyButton /> 문법은 FancyButton 을 호출하는 것과 기능은 거의 같지만 FancyButton 의 생명주기를 리액트가 관리하게 된다는 점이 다르다. 
*/