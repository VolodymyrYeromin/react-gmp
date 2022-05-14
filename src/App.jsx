import './App.css';
import React, {useState} from 'react';

const Header = React.createElement('h1', {}, 'Simple Counter');

class SubtractButton extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>-</button>;
    }
}

class AddButton extends React.PureComponent {
    render() {
        return <button onClick={this.props.onClick}>+</button>;
    }
}

const Counter = (props) => {
    return (
        <span>{props.number}</span>
    );
};

function App() {
    const [number, setNumber] = useState(0);

    return (
        <div className="App">
            <div>Hello world</div>
            {Header}
            <SubtractButton onClick={() => setNumber((prev) => prev - 1)}/>
            <Counter number={number}/>
            <AddButton onClick={() => setNumber((prev) => prev + 1)}/>
        </div>
    );
}

export default App;
