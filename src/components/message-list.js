import React from "react";
import Api from "../api";
import {Grid} from "@material-ui/core";
import {MessageColumns} from "./message-columns";
import {MessageButton} from "./message-button";
import {MessageButtonContainer} from "./message-button-container";

class MessageList extends React.PureComponent {
    state = {
        messages: [],
        cleared: {}
    };

    api = new Api({
        messageCallback: message => {
            this.messageCallback(message);
        },
    });

    componentDidMount() {
        this.api.start();
    }

    messageCallback(message) {
        const {messages} = this.state;
        this.setState({
            messages: [...messages.slice(), message],
        });
    }

    handleClick = () => {
        const isApiStarted = this.api.isStarted()
        if (isApiStarted) {
            this.api.stop()
        } else {
            this.api.start()
        }
        this.forceUpdate()
    }

    handleClearAllClick = () => {
        const cleared = {};
        this.state.messages.forEach(messageProps => {
            cleared[messageProps.id] = true;
        });
        this.setState({cleared: cleared});
    };

    handleClearMessage = id => () => {
        this.setState(prev => {
            const cleared = {...prev.cleared};
            cleared[id] = true;
            return {
                cleared: cleared,
            };
        });
    };

    render() {
        const isApiStarted = this.api.isStarted();
        return (
            <>
                <div>
                    <Grid container direction="column">
                        <MessageButtonContainer>
                            <MessageButton
                                variant="contained"
                                onClick={this.handleClick}
                            >
                                {isApiStarted ? "Stop" : "Start"}
                            </MessageButton>
                            <MessageButton
                                variant="contained"
                                onClick={this.handleClearAllClick}
                            >
                                CLEAR
                            </MessageButton>
                        </MessageButtonContainer>
                        <Grid container direction="row" spacing={2} justify="center">
                            <MessageColumns
                                handleClearMessage={this.handleClearMessage}
                                cleared={this.state.cleared}
                                messages={this.state.messages}
                            />
                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }
}

export default MessageList;
