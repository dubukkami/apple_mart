import React, { useEffect, useState } from "react";
import Item from "../components/Item";
import { Link, useHistory, useLocation, useNavigate } from "react-router-dom";
import * as Header from "../components/common/search/Header";
import * as Icon from "../components/common/neighbor/Icon";
import WritePlus from "../components/layout/write/WritePlus";
import Tag from "../components/common/tags/Tag";
import ToggleButtons from "../components/common/tags/ToggleButtons";

const Items = ({ listState, list }) => {
  const [input, setInput] = useState("empty");
  const location = useLocation();
  const SearchResult = () => location("/searchresult", input);

  const OnSearch = (e) => {
    if (e.key === "Enter" && input === "empty") {
      alert("검색어를 입력해주세요");
    } else if (e.key === "Enter" && input.length < 2) {
      alert("두 글자 이상 입력해 주세요");
    } else if (e.key === "Enter" && input.length >= 2) {
      SearchResult();
    }
  };
  const OnType = (e) => {
    if (e.target.value.trim() !== "") {
      setInput(e.target.value);
    }
  };
  console.log(list);

  const tagRender = (arr) => {
    if (arr) {
      return arr.map((element) => {
        return (
          <button className="badge badge-pill badge-dark">#{element}</button>
        );
      });
    }
  };

  return (
    <div style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="bg-light ">
        <div className="row ">
          <div className="pt-0 col-md-12"></div>
        </div>
      </div>
      <section style={{ backgroundColor: "#fafafa" }}>
        <div
          className="container"
          style={{
            maxWidth: "1100px",
            paddingRight: "10%",
            paddingLeft: "10%",
            width: "100%",
          }}
        >
          <div className="row">
            <div className="col-md-12 " style={{ paddingTop: "60px" }}>
              <form
                action="#"
                method="post"
                className="d-flex m-3"
                style={{
                  justifyContent: "center",
                  width: " 100%",
                }}
              >
                <Header.SearchBarBox>
                  <Header.SearchBarInner>
                    <Icon.Search />
                    <Header.Input
                      placeholder="검색어를 입력 후 Enter를 누르세요"
                      onChange={OnType}
                      onKeyPress={OnSearch}
                    />
                  </Header.SearchBarInner>
                </Header.SearchBarBox>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="chapter" className="chpater">
        <div
          className="container"
          style={{
            maxWidth: "1100px",
            paddingRight: "10%",
            paddingLeft: "10%",
            marginBottom: "60px",
            width: "100%",
          }}
        >
          {list && <ToggleButtons list={list} listState={listState} />}
          {list && <Tag tags={list} listState={listState}></Tag>}
        </div>
      </section>
      <section>
        <div
          className="container"
          style={{
            maxWidth: "1152px",
            paddingRight: "10%",
            paddingLeft: "10%",
            width: "100%",
          }}
        >
          <div className="row">
            <Link
              className="col-xs-12 col-sm-6 col-lg-4 text-black"
              to="/items/1"
              style={{ textDecoration: "none" }}
            >
              <Item />
            </Link>
            <Link
              className="col-xs-12 col-sm-6 col-lg-4 text-black"
              to="/items/1"
              style={{ textDecoration: "none" }}
            >
              <Item />
            </Link>
            <Link
              className="col-xs-12 col-sm-6 col-lg-4 text-black"
              to="/items/1"
              style={{ textDecoration: "none" }}
            >
              <Item />
            </Link>
            <Link
              className="col-xs-12 col-sm-6 col-lg-4 text-black"
              to="/items/1"
              style={{ textDecoration: "none" }}
            >
              <Item />
            </Link>
          </div>
          <WritePlus />
        </div>
      </section>
    </div>
  );
};

export default Items;