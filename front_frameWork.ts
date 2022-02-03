import React from 'react' // 1
import { FancyButton } from './Front'

type Props = { // 2
    firstName: string
    userId: string
}

type State = { // 3
    isLoading: boolean
}

class SignupForm extends React.Component<Props, State> { // 4
    state = { // 5
        isLoading: false
    }
    render(){ // 6
        return <> // 7
            <h2>Sign up for a 7-day supply of our tasty
                toothpaste now, {this.props.firstName}.</h2>
            <FancyButton
                isDisabled={this.state.isLoading}
                size='big'
                text='Sign Up Now'
                onClick={this.signUp}
            />
        </>
    }
    private signUp = async () => { // 8
        this,setState({isLoading: true})
        try{
            await fetch('/api/signup?userId=' + this.props.userId)
        } finally {
            this.setState({isLoading: false})
        }
    }
}

let form = <SignupForm firstName='Albert' userId='13ab9g3' /> // 9


/*
1. 이전처럼 React를 임포트한다.
2. 이전처럼 Props 타입을 선언해서 <SignupForm /> 인스턴스를 만들 때 어떤 데이터를 전달해야 하는지 정의한다. 
3. 컴포넌트의 로컬 상태를 가리킬 State 타입을 선언한다. 
4. React.Component 베이스 클래스를 상속받아 클래스 컴포넌트를 선언한다.
5. 프로퍼티 초기화 과정에서 로컬 상태에 기본값을 선언한다.
6. 함수 컴포넌트처럼 클래스 컴포넌트의 render 메서드로 리액트가 렌더링할 수 있는 TSX, 문자열, 숫자, 불, null, undefined 등을 반환한다. 
7. TSX는 특별한 <>...</> 문법을 사용하는 프레그먼트(Fragment)를 지원한다. 프래그먼트는 다른 TSX 요소를 감싸는 이름없는 TSX 요소로, 한 개의 TSX 요소를 반환해야 하는 곳에서 추가적인 DOM 요소 렌더링을 피할 수 있게 해준다. 예를 들어 리액트 컴포넌트의 Render 메서드는 한 개의 TSX 요소를 반환해야 하는데, 이렇게 하려면 코드를 <div>나 다른 요소로 감싸야한다. 하지만 이는 렌더링에 불필요한 오버헤드를 초래한다.
8. 함수 안의 this가 다시 한정(bind) 되지 않도록 화살표 함수로 signUp을 정의한다. 
9. 마지막으로 SignupForm을 인스턴스화한다. 함수 컴포넌트를 인스턴스화할 때 처럼 new SignupForm({firstName: 'Albert', userId: '13ab9g3'})으로 직접 인스턴스화할 수도 있지만 그러면 리액트가 SignupForm 인스턴스의 생명 주기를 관리할 수 없게 된다. 
*/