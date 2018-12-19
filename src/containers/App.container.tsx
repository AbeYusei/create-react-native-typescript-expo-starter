
import { AppPropConnectedDispatcher, AppPropConnectedState, AppComponent } from 'components';
import { Dispatch } from "react";
import { connect } from "react-redux";
import { HelloState } from "state";
import { SampleModule } from "modules";
import { LogUtil } from 'utils';

const mapStateToProps = (state: HelloState): AppPropConnectedState => ({
  number: state.number
});
const mapDispatchToProps = (dispatch: Dispatch<SampleModule.Action>): AppPropConnectedDispatcher => {
  const {increment, decrement} = SampleModule;
  return {
    handlePressIncrement: () => {
      LogUtil.decorateOutputLog('dispatch increment!', LogUtil.LogLevel.info);
      return dispatch(increment());
    },
    handlePressDecrement: () => {
      LogUtil.decorateOutputLog('dispatch decrement!', LogUtil.LogLevel.info);
      return dispatch(decrement());
    }
  }
};
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);