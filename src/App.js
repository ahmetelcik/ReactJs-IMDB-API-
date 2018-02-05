import React, {Component} from 'react';
import './App.css';
import FilmComponent from './Components/FilmComponent/FilmComponent'

class App extends Component {
    render() {
        return (
            <div className="App">


                <div className="big-container">
                    <div className="film-container">
                        <div className="film-container-title">
                            <h1>FİLMLER</h1>
                        </div>

                        <div className="film-container-search">
                            <FilmComponent></FilmComponent>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
