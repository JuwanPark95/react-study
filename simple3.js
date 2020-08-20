class LikeButton extends React.Component { //1. React 변수는 react.development.js 파일에서 전역 변수로 생성된다.
    constructor(props) {
        super(props);
        this.state = { liked: false }; //2. 초기값과 함께 컴포넌트의 상태값을 정의한다.
    }
    render() {
        const text = this.state.liked ? '좋아요 취소' : '좋아요'; //3. 컴포넌트의 상태값에 따라 동적으로 버튼의 문구를 결정한다.
        return React.createElement( //4. createElement 함수는 리액트 요소를 반환한다.
            'button',
            { onClick: () => this.setState({ liked: true }) },  //5. 버튼을 클릭하면 onClick 함수가 호출되고, 컴포넌트의 상태값이 변경된다.
            text,
        );
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0};
    }

    render() {
        return React.createElement (
            'div',
            null,
            React.createElement(LikeButton),
            React.createElement(
                'div',
                { style: {marginTo: 20 } },
                React.createElement('span', null, '현재카운트: '),
                React.createElement('span', null, this.state.count),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({count: this.state.count +1 }) },
                    '증가',
                ),
                React.createElement(
                    'button',
                    { onClick: () => this.setState({count: this.state.count -1 }) },
                    '감소',
                ),
            ),
        );
    }
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer); 