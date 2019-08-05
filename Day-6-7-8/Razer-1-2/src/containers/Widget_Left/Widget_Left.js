import React, {Component} from 'react';
import '../../assets/css/main.css';
import '../../assets/css/body-widgets.css';
import '../../assets/css/slider.css';
import '../../assets/css/switch.css';

import '../../assets/css/checkbox.css';

import '../../assets/css/tooltip.css';

class Widget_Left extends Component {
    constructor(props) {
        super (props);
        this.state = {
            //microphone
            isToggleMicrophone: true,
            isHandleActiveMicrophone: true,
            microphoneValue: 55,
            //sensitive
            isToggleSensitivity: false,
            isHandleActiveSensitivy: false,
            sensitivityValue: 50
        }

        this.handleActiveMicrophone = this.handleActiveMicrophone.bind(this);
        this.handleActiveSensitivity = this.handleActiveSensitivity.bind(this);
        this.changeMicrophoneValue = this.changeMicrophoneValue.bind(this);
        this.changeSensitivityValue = this.changeSensitivityValue.bind(this);
    }
    
    //Microphone Event
    handleActiveMicrophone() {
        this.setState(state => ({
            isToggleMicrophone: !state.isToggleMicrophone,
            isHandleActiveMicrophone: !state.isHandleActiveMicrophone
        }));
    }

    changeMicrophoneValue(event) {
        var newValue = event.target.value;
        this.setState(state => (state.microphoneValue = newValue));
    }

    //Sensitivity Event
    handleActiveSensitivity() {
        this.setState(state => ({
            isToggleSensitivity: !state.isToggleSensitivity,
            isHandleActiveSensitivy: !state.isHandleActiveSensitivy
        }));
    }

    changeSensitivityValue(event) {
        var newValue = event.target.value;
        this.setState(state => (state.sensitivityValue = newValue));
    }


    render () {
        let microphone = null;
        let sensitivity = null;
        let activeMicrophone = null;
        let activeSensitivity = null;

        //microphone
        if(this.state.isToggleMicrophone) {
            microphone = 
            <div className="switch switch-slider on" id="swPhone" onClick={this.handleActiveMicrophone}>
                <div className="handle" />
            </div>;
        }
        else {
			microphone =
            <div className="switch switch-slider" id="swPhone" onClick={this.handleActiveMicrophone}>
				<div className="handle" />
			</div>;
        }

        if(this.state.isHandleActiveMicrophone) {
            activeMicrophone =
            <div className="slider-container on" id="slPhone">
                <div className="foot min">low</div>
                <div className="foot mid">medium</div>
                <div className="foot max">high</div>
                <div id="slPhoneFill" className="left" style={{width: (this.state.microphoneValue * 520) / 100}}></div>
                <div className="track"></div>
                <div id="slPhoneTip" className="slider-tip" style={{left: (this.state.microphoneValue * 520) / 100 - 15}}>{this.state.microphoneValue}</div>
                <input
                    type="range"
                    min={0}
                    max={100}
                    defaultValue={this.state.microphoneValue}
                    step={1}
                    className="slider"
                    id="slPhoneRange"
                    onChange={this.changeMicrophoneValue}
                />
            </div>
        }
        else {
            activeMicrophone =
            <div className="slider-container" id="slPhone">
                <div className="foot min">low</div>
                <div className="foot mid">medium</div>
                <div className="foot max">high</div>
                <div id="slPhoneFill" className="left" style={{width: (this.state.microphoneValue * 520) / 100}}></div>
                <div className="track"></div>
                <div id="slPhoneTip" className="slider-tip" style={{left: (this.state.microphoneValue * 520) / 100 - 15}}>{this.state.microphoneValue}</div>
                <input
                    type="range"
                    min={0}
                    max={100}
                    defaultValue={this.state.microphoneValue}
                    step={1}
                    className="slider"
                    id="slPhoneRange"
                    disabled
                />
            </div>
        }

        //sensitivity
        if(this.state.isToggleSensitivity) {
            sensitivity = 
                <div className="switch on switch-slider " id="swSensi" onClick={this.handleActiveSensitivity}>
                    <div className="handle" />
                </div>          
        }
        else {
			sensitivity =
            <div className="switch switch-slider" id="swSensi" onClick={this.handleActiveSensitivity}>
				<div className="handle" />
			</div>;
        }

        if(this.state.isHandleActiveSensitivy) {
            activeSensitivity =
            <div className="slider-container on" id="slSensi">
                <div className="foot min">low</div>
                <div className="foot mid">medium</div>
                <div className="foot max">high</div>
                <div id="slPhoneFill" className="left" style={{width: (this.state.sensitivityValue * 520) / 100}}></div>
                <div className="track"></div>
                <div id="slPhoneTip" className="slider-tip" style={{left: (this.state.sensitivityValue * 520) / 100 - 15}}>{this.state.sensitivityValue}</div>
                <input
                    type="range"
                    min={0}
                    max={100}
                    defaultValue={this.state.sensitivityValue}
                    step={1}
                    className="slider"
                    id="slSensiRange"
                    onChange={this.changeSensitivityValue}
                />
            </div>
        }
        else {
            activeSensitivity =
            <div className="slider-container" id="slSensi">
                <div className="foot min">low</div>
                <div className="foot mid">medium</div>
                <div className="foot max">high</div>
                <div id="slPhoneFill" className="left" style={{width: (this.state.sensitivityValue * 520) / 100}}></div>
                <div className="track"></div>
                <div id="slPhoneTip" className="slider-tip" style={{left: (this.state.sensitivityValue * 520) / 100 - 15}}>{this.state.sensitivityValue}</div>
                <input
                    type="range"
                    min={0}
                    max={100}
                    defaultValue={this.state.sensitivityValue}
                    step={1}
                    className="slider"
                    id="slSensiRange"
                    disabled
                />
            </div>
        }

        
        return (
            <div className="widget-col col-left flex">
                <div className="widget" id="micPhone">
                    <div className="help" />
                    <div className="tip">
                        I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm
                        just a tooltip. I'm just a tooltip.
                    </div>
                    <div className="title">
                        microphone
                        {microphone}
                    </div>
                    <div className="h2-title">mic volume</div>
                        {activeMicrophone}
                    <div className="h2-title mt20">
                        mic sensitivity
                        {sensitivity}
                    </div>
                    <div className="h2-body">
                        Adjust this setting to remove unwanted background noise or
                        increase the amount of mic output heard
                    </div>                   
                        {activeSensitivity}                   
                </div>            
            </div>
        );
    }
}

export default Widget_Left;