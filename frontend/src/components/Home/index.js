import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import Tags from "./Tags";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  ITEM_FILTERED,
  SET_SEARCH,
} from "../../constants/actionTypes";

const Promise = global.Promise;

const mapStateToProps = (state) => {
  console.log(state);
  return ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
  search: state.common.searchVal,
})};

const mapDispatchToProps = (dispatch) => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED }),
  onFilter: (tab, pager, payload) =>
    dispatch({ type: ITEM_FILTERED, tab, pager, payload }),
  onSearch: (tab, pager, payload) =>
    dispatch({ type: SET_SEARCH, tab, pager, payload}),
});

class Home extends React.Component {
  componentWillMount() {
    const tab = "all";
    const itemsPromise = agent.Items.all;

    this.props.onLoad(
      tab,
      itemsPromise,
      Promise.all([agent.Tags.getAll(), itemsPromise()])
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }


  setSearchVal = async (e) => {
    let val = e.target.value;
    this.props.onSearch(
      'all',
      '',
      val
    );

    if (val.length >= 3) {
      this.reloadItems(val);
    } else {
      this.reloadItems("")
    }
  }

  reloadItems = async (title) => {
    const itemsPromise = agent.Items.byTitle(title);
    this.props.onFilter("all", itemsPromise, Promise.all([null, itemsPromise])); 
  };


  render() {
    return (
      <div className="home-page">
        <Banner search={this.reloadItems} searchVal={this.props.search} stateSearch={this.setSearchVal} />

        <div className="container page">
          <Tags tags={this.props.tags} onClickTag={this.props.onClickTag} />
          <MainView />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
