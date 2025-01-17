import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ChangeBtnGroup = styled.div`
  font-size: 13px;
  justify-content: space-around;
  width: 100%;
  display: flex;
`;
const ChangeBtn = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  margin-top: 15px;
  border: 1px solid #d7d7d7;
`;

function BuyBtnList({ id }) {
  return (
    <>
      <Link to={"/review/" + id}>
        <ChangeBtnGroup>
          <ChangeBtn>내가 쓴 리뷰보기</ChangeBtn>
        </ChangeBtnGroup>
      </Link>
    </>
  );
}

export default BuyBtnList;
