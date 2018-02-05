import React from 'react';


const API_KEY = 'xxx';
class FilmComponent extends React.Component {


    constructor() {
        super();


        this.state = {
            searchInput: "",
            filmCollection: []
        };

    }


    filmSearchClick(e) {

        e.preventDefault();


        var input = document.getElementById('film_search_input');

        let val = input.value;
        this.state.searchInput = val;
        this.setState({
            searchInput: this.state.searchInput
        });

        this.searchFilms();

    }

    async searchFilms() {


        let endpoint = `http://www.omdbapi.com/?s=${this.state.searchInput}&apikey=${API_KEY}`;

        let getFilms = await fetch(endpoint);

        let resx = await getFilms.json();


        if(resx.Response == "True"){
            var xx = this.state.filmCollection = resx.Search;

            this.setState(
                {
                    filmCollection: xx
                }
            );
        }else{
            this.setState({
                filmCollection : [],
                findError: 'Film Bulunamadı'
            })
        }







    }


    denemex() {


        const deneme = this.state.filmCollection.map((item, i) => {
            return (
                <div className="film-box" key={i}>
                    <div className="film-box-poster">
                        <img
                            src={item.Poster}
                            width="100%" alt=""/>
                    </div>
                    <div className="film-box-title">
                        <h4>{item.Title}</h4>
                    </div>
                </div>
            )
        })

        return deneme;

    }

    render() {
        return (

            <div>


                <form>
                    <div className="film-container-form-group">
                        <input type="text" id="film_search_input" placeholder="Film Adı"/>
                    </div>
                    <div className="film-container-submit-box">
                        <button className="film-search-btn" onClick={this.filmSearchClick.bind(this)}>FİLM ARA</button>
                    </div>
                </form>


                <div className="film-container-list-box">

                    <div className="findError">{this.state.findError}</div>
                    {this.denemex()}
                </div>

            </div>



        );
    }
}

export default FilmComponent;