import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    };

    onFormSubmit = (e) => {
       e.preventDefault();
       this.props.runOnSubmit(this.state.term);
    }

    render () {
        return <div className="ui segment">
            <form className="ui from" onSubmit={this.onFormSubmit} >
                <div className="field">
                    <label>Image Search: </label>
                    <div className="ui input">
                <input placeholder="Search your photo..." type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})}/>
                </div>
                </div>

            </form>
        </div>
    }
}

export default SearchBar;