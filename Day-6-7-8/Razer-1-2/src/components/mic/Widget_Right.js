
import React from 'react';
import '../../assets/css/main.css';
import '../../assets/css/body-widgets.css';
import '../../assets/css/slider.css';
import '../../assets/css/switch.css';

import '../../assets/css/checkbox.css';

import '../../assets/css/tooltip.css';


const Widget_Right = () => {
    return (
        <div className="widget-col col-right flex">
        <div className="widget" id="micSidetone">
            <div className="help" />
            <div className="tip">
            I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm
            just a tooltip. I'm just a tooltip.
            </div>
            <div className="title">
            sidetone<div className="switch switch-slider" id="swSide">
                <div className="handle" />
            </div>
            </div>
            <div className="slider-container" id="slSide">
            <input
                type="range"
                min={0}
                max={100}
                defaultValue={50}
                step={1}
                className="slider"
                id="slSideRange"
            />
            </div>
        </div>
        <div className="widget" id="micEnhance">
            <div className="help" />
            <div className="tip">
            I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm
            just a tooltip. I'm just a tooltip.
            </div>
            <div className="title">enhancements</div>
            <div className="check-item">
            <input type="checkbox" id="checkNorm" />
            <label htmlFor="checkNorm" className="check-box">
                <div className="check-text">Volume Normalization</div>
            </label>
            </div>
            <div className="slider-container" id="slNorm">
            <input
                type="range"
                min={10}
                max={100}
                defaultValue={50}
                step={1}
                className="slider"
                id="slNormRange"
            />
            </div>
            <div className="check-item">
            <input type="checkbox" id="checkAmb" />
            <label htmlFor="checkAmb" className="check-box">
                <div className="check-text">Ambient Noise Reduction</div>
            </label>
            </div>
            <div className="slider-container" id="slAmb">
            <input
                type="range"
                min={10}
                max={100}
                defaultValue={50}
                step={1}
                className="slider"
                id="slAmbRange"
            />
            </div>
            <div className="check-item">
            <input type="checkbox" id="checkClarity" />
            <label htmlFor="checkClarity" className="check-box">
                <div className="check-text">Voice Clarity</div>
            </label>
            </div>
            <div className="slider-container" id="slClarity">
            <input
                type="range"
                min={10}
                max={100}
                defaultValue={50}
                step={1}
                className="slider"
                id="slClarityRange"
            />
            </div>
        </div>
    </div>
    )
}

export default Widget_Right;
