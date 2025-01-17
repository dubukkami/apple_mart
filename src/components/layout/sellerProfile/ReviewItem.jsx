import React from "react";
import styled from "styled-components";
import profile from "../../../images/ico/ico_profile_placeholder.png";

const Review = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid #e9ecef;
  position: relative;
`;
const ReviewPhoto = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
const ReviewWriter = styled.div`
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.47;
  letter-spacing: -0.5px;
  vertical-align: middle;
  margin-right: 8px;
  margin-left: 8px;
`;
const ReviewContent = styled.div`
  padding-top: 8px;
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: -0.5px;
  width: calc(100% - 80px);
`;
const ReviewTime = styled.time`
  display: block;
  font-size: 13px;
  line-height: 1.46;
  letter-spacing: -0.5px;
  color: #868e96;
  margin-top: 8px;
`;

const ReviewImg = styled.img`
  width: 24px;
  height: 24px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
`;
const ReviewItem = () => {
  return (
    <Review>
      <ReviewPhoto>
        {" "}
        <ReviewImg src={profile} alt="profile" />
      </ReviewPhoto>
      <ReviewWriter>코카곰</ReviewWriter>
      <ReviewContent>ddd</ReviewContent>
      <ReviewTime>1일 전</ReviewTime>
    </Review>
  );
};

export default ReviewItem;
