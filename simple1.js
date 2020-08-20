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
const domContainer = document.querySelector('#react-root'); //6. simple1.html파일에 미리 만들어뒀던 DOM 요소를 가져온다.
ReactDOM.render(React.createElement(LikeButton), domContainer); //7. react-dom.development.js 파일에서 전역변수로 만든 ReactDOM 변수를
                                                                // 사용해서 지금 만든 컴포넌트를 react-root 돔 요소에 붙인다.