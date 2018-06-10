import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

// Importing Components
import Header from './components/header'
import NewsList from './components/news_list'

class App extends Component {

    state = {
        news: JSON
    }

    getKeyword = (event) => {
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keyword) > -1
        });
        console.log(filtered);
    }

    render() {
        return (
            <div>
                <Header keywords={this.getKeyword}/>
                <NewsList news={this.state.news}>
                    <h3 className="newslist">
                        The News Are:
                    </h3>
                </NewsList>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))