import React, { Component } from 'react'
import actions from './actions';

export default class Video extends Component {
    state = {
        playing: false
    }
    clickHandler = () => {
        var video = this.refs.video;
        if (this.refs.video.paused) {
            video.play();
            video.setAttribute('controls', 'controls');
            this.setState({
                playing: true
            })
        } else {
            video.pause();
            this.setState({
                playing: false
            })
        }
    }

    render() {
        return ( <div style={{
        margin: 0
        }}>
                <video ref="video" width="100%" src={this.props.src}/>
                <div className={"video-play"}><i className={"fa "+ (this.state.playing ? 'fa-pause' : 'fa-play' )}
                                                 onClick={this.clickHandler.bind(this)}> </i></div>
            </div>
        );
    }
}