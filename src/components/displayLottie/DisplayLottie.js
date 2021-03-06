import React, { Component, Suspense } from "react";
import Lottie from "react-lottie";
// import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    return (
      <Suspense>
        <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
      </Suspense>
    );
  }
}
