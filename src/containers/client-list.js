import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClientList extends Component {

    renderClientData(clientData) {
        console.log(clientData);
        for( let i in clientData ) {
            return (
                <div
                    key={i}
                    className="panel panel-default">
                    <h4>
                        { clientData[i].first_name } { clientData[i].last_name }
                    </h4>
                    <p>
                        <a
                            href={i}>
                            Edit User
                        </a>
                    </p>
                </div>
            );
        }
    }

    render() {
        return(
            <div className="panel panel-default">
               <div className="panel-heading">
                   <h3 className="panel-title">
                       Search Results
                   </h3>
               </div>
                <div className="panel-body">
                    { this.props.client.client.map(this.renderClientData) }
                </div>
            </div>
        );
    }
}

function mapStateToProps(client) {
    return { client }
}

export default connect(mapStateToProps)(ClientList);