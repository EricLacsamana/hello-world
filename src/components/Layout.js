import React, { Component } from 'react';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                        crossorigin="anonymous"
                    />
                </header>
            </div>
        );
    }
}

export default Layout;