import React, { Component } from 'react';
import '../../assets/css/main.css';
import '../../assets/css/body-widgets.css';
import '../../assets/css/slider.css';
import '../../assets/css/switch.css';

import '../../assets/css/checkbox.css';

import '../../assets/css/tooltip.css';

class Widget_Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Sidetone
      isToggleMicSidetone: false,
      isActiveSidetone: this.isToggleMicSidetone,
      sidetoneValue: 50,

      //Enhancements
      isShowNorm: false,
      normValue: 50,
      isShowAmb: false,
      ambValue: 50,
      isShowVoiceClarity: false,
      voiceClarityValue: 50,
    };

    //Sidetone property
    this.handleSideTone = this.handleSideTone.bind(this);
    this.changeSidetoneValue = this.changeSidetoneValue.bind(this);

    //Normaliztion property
    this.handleActiveNorm = this.handleActiveNorm.bind(this);
    this.changeNormValue = this.changeNormValue.bind(this);

    //Ambient noise reduction property
    this.handleActiveAmb = this.handleActiveAmb.bind(this);
    this.changeAmbValue = this.changeAmbValue.bind(this);

    //Voice Clarity property
    this.handleActiveVoiceClarity = this.handleActiveVoiceClarity.bind(this);
    this.changeVoiceClarityValue = this.changeVoiceClarityValue.bind(this);
  }

  //Sidetone Event
  handleSideTone() {
    this.setState(state => ({
      isToggleMicSidetone: !state.isToggleMicSidetone,
      isActiveSidetone: !state.isActiveSidetone,
    }));
  }

  changeSidetoneValue(event) {
    var newValue = event.target.value;
    this.setState(state => (state.sidetoneValue = newValue));
  }

  //Handle Normnalization events
  handleActiveNorm() {
    this.setState(state => ({
      isShowNorm: !state.isShowNorm,
    }));
  }

  changeNormValue(event) {
    var newValue = event.target.value;
    this.setState(state => (state.normValue = newValue));
  }

  //Handle Ambient noise reduction events
  handleActiveAmb() {
    this.setState(state => ({
      isShowAmb: !state.isShowAmb,
    }));
  }

  changeAmbValue(event) {
    var newValue = event.target.value;
    this.setState(state => (state.ambValue = newValue));
  }

  //Handle Voice clarity events
  handleActiveVoiceClarity() {
    this.setState(state => ({
      isShowVoiceClarity: !state.isShowVoiceClarity,
    }));
  }

  changeVoiceClarityValue(event) {
    var newValue = event.target.value;
    this.setState(state => (state.voiceClarityValue = newValue));
  }

  render() {
    let sidetone = null;
    let activeSidetone = null;
    let activeNorm = null;
    let activeAmb = null;
    let activeVoiceClarity = null;

    //Sidetone
    if (this.state.isToggleMicSidetone) {
      sidetone = (
        <div
          className="switch switch-slider on"
          id="swSide"
          onClick={this.handleSideTone}
        >
          <div className="handle" />
        </div>
      );
    } else {
      sidetone = (
        <div
          className="switch switch-slider "
          id="swSide"
          onClick={this.handleSideTone}
        >
          <div className="handle" />
        </div>
      );
    }

    if (this.state.isActiveSidetone) {
      activeSidetone = (
        <div className="slider-container on" id="slPhone">
          <div className="foot min">0</div>
          <div className="foot mid">50</div>
          <div className="foot max">100</div>
          <div
            id="slSideFill"
            className="left"
            style={{ width: (this.state.sidetoneValue * 520) / 100 }}
          />
          <div className="track" />
          <div
            id="slSideTip"
            className="slider-tip"
            style={{ left: (this.state.sidetoneValue * 520) / 100 - 15 }}
          >
            {this.state.sidetoneValue}
          </div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={50}
            step={1}
            className="slider"
            id="slSideRange"
            onChange={this.changeSidetoneValue}
          />
        </div>
      );
    } else {
      activeSidetone = (
        <div className="slider-container" id="slPhone">
          <div className="foot min">0</div>
          <div className="foot mid">50</div>
          <div className="foot max">100</div>
          <div
            id="slSideFill"
            className="left"
            style={{ width: (this.state.sidetoneValue * 520) / 100 }}
          />
          <div className="track" />
          <div
            id="slSideTip"
            className="slider-tip"
            style={{ left: (this.state.sidetoneValue * 520) / 100 - 15 }}
          >
            {this.state.sidetoneValue}
          </div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={50}
            step={1}
            className="slider"
            id="slSideRange"
            onChange={this.changeSidetoneValue}
            disabled
          />
        </div>
      );
    }

    //Normalization

    if (this.state.isShowNorm) {
      activeNorm = (
        <div className="slider-container on" id="slNorm">
          <div className="foot min">low</div>
          <div className="foot mid">medium</div>
          <div className="foot max">high</div>
          <div
            id="sNormFill"
            className="left"
            style={{ width: (this.state.normValue * 490) / 100 }}
          />
          <div className="track" />
          <div
            id="slNormTip"
            className="slider-tip"
            style={{ left: (this.state.normValue * 490) / 100 - 15 }}
          >
            {this.state.normValue}
          </div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={this.norValue}
            step={1}
            className="slider"
            id="slNormRange"
            onChange={this.changeNormValue}
          />
        </div>
      );
    } else {
      activeNorm = (
        <div className="slider-container" id="slNorm">
          <div className="foot min">low</div>
          <div className="foot mid">medium</div>
          <div className="foot max">high</div>
          <div
            id="slNormFill"
            className="left"
            style={{ width: (this.state.normValue * 490) / 100 }}
          />
          <div className="track" />
          <div
            id="slNormTip"
            className="slider-tip"
            style={{ left: (this.state.normValue * 490) / 100 - 15 }}
          >
            {this.state.normValue}
          </div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={this.normValue}
            step={1}
            className="slider"
            id="slNormRange"
            onChange={this.changeNormValue}
          />
        </div>
      );
    }

    //Ambient Noise Reduction
    if (this.state.isShowAmb) {
      activeAmb = (
        <div className="slider-container on" id="slAmb">
          <div className="foot min">low</div>
          <div className="foot mid">medium</div>
          <div className="foot max">high</div>
          <div
            id="sAmbFill"
            className="left"
            style={{ width: (this.state.ambValue * 490) / 100 }}
          />
          <div className="track" />
          <div
            id="slAmbTip"
            className="slider-tip"
            style={{ left: (this.state.ambValue * 490) / 100 - 15 }}
          >
            {this.state.ambValue}
          </div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={this.ambValue}
            step={1}
            className="slider"
            id="slAmbRange"
            onChange={this.changeAmbValue}
          />
        </div>
      );
    } else {
      activeAmb = (
        <div className="slider-container" id="slAmb">
          <div className="foot min">low</div>
          <div className="foot mid">medium</div>
          <div className="foot max">high</div>
          <div
            id="sNormFill"
            className="left"
            style={{ width: (this.state.ambValue * 490) / 100 }}
          />
          <div className="track" />
          <div
            id="slNormTip"
            className="slider-tip"
            style={{ left: (this.state.ambValue * 490) / 100 - 15 }}
          >
            {this.state.ambValue}
          </div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={this.ambValue}
            step={1}
            className="slider"
            id="slAmbRange"
            onChange={this.changeAmbValue}
            disabled
          />
        </div>
      );
    }

    //Voice Clarity
    if (this.state.isShowVoiceClarity) {
      activeVoiceClarity = (
        <div className="slider-container on" id="slClarity">
          <div className="foot min">low</div>
          <div className="foot mid">medium</div>
          <div className="foot max">high</div>
          <div
            id="sAmbFill"
            className="left"
            style={{ width: (this.state.voiceClarityValue * 490) / 100 }}
          />
          <div className="track" />
          <div
            id="slAmbTip"
            className="slider-tip"
            style={{ left: (this.state.voiceClarityValue * 490) / 100 - 15 }}
          >
            {this.state.voiceClarityValue}
          </div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={this.voiceClarityValue}
            step={1}
            className="slider"
            id="slClarityRange"
            onChange={this.changeVoiceClarityValue}
          />
        </div>
      );
    } else {
      activeVoiceClarity = (
        <div className="slider-container" id="slClarity">
          <div className="foot min">low</div>
          <div className="foot mid">medium</div>
          <div className="foot max">high</div>
          <div
            id="sNormFill"
            className="left"
            style={{ width: (this.state.voiceClarityValue * 490) / 100 }}
          />
          <div className="track" />
          <div
            id="slNormTip"
            className="slider-tip"
            style={{ left: (this.state.voiceClarityValue * 490) / 100 - 15 }}
          >
            {this.state.voiceClarityValue}
          </div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={this.voiceClarityValue}
            step={1}
            className="slider"
            id="slClarityRange"
            onChange={this.changeVoiceClarityValue}
            disabled
          />
        </div>
      );
    }

    return (
      <div className="widget-col col-right flex">
        <div className="widget" id="micSidetone">
          <div className="help" />
          <div className="tip">
            I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just
            a tooltip. I'm just a tooltip.
          </div>
          <div className="title">
            sidetone
            {sidetone}
          </div>
          {activeSidetone}
        </div>
        <div className="widget" id="micEnhance">
          <div className="help" />
          <div className="tip">
            I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just
            a tooltip. I'm just a tooltip.
          </div>
          <div className="title">enhancements</div>
          <div className="check-item">
            <input
              type="checkbox"
              id="checkNorm"
              onClick={this.handleActiveNorm}
            />
            <label htmlFor="checkNorm" className="check-box">
              <div className="check-text">Volume Normalization</div>
            </label>
            {activeNorm}
          </div>

          <div className="check-item">
            <input
              type="checkbox"
              id="checkAmb"
              onClick={this.handleActiveAmb}
            />
            <label htmlFor="checkAmb" className="check-box">
              <div className="check-text">Ambient Noise Reduction</div>
            </label>
            {activeAmb}
          </div>

          <div className="check-item">
            <input
              type="checkbox"
              id="checkClarity"
              onClick={this.handleActiveVoiceClarity}
            />
            <label htmlFor="checkClarity" className="check-box">
              <div className="check-text">Voice Clarity</div>
            </label>
          </div>
          {activeVoiceClarity}
        </div>
      </div>
    );
  }
}

export default Widget_Right;
